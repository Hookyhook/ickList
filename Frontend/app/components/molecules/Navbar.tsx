import Link from 'next/link';

export function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          Ick List
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <Link className="btn btn-primary text-xl" href="/list">
            All Icks
          </Link>
        </div>
      </div>
    </div>
  );
}
