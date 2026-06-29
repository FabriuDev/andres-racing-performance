import { useReveal } from '../../hooks/useReveal'
import { WA_LINK } from '../../data/constants'

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const TrendDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
    <polyline points="17 18 23 18 23 12"/>
  </svg>
)
const FuelDrop = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
)
const AlertTri = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)
const BarChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)
const WrenchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)
const ClipCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
)

const problems = [
  {
    Icon: TrendDown,
    title: 'Perdió potencia',
    desc: 'El auto no responde como antes, se siente pesado o le cuesta acelerar sin razón aparente.',
  },
  {
    Icon: FuelDrop,
    title: 'Consume más de lo normal',
    desc: 'Puede haber fallas de mezcla, sensores, mantenimiento pendiente o problemas de puesta a punto.',
  },
  {
    Icon: AlertTri,
    title: 'Tiene fallas intermitentes',
    desc: 'Problemas que aparecen y desaparecen, difíciles de detectar sin un diagnóstico correcto.',
  },
  {
    Icon: BarChart,
    title: 'No sabés si una mejora funcionó',
    desc: 'Con el banco Dynojet podés comparar datos reales antes y después de cualquier modificación.',
  },
  {
    Icon: WrenchIcon,
    title: 'Querés modificarlo sin romper nada',
    desc: 'Antes de mejorar un auto, conviene revisar su estado general y trabajar sobre una base confiable.',
  },
  {
    Icon: ClipCheck,
    title: 'Necesitás una revisión seria',
    desc: 'Una revisión a tiempo puede ahorrarte gastos mayores y darte tranquilidad antes de cualquier viaje.',
  },
]

export default function ProblemsSolved() {
  const headRef = useReveal()
  const ref = useReveal(0.05)

  return (
    <section className="problems-section" id="problemas">
      <div className="wrap">
        <div ref={headRef} className="s-head reveal" style={{ textAlign: 'center' }}>
          <div className="kicker" style={{ justifyContent: 'center' }}>Antes de cambiar piezas</div>
          <h2 className="s-title">Tu auto tiene algo.<br />Hay que encontrarlo.</h2>
          <p className="s-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Cambiar piezas sin diagnóstico es costoso y muchas veces no resuelve nada.
            Primero hay que entender el síntoma y encontrar la causa real.
          </p>
        </div>
        <div ref={ref} className="problems-grid reveal">
          {problems.map((p, i) => (
            <div className="problem-card" key={i}>
              <div className="problem-icon"><p.Icon /></div>
              <div className="problem-title">{p.title}</div>
              <p className="problem-desc">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="problems-cta">
          <p className="problems-cta-text">
            Menos suposiciones. Más diagnóstico. Más claridad para vos y más cuidado para tu auto.
          </p>
          <a className="btn btn-pink btn-lg" href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <WaIcon /> Consultar mi caso por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
