import { useRef, useState } from 'react'
import { enableScroll, disableScroll } from 'ts-scroll-lock'
import './DemoDiv.css'

export function DemoDiv () {
  const [isActive, setIsActive] = useState(false)
  const demoDivRef = useRef(null)

  const toggleScroll = () => {
    if (!demoDivRef.current) return

    if (isActive) enableScroll(demoDivRef.current)
    else disableScroll(demoDivRef.current)

    setIsActive(!isActive)
  }
  return (
    <div ref={demoDivRef} className="demo-div" id="demo">
    <h1 id="top">Top of page</h1>
    <button id="btn" onClick={toggleScroll}>Toggle scroll</button>
    <h1 id="bottom">Bottom of page</h1>
  </div>
  )
}