import { enableScroll, disableScroll } from 'ts-scroll-lock'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="demo-vanilla-body">
    <h1 id="top">Top of page</h1>
    <button id="btn">Toggle scroll</button>
    <h1 id="bottom">Bottom of page</h1>
  </div>
`

let scrollLocked = false
const button = document.getElementById('btn')

const toggleScrollLock = () => {
  if (scrollLocked) enableScroll()
  else disableScroll()
  scrollLocked = !scrollLocked
}

button?.addEventListener('click', () => toggleScrollLock())
