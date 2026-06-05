import { motion } from 'framer-motion'
import styles from './MusicToggle.module.css'

export default function MusicToggle({ activa, onToggle }) {
  return (
    <motion.button
      className={styles.btn}
      onClick={onToggle}
      title={activa ? 'Pausar música' : 'Reproducir música'}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      animate={activa ? {
        boxShadow: ['0 0 8px #4fc3f7aa', '0 0 20px #4fc3f7', '0 0 8px #4fc3f7aa']
      } : {}}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      {activa ? '🎵' : '🔇'}
    </motion.button>
  )
}
