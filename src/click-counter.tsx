import { useState } from 'react'

export function ClickCounter() {
  const [count, setCount] = useState(0)

  const t = 'bdffdf'
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>
        Count {t} {count}
      </button>
    </div>
  )
}
