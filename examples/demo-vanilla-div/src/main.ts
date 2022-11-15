import { enableScroll, disableScroll } from 'ts-scroll-lock'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="demo" class="demo-vanilla-div">
    <h1 id="top">Top of page</h1>
    <button id="btn">Toggle scroll</button>
    <h1 id="bottom">Bottom of page</h1>
  </div>
`

let scrollLocked = false
const button = document.getElementById('btn')
const divDemo = document.getElementById('demo')

const toggleScrollLock = () => {
  if (scrollLocked) enableScroll(divDemo)
  else disableScroll(divDemo)
  scrollLocked = !scrollLocked
}

button?.addEventListener('click', () => toggleScrollLock())
