import { useReveal } from '../hooks/useReveal'

const QuoteIcon = () => (
  <svg width="32" height="25" viewBox="0 0 28 22" fill="currentColor" aria-hidden="true">
    <path d="M0 22V13.4C0 9.667 .933 6.6 2.8 4.2 4.667 1.8 7.4.333 11 0l1.4 2.2C9.533 2.867 7.533 4 6.4 5.6 5.267 7.2 4.733 9.133 4.8 11.4H9V22H0Zm15 0V13.4c0-3.733.933-6.8 2.8-9.2C19.667 1.8 22.4.333 26 0l1.4 2.2c-2.867.667-4.867 1.8-6 3.4-1.133 1.6-1.667 3.533-1.6 5.8H24V22H15Z"/>
  </svg>
)

const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#F59E0B">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const testimonials = [
  {
    name: 'Juan M.',
    initial: 'J',
    color: '#E6005C',
    service: 'Banco Dynojet',
    location: 'Pinamar',
    text: 'Llevé el auto al banco sin saber bien qué esperar, y la verdad me sorprendió todo. Te muestra HP, torque, la curva completa. Andrés te explica todo tranquilo, sin charlatanería. Muy buena onda.',
  },
  {
    name: 'Rodrigo C.',
    initial: 'R',
    color: '#7C3AED',
    service: 'Diagnóstico electrónico',
    location: 'Pinamar',
    text: 'Venía con un problema intermitente que en otros talleres no habían podido resolver. Andrés lo encontró enseguida con el diagnóstico. Sin rodeos, sin adivinar, directo al punto. Eso vale mucho.',
  },
  {
    name: 'Lucas F.',
    initial: 'L',
    color: '#0891B2',
    service: 'Performance + Banco',
    location: 'Buenos Aires',
    text: 'Le hice unas modificaciones al auto y quería ver si realmente habían servido. Medimos antes y después en banco, y la diferencia estaba ahí en los números. Lo recomiendo sin dudarlo.',
  },
  {
    name: 'Sergio P.',
    initial: 'S',
    color: '#059669',
    service: 'Mecánica general',
    location: 'Cariló',
    text: 'Lo llevé por un tema de motor que me preocupaba bastante. La revisión fue completa y me dijo exactamente lo que había y lo que no hacía falta tocar. Eso te da mucha confianza.',
  },
  {
    name: 'Martín V.',
    initial: 'M',
    color: '#D97706',
    service: 'Puesta a punto',
    location: 'Pinamar',
    text: 'Me lo habían recomendado y salí muy contento. El auto responde distinto, se nota un montón la diferencia. La atención por WhatsApp también muy rápida, sin vueltas. Diez puntos.',
  },
  {
    name: 'Pablo G.',
    initial: 'P',
    color: '#BE185D',
    service: 'Banco Dynojet',
    location: 'Mar del Plata',
    text: 'Vine desde Mar del Plata especialmente para el banco Dynojet. Vale el viaje. Andrés conoce el tema, no te vende humo. Me fui con los datos claros y sé exactamente por dónde seguir.',
  },
]

const track = [...testimonials, ...testimonials]

export default function Testimonials() {
  const headRef = useReveal()
  const carouselRef = useReveal(0.06)

  return (
    <section className="test-section" id="testimonios">
      <div className="wrap">
        <div ref={headRef} className="s-head reveal" style={{ textAlign: 'center' }}>
          {/* ⚠️ Reemplazar href con el link real a tus reseñas de Google Maps */}
          <a
            className="testi-rating-badge"
            href="https://g.page/r/andresracingperformance/review"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver reseñas en Google"
          >
            <span className="testi-stars-row">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </span>
            <span className="testi-rating-num">5.0</span>
            <span className="testi-rating-sep">·</span>
            {/* ⚠️ Reemplazar "28 reseñas" con el número real */}
            <span className="testi-rating-src">28 reseñas en Google</span>
          </a>
          <h2 className="s-title">Lo que dicen quienes<br />pasaron por el taller</h2>
          <p className="s-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Cada uno llegó con algo distinto: una falla, una duda, una mejora. Lo que no cambia es la atención.
          </p>
        </div>
      </div>

      <div ref={carouselRef} className="reveal">
        <div className="testi-carousel" aria-hidden="true">
          <div className="testi-track">
            {track.map((t, i) => (
              <article
                className="testi-card"
                key={i}
                style={{ '--avatar-color': t.color }}
              >
                <div className="testi-top-row">
                  <span className="testi-svc-pill">{t.service}</span>
                  <div className="testi-stars" aria-label="5 estrellas">
                    {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                  </div>
                </div>

                <div className="testi-quote"><QuoteIcon /></div>
                <p className="testi-text">{t.text}</p>

                <footer className="testi-footer">
                  <div className="testi-avatar" aria-hidden="true">{t.initial}</div>
                  <div className="testi-info">
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-loc">{t.location}</div>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
