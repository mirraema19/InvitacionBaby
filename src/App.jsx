import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import MarineBackground from './components/MarineBackground'
import WelcomeView from './components/WelcomeView'
import InvitationView from './components/InvitationView'
import musicaSrc from './assets/Baby.mp3'

export default function App() {
  const [vista, setVista] = useState('bienvenida') // 'bienvenida' | 'invitacion'
  const audioRef = useRef(null)
  const [musicaActiva, setMusicaActiva] = useState(false)

  function abrirInvitacion() {
    setVista('invitacion')
    // Intentar reproducir música al abrir (requiere interacción del usuario)
    if (audioRef.current) {
      audioRef.current.play().then(() => setMusicaActiva(true)).catch(() => {})
    }
  }

  function toggleMusica() {
    if (!audioRef.current) return
    if (musicaActiva) {
      audioRef.current.pause()
      setMusicaActiva(false)
    } else {
      audioRef.current.play().then(() => setMusicaActiva(true)).catch(() => {})
    }
  }

  return (
    <div style={{ position: 'relative', minHeight: '100svh', width: '100%' }}>
      {/* Fondo marino animado — presente en ambas vistas */}
      <MarineBackground />

      <audio ref={audioRef} src={musicaSrc} loop preload="auto" />

      <AnimatePresence mode="wait">
        {vista === 'bienvenida' ? (
          <motion.div
            key="bienvenida"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04, y: -30 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            style={{ width: '100%' }}
          >
            <WelcomeView onVerInvitacion={abrirInvitacion} />
          </motion.div>
        ) : (
          <motion.div
            key="invitacion"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
            style={{ width: '100%' }}
          >
            <InvitationView
              musicaActiva={musicaActiva}
              onToggleMusica={toggleMusica}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
