import Link from 'next/link';

interface EditIckButtonProps {
  ickId: number;
}

export function EditIckButton({ ickId }: EditIckButtonProps) {
  return (
    <Link href={`/updateIck/?ickId=${ickId}`}>
      <button className="btn btn-primary btn-square">Edit</button>
    </Link>
  );
}
