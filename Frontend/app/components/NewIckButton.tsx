import Link from 'next/link';

export function NewIckButton() {
  return (
    <Link
      href={'/createIck'}
      className="btn btn-square fixed bottom-3 right-3 btn-primary z-10 w-16 h-16 text-4xl"
    >
      +
    </Link>
  );
}
