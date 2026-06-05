import { motion } from 'framer-motion'
import styles from './MarineBackground.module.css'

/* Genera burbujas aleatorias */
const bubbles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 18 + 6,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 6 + 7,
  opacity: Math.random() * 0.35 + 0.1,
}))

/* Iconos marinos distribuidos por bordes */
const marineIcons = [
  { icon: '🪼', x: '4%', y: '15%', delay: 0, dur: 5 },
  { icon: '🪼', x: '88%', y: '25%', delay: 1.5, dur: 6 },
  { icon: '🐬', x: '8%', y: '55%', delay: 0.8, dur: 7 },
  { icon: '🐬', x: '85%', y: '65%', delay: 2, dur: 5.5 },
  { icon: '🐠', x: '12%', y: '80%', delay: 1, dur: 6.5 },
  { icon: '🐠', x: '80%', y: '45%', delay: 0.3, dur: 5 },
  { icon: '⭐', x: '20%', y: '35%', delay: 2.5, dur: 4 },
  { icon: '⭐', x: '75%', y: '15%', delay: 1.2, dur: 4.5 },
  { icon: '🐚', x: '5%', y: '90%', delay: 0.5, dur: 7 },
  { icon: '🐚', x: '90%', y: '88%', delay: 1.8, dur: 6 },
  { icon: '🦀', x: '45%', y: '92%', delay: 0.7, dur: 5.5 },
  { icon: '🌊', x: '35%', y: '8%', delay: 2, dur: 4 },
]

/* Destellos/estrellas titilando */
const stars = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 2 + 1.5,
}))

export default function MarineBackground() {
  return (
    <div className={styles.bg} aria-hidden="true">
      {/* Estrellas titilando */}
      {stars.map(s => (
        <motion.div
          key={s.id}
          className={styles.star}
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Burbujas ascendentes */}
      {bubbles.map(b => (
        <motion.div
          key={b.id}
          className={styles.bubble}
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
          }}
          initial={{ y: '110vh' }}
          animate={{ y: '-10vh' }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Vida marina flotando */}
      {marineIcons.map((m, i) => (
        <motion.span
          key={i}
          className={styles.marineIcon}
          style={{ left: m.x, top: m.y }}
          animate={{ y: [0, -14, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: m.dur, delay: m.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          {m.icon}
        </motion.span>
      ))}
    </div>
  )
}
