import Container from './Container'

/**
 * Section header styled like a file path / directory label —
 * echoes the project's own folder-tree structure.
 */
export default function SectionTitle({ index, path, title, description }) {
  return (
    <Container className="mb-10">
      <div className="flex items-center gap-3 font-mono text-xs text-text-faint">
        {index && <span>{index}</span>}
        <span className="text-mint">{path}</span>
      </div>
      <h2 className="mt-2 font-display text-3xl font-semibold text-text md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-text-muted">{description}</p>
      )}
    </Container>
  )
}
