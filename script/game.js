console.log("loaded")

function getel(id) {
    return document.getElementById(id);
}

var startButton = getel("startGame")
var gamePlay = getel("gamePlay")

var playButtons = document.getElementsByClassName("playbutton");

var rock = getel("rock")
var paper = getel("paper")
var sciss = getel("scissors")

var buttongroup = getel("buttongroup") //group of the buttons

var choices = ["rock","scissors","paper"]

var status = getel("choice");
var playerSc = getel("playerSc");
var compSc = getel("compSc");
var compChooses = getel("compChooses");
var compChoosesParent = getel("compChoosesParent");

//if user plays rock and computer plays sciss user wins (for the first)
var wins = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
}

var playerScore = 0;
var compScore = 0;


startButton.addEventListener('click',startGame);

Array.from(playButtons).forEach(btn => {
    btn.addEventListener("click",buttonClicked);
});

function startGame() {
    hidecompChooses()
    showButtons();
    hideStartButton()
    showGamePlay()
}

function playChoice(playerChoice) {
    var compChoice = choices[Math.floor(Math.random() * choices.length)];
    displayComputerChoice(compChoice);
    console.log(playerChoice,"comp:",compChoice)
    if(wins[playerChoice] == compChoice){ //win for player
        playerScore++
    } else if(compChoice == playerChoice) {
        //same symbol
    }
    else {
        compScore++
    }
    updateScore();

}

function displayComputerChoice(ch){
    showcompChooses()
    var cmpch = ""
    switch(ch){
        case "paper": cmpch = "✋"; break;
        case "rock": cmpch = "✊"; break;
        case "scissors": cmpch = "✌"; break;
    }
    compChooses.innerHTML = cmpch
    // status.innerHTMl = "computer choose "+ch;
}
function updateScore() {
    playerSc.innerHTML = playerScore
    compSc.innerHTML = compScore
}

function buttonClicked(e){
    var btnChoice = e.target.id;
    // console.log(e.target.id);
    playChoice(btnChoice);

}





function showButtons() {
    if(buttongroup.classList.contains("hidden")){
        buttongroup.classList.remove("hidden")
    }
}

function hideButtons() {
    if(!buttongroup.classList.contains("hidden")){
        buttongroup.classList.add("hidden")
    }
}

function hideStartButton() {
    if(!startButton.classList.contains("hidden")){
        startButton.classList.add("hidden")
    }
}
function showStartButton() {
    if(startButton.classList.contains("hidden")){
        startButton.classList.remove("hidden")
    }
}

function hideGamePlay() {
    if(!gamePlay.classList.contains("hidden")){
        gamePlay.classList.add("hidden")
    }
}
function showGamePlay() {
    if(gamePlay.classList.contains("hidden")){
        gamePlay.classList.remove("hidden")
    }
}
function hidecompChooses() {
    if(!compChoosesParent.classList.contains("hidden")){
        compChoosesParent.classList.add("hidden")
    }
}
function showcompChooses() {
    if(compChoosesParent.classList.contains("hidden")){
        compChoosesParent.classList.remove("hidden")
    }
}