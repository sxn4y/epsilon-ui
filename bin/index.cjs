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
    fs.copyFileSync(
      path.join(templatePath, file),
      path.join(destPath, file)
    );
  });

  // adding epsilon.css to components/ui
  fs.copyFileSync(
    path.join(__dirname, "..", "components", "epsilon.css"),
    path.join(destPath, "epsilon.css")
  );

  console.log(`✅ Added component "${component}" to components/ui`);
} else {
  console.log("Usage: pnpm dlx epsilon-ui add <component>");
}
