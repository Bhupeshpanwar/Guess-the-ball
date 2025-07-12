import "./App.css"
import { useState } from "react"

let arr = []

export default function MyApp() {
  const [value, setValue] = useState("🥤")
  const [state, setState] = useState(null)

  const shuffle = () => {
    const sarr = ["O", "", ""]
    let currentIndex = sarr.length
    while (currentIndex > 0) {
      let randomIndex = Math.floor(currentIndex * Math.random())
      currentIndex--
      [sarr[currentIndex], sarr[randomIndex]] = [sarr[randomIndex], sarr[currentIndex]]
    }
    arr = sarr
    setValue(null)
    
    // Add shuffle animation
    const buttons = document.querySelectorAll('.buttons')
    buttons.forEach(button => button.classList.add('shuffle'))
    setTimeout(() => {
      buttons.forEach(button => button.classList.remove('shuffle'))
    }, 500)
  }

  const Guess = (num) => {
    if (arr[num] === "O") {
      setState("⚽ You win")
      setValue(num)
    } else {
      setState("🥤 You lose")
      setValue(num)
    }
  }

  return (
    <div className="Gamecontainer">
      <div className="game-buttons-container">
        <button className="buttons" onClick={() => Guess(0)}>
          {value === 0 ? state : "🥤"}
        </button>
        <button className="buttons" onClick={() => Guess(1)}>
          {value === 1 ? state : "🥤"}
        </button>
        <button className="buttons" onClick={() => Guess(2)}>
          {value === 2 ? state : "🥤"}
        </button>
      </div>
      <button className="shufflebuttons" onClick={() => shuffle()}>shuffle</button>
      <div className="Instructions">
        <p>First shuffle before starting a new game</p>
      </div>
    </div>
  )
}