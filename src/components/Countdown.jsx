import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Countdown.module.css'

// Fecha del evento: domingo 4 de julio de 2026 a las 6:00 PM
const FECHA_EVENTO = new Date('2026-07-04T18:00:00')

function calcularTiempo() {
  const ahora = Date.now()
  const diff = FECHA_EVENTO.getTime() - ahora
  if (diff <= 0) return null

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24))
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const segundos = Math.floor((diff % (1000 * 60)) / 1000)
  return { dias, horas, minutos, segundos }
}

/* Bloque individual con animación al cambiar */
function Bloque({ valor, label }) {
  const padded = String(valor).padStart(2, '0')
  return (
    <div className={styles.bloque}>
      <div className={styles.numero}>
        <AnimatePresence mode="wait">
          <motion.span
            key={padded}
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.25 }}
          >
            {padded}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  )
}

export default function Countdown() {
  const [tiempo, setTiempo] = useState(calcularTiempo)

  useEffect(() => {
    const id = setInterval(() => setTiempo(calcularTiempo()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!tiempo) {
    return (
      <div className={styles.granDia}>
        ¡Hoy es el gran día! 🎉🤍
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <Bloque valor={tiempo.dias} label="DÍAS" />
      <span className={styles.sep}>·</span>
      <Bloque valor={tiempo.horas} label="HORAS" />
      <span className={styles.sep}>·</span>
      <Bloque valor={tiempo.minutos} label="MINUTOS" />
      <span className={styles.sep}>·</span>
      <Bloque valor={tiempo.segundos} label="SEGUNDOS" />
    </div>
  )
}
