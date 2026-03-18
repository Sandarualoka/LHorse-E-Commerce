import { useState, useEffect } from 'react'

function CountdownTimer() {
  const [time, setTime] = useState({ h: 18, m: 16, s: 3 })
  useEffect(() => {
    const t = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev
        s--
        if (s < 0) { s = 59; m-- }
        if (m < 0) { m = 59; h-- }
        if (h < 0) return { h: 23, m: 59, s: 59 }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(t)
  }, [])
  const pad = n => String(n).padStart(2, '0')
  return (
    <span className="font-mono font-bold text-sm text-red-600 tracking-wide">
      {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
    </span>
  )
}

export default CountdownTimer