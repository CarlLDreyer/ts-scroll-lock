# TS Scroll Lock
TS Scroll Lock is a lightweight scroll lock library built using TypeScript.

## Features
* 🫶 **Uncomplicated:** Easy to install and use.
* ☁️ **CDN:** No bundler required.
* 📦 **Lightweight:** The package only weighs ~1kb.
* 🦾 **Type Strong:** Written in TypeScript.

## Installation
TS Scroll Lock can be installed using your favorite package manager or directly via CDN.

### npm
```shell
npm i -S ts-scroll-lock
```

### Yarn
```shell
yarn add ts-scroll-lock
```

### CDN
TS Scroll Lock can be loaded via CDN using ESM or UMD format.

#### ESM
```js
import useScrollLock from 'https://unpkg.com/ts-scroll-lock/dist/ts-scroll-lock.es.js'
```

#### UMD
```html
<script src="https://unpkg.com/ts-scroll-lock/dist/ts-scroll-lock.umd.js"></script>
```

## Simple Usage
Import the functions to your app.
```js
import { enableScroll, disableScroll } from 'ts-scroll-lock'
```

Enable or disable scrolling by calling the functions:
```js
disableScroll()

enableScroll()
```

By default, body will be targeted, but it's possible to scroll lock another element by passing it to either function.
```js
const scrollTarget = document.querySelector('#elementId')

disableScroll(scrollTarget)

enableScroll(scrollTarget)
```

## Vue
The library can easily be used in Vue.
### Body
```js
<script setup lang="ts">
import { enableScroll, disableScroll } from 'ts-scroll-lock'

const showModalElement = () => {
  // ... other logic
  disableScroll()
}

const hideModalElement = () => {
  // ... other logic
  enableScroll()
}
</script>
```

### Ref
```js
<template>
  <div ref="domContainer">
    ...
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { enableScroll, disableScroll } from 'ts-scroll-lock'

const domContainer = ref(null)

const showModalElement = () => {
  // ... other logic
  disableScroll(domContainer.value)
}

const hideModalElement = () => {
  // ... other logic
  enableScroll(domContainer.value)
}
</script>
```
## React
The library can easily be used in React.

### Body
```jsx
import { enableScroll, disableScroll } from 'ts-scroll-lock'

export function MyComponent () {
  const showModalElement = () => {
    // ... other logic
    disableScroll()
  }

  const hideModalElement = () => {
    // ... other logic
    enableScroll()
  }

  return (
    <div> JSX </div>
  )
}
```

### Ref
```jsx
import { useRef } from 'react'
import { enableScroll, disableScroll } from 'ts-scroll-lock'

export function MyComponent () {
  const demoRef = useRef(null)

  const showModalElement = () => {
    // ... other logic
    disableScroll(demoDivRef.current)
  }

  const hideModalElement = () => {
    // ... other logic
    enableScroll(demoDivRef.current)
  }

  return (
    <div ref={demoRef}> JSX </div>
  )
}
```

## Feedback
Any feedback is gladly received, whether it's a code improvement or feature request, open an issue / connect with me on [LinkedIn](https://www.linkedin.com/in/carlldreyer/).

## License
[MIT License](https://github.com/CarlLDreyer/vue-base-tooltip/blob/main/LICENSE) © 2022-present [Carl Lidström Dreyer](https://github.com/CarlLDreyer)
