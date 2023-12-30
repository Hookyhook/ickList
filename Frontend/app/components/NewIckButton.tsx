'use client';

import { openModal } from '@lib';

export function NewIckButton() {
  return (
    <button
      className="btn btn-square fixed bottom-3 right-3 btn-primary z-10 w-16 h-16 text-4xl"
      onClick={openModal}
    >
      +
    </button>
  );
}
