import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <p className="font-mono text-mint">404</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-text">
          bash: route not found
        </h1>
        <p className="mt-2 text-text-muted">
          That path doesn't exist in this repo.
        </p>
        <div className="mt-6 flex justify-center">
          <Button as={Link} to="/">
            cd ~/
          </Button>
        </div>
      </Container>
    </section>
  )
}
