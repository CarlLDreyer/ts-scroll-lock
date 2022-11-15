import { useState } from "react"
import { enableScroll, disableScroll } from 'ts-scroll-lock'
import './DemoBody.css'

export function DemoBody () {
  const [isActive, setIsActive] = useState(false)

  const toggleScroll = () => {
    if (isActive) enableScroll()
    else disableScroll()

    setIsActive(!isActive)
  }

  return (
    <div className="demo-body">
      <h1 id="top">Top of page</h1>
      <button id="btn" onClick={toggleScroll}>Toggle scroll</button>
      <h1 id="bottom">Bottom of page</h1>
    </div>
  )
}
