import React from 'react';

export function AlqemistBlockPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-[#FAFCFF] p-4">
      {children}
    </div>
  );
}
