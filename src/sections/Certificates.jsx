import { useState, useEffect } from 'react'
import { Award, X } from 'lucide-react'
import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import { certificates } from '@/data/certificates'

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  useEffect(() => {
    if (!selectedCert) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedCert])

  if (certificates.length === 0) return null

  return (
    <section id="certificates" className="py-20 md:py-28">
      <SectionTitle
        index="05"
        path="~/certificates"
        title="Certificates"
        description="Courses and credentials completed outside the classroom."
      />
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="overflow-hidden rounded-sm border border-border bg-surface"
            >
              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="block w-full cursor-zoom-in"
                aria-label={`View full image of ${cert.title}`}
              >
                <div className="aspect-[4/3] bg-surface-raised">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              </button>
              <div className="p-4">
                <div className="flex items-center gap-2 font-mono text-xs text-mint">
                  <Award size={14} aria-hidden="true" />
                  {cert.date}
                </div>
                <h3 className="mt-2 font-display text-base font-semibold text-text">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedCert(null)}
            className="absolute right-4 top-4 rounded-full bg-surface p-2 text-text hover:bg-surface-raised"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <img
            src={selectedCert.image}
            alt={selectedCert.title}
            className="max-h-[80vh] max-w-[90vw] rounded-sm object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div
            className="mt-4 max-w-[90vw] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display text-lg font-semibold text-white">
              {selectedCert.title}
            </h3>
            <p className="mt-1 text-sm text-white/70">{selectedCert.issuer}</p>
          </div>
        </div>
      )}
    </section>
  )
}