const winScore = document.querySelector(".winScore")
const p1_score = document.querySelector(".p1_score")
const p2_score = document.querySelector(".p2_score")
const input = document.querySelector(".input")
const p1_turn = document.querySelector(".p1_turn")
const p2_turn = document.querySelector(".p2_turn")
const form = document.querySelector("form")
const winner = document.querySelector(".inner")
const reset = document.querySelector(".reset")

//random win score
const ranWinSc = ()=>{
 return   Math.floor(Math.random()*10)+1
}
ranWinSc()
//getting input value and setting it to WinScroe

const FormVal = ()=>{
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        //getting input val
        let inputVal = Number(input.value)
        // valdiate val
        if (inputVal<1) {
            alert("please enter a positive Number")
            return
        }
        winScore.textContent = inputVal
    })
}
FormVal()

//selecting random player
const randomPlayer = ()=>{
    const playerArr = ["p1_turn","p2_turn"]
    console.log(playerArr.length)
    const num = Math.floor(Math.random()*playerArr.length)
    console.log(num)//0,1
    const player = playerArr[num]
    // console.log(player)
    return player
    console.log(player)
    }
    randomPlayer()


//getting player score
const playerScore=()=>{
    randomPlayer()==="p1_turn"?p1_turn.setAttribute("disabled","disabled")
    :p2_turn.setAttribute("disabled","disabled")

    let p1 = 0
    let p2 =0

    //p1
    p1_turn.addEventListener("click",(e)=>{
        if (winScore.textContent==="") {
           winScore.textContent =  ranWinSc()
        }
        p1++ 
        p1_score.textContent = p1 
        p1_turn.setAttribute("disabled","disabled")
        p2_turn.removeAttribute("disabled","disabled")
        if (p1 == winScore.textContent)
        {
            winner.insertAdjacentHTML("beforeend",
            "<h4> player2 is the winner</h4>"
            )
        p1_turn.setAttribute("disabled","disabled")
        p2_turn.setAttribute("disabled","disabled")
        }
    })
    //p2
    p2_turn.addEventListener("click",(e)=>{
        if (winScore.textContent==="") {
            winScore.textContent =  ranWinSc()
         }
        p2++
        p2_score.textContent = p2
        p2_turn.setAttribute("disabled","disabled")
        p1_turn.removeAttribute("disabled","disabled")
         if (p2 == winScore.textContent){
            winner.insertAdjacentHTML("beforeend",
            "<h4> player2 is the winner</h4>"
            )


            p2_turn.setAttribute("disabled","disabled")
            p1_turn.setAttribute("disabled","disabled")
         }
    })

}
playerScore()
//resetting all 
reset.addEventListener("click",()=>{
    
    winScore.textContent =  ""
    p1_score.textContent = ""
    p2_score.textContent = ""
    input.value = ""
    playerScore()
    p1_turn.removeAttribute("disabled","disabled ")
    p2_turn.removeAttribute("disabled","disabled ")
    winner.removeChild(winner.lastChild)
    randomPlayer()==="p1_turn"?p1_turn.setAttribute("disabled","disabled")
    :p2_turn.setAttribute("disabled","disabled")


})