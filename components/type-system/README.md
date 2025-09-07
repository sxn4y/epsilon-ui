# Epsilon UI Type System

A scaling and typography system built around the golden ratio and baseline grid. It's designed to make your UI components look naturally proportioned without having to think too hard about it.

## The Idea

Instead of picking random sizes that "look okay," this system uses math to create relationships between elements that feel right. The golden ratio (1.618) shows up everywhere in nature, so why not use it for UI design too?

- **Golden Ratio**: Everything scales by 1.618x, creating natural relationships
- **Baseline Grid**: Text lines up properly, making everything easier to read
- **Consistent Spacing**: No more guessing at padding and margins
- **Responsive**: Works across different screen sizes

## How It Works

### The Math
Every size is calculated using the golden ratio (1.618). Start with a base size, multiply by 1.618 to go up, divide by 1.618 to go down. This creates a scale that feels natural because it's based on proportions found in nature.

### Text Alignment
The system includes a baseline grid that keeps text properly aligned. No more awkward spacing between lines or elements that don't quite line up.

## Getting Started

### CSS Classes (Easiest Way)

Just add classes to your HTML elements:

```html
<h1 class="text-h1">Main Heading</h1>
<p class="text-body">Regular text</p>
<button class="size-lg">Large Button</button>
<div class="p-lg m-base">Spaced content</div>
```

### CSS Variables

If you prefer writing CSS directly:

```css
.my-component {
  font-size: var(--type-lg);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
}
```

### React Hooks

For dynamic styling in React:

```tsx
import { useTypeSystem, useComponentSize } from 'epsilon-ui';

function MyComponent() {
  const buttonStyles = useComponentSize('lg');
  
  return <button style={buttonStyles}>Styled Button</button>;
}
```

## Available Sizes

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

## Component Sizes

These classes set padding, font size, and border radius all at once:

```html
<!-- Buttons -->
<button class="size-xs">Extra Small</button>
<button class="size-sm">Small</button>
<button class="size-base">Base</button>
<button class="size-lg">Large</button>
<button class="size-xl">Extra Large</button>
<button class="size-2xl">Huge</button>
```

Each size automatically includes the right padding, font size, and border radius that work well together.

## Advanced Features

### Responsive Text

Make text scale with screen size:

```tsx
import { useResponsiveTypography } from 'epsilon-ui';

function ResponsiveHeading() {
  const styles = useResponsiveTypography('xl');
  return <h1 style={{ css: styles }}>Responsive Heading</h1>;
}
```

### Fluid Typography

Text that smoothly scales between sizes:

```tsx
import { useFluidTypography } from 'epsilon-ui';

function FluidHeading() {
  const styles = useFluidTypography('lg', '2xl');
  return <h1 style={{ css: styles }}>Fluid Heading</h1>;
}
```

### Bounding Box Correction

Sometimes text doesn't align perfectly with its container. The bounding box correction feature fixes this automatically:

```html
<h1 class="text-h1 bounding-box-correct">Perfectly Aligned Text</h1>
```

Or in React:

```tsx
import { useBoundingBoxCorrection } from 'epsilon-ui';

function AlignedText() {
  const ref = useBoundingBoxCorrection(true);
  return <h1 ref={ref} className="text-h1">Perfectly Aligned</h1>;
}
```

## CSS Variables

All the values are available as CSS custom properties:

```css
:root {
  --type-xs: 0.382rem;
  --type-sm: 0.618rem;
  --type-base: 1rem;
  --type-lg: 1.618rem;
  
  --space-0: 0px;
  --space-1: 3.1px;
  --space-2: 4.9px;
  --space-3: 8px;
  
  --radius-sm: 1px;
  --radius-base: 2px;
  --radius-md: 4px;
}
```

## Responsive Design

The system automatically adjusts for different screen sizes:
- Mobile: Slightly smaller
- Tablet: Standard sizes  
- Desktop: Slightly larger
- Large screens: Optimized for readability

## Best Practices

### Use the Right Classes
```html
<!-- Good -->
<h1 class="text-h1">Main Heading</h1>
<button class="size-lg">Large Button</button>

<!-- Avoid -->
<div class="text-2xl font-bold">Main Heading</div>
<button style="padding: 12px; font-size: 18px;">Large Button</button>
```

### Keep Spacing Consistent
```html
<!-- Good -->
<div class="p-lg m-base">Content</div>

<!-- Avoid -->
<div style="padding: 15px; margin: 10px;">Content</div>
```

### Use Component Sizes
The `size-*` classes automatically set padding, font size, and border radius that work well together. Don't mix and match individual properties unless you really need to.

## Examples

### A Simple Card
```tsx
function Card({ title, content }) {
  return (
    <div className="p-lg rounded-lg bg-white shadow">
      <h3 className="text-h4 mb-base">{title}</h3>
      <p className="text-body">{content}</p>
    </div>
  );
}
```

### A Form
```tsx
function ContactForm() {
  return (
    <form className="p-lg">
      <h2 className="text-h2 mb-lg">Contact Us</h2>
      
      <div className="mb-base">
        <label className="text-body-small mb-sm">Name</label>
        <input className="size-base w-full" type="text" />
      </div>
      
      <button className="size-lg" type="submit">
        Send Message
      </button>
    </form>
  );
}
```

That's it! The system handles the math so you don't have to. Everything scales naturally and looks proportional without much effort.
