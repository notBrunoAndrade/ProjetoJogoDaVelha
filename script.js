let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#selection button")
let message = document.querySelector("#message")
let TextMessage = document.querySelector("#message p")
let secondPlayer

// contador

let player1 = 0
let player2 = 0

// adicionar o evento de click aos boxes

for(let i = 0;i < boxes.length;i++){

    boxes[i].addEventListener("click",function(){

        let el = check(player1,player2)

        // verifica se ja existe X ou o

       if(this.childNodes.length == 0){
        let cloneEl= el.cloneNode(true)

        this.appendChild(cloneEl)

        if(player1 == player2){
            player1++

            if(secondPlayer == "1jogador"){

                // função executar jogada
                computerPlayer()
                player2++
            }
        }else{
            player2++
        }

        checkWinCondition()




       }

    })
}

// evento escolha de modo de jogo

for(let i = 0;i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){

        secondPlayer = this.getAttribute("id")

        for(let j = 0;j < buttons.length; j++){
            buttons[j].style.display = "none"
        }
    setTimeout(function(){
            let container = document.querySelector("#container")
            container.classList.remove("hide")

        },600)


    })

    
}

function check(player1,player2){

    
    if(player1 == player2){
        //x
        el = x
    }else{
        //o
        el = o
    }

    return el
}

function checkWinCondition(){

    let b1 = document.getElementById("block-1")
    let b2 = document.getElementById("block-2")
    let b3 = document.getElementById("block-3")
    let b4 = document.getElementById("block-4")
    let b5 = document.getElementById("block-5")
    let b6 = document.getElementById("block-6")
    let b7 = document.getElementById("block-7")
    let b8 = document.getElementById("block-8")
    let b9 = document.getElementById("block-9")
    
  // horizontal

  if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){

    let b1Child = b1.childNodes[0].className
    let b2Child = b2.childNodes[0].className
    let b3Child = b3.childNodes[0].className

    if(b1Child == "x" && b2Child == "x" && b3Child == "x"){
        // x
        declareWinner("x")
        
    }else if(b1Child == "o" && b2Child == "o" && b3Child == "o"){
        // y
        declareWinner("o")
    }
  }

  if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
    let b4Child = b4.childNodes[0].className
    let b5Child = b5.childNodes[0].className
    let b6Child = b6.childNodes[0].className

    if(b4Child == "x" && b5Child == "x" && b6Child == "x"){
        // x
        declareWinner("x")
    }else if(b4Child == "o" && b5Child == "o" && b6Child == "o"){
        // y
        declareWinner("o")
    }

  }

  if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
    let b7Child = b7.childNodes[0].className
    let b8Child = b8.childNodes[0].className
    let b9Child = b9.childNodes[0].className

    if(b7Child == "x" && b8Child == "x" && b9Child == "x"){
        // x
        declareWinner("x")
    }else if(b7Child == "o" && b8Child == "o" && b9Child == "o"){
        // y
        declareWinner("o")
    }

  }

  // verticais

  if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
    let b2Child = b2.childNodes[0].className
    let b5Child = b5.childNodes[0].className
    let b8Child = b8.childNodes[0].className

    if(b2Child == "x" && b5Child == "x" && b8Child == "x"){
        // x
        declareWinner("x")
    }else if(b2Child == "o" && b5Child == "o" && b8Child == "o"){
        // y
        declareWinner("o")
    }

  }

  if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
    let b3Child = b3.childNodes[0].className
    let b6Child = b6.childNodes[0].className
    let b9Child = b9.childNodes[0].className

    if(b3Child == "x" && b6Child == "x" && b9Child == "x"){
        // x
        declareWinner("x")
    }else if(b3Child == "o" && b6Child == "o" && b9Child == "o"){
        // y
        declareWinner("o")
    }

  }

  if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
    let b1Child = b1.childNodes[0].className
    let b4Child = b4.childNodes[0].className
    let b7Child = b7.childNodes[0].className

    if(b1Child == "x" && b4Child == "x" && b7Child == "x"){
        // x
        declareWinner("x")
    }else if(b1Child == "o" && b4Child == "o" && b7Child == "o"){
        // y
        declareWinner("o")
    }

  }

  // verticais

  if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
    let b1Child = b1.childNodes[0].className
    let b5Child = b5.childNodes[0].className
    let b9Child = b9.childNodes[0].className

    if(b1Child == "x" && b5Child == "x" && b9Child == "x"){
        // x
        declareWinner("x")
    }else if(b1Child == "o" && b5Child == "o" && b9Child == "o"){
        // y
        declareWinner("o")
    }

  }

  if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
    let b3Child = b3.childNodes[0].className
    let b5Child = b5.childNodes[0].className
    let b7Child = b7.childNodes[0].className

    if(b3Child == "x" && b5Child == "x" && b7Child == "x"){
        // x
        declareWinner("x")
    }else if(b3Child == "o" && b5Child == "o" && b7Child == "o"){
        // y
        declareWinner("o")
    }

  }

  // velha

  let counter = 0

  for(let i = 0; i < boxes.length; i++){
    if(boxes[i].childNodes[0] != undefined){
        counter++
    }
  }

  if(counter == 9){
    declareWinner("")
  }
  
}

// limpar jogo e declarar vencedor e mudar placar

function declareWinner(winner){

    let scoreboardx = document.querySelector("#scoreboard-1")
    let scoreboardO = document.querySelector("#scoreboard-2")
    let msg = ""

    if(winner == "x"){
        scoreboardx.textContent = parseInt(scoreboardx.textContent) + 1
        msg = "jogador 1 venceu"
    }else if(winner == "o"){
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1
        msg = "jogador 2 venceu"
    }else{
        msg  = "Deu velha"
    }

    // exibir

    TextMessage.innerHTML = msg
    message.classList.remove("hide")

    // esconde msg

    setTimeout(function(){
        message.classList.add("hide")
    },3000)

    // zerar jogadas

    player1 = 0
    player2 = 0

    // remover elementos

    let boxesRemove = document.querySelectorAll(".box div")

    for(let i = 0; i < boxesRemove.length; i++){
        boxesRemove[i].parentNode.removeChild(boxesRemove[i])
    }

}


function computerPlayer(){


let cloneO = o.cloneNode(true)

let counter = 0
let filled = 0


for(let i = 0; i < boxes.length; i++){
    let randomNumer = Math.floor(Math.random() * 5)

    if(boxes[i].childNodes[0] == undefined){
        if(randomNumer <= 1){
            boxes[i].appendChild(cloneO)
            counter++
            break
        }
    }else{
        filled++
    }
}

if(counter == 0 && filled < 9){
    computerPlayer()
}
}
