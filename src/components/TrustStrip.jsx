import { useReveal } from '../hooks/useReveal'

const DynoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
)
const ScanIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)
const CarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/>
    <circle cx="7.5" cy="17.5" r="2.5"/>
    <circle cx="17.5" cy="17.5" r="2.5"/>
  </svg>
)
const FlagIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
    <line x1="4" y1="22" x2="4" y2="15"/>
  </svg>
)

const items = [
  { Icon: DynoIcon, label: 'Banco Dynojet · único en la zona' },
  { Icon: ScanIcon, label: 'Diagnóstico antes de reparar' },
  { Icon: CarIcon,  label: 'Autos originales y modificados' },
  { Icon: FlagIcon, label: 'Nueva área karting' },
]

export default function TrustStrip() {
  const ref = useReveal(0.15)
  return (
    <div className="trust-strip">
      <div className="trust-strip-accent" />
      <div className="wrap">
        <div ref={ref} className="trust-pill-row reveal">
          {items.map((it, i) => (
            <div className="trust-pill" key={i}>
              <it.Icon />
              <span>{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
