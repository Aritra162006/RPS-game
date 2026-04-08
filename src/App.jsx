import { useState } from "react";

export default function Game(){
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [userMove, setUserMove]=useState("Rock")
  const [compMove, setCompMove]=useState("Rock")


  function compMoveDecider() {
    let randNum=Math.random()
    if (randNum<0.34){
      return "Rock"
    }
    else if (randNum<0.67){
      return "Scissor"
    }
    else if (randNum<1){
      return "Paper"
    }
  }


  function userInpRock(){
    setUserMove("Rock")
    let comp=compMoveDecider()
    setCompMove(comp)
    handleClick("Rock",comp)
  }

  function userInpPaper(){
    setUserMove("Paper")
    let comp=compMoveDecider()
    setCompMove(comp)
    handleClick("Paper",comp)

  }
  function userInpScissor(){
    setUserMove("Scissor")
    let comp=compMoveDecider()
    setCompMove(comp)
    handleClick("Scissor",comp)
  }


 function handleClick(userMove,compMove) {
    if (userMove===compMove){
      return;
    }
    else if ((userMove=="Paper" && compMove=="Rock") ||
      (userMove=="Scissor" && compMove=="Paper") ||
      (userMove=="Rock" && compMove=="Scissor")){
        setUserScore(userScore+1)
      }
      else{
        setCompScore(compScore+1)
      }
  }
  return (
    <div>
      <h1>USER : Computer</h1>
      <h1>{userMove} : {compMove}</h1>
      <h2>{userScore} : {compScore}</h2>
      <button onClick={userInpRock}>🪨</button>
      <button onClick={userInpPaper}>🗒️</button>
      <button onClick={userInpScissor}>✂️</button>
    </div>
  )
}
