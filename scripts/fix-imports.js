const fs = require('fs');
const path = require('path');

// Function to recursively find all .js files in a directory
function findJSFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findJSFiles(fullPath));
    } else if (item.endsWith('.js')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix import paths in a file
function fixImportPaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix relative imports to use epsilon-ui package paths
  content = content.replace(
    /require\("\.\.\/epsilon"\)/g,
    'require("epsilon-ui/dist/components/epsilon")'
  );
  
  content = content.replace(
    /require\("\.\.\/button\/button"\)/g,
    'require("epsilon-ui/dist/components/button/button")'
  );
  
  content = content.replace(
    /require\("\.\.\/card\/card"\)/g,
    'require("epsilon-ui/dist/components/card/card")'
  );
  
  content = content.replace(
    /require\("\.\.\/navbar\/navbar"\)/g,
    'require("epsilon-ui/dist/components/navbar/navbar")'
  );
  
  content = content.replace(
    /require\("\.\.\/textbox\/textBox"\)/g,
    'require("epsilon-ui/dist/components/textbox/textBox")'
  );
  
  content = content.replace(
    /require\("\.\.\/scroll-reveal\/sReveal"\)/g,
    'require("epsilon-ui/dist/components/scroll-reveal/sReveal")'
  );
  
  content = content.replace(
    /require\("\.\.\/eLayout\/eLayout"\)/g,
    'require("epsilon-ui/dist/components/eLayout/eLayout")'
  );
  
  // Fix CSS imports
  content = content.replace(
    /require\("\.\.\/epsilon\.css"\)/g,
    'require("epsilon-ui/dist/epsilon.css")'
  );
  
  fs.writeFileSync(filePath, content);
}

// Main function
function main() {
  const distDir = path.join(__dirname, '..', 'dist');
  
  if (!fs.existsSync(distDir)) {
    console.error('Dist directory not found. Run build first.');
    process.exit(1);
  }
  
  const jsFiles = findJSFiles(distDir);
  
  console.log(`Found ${jsFiles.length} JavaScript files to process...`);
  
  for (const file of jsFiles) {
    console.log(`Processing: ${path.relative(distDir, file)}`);
    fixImportPaths(file);
  }
  
  console.log('✅ Import paths fixed successfully!');
}

main();
