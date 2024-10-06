import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x:0, y: 0 })

  const onOffSeguirPuntero = () =>{
    setEnabled(!enabled)
  }

  useEffect(() => {
  const handleMove = (event) =>{
  const { clientX, clientY } = event;
  setPosition({ x: clientX, y: clientY})
}
  if(enabled){
    window.addEventListener('mousemove', handleMove)

  }
    return () => {
      console.log("cleanUp")
      window.removeEventListener('mousemove', handleMove)
    }
}, [enabled])

  return (
 
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -10,
        top: -10,
        width: 20,
        height: 20,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      />
      <button onClick={onOffSeguirPuntero} >{enabled ? "Off" : "On"} seguir puntero</button>
    </main>
  )
}

export default App
