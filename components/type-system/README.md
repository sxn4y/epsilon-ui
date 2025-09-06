# Epsilon UI Type System

A comprehensive scaling and typography system based on the **Golden Ratio (φ ≈ 1.618)** and text baseline grid for consistent, harmonious design.

## 🎯 Philosophy

The type system is built on mathematical principles that create natural, pleasing proportions:

- **Golden Ratio**: Creates harmonious scaling relationships
- **Baseline Grid**: Ensures consistent vertical rhythm
- **Modular Scale**: Provides predictable size relationships
- **Responsive Design**: Scales appropriately across devices

## 📏 Core Concepts

### Golden Ratio Scaling
All scales use the golden ratio (1.618) as the multiplier:
- Type scale: `base * φ^n`
- Spacing scale: `base * φ^n`
- Component scale: Harmonized combinations

### Baseline Grid
Text elements align to a consistent baseline grid for optimal readability and visual rhythm.

## 🚀 Quick Start

### Using CSS Classes

```html
<!-- Typography -->
<h1 class="text-h1">Main Heading</h1>
<p class="text-body">Body text with perfect line height</p>
<button class="text-button">Button Text</button>

<!-- Spacing -->
<div class="p-lg m-base">Content with large padding and base margin</div>

<!-- Component Sizes -->
<button class="size-lg">Large Button</button>
<input class="size-base">Base Input</input>
```

### Using CSS Variables

```css
.my-component {
  font-size: var(--type-lg);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  line-height: var(--leading-body);
}
```

### Using TypeScript/React

```tsx
import { useTypeSystem, useComponentSize } from 'epsilon-ui';

function MyComponent() {
  const typeSystem = useTypeSystem();
  const buttonStyles = useComponentSize('lg');
  
  return (
    <button style={buttonStyles}>
      Styled Button
    </button>
  );
}
```

## 📊 Type Scale

| Scale | Size | Usage |
|-------|------|-------|
| `xs` | 0.382rem (~6.1px) | Captions, fine print |
| `sm` | 0.618rem (~9.9px) | Small text, labels |
| `base` | 1rem (16px) | Body text, buttons |
| `lg` | 1.618rem (~25.9px) | Large body, h4 |
| `xl` | 2.618rem (~41.9px) | h3 headings |
| `2xl` | 4.236rem (~67.8px) | h2 headings |
| `3xl` | 6.854rem (~109.7px) | h1 headings |
| `4xl` | 11.090rem (~177.4px) | Display text |

## 📐 Spacing Scale

| Scale | Size | Usage |
|-------|------|-------|
| `0` | 0px | No spacing |
| `1` | 3.1px | Tight spacing |
| `2` | 4.9px | Small spacing |
| `3` | 8px | Base spacing |
| `4` | 12.9px | Medium spacing |
| `5` | 20.9px | Large spacing |
| `6` | 33.8px | Extra large spacing |
| `7` | 54.8px | Section spacing |
| `8` | 88.7px | Page spacing |

## 🎨 Typography Scale

### Semantic Typography Classes

```html
<h1 class="text-display">Display Heading</h1>
<h1 class="text-h1">Main Heading</h1>
<h2 class="text-h2">Section Heading</h2>
<h3 class="text-h3">Subsection Heading</h3>
<h4 class="text-h4">Component Heading</h4>
<h5 class="text-h5">Small Heading</h5>
<h6 class="text-h6">Tiny Heading</h6>

<p class="text-body">Regular body text</p>
<p class="text-body-large">Large body text</p>
<p class="text-body-small">Small body text</p>
<span class="text-caption">Caption text</span>

<button class="text-button">Button Text</button>
<button class="text-button-small">Small Button</button>
<button class="text-button-large">Large Button</button>
```

## 🧩 Component Sizes

### Pre-configured Component Sizes

```html
<!-- Buttons -->
<button class="size-xs">Extra Small</button>
<button class="size-sm">Small</button>
<button class="size-base">Base</button>
<button class="size-lg">Large</button>
<button class="size-xl">Extra Large</button>
<button class="size-2xl">Huge</button>
```

Each size includes:
- **Padding**: Harmonized with golden ratio
- **Font Size**: Appropriate for the component
- **Border Radius**: Proportional to size
- **Line Height**: Optimized for readability

## 🎯 Advanced Usage

### Responsive Typography

```tsx
import { useResponsiveTypography } from 'epsilon-ui';

function ResponsiveHeading() {
  const responsiveStyles = useResponsiveTypography('xl', {
    sm: 0.875,  // 14px base
    md: 1,      // 16px base
    lg: 1.125,  // 18px base
    xl: 1.25,   // 20px base
  });
  
  return <h1 style={{ css: responsiveStyles }}>Responsive Heading</h1>;
}
```

### Fluid Typography

```tsx
import { useFluidTypography } from 'epsilon-ui';

function FluidHeading() {
  const fluidStyles = useFluidTypography('lg', '2xl');
  
  return <h1 style={{ css: fluidStyles }}>Fluid Heading</h1>;
}
```

### Custom Component Styling

```tsx
import { useComponentSize } from 'epsilon-ui';

function CustomButton() {
  const baseStyles = useComponentSize('lg', {
    backgroundColor: 'var(--foreground)',
    color: 'var(--background)',
    border: 'none',
    cursor: 'pointer',
  });
  
  return <button style={baseStyles}>Custom Button</button>;
}
```

### Baseline Rhythm

```tsx
import { useBaselineRhythm } from 'epsilon-ui';

function TextBlock() {
  const rhythm = useBaselineRhythm(16, 1.5);
  
  return (
    <div style={rhythm}>
      <p>This text follows the baseline grid</p>
      <p>Creating perfect vertical rhythm</p>
    </div>
  );
}
```

## 🛠️ Utility Functions

### Direct Usage

```tsx
import { 
  getFontSize, 
  getSpacing, 
  getRadius, 
  pxToRem, 
  remToPx 
} from 'epsilon-ui';

const fontSize = getFontSize('lg');     // 25.9
const spacing = getSpacing(4);          // 12.9
const radius = getRadius('lg');         // 6
const rem = pxToRem(24);                // 1.5
const px = remToPx(1.5);               // 24
```

### CSS Generation

```tsx
import { generateTypeSystemCSS } from 'epsilon-ui';

const css = generateTypeSystemCSS();
// Returns complete CSS with all variables
```

## 🎨 Design Tokens

### CSS Custom Properties

All values are available as CSS custom properties:

```css
:root {
  /* Type Scale */
  --type-xs: 0.382rem;
  --type-sm: 0.618rem;
  --type-base: 1rem;
  --type-lg: 1.618rem;
  /* ... */
  
  /* Spacing Scale */
  --space-0: 0px;
  --space-1: 3.1px;
  --space-2: 4.9px;
  --space-3: 8px;
  /* ... */
  
  /* Border Radius */
  --radius-sm: 1px;
  --radius-base: 2px;
  --radius-md: 4px;
  /* ... */
}
```

## 📱 Responsive Design

The type system includes built-in responsive scaling:

- **Mobile**: Slightly smaller base sizes
- **Tablet**: Standard sizes
- **Desktop**: Slightly larger sizes
- **Large screens**: Optimized for readability

## 🎯 Best Practices

### 1. Use Semantic Typography
```html
<!-- Good -->
<h1 class="text-h1">Main Heading</h1>
<p class="text-body">Body text</p>

<!-- Avoid -->
<div class="text-2xl font-bold">Main Heading</div>
```

### 2. Maintain Consistent Spacing
```html
<!-- Good -->
<div class="p-lg m-base">Content</div>

<!-- Avoid -->
<div style="padding: 15px; margin: 10px;">Content</div>
```

### 3. Use Component Sizes
```html
<!-- Good -->
<button class="size-lg">Large Button</button>

<!-- Avoid -->
<button style="padding: 12px; font-size: 18px;">Large Button</button>
```

### 4. Follow the Baseline Grid
```css
/* Good */
.text-block {
  line-height: var(--leading-body);
  margin-bottom: var(--space-4);
}

/* Avoid */
.text-block {
  line-height: 1.3;
  margin-bottom: 20px;
}
```

## 🔧 Customization

### Extending the Scale

```tsx
import { createModularScale } from 'epsilon-ui';

const customScale = createModularScale(16, 1.5, 8);
// Creates a custom scale with 1.5 ratio
```

### Custom Breakpoints

```tsx
import { useResponsiveTypography } from 'epsilon-ui';

const customResponsive = useResponsiveTypography('base', {
  sm: 0.8,   // 12.8px
  md: 1,     // 16px
  lg: 1.2,   // 19.2px
  xl: 1.4,   // 22.4px
});
```

## 📚 Examples

### Complete Component Example

```tsx
import { useTypeSystem, useComponentSize } from 'epsilon-ui';

function Card({ title, content, size = 'base' }) {
  const typeSystem = useTypeSystem();
  const cardStyles = useComponentSize(size, {
    backgroundColor: 'var(--background)',
    border: '1px solid var(--foreground)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  });
  
  return (
    <div style={cardStyles}>
      <h3 className="text-h4">{title}</h3>
      <p className="text-body">{content}</p>
    </div>
  );
}
```

### Form Example

```tsx
function Form() {
  return (
    <form className="p-lg">
      <h2 className="text-h2 mb-lg">Contact Form</h2>
      
      <div className="mb-base">
        <label className="text-body-small mb-sm">Name</label>
        <input className="size-base w-full" type="text" />
      </div>
      
      <div className="mb-base">
        <label className="text-body-small mb-sm">Email</label>
        <input className="size-base w-full" type="email" />
      </div>
      
      <button className="size-lg text-button" type="submit">
        Submit
      </button>
    </form>
  );
}
```

## 🎨 Visual Examples

### Typography Hierarchy
```
Display (4xl) - 177.4px - For hero sections
H1 (3xl) - 109.7px - Main page headings
H2 (2xl) - 67.8px - Section headings
H3 (xl) - 41.9px - Subsection headings
H4 (lg) - 25.9px - Component headings
H5 (base) - 16px - Small headings
H6 (sm) - 9.9px - Tiny headings
Body (base) - 16px - Regular text
Caption (xs) - 6.1px - Fine print
```

### Spacing Rhythm
```
Space 1 (3.1px) - Tight spacing
Space 2 (4.9px) - Small spacing
Space 3 (8px) - Base spacing
Space 4 (12.9px) - Medium spacing
Space 5 (20.9px) - Large spacing
Space 6 (33.8px) - Extra large spacing
```

This type system ensures your UI components have consistent, harmonious proportions that scale beautifully across all devices and use cases.
