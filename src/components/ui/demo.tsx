'use client';

import React from 'react';
import { AlqemistBlockPreview } from './alqemist-interactive-demo-utils/_preview-provider';
import AlqemistInteractiveDemo from './alqemist-interactive-demo';

export default function AlqemistInteractiveDemoDemo() {
  return (
    <AlqemistBlockPreview>
      <AlqemistInteractiveDemo />
    </AlqemistBlockPreview>
  );
}
