'use client';

import { deleteIck } from '@lib';
interface DeleteButtonProps {
  ickId: number;
}
export function DeleteIckButton({ ickId }: DeleteButtonProps) {
  return (
    <button onClick={() => deleteIck(ickId)} className="btn btn-error">
      Remove
    </button>
  );
}
