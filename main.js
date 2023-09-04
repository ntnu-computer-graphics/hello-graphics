import './style.css'
import ntnuLogo from '/ntnu_eng.png'
import { setupCounter } from './counter.js'
import { generateImage } from './imageGenerator'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://www.ntnu.no/" target="_blank">
      <img src="${ntnuLogo}" class="logo" alt="NTNU logo" />
    </a>
    <h1>Welcome to Computer Graphics 2023!</h1>
    <div class="card">
      <canvas id="canvas" width='512' height='512'></canvas>
    </div>
    <div class="card">
      <button id="counter" />
    </div>
    <p class="read-the-docs">
      Click on the NTNU logo to go to the main page
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
generateImage(document.querySelector('#canvas'))
