import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// Simple logic made by me  before Tutorial
function App() {
function changeColor(color) {
    document.body.classList.remove("light", "black", "red","blue","pink")
    document.body.classList.add(color)
}
    return (
    <>
    <div className="btn">
        <button id='btn1' onClick={() => changeColor("black")}>Dark</button>
        <button id='btn2' onClick={() => changeColor("light")}>Light</button>
        <button id='btn3' onClick={() => changeColor("red")}>Red</button>
        <button id='btn4' onClick={() => changeColor("blue")}>blue</button>
        <button id='btn5' onClick={() => changeColor("pink")}>pink</button>
    </div>
    </>
)
}
export default App