export interface InitialStyles {
  position?: string
  left?: string
  top?: string
  width?: string
}

export interface LockElement extends HTMLElement {
  $_initialStyles: {
    position: string
    left: string
    top: string
    width: string
  }
}

export function disableScroll (element?: HTMLElement | null) {
  const el = (element ?? document.body) as LockElement
  if (!el || typeof window === 'undefined') return

  const { scrollX = 0, scrollY = 0 } = window ?? {}

  el.$_initialStyles = {
    position: el.style.position,
    left: el.style.left,
    top: el.style.top,
    width: el.style.width
  }

  el.style.position = 'fixed'
  el.style.left = `${-scrollX}px`
  el.style.top = `${-scrollY}px`
  el.style.width = '100%'
}

export function enableScroll (element?: HTMLElement | null) {
  const el = (element ?? document.body) as LockElement
  if (!el || !el.$_initialStyles || typeof window === 'undefined') return

  const scrollY = el.style.top ?? '0'

  el.style.position = el.$_initialStyles.position
  el.style.left = el.$_initialStyles.left
  el.style.top = el.$_initialStyles.top
  el.style.width = el.$_initialStyles.width

  window.scrollTo(0, parseInt(scrollY) * -1)
}
