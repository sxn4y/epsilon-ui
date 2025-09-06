/**
 * Type System Demo Component
 * Demonstrates the golden ratio type system in action
 */

import React, { useMemo } from 'react';
import { useTypeSystem, useComponentSize, useResponsiveTypography } from './useTypeSystem';

export const TypeSystemDemo: React.FC = React.memo(() => {
  const typeSystem = useTypeSystem();
  const buttonStyles = useComponentSize('lg');
  const responsiveStyles = useResponsiveTypography('xl');

  // Memoize dynamic font size calculation
  const dynamicFontSize = useMemo(() => {
    return typeSystem.getFontSize('xl');
  }, [typeSystem]);

  return (
    <div className="p-lg max-w-4xl mx-auto">
      {/* Typography Hierarchy */}
      <section className="mb-2xl">
        <h1 className="text-display mb-lg">Type System Demo</h1>
        <p className="text-body-large mb-xl">
          This demonstrates the golden ratio-based type system with consistent scaling and baseline grid.
        </p>
        
        <div className="space-y-lg">
          <h1 className="text-h1">Heading 1 - Main Page Title</h1>
          <h2 className="text-h2">Heading 2 - Section Title</h2>
          <h3 className="text-h3">Heading 3 - Subsection Title</h3>
          <h4 className="text-h4">Heading 4 - Component Title</h4>
          <h5 className="text-h5">Heading 5 - Small Title</h5>
          <h6 className="text-h6">Heading 6 - Tiny Title</h6>
          
          <p className="text-body">
            This is regular body text with optimal line height and spacing. 
            The golden ratio ensures harmonious proportions throughout the design.
          </p>
          
          <p className="text-body-large">
            This is large body text for emphasis or introductory content.
          </p>
          
          <p className="text-body-small">
            This is small body text for secondary information.
          </p>
          
          <span className="text-caption">Caption text for fine print and metadata</span>
        </div>
      </section>

      {/* Component Sizes */}
      <section className="mb-2xl">
        <h2 className="text-h2 mb-lg">Component Sizes</h2>
        <p className="text-body mb-xl">
          Pre-configured component sizes with harmonized padding, font size, and border radius.
        </p>
        
        <div className="space-y-base">
          <button className="size-xs text-button-small">Extra Small Button</button>
          <button className="size-sm text-button-small">Small Button</button>
          <button className="size-base text-button">Base Button</button>
          <button className="size-lg text-button">Large Button</button>
          <button className="size-xl text-button-large">Extra Large Button</button>
          <button className="size-2xl text-button-large">Huge Button</button>
        </div>
      </section>

      {/* Spacing Examples */}
      <section className="mb-2xl">
        <h2 className="text-h2 mb-lg">Spacing Scale</h2>
        <p className="text-body mb-xl">
          Consistent spacing using the golden ratio scale.
        </p>
        
        <div className="space-y-base">
          <div className="p-xs bg-gray-100 rounded-sm">
            <span className="text-caption">Extra Small Padding (3.1px)</span>
          </div>
          <div className="p-sm bg-gray-100 rounded-sm">
            <span className="text-caption">Small Padding (4.9px)</span>
          </div>
          <div className="p-base bg-gray-100 rounded-sm">
            <span className="text-caption">Base Padding (8px)</span>
          </div>
          <div className="p-lg bg-gray-100 rounded-sm">
            <span className="text-caption">Large Padding (12.9px)</span>
          </div>
          <div className="p-xl bg-gray-100 rounded-sm">
            <span className="text-caption">Extra Large Padding (20.9px)</span>
          </div>
        </div>
      </section>

      {/* Border Radius Examples */}
      <section className="mb-2xl">
        <h2 className="text-h2 mb-lg">Border Radius Scale</h2>
        <p className="text-body mb-xl">
          Harmonized border radius values.
        </p>
        
        <div className="flex flex-wrap gap-base">
          <div className="rounded-sm p-base bg-blue-100 text-caption">Small (1px)</div>
          <div className="rounded-base p-base bg-blue-100 text-caption">Base (2px)</div>
          <div className="rounded-lg p-base bg-blue-100 text-caption">Large (6px)</div>
          <div className="rounded-xl p-base bg-blue-100 text-caption">XL (8px)</div>
          <div className="rounded-2xl p-base bg-blue-100 text-caption">2XL (12.9px)</div>
          <div className="rounded-3xl p-base bg-blue-100 text-caption">3XL (20.9px)</div>
        </div>
      </section>

      {/* Mathematical Foundation */}
      <section className="mb-2xl">
        <h2 className="text-h2 mb-lg">Mathematical Foundation</h2>
        <div className="bg-gray-50 p-lg rounded-lg">
          <h3 className="text-h4 mb-base">Golden Ratio (φ ≈ 1.618)</h3>
          <p className="text-body mb-base">
            All scales are based on the golden ratio, creating natural, pleasing proportions:
          </p>
          <ul className="text-body-small space-y-sm">
            <li>• Type scale: base × φ^n</li>
            <li>• Spacing scale: base × φ^n</li>
            <li>• Component scale: Harmonized combinations</li>
            <li>• Baseline grid: Consistent vertical rhythm</li>
          </ul>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-2xl">
        <h2 className="text-h2 mb-lg">Usage Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="p-lg border rounded-lg">
            <h3 className="text-h4 mb-base">CSS Classes</h3>
            <pre className="text-caption bg-gray-100 p-sm rounded-sm overflow-x-auto">
{`<h1 class="text-h1">Heading</h1>
<p class="text-body">Body text</p>
<button class="size-lg">Button</button>`}
            </pre>
          </div>
          
          <div className="p-lg border rounded-lg">
            <h3 className="text-h4 mb-base">CSS Variables</h3>
            <pre className="text-caption bg-gray-100 p-sm rounded-sm overflow-x-auto">
{`.component {
  font-size: var(--type-lg);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="mb-2xl">
        <h2 className="text-h2 mb-lg">Interactive Demo</h2>
        <div className="p-lg bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
          <h3 className="text-h3 mb-base">Responsive Typography</h3>
          <p className="text-body mb-lg">
            This heading uses responsive typography that scales with viewport size.
          </p>
          <div 
            className="text-h2 mb-base"
            style={{ 
              fontSize: dynamicFontSize,
              lineHeight: 1.2,
              fontWeight: 600
            }}
          >
            Dynamic Font Size: {dynamicFontSize}px
          </div>
          <button 
            style={buttonStyles}
            className="bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Styled with useComponentSize Hook
          </button>
        </div>
      </section>
    </div>
  );
});

export default TypeSystemDemo;
