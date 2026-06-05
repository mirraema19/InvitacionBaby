import { motion } from 'framer-motion'
import styles from './InfoCard.module.css'

export default function InfoCard({ icon, title, children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={`${styles.card} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.4), 0 0 20px rgba(79,195,247,0.15)' }}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.body}>{children}</div>
    </motion.div>
  )
}
