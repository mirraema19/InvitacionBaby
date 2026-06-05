import { motion } from 'framer-motion'
import Countdown from './Countdown'
import InfoCard from './InfoCard'
import MusicToggle from './MusicToggle'
import styles from './InvitationView.module.css'

/* Placeholder de foto — reemplaza con la URL o import de tu imagen */
const FOTO_PLACEHOLDER = null // Ejemplo: import foto from '../assets/foto-bebe.jpg'

const WHATSAPP_NUM = '9617761872'
const WHATSAPP_MSG = encodeURIComponent('¡Confirmo mi asistencia! 🤍🪼')
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUM}?text=${WHATSAPP_MSG}`

const swatches = [
  { color: '#1b4a8a', nombre: 'Azul' },
  { color: '#ffffff', nombre: 'Blanco' },
  { color: '#f4f1ea', nombre: 'Perla' },
  { color: '#e8dcc4', nombre: 'Beige' },
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }
}

export default function InvitationView({ musicaActiva, onToggleMusica }) {
  return (
    <div className={styles.page}>
      <MusicToggle activa={musicaActiva} onToggle={onToggleMusica} />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <motion.div {...fadeUp(0)} className={styles.heroInner}>
          <motion.div
            className={styles.badgeHero}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            🍼 BABY SHOWER
          </motion.div>

          <h1 className={styles.heroTitle}>
            ¡Nuestro bebé está por llegar!
          </h1>

          <p className={styles.heroSub}>Acompáñanos a celebrar la llegada de</p>

          <h2 className={styles.heroNombre}>Cristo Kendrik</h2>

          {/* Foto circular con anillo animado — PLACEHOLDER */}
          <div className={styles.fotoWrapper}>
            <motion.div
              className={styles.anilloGlow}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className={styles.fotoPulse}
              animate={{ boxShadow: ['0 0 12px #4fc3f7aa', '0 0 32px #26c6dacc', '0 0 12px #4fc3f7aa'] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              {FOTO_PLACEHOLDER ? (
                <img src={FOTO_PLACEHOLDER} alt="Foto bebé / padres" className={styles.foto} />
              ) : (
                // Placeholder visual cuando no hay foto
                <div className={styles.fotoPlaceholder}>
                  <span>👶</span>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className={styles.contenido}>
        {/* ── CUENTA REGRESIVA ── */}
        <motion.section className={styles.seccion} {...fadeUp(0)}>
          <div className={styles.seccionHeader}>
            <span className={styles.seccionIcon}>⏳</span>
            <h3 className={styles.seccionTitulo}>Cuenta Regresiva</h3>
          </div>
          <Countdown />
        </motion.section>

        {/* ── DETALLES DEL EVENTO ── */}
        <section className={styles.seccion}>
          <motion.div {...fadeUp(0)} className={styles.seccionHeader}>
            <span className={styles.seccionIcon}>📅</span>
            <h3 className={styles.seccionTitulo}>Detalles del Evento</h3>
          </motion.div>
          <div className={styles.grid}>
            <InfoCard icon="📅" title="Fecha" delay={0}>
              Domingo, 4 de Julio del 2026
            </InfoCard>
            <InfoCard icon="🕕" title="Horario" delay={0.1}>
              6:00 PM a 8:00 PM
            </InfoCard>
            <InfoCard icon="📍" title="Lugar" delay={0.2}>
              <p>Calle Bahía de la India</p>
              <p>Manzana 11, Lote 6</p>
              <p style={{ fontSize: '0.85em', opacity: 0.75 }}>(pasando el kínder)</p>
              <p style={{ fontWeight: 600, marginTop: '0.3rem' }}>Cali Hux</p>
            </InfoCard>
            <InfoCard icon="💌" title="Te invitan" delay={0.3}>
              <p style={{ fontFamily: 'var(--fuente-script)', fontSize: '1.6rem', lineHeight: 1.2 }}>
                Josmar &amp; Samary
              </p>
              <p style={{ marginTop: '0.3rem', opacity: 0.8 }}>futuros papás 🤍</p>
            </InfoCard>
          </div>
        </section>

        {/* ── MESA DE REGALOS ── */}
        <section className={styles.seccion}>
          <motion.div {...fadeUp(0)} className={styles.seccionHeader}>
            <span className={styles.seccionIcon}>🎁</span>
            <h3 className={styles.seccionTitulo}>Mesa de Regalos</h3>
          </motion.div>
          <InfoCard delay={0.05}>
            <p className={styles.regalosTexto}>
              "Lo que sea tu voluntad. Tu valiosa presencia y acompañarnos en la hermosa
              ceremonia holística de bienvenida al bebé es nuestro mayor regalo. 🐚"
            </p>
          </InfoCard>
        </section>

        {/* ── CÓDIGO DE VESTIMENTA ── */}
        <section className={styles.seccion}>
          <motion.div {...fadeUp(0)} className={styles.seccionHeader}>
            <span className={styles.seccionIcon}>👗</span>
            <h3 className={styles.seccionTitulo}>Código de Vestimenta</h3>
          </motion.div>
          <InfoCard delay={0.05}>
            <p className={styles.vestimentaTema}>
              Temática: Animales marinos 🪼🐬
            </p>
            <p style={{ marginBottom: '1rem', opacity: 0.8, fontSize: '0.9rem' }}>
              Colores sugeridos:
            </p>
            <div className={styles.swatches}>
              {swatches.map(s => (
                <div key={s.nombre} className={styles.swatch}>
                  <div
                    className={styles.swatchCircle}
                    style={{
                      background: s.color,
                      border: ['#ffffff', '#f4f1ea', '#e8dcc4'].includes(s.color)
                        ? '2px solid rgba(79,195,247,0.5)'
                        : '2px solid rgba(255,255,255,0.12)',
                    }}
                  />
                  <span className={styles.swatchNombre}>{s.nombre}</span>
                </div>
              ))}
            </div>
          </InfoCard>
        </section>

        {/* ── RSVP ── */}
        <section className={styles.seccion}>
          <motion.div {...fadeUp(0)} className={styles.seccionHeader}>
            <span className={styles.seccionIcon}>✅</span>
            <h3 className={styles.seccionTitulo}>Confirmación de Asistencia</h3>
          </motion.div>
          <InfoCard delay={0.05}>
            <p style={{ marginBottom: '1.2rem', opacity: 0.85 }}>
              Confirma tu asistencia antes del <strong>28 de junio</strong>
            </p>
            {/* PLACEHOLDER: actualiza WHATSAPP_NUM al inicio del archivo */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWhatsapp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Confirmar por WhatsApp 💬
            </motion.a>
          </InfoCard>
        </section>

        {/* ── MENSAJE DE CIERRE ── */}
        <motion.section
          className={`${styles.seccion} ${styles.cierreSection}`}
          {...fadeUp(0)}
        >
          <div className={styles.cierreCard}>
            <p className={styles.cierreTexto}>
              "Es para nosotros un verdadero placer compartir momentos con los seres amados
              que nos rodean. Esperamos contar con tu asistencia. 🙏🤍"
            </p>
            <p className={styles.cierreFirma}>Josmar &amp; Samary</p>
          </div>
        </motion.section>

        {/* ── PIE DE PÁGINA CON OLAS SVG ── */}
        <footer className={styles.footer}>
          <WavesAnimadas />
          <p className={styles.footerCredito}>
            🪼 Baby Shower · Cristo Kendrik · 4 de Julio 2026 🤍
          </p>
        </footer>
      </div>
    </div>
  )
}

/* Olas SVG animadas */
function WavesAnimadas() {
  return (
    <div className={styles.wavesWrapper} aria-hidden="true">
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className={styles.waveSvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z"
          fill="rgba(79,195,247,0.18)"
          animate={{ d: [
            'M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z',
            'M0,55 C200,10 400,70 600,30 C800,10 1000,65 1200,30 L1200,80 L0,80 Z',
            'M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z',
          ]}}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0,55 C150,20 350,70 600,50 C850,30 1050,70 1200,55 L1200,80 L0,80 Z"
          fill="rgba(38,198,218,0.12)"
          animate={{ d: [
            'M0,55 C150,20 350,70 600,50 C850,30 1050,70 1200,55 L1200,80 L0,80 Z',
            'M0,35 C150,65 350,20 600,50 C850,70 1050,20 1200,45 L1200,80 L0,80 Z',
            'M0,55 C150,20 350,70 600,50 C850,30 1050,70 1200,55 L1200,80 L0,80 Z',
          ]}}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </svg>
    </div>
  )
}
