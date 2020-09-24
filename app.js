let userScore = 0
let compScore = 0
const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getComputerChoice(){
    const choices = ['r', 'p','s']
    const randomNumber = Math.floor(Math.random()*3)
    return choices[randomNumber]
}

function convert(letter){
    if(letter === "r") return "Rock"
    if (letter === "p") return "Paper"
    return "Scissors"
}

function win(userChoice, computerChoice){
    console.log("win")
    userScore++
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    const smallUserWord = "user".fontsize(3).sub()
    const smallCompWord = "comp".fontsize(3).sub()
    result_p.innerHTML = `${convert(userChoice)}${smallUserWord} beats ${convert(computerChoice)}${smallCompWord}. You win`
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow') ,300)
}

function lose(userChoice,computerChoice){
    console.log("lose")
    compScore++
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    const smallUserWord = "user".fontsize(3).sub()
    const smallCompWord = "comp".fontsize(3).sub()
    result_p.innerHTML = `${convert(userChoice)}${smallUserWord} loses to ${convert(computerChoice)}${smallCompWord}. You lost`
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow') ,300)
}

function tie(userChoice,computerChoice){
    console.log("tie")
    const smallUserWord = "user".fontsize(3).sub()
    const smallCompWord = "comp".fontsize(3).sub()
    result_p.innerHTML = `${convert(userChoice)}${smallUserWord} equals ${convert(computerChoice)}${smallCompWord}. Tie`
    document.getElementById(userChoice).classList.add('gray-glow')
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow') ,300)
}

function game(userChoice){

    const computerChoice = getComputerChoice()
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice)            
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice)    
            break
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice,computerChoice)
            break    
    }

}

function main(){

    rock_div.addEventListener('click',() => {
        console.log("ROOOCCKKK")
        game("r")
    })
    paper_div.addEventListener('click', () => {
        console.log("pApEr")
        game("p")
    })
    scissors_div.addEventListener('click',() => {
        console.log("ssscciiisssssoorsss")
        game("s")
    })

}

main()