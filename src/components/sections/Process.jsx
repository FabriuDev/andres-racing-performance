import { useReveal } from '../../hooks/useReveal'
import { WA_LINK } from '../../data/constants'

const ListenIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
)
const ScanIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
)
const InfoIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)
const WrenchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)
const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const steps = [
  {
    num: '01',
    Icon: ListenIcon,
    title: 'Escuchamos el auto',
    desc: 'Nos contás los síntomas, el historial y cómo usás el vehículo. Ese contexto define por dónde arrancar.',
  },
  {
    num: '02',
    Icon: SearchIcon,
    title: 'Revisamos todo',
    desc: 'Estado general, componentes clave, síntomas y posibles causas. Sin saltar a conclusiones apresuradas.',
  },
  {
    num: '03',
    Icon: ScanIcon,
    title: 'Diagnosticamos o medimos',
    desc: 'Escáner electrónico, revisión mecánica o banco Dynojet. Lo que el caso necesite para tener datos reales.',
  },
  {
    num: '04',
    Icon: InfoIcon,
    title: 'Te explicamos todo',
    desc: 'Qué encontramos, qué significa y qué opciones tenés. Sin tecnicismos innecesarios, sin vueltas.',
  },
  {
    num: '05',
    Icon: WrenchIcon,
    title: 'Resolvemos o mejoramos',
    desc: 'Reparación, ajuste o mejora con información real. Sabemos qué necesita el auto antes de tocar nada.',
  },
]

export default function Process() {
  const headRef = useReveal()
  const ref = useReveal(0.05)
  const ctaRef = useReveal(0.1)
  return (
    <section className="process-section" id="proceso">
      <div className="wrap">
        <div ref={headRef} className="s-head reveal">
          <div className="kicker" style={{ justifyContent: 'center' }}>Cómo trabajamos</div>
          <h2 className="s-title" style={{ textAlign: 'center' }}>
            Trabajamos con datos,<br />no con suposiciones.
          </h2>
          <p className="s-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Nada de cambiar piezas a ver qué pasa. Cada intervención arranca con una
            lectura real del auto y su situación concreta.
          </p>
        </div>
        <div ref={ref} className="proc-grid reveal">
          {steps.map((s, i) => (
            <div className="proc-step" key={i} style={{ '--i': i }}>
              <div className="proc-step-top">
                <span className="proc-num">{s.num}</span>
                <div className="proc-icon"><s.Icon /></div>
              </div>
              <div className="proc-title">{s.title}</div>
              <p className="proc-desc">{s.desc}</p>
              <span className="proc-deco">{s.num}</span>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="proc-cta reveal">
          <p className="proc-cta-text">¿Querés empezar por el principio?</p>
          <a className="btn btn-pink btn-lg" href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <WaIcon /> Contarle a Andrés qué le pasa al auto
          </a>
          <p className="proc-cta-note">Respondemos el mismo día. Sin formularios, sin esperas.</p>
        </div>
      </div>
    </section>
  )
}
