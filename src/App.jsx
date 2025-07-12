import "./App.css"

import { useState } from "react"
let arr =[]
export default function MyApp(){
const[value,setvalue] =useState("🥤")
const[state,setstate] = useState(null)
const shuffle = ()=>{
  const sarr= ["O","",""]
  let currentindex = sarr.length
  while (currentindex>0){
  let randomindex = Math.floor(currentindex*Math.random())
  currentindex--
  [sarr[currentindex],sarr[randomindex]] = [sarr[randomindex],sarr[currentindex]]
}
  arr = sarr
  setvalue(null)
  
}
const Guess = (num)=>{
   if (arr[num]==="O"){
  setstate("⚽"+"You win")
  setvalue(num)

 
   }
   else{
   setstate("🥤"+"You lose")
   setvalue(num)
   }
}

  return (<div className="Gamecontainer">
  
  <div className="game-buttons-container">
    <button className="buttons" onClick={() => Guess(0)}>
      {value === 0 ?state: "🥤"}
    </button>
    <button className="buttons" onClick={()=>Guess(1)}>
      {value === 1 ? state: "🥤"}
    </button>
    <button className="buttons" onClick={()=>Guess(2)}>
      {value === 2 ? state : "🥤"}
    </button>

  </div>
  <button className="shufflebuttons" onClick={()=>shuffle()}>shuffle</button>
  <div className="Instructions">
    <p>First shuffle before starting a new game</p>
    
  </div>
</div>
)
 
}