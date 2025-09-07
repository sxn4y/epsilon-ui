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

// Function to fix epsilon import paths in a file
function fixEpsilonImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix epsilon imports to use the dist folder
  content = content.replace(
    /require\("\.\.\/epsilon"\)/g,
    'require("../../dist/epsilon")'
  );
  
  content = content.replace(
    /require\("\.\/epsilon"\)/g,
    'require("./epsilon")'
  );
  
  // Fix index.js epsilon import
  content = content.replace(
    /require\("\.\/components\/epsilon"\)/g,
    'require("./epsilon")'
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
    fixEpsilonImports(file);
  }
  
  console.log('✅ Epsilon import paths fixed successfully!');
}

main();
