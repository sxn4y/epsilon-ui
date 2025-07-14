#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Get component name
const [, , command, component] = process.argv;

if (command === "add" && component) {
  const templatePath = path.join(__dirname, "..", "components", component);
  const destPath = path.resolve(process.cwd(), "components/ui");

  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Component "${component}" not found.`);
    process.exit(1);
  }

  fs.mkdirSync(destPath, { recursive: true });

  fs.readdirSync(templatePath).forEach((file) => {
    const src = path.join(templatePath, file);
    const dest = path.join(destPath, file);
    fs.copyFileSync(src, dest);
  });

  console.log(`✅ Added component "${component}" to components/ui`);
} else {
  console.log("Usage: pnpm dlx epsilon-ui add <component>");
}
