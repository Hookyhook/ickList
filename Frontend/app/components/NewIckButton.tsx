'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

export function NewIckButton() {
  const currentPath = usePathname();

  return (
    <Link
      href={`/createIck?source=${currentPath}`}
      className="btn btn-square fixed bottom-3 right-3 btn-primary z-10 w-16 h-16 text-4xl"
    >
      +
    </Link>
  );
}
