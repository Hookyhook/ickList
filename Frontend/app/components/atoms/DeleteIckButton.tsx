'use client';

interface DeleteButtonProps {
  ickId: number;
  handleDeleteIckButtonClick: (ickId: number) => void;
}
export function DeleteIckButton({
  ickId,
  handleDeleteIckButtonClick,
}: DeleteButtonProps) {
  return (
    <button
      onClick={() => handleDeleteIckButtonClick(ickId)}
      className="btn btn-error"
    >
      Remove
    </button>
  );
}
