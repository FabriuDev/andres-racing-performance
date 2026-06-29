import { useState, useEffect } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { waLink, WA_MSGS } from '../../data/constants'

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const TABS = [
  {
    id: 'hp',
    label: 'HP · Potencia',
    metric: 'HP',
    metricNote: 'Caballos de fuerza reales al freno',
    color: '#FF0F6D',
    title: 'Lo que el motor produce de verdad',
    body: 'El HP de fábrica es una referencia teórica. Lo que el banco mide es la potencia real que llega a la rueda — bajo condiciones controladas. Tu auto puede estar entregando más o menos de lo esperado, y tiene sentido saberlo antes de modificar cualquier cosa.',
  },
  {
    id: 'nm',
    label: 'Nm · Torque',
    metric: 'Nm',
    metricNote: 'Par motor en cada rango de RPM',
    color: '#F59E0B',
    title: 'Cómo se siente el auto al acelerar',
    body: 'El torque determina la respuesta en cada marcha. Un auto puede tener muchos HP pero poca fuerza a bajas RPM. La curva completa muestra dónde trabaja mejor el motor, dónde pega fuerte y dónde cae — eso es lo que cambia cómo se siente en el camino.',
  },
  {
    id: 'compare',
    label: 'Antes · Después',
    metric: '±Δ',
    metricNote: 'Diferencia real medida en banco',
    color: '#22C55E',
    title: 'La única forma de saber si una mejora funcionó',
    body: 'Escape, reprogramación, admisión, turbo — cualquier modificación puede medirse. Sin el banco, cualquier ganancia es suposición. Con el banco, hay números reales: cuántos HP y Nm ganaste, en qué rango, y si la inversión valió la pena.',
    compare: true,
  },
]

const compareRows = [
  { name: 'Potencia', before: '185 HP', after: '230 HP', unit: '+45 HP' },
  { name: 'Torque',   before: '240 Nm', after: '305 Nm', unit: '+65 Nm' },
  { name: 'RPM pico', before: '5.800',  after: '6.200',  unit: '+400' },
]

function DynoGraph({ tabId, graphRevealed }) {
  const hp = tabId === 'hp'
  const nm = tabId === 'nm'
  const cmp = tabId === 'compare'

  return (
    <div className={`dyno-screen${graphRevealed ? ' revealed' : ''}`}>
      <div className="dyno-screen-hdr">
        <div className="dyno-dot" style={{ background: '#FF0F6D' }} />
        <div className="dyno-dot" style={{ background: '#F59E0B' }} />
        <div className="dyno-dot" style={{ background: '#22C55E' }} />
        <div className="dyno-screen-title">DYNOJET · Curva de potencia</div>
      </div>
      <div className="dyno-graph-wrap">
        <svg viewBox="0 0 300 100" preserveAspectRatio="none">
          <line x1="0" y1="25" x2="300" y2="25" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
          <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
          <line x1="0" y1="75" x2="300" y2="75" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>

          {/* Before curve — only in compare tab */}
          <path
            d="M 0,90 C 30,86 70,76 110,62 C 150,48 188,38 240,30 C 268,25 285,26 300,30"
            fill="none"
            stroke={cmp ? 'rgba(150,150,165,.55)' : 'transparent'}
            strokeWidth="1.8"
            strokeLinecap="round"
            style={{ transition: 'stroke .35s' }}
          />
          {cmp && (
            <text x="248" y="28" fill="rgba(150,150,165,.7)" fontSize="6.5">antes</text>
          )}

          {/* HP fill area */}
          <path
            d="M 0,88 C 25,82 60,68 100,48 C 140,28 175,14 225,8 C 255,5 278,10 300,18 L 300,100 L 0,100 Z"
            fill={hp || cmp ? 'rgba(242,5,98,.09)' : 'transparent'}
            style={{ transition: 'fill .4s' }}
          />

          {/* HP curve */}
          <path
            className="dyno-path-hp"
            d="M 0,88 C 25,82 60,68 100,48 C 140,28 175,14 225,8 C 255,5 278,10 300,18"
            fill="none"
            stroke={hp || cmp ? '#F20562' : 'rgba(242,5,98,.18)'}
            strokeWidth={hp || cmp ? 2.5 : 1.5}
            strokeLinecap="round"
            style={{ transition: 'stroke .35s, stroke-width .35s' }}
          />

          {/* Nm curve */}
          <path
            className="dyno-path-nm"
            d="M 0,72 C 20,60 50,38 90,28 C 130,18 160,16 200,20 C 240,26 265,38 300,52"
            fill="none"
            stroke={nm ? '#F59E0B' : 'rgba(245,158,11,.18)'}
            strokeWidth={nm ? 2.5 : 1.5}
            strokeLinecap="round"
            style={{ transition: 'stroke .35s, stroke-width .35s' }}
          />

          {/* Peak marker */}
          <circle
            cx="225" cy="8" r="3.5"
            fill={hp || cmp ? '#F20562' : 'transparent'}
            style={{ transition: 'fill .35s' }}
          />
          <line
            x1="225" y1="12" x2="225" y2="100"
            stroke={hp || cmp ? 'rgba(242,5,98,.22)' : 'transparent'}
            strokeWidth="1" strokeDasharray="4,3"
            style={{ transition: 'stroke .35s' }}
          />

          {/* Axis labels */}
          <text x="8" y="96" fill="rgba(150,150,160,.45)" fontSize="6.5">RPM →</text>
          <text x="253" y="14" fill={hp || cmp ? '#F20562' : 'rgba(242,5,98,.3)'} fontSize="7" fontWeight="bold" style={{ transition: 'fill .35s' }}>HP</text>
          <text x="253" y="50" fill={nm ? '#F59E0B' : 'rgba(245,158,11,.3)'} fontSize="7" style={{ transition: 'fill .35s' }}>Nm</text>
        </svg>
      </div>
      <div className="dyno-metric-bar">
        {[
          { id: 'hp', val: 'HP', lbl: 'Potencia', color: '#FF0F6D' },
          { id: 'nm', val: 'Nm', lbl: 'Torque', color: '#F59E0B' },
          { id: 'compare', val: '±Δ', lbl: 'Antes · Después', color: '#22C55E' },
        ].map(m => (
          <div
            key={m.id}
            className={`dyno-metric-item${tabId === m.id ? ' active' : ''}`}
            style={{ '--mc': m.color }}
          >
            <div className="dyno-metric-val">{m.val}</div>
            <div className="dyno-metric-lbl">{m.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function WhatIsDyno() {
  const [active, setActive] = useState(0)
  const [graphRevealed, setGraphRevealed] = useState(false)
  const headRef = useReveal()
  const graphRef = useReveal(0.08)
  const infoRef = useReveal(0.08)

  useEffect(() => {
    const el = graphRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setGraphRevealed(true); io.disconnect() }
    }, { threshold: 0.08 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const tab = TABS[active]

  return (
    <section className="dyno-section" id="dynojet">
      <div className="dyno-section-glow" />
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>

        <div ref={headRef} className="s-head reveal" style={{ textAlign: 'center' }}>
          <div className="kicker" style={{ justifyContent: 'center' }}>Banco de potencia Dynojet · Valeria del Mar, Pinamar</div>
          <h2 className="s-title">
            No adivines cuánto rinde tu auto.{' '}
            <em style={{ fontStyle: 'normal', color: 'var(--pink)' }}>Medilo.</em>
          </h2>
          <p className="s-sub" style={{ margin: '0 auto' }}>
            El banco Dynojet entrega la potencia y el torque reales de tu motor —
            con curva completa, datos concretos y comparación antes·después.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className="dyno-tabs">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              className={`dyno-tab${active === i ? ' active' : ''}`}
              data-id={t.id}
              style={{ '--tc': t.color }}
              onClick={() => setActive(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Layout ── */}
        <div className="dyno-layout">

          {/* Graph */}
          <div ref={graphRef} className="reveal">
            <DynoGraph tabId={tab.id} graphRevealed={graphRevealed} />
          </div>

          {/* Info panel */}
          <div ref={infoRef} className="reveal-r dyno-info">
            <div key={active} className="dyno-info-content">
              <div className="dyno-badge" style={{ '--tc': tab.color }}>
                <span className="dyno-badge-val">{tab.metric}</span>
                <span className="dyno-badge-note">{tab.metricNote}</span>
              </div>
              <h3 className="dyno-info-title">{tab.title}</h3>
              <p className="dyno-info-body">{tab.body}</p>

              {tab.compare && (
                <div className="dyno-compare">
                  <div className="dyno-compare-hdr">
                    <span>Ejemplo de medición</span>
                    <span className="dyno-compare-note">tus valores serán los tuyos</span>
                  </div>
                  <div className="dyno-compare-cols">
                    <div className="dyno-compare-col">
                      <div className="dyno-compare-label">Antes</div>
                      {compareRows.map(r => (
                        <div className="dyno-compare-row" key={r.name}>
                          <span className="dcr-name">{r.name}</span>
                          <span className="dcr-val">{r.before}</span>
                        </div>
                      ))}
                    </div>
                    <div className="dyno-compare-col after">
                      <div className="dyno-compare-label">Después</div>
                      {compareRows.map(r => (
                        <div className="dyno-compare-row" key={r.name}>
                          <span className="dcr-name">{r.name}</span>
                          <span className="dcr-val after">{r.after}</span>
                        </div>
                      ))}
                    </div>
                    <div className="dyno-compare-col delta">
                      <div className="dyno-compare-label">Ganancia</div>
                      {compareRows.map(r => (
                        <div className="dyno-compare-row" key={r.name}>
                          <span className="dcr-name">&nbsp;</span>
                          <span className="dcr-val green">{r.unit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="dyno-cta-wrap">
                <a className="btn btn-pink btn-lg" href={waLink(WA_MSGS.dynojet)} target="_blank" rel="noopener noreferrer">
                  <WaIcon /> Consultar turno para Dynojet
                </a>
                <p className="dyno-cta-note">Consultá disponibilidad y coordinamos el turno por WhatsApp.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
