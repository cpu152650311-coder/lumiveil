interface ComparisonRow {
  feature: string;
  lumivex: string | boolean;
  competitors: (string | boolean)[];
}

interface ComparisonTableProps {
  title: string;
  subtitle: string;
  columns: string[];
  rows: ComparisonRow[];
  highlightCol?: number;
  cta?: { label: string; href: string };
}

export default function ComparisonTable({ title, subtitle, columns, rows, highlightCol = 1, cta }: ComparisonTableProps) {
  return (
    <section className="bg-bg-main py-20 px-4" id="comparison">
      <div className="max-w-site mx-auto">
        <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center">{title}</h2>
        <p className="text-text-muted text-lg text-center mt-2 mb-10">{subtitle}</p>
        <div className="overflow-x-auto rounded-card border border-border-light shadow-card">
          <table className="w-full bg-white min-w-[600px]">
            <thead>
              <tr className="border-b border-border-light">
                {columns.map((col, i) => (
                  <th
                    key={i}
                    className={`p-4 text-left font-outfit font-semibold text-sm ${i === highlightCol ? 'bg-primary-light text-primary' : 'text-text-primary'}`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={`border-b border-border-light last:border-0 ${ri % 2 === 0 ? 'bg-white' : 'bg-bg-main'}`}>
                  <td className="p-4 text-sm font-medium text-text-primary">{row.feature}</td>
                  <td className={`p-4 text-sm font-semibold ${highlightCol === 1 ? 'bg-primary-light/40' : ''}`}>
                    {typeof row.lumivex === 'boolean' ? (row.lumivex ? '✓' : '✗') : row.lumivex}
                  </td>
                  {row.competitors.map((comp, ci) => (
                    <td key={ci} className="p-4 text-sm text-text-muted">
                      {typeof comp === 'boolean' ? (comp ? '✓' : '✗') : comp}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {cta && (
          <div className="text-center mt-8">
            <a href={cta.href} className="btn-accent">{cta.label}</a>
          </div>
        )}
      </div>
    </section>
  );
}
