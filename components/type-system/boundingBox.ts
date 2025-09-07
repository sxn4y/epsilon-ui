/**
 * Bounding Box Detection for Precise Text Alignment
 * Detects the difference between element bounding box and first character position
 */

import React from "react";

export interface BoundingBoxResult {
  elementTop: number;
  firstCharTop: number;
  offset: number;
  adjustedPaddingTop: number;
}

/**
 * Get the bounding box information for an element
 */
export const getBoundingBoxInfo = (element: HTMLElement): BoundingBoxResult => {
  const rect = element.getBoundingClientRect();
  const computedStyle = window.getComputedStyle(element);
  
  // Get the first text node or character
  const firstTextNode = getFirstTextNode(element);
  if (!firstTextNode) {
    return {
      elementTop: rect.top,
      firstCharTop: rect.top,
      offset: 0,
      adjustedPaddingTop: 0,
    };
  }
  
  // Create a temporary range to measure the first character
  const range = document.createRange();
  range.setStart(firstTextNode, 0);
  range.setEnd(firstTextNode, 1);
  
  const firstCharRect = range.getBoundingClientRect();
  const offset = firstCharRect.top - rect.top;
  
  // Get current padding top
  const currentPaddingTop = parseFloat(computedStyle.paddingTop) || 0;
  const adjustedPaddingTop = Math.max(0, currentPaddingTop - offset);
  
  return {
    elementTop: rect.top,
    firstCharTop: firstCharRect.top,
    offset,
    adjustedPaddingTop,
  };
};

/**
 * Get the first text node in an element
 */
const getFirstTextNode = (element: HTMLElement): Text | null => {
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        // Only accept text nodes that contain non-whitespace characters
        return node.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    }
  );
  
  return walker.nextNode() as Text | null;
};

/**
 * Apply bounding box correction to an element
 */
export const applyBoundingBoxCorrection = (element: HTMLElement): void => {
  const info = getBoundingBoxInfo(element);
  
  if (info.offset > 0) {
    element.style.paddingTop = `${info.adjustedPaddingTop}px`;
    element.setAttribute('data-bounding-box-corrected', 'true');
    element.setAttribute('data-original-padding-top', element.style.paddingTop);
  }
};

/**
 * Remove bounding box correction from an element
 */
export const removeBoundingBoxCorrection = (element: HTMLElement): void => {
  const originalPadding = element.getAttribute('data-original-padding-top');
  
  if (originalPadding) {
    element.style.paddingTop = originalPadding;
    element.removeAttribute('data-bounding-box-corrected');
    element.removeAttribute('data-original-padding-top');
  }
};

/**
 * Check if an element has bounding box correction applied
 */
export const hasBoundingBoxCorrection = (element: HTMLElement): boolean => {
  return element.getAttribute('data-bounding-box-corrected') === 'true';
};


/**
 * CSS class for bounding box correction
 */
export const BOUNDING_BOX_CSS = `
.bounding-box-correct {
  position: relative;
}

.bounding-box-correct::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  pointer-events: none;
}

.bounding-box-correct[data-bounding-box-corrected="true"] {
  padding-top: var(--adjusted-padding-top, 0);
}
`;

/**
 * Utility function to measure text baseline
 */
export const measureTextBaseline = (element: HTMLElement): number => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  if (!context) return 0;
  
  const computedStyle = window.getComputedStyle(element);
  const fontSize = parseFloat(computedStyle.fontSize);
  const fontFamily = computedStyle.fontFamily;
  
  context.font = `${fontSize}px ${fontFamily}`;
  
  // Measure the text baseline
  const metrics = context.measureText('Ag');
  const baseline = metrics.actualBoundingBoxAscent;
  
  return baseline;
};

/**
 * Get precise text positioning information
 */
export const getTextPositioningInfo = (element: HTMLElement) => {
  const boundingBox = getBoundingBoxInfo(element);
  const baseline = measureTextBaseline(element);
  const computedStyle = window.getComputedStyle(element);
  
  return {
    ...boundingBox,
    baseline,
    lineHeight: parseFloat(computedStyle.lineHeight),
    fontSize: parseFloat(computedStyle.fontSize),
    fontFamily: computedStyle.fontFamily,
  };
};
