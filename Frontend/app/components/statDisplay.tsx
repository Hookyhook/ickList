interface StatProps {
  title: string;
  number: number;
  development: string;
}

export function StatDisplay({ title, number, development }: StatProps) {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{number}</div>
        <div className="stat-desc">{development}</div>
      </div>
    </div>
  );
}
