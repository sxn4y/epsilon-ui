#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

// Helper functions
const log = (message, color = 'white') => {
  console.log(`${colors[color]}${message}${colors.reset}`);
};

const logSuccess = (message) => log(`✓ ${message}`, 'green');
const logError = (message) => log(`✗ ${message}`, 'red');
const logWarning = (message) => log(`⚠ ${message}`, 'yellow');
const logInfo = (message) => log(`ℹ ${message}`, 'blue');

// Load component configuration
function loadConfig() {
  const configPath = path.join(__dirname, 'component-config.json');
  return JSON.parse(fs.readFileSync(configPath, 'utf8'));
}

// Get the package root directory (where node_modules is located)
function getProjectRoot() {
  let currentDir = process.cwd();
  
  // First, check if current directory has node_modules
  if (fs.existsSync(path.join(currentDir, 'node_modules'))) {
    return currentDir;
  }
  
  // If not, look for the nearest node_modules in parent directories
  while (currentDir !== path.dirname(currentDir)) {
    currentDir = path.dirname(currentDir);
    if (fs.existsSync(path.join(currentDir, 'node_modules'))) {
      return currentDir;
    }
  }
  
  // If no node_modules found, use current directory
  return process.cwd();
}

// Check if a component is already installed
function isComponentInstalled(componentName, projectRoot) {
  const componentDir = path.join(projectRoot, 'node_modules', 'epsilon-ui', 'components', componentName);
  return fs.existsSync(componentDir);
}

// Get installed components
function getInstalledComponents(projectRoot) {
  const config = loadConfig();
  const componentsDir = path.join(projectRoot, 'node_modules', 'epsilon-ui', 'components');
  if (!fs.existsSync(componentsDir)) {
    return [];
  }
  
  const installed = [];
  const entries = fs.readdirSync(componentsDir, { withFileTypes: true });
  
  for (const entry of entries) {
    if (entry.isDirectory() && config.components[entry.name]) {
      installed.push(entry.name);
    }
  }
  
  return installed;
}

// Copy files from source to destination
function copyFile(src, dest) {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
}

// Install core files and create package structure
function installCoreFiles(projectRoot) {
  const config = loadConfig();
  
  // Create epsilon-ui package directory
  const packageDir = path.join(projectRoot, 'node_modules', 'epsilon-ui');
  
  if (!fs.existsSync(packageDir)) {
    fs.mkdirSync(packageDir, { recursive: true });
  }
  
  // Copy and modify main index file for installed package
  const indexSrc = path.join(__dirname, '..', 'index.ts');
  const indexDest = path.join(packageDir, 'index.ts');
  if (fs.existsSync(indexSrc)) {
    let indexContent = fs.readFileSync(indexSrc, 'utf8');
    // Keep the epsilon import path as is since epsilon.tsx stays in components
    fs.writeFileSync(indexDest, indexContent);
    logSuccess('Installed main index file');
  }
  
  // Create components directory in the package
  const componentsDir = path.join(packageDir, 'components');
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }
  
  // Copy core files - all files go to components folder
  for (const file of config.core.files) {
    const srcPath = path.join(__dirname, '..', 'components', file);
    const destPath = path.join(componentsDir, file);
    
    if (fs.existsSync(srcPath)) {
      copyFile(srcPath, destPath);
      logSuccess(`Installed core file: ${file}`);
    } else {
      logWarning(`Core file not found: ${file}`);
    }
  }
  
  
  // Create package.json for epsilon-ui
  const packageJson = {
    name: "epsilon-ui",
    version: "1.0.24",
    main: "index.ts",
    types: "index.ts",
    files: ["index.ts", "components/"],
    peerDependencies: {
      "react": ">=16.8.0",
      "react-dom": ">=16.8.0"
    }
  };
  
  const packageJsonPath = path.join(packageDir, 'package.json');
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  logSuccess('Created epsilon-ui package.json');
}

// Install a single component
function installComponent(componentName, projectRoot, forceUpdate = false) {
  const config = loadConfig();
  const componentConfig = config.components[componentName];
  if (!componentConfig) {
    logError(`Unknown component: ${componentName}`);
    return false;
  }
  
  const packageDir = path.join(projectRoot, 'node_modules', 'epsilon-ui');
  const componentDir = path.join(packageDir, 'components', componentName);
  const isInstalled = isComponentInstalled(componentName, projectRoot);
  
  if (isInstalled && !forceUpdate) {
    logWarning(`Component '${componentName}' is already installed.`);
    return true;
  }
  
  // Create component directory
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }
  
  // Copy component files
  for (const file of componentConfig.files) {
    const srcPath = path.join(__dirname, '..', 'components', componentName, file);
    const destPath = path.join(componentDir, file);
    
    if (fs.existsSync(srcPath)) {
      copyFile(srcPath, destPath);
      logSuccess(`Installed ${componentName}/${file}`);
    } else {
      logError(`File not found: ${srcPath}`);
      return false;
    }
  }
  
  return true;
}

// Resolve and install dependencies
function resolveDependencies(components, projectRoot, forceUpdate = false) {
  const config = loadConfig();
  const toInstall = new Set(components);
  const installed = new Set();
  
  while (toInstall.size > 0) {
    const current = Array.from(toInstall)[0];
    toInstall.delete(current);
    
    if (installed.has(current)) continue;
    
    const componentConfig = config.components[current];
    if (!componentConfig) {
      logError(`Unknown component: ${current}`);
      continue;
    }
    
    // Add dependencies to the installation queue
    for (const dep of componentConfig.dependencies) {
      if (!installed.has(dep)) {
        toInstall.add(dep);
      }
    }
    
    // Install the component
    if (installComponent(current, projectRoot, forceUpdate)) {
      installed.add(current);
    }
  }
  
  return Array.from(installed);
}

// Ask user for confirmation
function askQuestion(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.toLowerCase().trim());
    });
  });
}

// Main installation function
async function installComponents(components, options = {}) {
  const { forceUpdate = false, skipPrompts = false } = options;
  const projectRoot = getProjectRoot();
  
  logInfo(`Installing components to: ${projectRoot}`);
  
  // Always install core files first
  installCoreFiles(projectRoot);
  
  // Check for existing installations
  const installedComponents = getInstalledComponents(projectRoot);
  const newComponents = components.filter(comp => !installedComponents.includes(comp));
  const existingComponents = components.filter(comp => installedComponents.includes(comp));
  
  if (existingComponents.length > 0 && !forceUpdate && !skipPrompts) {
    logWarning(`The following components are already installed: ${existingComponents.join(', ')}`);
    const answer = await askQuestion('Do you want to update them? (y/N): ');
    if (answer !== 'y' && answer !== 'yes') {
      logInfo('Skipping existing components. Use --force-update to force update all components.');
    }
  }
  
  // Resolve dependencies and install
  const allComponents = forceUpdate ? components : newComponents;
  if (allComponents.length === 0 && !forceUpdate) {
    logInfo('No new components to install.');
    return;
  }
  
  logInfo(`Installing components: ${allComponents.join(', ')}`);
  const installed = resolveDependencies(allComponents, projectRoot, forceUpdate);
  
  logSuccess(`Successfully installed ${installed.length} components: ${installed.join(', ')}`);
  
  // Show usage instructions
  logInfo('\nUsage in your React components:');
  const componentNames = {
    'navbar': 'NavBar, NavItem',
    'button': 'Button',
    'card': 'Card',
    'textbox': 'TextBox',
    'scroll-reveal': 'SReveal',
    'eLayout': 'ELayout, ESidebar, EContentbar'
  };
  
  const imports = [];
  for (const component of installed) {
    if (componentNames[component]) {
      imports.push(componentNames[component]);
    }
  }
  
  
  if (imports.length > 0) {
    log(`import { ${imports.join(', ')} } from "epsilon-ui";`, 'cyan');
  }
  
}

// List available components
function listComponents() {
  const config = loadConfig();
  logInfo('Available components:');
  for (const [name, componentConfig] of Object.entries(config.components)) {
    log(`  ${name}: ${componentConfig.description}`, 'cyan');
    if (componentConfig.dependencies.length > 0) {
      log(`    Dependencies: ${componentConfig.dependencies.join(', ')}`, 'yellow');
    }
  }
  
  // Show core components
  logInfo('\nCore components (automatically installed):');
  log(`  core: ${config.core.description}`, 'green');
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    forceUpdate: false,
    skipPrompts: false,
    list: false
  };
  
  const components = [];
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    if (arg === '--force-update' || arg === '-fu') {
      options.forceUpdate = true;
    } else if (arg === '--list' || arg === '-l') {
      options.list = true;
    } else if (arg === '--help' || arg === '-h') {
      showHelp();
      process.exit(0);
    } else if (!arg.startsWith('-')) {
      components.push(arg);
    }
  }
  
  return { components, options };
}

// Show help
function showHelp() {
  log('Epsilon UI Component Installer', 'bright');
  log('Usage: epsilon-ui [options] <components...>', 'white');
  log('');
  log('Options:', 'bright');
  log('  --force-update, -fu    Force update existing components', 'white');
  log('  --list, -l            List available components', 'white');
  log('  --help, -h            Show this help message', 'white');
  log('');
  log('Examples:', 'bright');
  log('  epsilon-ui navbar button    # Install navbar and button components', 'white');
  log('  epsilon-ui --list           # List all available components', 'white');
  log('  epsilon-ui -fu navbar       # Force update navbar component', 'white');
  log('');
  log('Note: Dependencies are automatically installed (e.g., button when installing navbar)', 'yellow');
}

// Main execution
async function main() {
  try {
    const { components, options } = parseArgs();
    
    if (options.list) {
      listComponents();
      return;
    }
    
    if (components.length === 0) {
      logError('No components specified. Use --help for usage information.');
      process.exit(1);
    }
    
    // Validate components
    const config = loadConfig();
    const invalidComponents = components.filter(comp => !config.components[comp]);
    if (invalidComponents.length > 0) {
      logError(`Invalid components: ${invalidComponents.join(', ')}`);
      logInfo('Use --list to see available components.');
      process.exit(1);
    }
    
    await installComponents(components, options);
  } catch (error) {
    logError(`Installation failed: ${error.message}`);
    process.exit(1);
  }
}

// Run the installer
if (require.main === module) {
  main();
}

module.exports = { installComponents, listComponents };
