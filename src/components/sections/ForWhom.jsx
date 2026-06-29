import { useReveal } from '../../hooks/useReveal'
import { WA_LINK } from '../../data/constants'

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const items = [
  'Autos originales que quieren conocer su potencia real y detectar pérdidas de rendimiento',
  'Vehículos con reprogramación para comprobar cuánto ganó realmente en HP y torque',
  'Autos con escape deportivo, admisión modificada o turbo que necesitan validar datos concretos',
  'Proyectos de calle o track day que necesitan una base técnica sólida antes de avanzar',
  'Clientes que sienten que el auto no empuja como antes y no encuentran la causa',
  'Quienes quieren comparar resultados antes y después de una mejora con datos reales',
  'Dueños que necesitan una revisión seria antes de un viaje largo o una compra/venta',
  'Talleres o preparadores que necesitan validar resultados con datos objetivos',
]

export default function ForWhom() {
  const headRef = useReveal()
  const ref = useReveal(0.05)
  const ctaRef = useReveal(0.1)
  return (
    <section className="forwhom-section" id="para-quien">
      <div className="wrap">
        <div ref={headRef} className="s-head reveal">
          <div className="kicker" style={{ justifyContent: 'center' }}>Para quién es</div>
          <h2 className="s-title">No hace falta tener un auto<br />de competición.</h2>
          <p className="s-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            El banco Dynojet y el diagnóstico sirven para cualquier auto — original, modificado
            o con problemas que no encontraste de otra forma.
          </p>
        </div>
        <div ref={ref} className="fw-checklist">
          {items.map((item, i) => (
            <div className="fw-check-item" key={i}>
              <div className="fw-check-icon"><CheckIcon /></div>
              <div className="fw-check-text">{item}</div>
            </div>
          ))}
        </div>
        <div ref={ctaRef} className="proc-cta reveal">
          <p className="proc-cta-text">¿Tu caso está en la lista?</p>
          <a className="btn btn-pink btn-lg" href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <WaIcon /> Consultarlo con Andrés
          </a>
          <p className="proc-cta-note">Sin compromiso — respondemos el mismo día.</p>
        </div>
      </div>
    </section>
  )
}
