import { useReveal } from '../../hooks/useReveal'
import { waLink, WA_MSGS } from '../../data/constants'

const stats = [
  { val: 'HP', lbl: 'Potencia exacta al freno' },
  { val: 'Nm', lbl: 'Torque real en cada RPM' },
  { val: 'RPM', lbl: 'Punto de máxima potencia' },
  { val: '±Δ', lbl: 'Comparación antes y después', sm: true },
]

const before = [
  { name: 'Potencia', val: '185 HP' },
  { name: 'Torque', val: '240 Nm' },
  { name: 'RPM pico', val: '5.800' },
]
const after = [
  { name: 'Potencia', val: '230 HP' },
  { name: 'Torque', val: '305 Nm' },
  { name: 'RPM pico', val: '6.200' },
]

export default function DynoHighlight() {
  const ref = useReveal(0.05)
  return (
    <section className="dynohl" id="dynojet">
      <div className="wrap">
        <div ref={ref} className="dynohl-inner reveal">
          <div className="kicker" style={{ justifyContent: 'center' }}>Dynojet · Banco de potencia en Valeria del Mar, Pinamar</div>
          <h2 className="s-title">Potencia real, torque real<br />y datos claros para tu auto</h2>
          <p className="s-sub">
            Con el banco de potencia Dynojet medís cuántos HP y Nm entrega realmente tu motor,
            analizás la curva completa y comparás resultados antes y después de cualquier mejora.
            Sin estimaciones: datos concretos para tomar mejores decisiones.
          </p>

          <div className="dynohl-stats">
            {stats.map((s, i) => (
              <div className="ds-item" key={i}>
                <div className={`ds-val${s.sm ? ' sm' : ''}`}>{s.val}</div>
                <div className="ds-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>

          <p className="dynohl-example-note">Ejemplo de medición real — tus números serán los tuyos</p>
          <div className="dynohl-compare">
            <div className="dc-item">
              <div className="dc-label">Antes de la mejora</div>
              {before.map((r, i) => (
                <div className="dc-row" key={i}>
                  <span className="dc-name">{r.name}</span>
                  <span className="dc-val">{r.val}</span>
                </div>
              ))}
            </div>
            <div className="dc-item after">
              <div className="dc-label">Después de la mejora</div>
              {after.map((r, i) => (
                <div className="dc-row" key={i}>
                  <span className="dc-name">{r.name}</span>
                  <span className="dc-val">{r.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <a className="btn btn-pink btn-lg" href={waLink(WA_MSGS.dynojet)} target="_blank" rel="noopener noreferrer">
              Consultar turno para Dynojet
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
