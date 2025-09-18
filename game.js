function result(user_choice) {
    let computer_choice = "";
    rand = Math.random();
    if (rand >= 0 && rand < 1 / 3) {
        computer_choice = "rock";
    }
    else if (rand >= 1 / 3 && rand < 2 / 3) {
        computer_choice = "paper";
    }
    else {
        computer_choice = "scissor";
    }
    let result = "";
    if (computer_choice == user_choice) {
        result = "tie";
        score.ties++;
    }
    else if (computer_choice == 'rock' && user_choice == 'paper' ||
        computer_choice == 'paper' && user_choice == 'scissor' ||
        computer_choice == 'scissor' && user_choice == 'rock'
    ) {
        result = "you win";
        score.wins++;
    }
    else {
        result = "you lose";
        score.loses++;
    }
    update();
    let change=document.querySelector(".hidden");
    change.innerHTML=`your choice is <b> ${user_choice} </b> and computer choice is <b>${computer_choice}</b>`;

}



function reset() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    update();
    document.querySelector(".hidden").innerHTML="";
}


let score = {
    wins: 0,
    loses: 0,
    ties: 0
}


function update() {
    let end = document.querySelector(".end");
    end.innerHTML = `Wins:${score.wins} , Loses:${score.loses} , Ties:${score.ties}`
}

let rock=document.querySelector(".rock");
rock.addEventListener("click",(e)=>{
    result('rock');
})
let paper=document.querySelector(".paper");
paper.addEventListener("click",(e)=>{
    result('paper');
})
let scissor=document.querySelector(".scissor");
scissor.addEventListener("click",(e)=>{
    result('scissor');
})
let butt=document.querySelector(".but");
butt.addEventListener("click",(e)=>{
    reset();
})