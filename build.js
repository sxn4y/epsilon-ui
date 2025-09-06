const fs = require('fs');
const path = require('path');

// Simple TypeScript to JavaScript converter (removes type annotations)
function convertTsToJs(content) {
  return content
    // Remove type annotations from function parameters
    .replace(/:\s*[A-Za-z0-9_\[\]|&\s]+(?=\s*[=,)])/g, '')
    // Remove interface declarations
    .replace(/export\s+interface\s+\w+\s*\{[^}]*\}/g, '')
    // Remove type exports
    .replace(/export\s+type\s+\w+\s*=\s*[^;]+;/g, '')
    // Remove React.FC type annotations
    .replace(/React\.FC<[^>]+>/g, '')
    // Remove generic type parameters
    .replace(/<[^>]+>/g, '')
    // Clean up extra spaces
    .replace(/\s+/g, ' ')
    .replace(/\s*,\s*/g, ', ')
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}');
}

// Convert all TypeScript files to JavaScript
function buildComponents() {
  const componentsDir = path.join(__dirname, 'components');
  const files = [
    'epsilon.tsx',
    'button/button.tsx',
    'card/card.tsx',
    'navbar/navbar.tsx',
    'textbox/textBox.tsx',
    'scroll-reveal/sReveal.tsx',
    'eLayout/eLayout.tsx'
  ];

  files.forEach(file => {
    const tsPath = path.join(componentsDir, file);
    const jsPath = tsPath.replace('.tsx', '.js');
    
    if (fs.existsSync(tsPath)) {
      const content = fs.readFileSync(tsPath, 'utf8');
      const jsContent = convertTsToJs(content);
      fs.writeFileSync(jsPath, jsContent);
      console.log(`Converted ${file} to ${file.replace('.tsx', '.js')}`);
    }
  });

  // Convert main index file
  const indexTsPath = path.join(__dirname, 'index.ts');
  const indexJsPath = path.join(__dirname, 'index.js');
  
  if (fs.existsSync(indexTsPath)) {
    const content = fs.readFileSync(indexTsPath, 'utf8');
    const jsContent = convertTsToJs(content);
    fs.writeFileSync(indexJsPath, jsContent);
    console.log('Converted index.ts to index.js');
  }
}

buildComponents();
