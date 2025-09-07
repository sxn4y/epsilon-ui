/**
 * React Hook for Bounding Box Correction
 */

import React from 'react';
import { 
  applyBoundingBoxCorrection, 
  removeBoundingBoxCorrection, 
  hasBoundingBoxCorrection,
  getBoundingBoxInfo
} from './boundingBox';

/**
 * Hook for automatic bounding box correction
 */
export const useBoundingBoxCorrection = (enabled: boolean = true) => {
  const ref = React.useRef<HTMLElement>(null);
  
  React.useEffect(() => {
    if (!enabled || !ref.current) return;
    
    const element = ref.current;
    
    // Apply correction after a short delay to ensure layout is complete
    const timeoutId = setTimeout(() => {
      applyBoundingBoxCorrection(element);
    }, 100);
    
    return () => {
      clearTimeout(timeoutId);
      if (hasBoundingBoxCorrection(element)) {
        removeBoundingBoxCorrection(element);
      }
    };
  }, [enabled]);
  
  return ref;
};

/**
 * Hook for manual bounding box correction
 */
export const useBoundingBoxInfo = () => {
  const [info, setInfo] = React.useState<any>(null);
  
  const measure = React.useCallback((element: HTMLElement) => {
    if (!element) return;
    
    const boundingBoxInfo = getBoundingBoxInfo(element);
    setInfo(boundingBoxInfo);
  }, []);
  
  return { info, measure };
};
