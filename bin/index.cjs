#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const [, , command, ...components] = process.argv;

if (command !== "add" || components.length === 0) {
  console.log("Usage: npx epsilon-ui add <component...>");
  process.exit(1);
}

const destPath = path.resolve(process.cwd(), "components", "ui");
fs.mkdirSync(destPath, { recursive: true });

components.forEach((component) => {
  const templatePath = path.join(__dirname, "..", "components", component);

  if (!fs.existsSync(templatePath)) {
    console.error(`\n❌ Component "${component}" not found.`);
    return;
  }

  fs.readdirSync(templatePath).forEach((file) => {
    fs.copyFileSync(path.join(templatePath, file), path.join(destPath, file));
    console.log(`\n✅ Added ${file} to ${destPath}`);
  });
});

console.log(
  "\nAll specified components have been added successfully.\nSyncing global components...\n"
);

fs.copyFileSync(
  path.join(path.join(__dirname, "..", "components"), "epsilon.css"),
  path.join(destPath, "epsilon.css")
);

fs.copyFileSync(
  path.join(path.join(__dirname, "..", "components"), "epsilon.tsx"),
  path.join(destPath, "epsilon.tsx")
);
