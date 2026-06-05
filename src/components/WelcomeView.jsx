import { motion } from 'framer-motion'
import styles from './WelcomeView.module.css'

const iconosMarinos = ['🐚', '🌊', '⭐']

/* Variantes para aparición escalonada de elementos internos */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function WelcomeView({ onVerInvitacion }) {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 90, damping: 18 }}
      >
          <motion.div
            className={styles.content}
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Badge flotante */}
            <motion.div
              className={styles.badge}
              animate={{ scale: [1, 1.08, 1], boxShadow: ['0 0 8px #4fc3f7aa', '0 0 20px #4fc3f7', '0 0 8px #4fc3f7aa'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              🍼 Baby Shower
            </motion.div>

            {/* Medusa animada central */}
            <motion.div
              className={styles.medusaWrapper}
              variants={item}
            >
              <motion.span
                className={styles.medusa}
                animate={{ y: [0, -12, 0], scale: [1, 1.06, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                🪼
              </motion.span>
            </motion.div>

            {/* Divisor */}
            <motion.div className={styles.divider} variants={item}>
              <span className={styles.dividerLine} />
              <span className={styles.dividerIcon}>🐚</span>
              <span className={styles.dividerLine} />
            </motion.div>

            {/* Título */}
            <motion.p className={styles.tienes} variants={item}>
              ¡Tienes una{' '}
              <span className={styles.destacado}>Invitación</span>!
            </motion.p>

            <motion.p className={styles.subtitulo} variants={item}>
              <em>para la celebración de</em>
            </motion.p>

            {/* Nombre */}
            <motion.h1 className={styles.nombre} variants={item}>
              Cristo Kendrik
            </motion.h1>

            <motion.p className={styles.evento} variants={item}>
              Baby Shower 🤍 Ceremonia de Bienvenida Holística
            </motion.p>

            {/* Iconos marinos escalonados */}
            <motion.div className={styles.iconosRow} variants={container}>
              {iconosMarinos.map((ic, i) => (
                <motion.span
                  key={i}
                  className={styles.iconoMarino}
                  variants={item}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                >
                  {ic}
                </motion.span>
              ))}
            </motion.div>

            {/* Botón Ver Invitación */}
            <motion.div variants={item}>
              <motion.button
                className={styles.btnVer}
                onClick={onVerInvitacion}
                animate={{ boxShadow: ['0 0 12px #4fc3f7aa', '0 0 28px #26c6dacc', '0 0 12px #4fc3f7aa'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
              >
                Ver Invitación 🎉🎵
              </motion.button>
              <p className={styles.musicaHint}>🔊 Se activará música al abrir</p>
            </motion.div>
          </motion.div>
      </motion.div>
    </div>
  )
}
