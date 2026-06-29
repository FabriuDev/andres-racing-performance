import { useReveal } from '../../hooks/useReveal'
import { WA_LINK } from '../../data/constants'

const WaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const stats = [
  { num: '+15', label: 'Años en el rubro' },
  { num: 'Dynojet', label: 'Banco certificado' },
  { num: '100%', label: 'Trato directo' },
]

const pillars = [
  { n: '01', title: 'Diagnóstico antes de intervenir', sub: ' — nunca a ciegas' },
  { n: '02', title: 'Hablás directo con quien trabaja tu auto', sub: '' },
  { n: '03', title: 'Cada trabajo se explica antes y después', sub: '' },
]

export default function AboutTaller() {
  const leftRef  = useReveal()
  const rightRef = useReveal()

  return (
    <section className="about-section" id="sobre-el-taller" itemScope itemType="https://schema.org/Organization">
      <div className="wrap">
        <div className="about-grid">

          {/* ── Texto ── */}
          <div ref={leftRef} className="reveal">
            <div className="kicker">Sobre el taller</div>
            <h2 className="s-title">Un taller donde entendés<br />qué le pasa a tu auto</h2>

            {/* Stats bar */}
            <div className="about-stats">
              {stats.map((s, i) => (
                <div className="about-stat" key={i} style={{ '--si': i }}>
                  <span className="about-stat-num">{s.num}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <p className="about-body">
              Andrés Racing Performance está en Valeria del Mar, Pinamar. Trabajamos con autos de calle,
              vehículos modificados y proyectos de performance — con diagnóstico electrónico
              y mecánica con criterio. Cada trabajo empieza por entender el auto. No por adivinar.
            </p>

            <ul className="about-pillars" aria-label="Pilares del taller">
              {pillars.map((p, i) => (
                <li className="about-pillar" key={i} style={{ '--i': i }}>
                  <span className="about-pillar-n" aria-hidden="true">{p.n}</span>
                  <div>
                    <strong className="about-pillar-title">{p.title}</strong>
                    {p.sub && <span className="about-pillar-sub">{p.sub}</span>}
                  </div>
                </li>
              ))}
            </ul>

            <blockquote className="about-quote">
              <p>"Si no sabés qué tiene, igual escribime. El diagnóstico es el primer paso."</p>
              <div className="about-quote-author">— Andrés Sperati, mecánico · Valeria del Mar</div>
            </blockquote>

            <a className="btn btn-pink about-cta" href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <WaIcon /> Hablar con Andrés
            </a>
          </div>

          {/* ── Visual ── */}
          <div ref={rightRef} className="reveal-r about-visual">
            <div className="about-owner-photo">
              <img
                src="/img/atencion-cliente.webp"
                alt="Andrés Sperati — mecánico y dueño de Andrés Racing Performance, Valeria del Mar"
                className="about-owner-img"
                loading="lazy"
                decoding="async"
              />
              <div className="about-photo-overlay" />
              <div className="about-photo-panel">
                <div className="about-photo-badge">
                  <span className="about-photo-dot" />
                  Taller activo · Valeria del Mar
                </div>
                <div className="about-photo-name">Andrés Sperati</div>
                <div className="about-photo-role">Mecánico · Andrés Racing Performance</div>
              </div>
            </div>

            <div className="about-taller-photo">
              <img
                src="/img/taller-interior.webp"
                alt="Interior del taller Andrés Racing Performance — Valeria del Mar, Pinamar, Buenos Aires"
                className="about-taller-img"
                loading="lazy"
                decoding="async"
              />
              <div className="about-photo-overlay" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
