export default function SkillCard({ label, items }) {
  return (
    <div className="rounded-sm border border-border bg-surface p-5">
      <p className="font-mono text-xs uppercase tracking-wide text-mint">
        {label}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-sm border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
