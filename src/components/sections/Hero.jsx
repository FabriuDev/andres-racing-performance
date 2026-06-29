import { useEffect, useRef, useState } from 'react'

// Línea 1 "Banco Dynojet." es ESTÁTICA — solo el bloque debajo rota
const H1_SETS = [
  {
    mid: 'HP, Nm y curva completa.',
    midColor: '#F59E0B',
    sm: 'Banco de potencia en',
    city: 'Pinamar.',
  },
  {
    mid: 'Diagnóstico real.',
    midColor: '#F5F5F5',
    sm: 'Mecánica sin vueltas en',
    city: 'Pinamar.',
  },
  {
    mid: 'Karting técnico.',
    midColor: '#22C55E',
    sm: 'Setup y puesta a punto en',
    city: 'Pinamar.',
  },
]

// Bloque dinámico: sale por la izquierda, entra desde la derecha
const DYN_STYLE = {
  visible:  { opacity: 1, transform: 'none',              transition: 'opacity .62s cubic-bezier(.16,1,.3,1), transform .62s cubic-bezier(.16,1,.3,1)' },
  exiting:  { opacity: 0, transform: 'translateX(-32px)', transition: 'opacity .3s ease, transform .3s ease' },
  hidden:   { opacity: 0, transform: 'translateX(32px)',  transition: 'none' },
  entering: { opacity: 1, transform: 'none',              transition: 'opacity .62s cubic-bezier(.16,1,.3,1), transform .62s cubic-bezier(.16,1,.3,1)' },
}
import { waLink, WA_MSGS } from '../../data/constants'

const WaIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const DynoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
)

const ScanIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

function MiniGraph({ drawn }) {
  return (
    <div className="hero-graph">
      <div className="hero-graph-hdr">
        <div className="hero-graph-dots">
          <span style={{ background: '#F20562' }} />
          <span style={{ background: '#F59E0B' }} />
        </div>
        <span className="hero-graph-title">DYNOJET</span>
      </div>
      <svg viewBox="0 0 160 52" fill="none" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
        <line x1="0" y1="13" x2="160" y2="13" stroke="rgba(255,255,255,.05)" strokeWidth="1"/>
        <line x1="0" y1="26" x2="160" y2="26" stroke="rgba(255,255,255,.05)" strokeWidth="1"/>
        <line x1="0" y1="39" x2="160" y2="39" stroke="rgba(255,255,255,.05)" strokeWidth="1"/>
        <path
          d="M0,48 C14,42 32,30 52,19 C72,8 96,4 120,3 C136,2 148,6 160,10 L160,52 L0,52 Z"
          fill={drawn ? 'rgba(242,5,98,.07)' : 'transparent'}
          style={{ transition: 'fill .8s ease .4s' }}
        />
        <path
          className={`hero-graph-path hero-graph-hp${drawn ? ' drawn' : ''}`}
          d="M0,48 C14,42 32,30 52,19 C72,8 96,4 120,3 C136,2 148,6 160,10"
          stroke="#F20562" strokeWidth="1.5" strokeLinecap="round"
        />
        <path
          className={`hero-graph-path hero-graph-nm${drawn ? ' drawn' : ''}`}
          d="M0,38 C12,30 28,16 50,11 C72,6 88,6 110,10 C132,14 146,22 160,32"
          stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round"
        />
        <text x="126" y="8" fill="rgba(242,5,98,.55)" fontSize="6.5" fontFamily="monospace">HP</text>
        <text x="126" y="28" fill="rgba(245,158,11,.55)" fontSize="6.5" fontFamily="monospace">Nm</text>
        <text x="2" y="50" fill="rgba(255,255,255,.18)" fontSize="5" fontFamily="monospace">RPM →</text>
      </svg>
    </div>
  )
}


const BADGE_TEXTS = [
  'Banco Dynojet · HP · Nm · Valeria del Mar, Pinamar',
  'Diagnóstico real · Mecánica performance · Costa Atlántica',
  'Karting · Setup técnico · Alineación · Puesta a punto',
  'Atención directa con Andrés · Sin intermediarios',
]

const MAIN_IMGS = [
  '/img/dyno-auto-banco.webp',
  '/img/dyno-banco-curva.webp',
  '/img/dyno-software-curva.webp',
]

const SM1_IMGS = [
  '/img/karting/karting-motor-premium.webp',
  '/img/mecanica-motor.webp',
  '/img/karting/karting-revision.webp',
  '/img/taller-mecanica-auto.webp',
]
const SM1_LABELS = ['Karting', 'Motor', 'Karting', 'Taller']

const SM2_IMGS = [
  '/img/diagnostico-escaner.webp',
  '/img/diagnostico-laptop.webp',
  '/img/diagnostico-peugeot.webp',
  '/img/diagnostico-tablet.webp',
]
const SM2_LABELS = ['Diagnóstico', 'Software', 'Escáner', 'Diagnóstico']

export default function Hero() {
  const heroRef    = useRef(null)
  const rightRef   = useRef(null)
  const sectionRef = useRef(null)
  const h1SwapRef  = useRef(null)
  const [graphDrawn, setGraphDrawn] = useState(false)

  // Cycling states
  const [badgeIdx, setBadgeIdx] = useState(0)
  const [mainIdx,  setMainIdx]  = useState(0)
  const [mainFade, setMainFade] = useState(false)
  const [sm1Idx,   setSm1Idx]   = useState(0)
  const [sm2Idx,   setSm2Idx]   = useState(0)

  // H1 text cycling
  const [h1Idx,   setH1Idx]   = useState(0)
  const [h1Phase, setH1Phase] = useState('visible')

  useEffect(() => {
    const t1 = setTimeout(() => heroRef.current?.classList.add('hero-in'), 80)
    const t2 = setTimeout(() => rightRef.current?.classList.add('hero-right-in'), 300)
    const t3 = setTimeout(() => setGraphDrawn(true), 1000)

    // Badge phrase rotation
    const badgeCycle = setInterval(() =>
      setBadgeIdx(i => (i + 1) % BADGE_TEXTS.length), 3500)

    // Main image cross-fade
    let innerFade
    const mainCycle = setInterval(() => {
      setMainFade(true)
      innerFade = setTimeout(() => {
        setMainIdx(i => (i + 1) % MAIN_IMGS.length)
        setMainFade(false)
      }, 800)
    }, 7000)

    // Side images (offset so they don't change simultaneously)
    const sm1Cycle = setInterval(() =>
      setSm1Idx(i => (i + 1) % SM1_IMGS.length), 5000)
    const sm2Cycle = setInterval(() =>
      setSm2Idx(i => (i + 1) % SM2_IMGS.length), 5700)

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3)
      clearInterval(badgeCycle)
      clearInterval(mainCycle); clearTimeout(innerFade)
      clearInterval(sm1Cycle); clearInterval(sm2Cycle)
    }
  }, [])

  // H1 text cycle
  useEffect(() => {
    const h1Cycle = setInterval(() => {
      setH1Phase('exiting')
      h1SwapRef.current = setTimeout(() => {
        setH1Idx(i => (i + 1) % H1_SETS.length)
        setH1Phase('hidden')
        requestAnimationFrame(() => requestAnimationFrame(() => setH1Phase('entering')))
      }, 380)
    }, 5500)
    return () => {
      clearInterval(h1Cycle)
      if (h1SwapRef.current) clearTimeout(h1SwapRef.current)
    }
  }, [])

  // Mouse parallax — desktop only
  useEffect(() => {
    const section = sectionRef.current
    if (!section || window.matchMedia('(pointer:coarse)').matches) return
    let raf
    const onMove = (e) => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = section.getBoundingClientRect()
        const x = ((e.clientX - r.left) / r.width  - 0.5).toFixed(3)
        const y = ((e.clientY - r.top)  / r.height - 0.5).toFixed(3)
        section.style.setProperty('--px', x)
        section.style.setProperty('--py', y)
      })
    }
    const onLeave = () => {
      section.style.setProperty('--px', '0')
      section.style.setProperty('--py', '0')
    }
    section.addEventListener('mousemove', onMove)
    section.addEventListener('mouseleave', onLeave)
    return () => {
      section.removeEventListener('mousemove', onMove)
      section.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      className="hero"
      id="inicio"
      ref={sectionRef}
      aria-label="Andrés Racing Performance — Banco Dynojet, diagnóstico automotriz y mecánica en Valeria del Mar, Pinamar"
    >
      <div className="hero-bg" />
      <div className="hero-noise" />
      <div className="hero-scan" />

      <div className="wrap">
        <div className="hero-grid">

          {/* ═══ IZQUIERDA ═══ */}
          <div className="hero-left" ref={heroRef}>

            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span key={badgeIdx} className="hero-badge-text">{BADGE_TEXTS[badgeIdx]}</span>
            </div>

            <h1 className="hero-h1">
              <span className="hero-h1-line hero-h1-line-accent">Banco Dynojet.</span>
              <span className="hero-h1-dyn" style={DYN_STYLE[h1Phase]}>
                <span className="hero-h1-line" style={{ color: H1_SETS[h1Idx].midColor }}>
                  {H1_SETS[h1Idx].mid}
                </span>
                <span className="hero-h1-line hero-h1-line-sm">{H1_SETS[h1Idx].sm}</span>
                <span className="hero-h1-line hero-h1-line-city">{H1_SETS[h1Idx].city}</span>
              </span>
            </h1>

            <p className="hero-sub">
              Banco Dynojet, diagnóstico, mecánica y karting en Valeria del Mar.
              Hablás directo con Andrés — sin vueltas.
            </p>

            <div className="hero-actions">
              <a className="hero-btn-primary" href={waLink(WA_MSGS.dynojet)} target="_blank" rel="noopener noreferrer">
                <WaIcon /> Quiero medir mi auto
              </a>
              <a className="hero-btn-outline" href="#servicios">
                Ver servicios <ArrowIcon />
              </a>
            </div>

            <p className="hero-microcopy">
              Respondemos el mismo día — sin formularios, sin esperas, sin intermediarios.
            </p>


          </div>

          {/* ═══ DERECHA ═══ */}
          <div className="hero-right" ref={rightRef}>
            <div className="hero-composition">

              {/* Main image — cross-fade between dyno photos */}
              <div className="hero-main-media">
                <img
                  src={MAIN_IMGS[mainIdx]}
                  alt="Auto en banco de potencia Dynojet — Andrés Racing Performance, Valeria del Mar, Pinamar"
                  className="hero-main-img"
                  fetchPriority="high"
                  decoding="async"
                  style={{
                    opacity: mainFade ? 0 : 1,
                    transition: 'opacity 0.8s ease, transform 8s ease',
                  }}
                />
                <div className="hero-media-overlay" />

                {/* Float card: Banco Dynojet */}
                <div className="hero-fc">
                  <div className="hero-fc-bob">
                    <div className="hero-fc-top">
                      <div className="hero-fc-icon"><DynoIcon /></div>
                      <div>
                        <div className="hero-fc-title">Banco Dynojet</div>
                        <div className="hero-fc-sub">HP · Nm · Curva completa</div>
                      </div>
                    </div>
                    <div className="hero-fc-badge">
                      <span className="hero-fc-dot" />
                      Disponible · Valeria del Mar
                    </div>
                  </div>
                </div>
              </div>

              {/* Side column */}
              <div className="hero-side-col">

                <div className="hero-img-sm">
                  <img
                    key={`sm1-${sm1Idx}`}
                    src={SM1_IMGS[sm1Idx]}
                    alt="Mecánica de motor — Andrés Racing Performance"
                    className="hero-img-sm-img hero-img-cycle"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="hero-img-sm-overlay" />
                  <span key={`sm1-lbl-${sm1Idx}`} className="hero-img-sm-label hero-lbl-cycle">
                    {SM1_LABELS[sm1Idx]}
                  </span>
                </div>

                <div className="hero-img-sm">
                  <img
                    key={`sm2-${sm2Idx}`}
                    src={SM2_IMGS[sm2Idx]}
                    alt="Diagnóstico electrónico — Andrés Racing Performance"
                    className="hero-img-sm-img hero-img-cycle"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="hero-img-sm-overlay" />
                  <span key={`sm2-lbl-${sm2Idx}`} className="hero-img-sm-label hero-lbl-cycle">
                    {SM2_LABELS[sm2Idx]}
                  </span>
                </div>

                <MiniGraph drawn={graphDrawn} />

                {/* Diagnostic card */}
                <div className="hero-fc-side">
                  <div className="hero-fc-bob hero-fc-bob-b">
                    <div className="hero-fcs-row">
                      <ScanIcon />
                      <span>Diagnóstico real</span>
                    </div>
                    <div className="hero-fcs-row">
                      <span className="hero-fcs-dot" />
                      <span>Atención directa</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
