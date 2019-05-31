let wins = 0;
let losses = 0;
let ties = 0;

function computersMove() {
    let randint = Math.floor(Math.random()*3)
    if (randint === 0){
        return "jnpr";
    }
    if (randint === 1){
        return "rwby";
    }
    if (randint === 2) {
        return "sssn";
    }
}

function updateScore(result){
    if (result == "won"){
        wins = wins + 1;
        document.getElementById("wins").innerHTML = wins;
    }
    if (result == "lost"){
        losses = losses + 1;
        document.getElementById("losses").innerHTML = losses;
    }
    if (result == "tied"){
        ties = ties + 1;
        document.getElementById("ties").innerHTML = ties;
    }
}
function onClickRock(){
    let cm = computersMove();
    if (cm === "rwby") {
        updateScore("tied");
        alert("tie"); 
    }
    if (cm === "jnpr"){
        updateScore("lost");
        alert("lose");
    }
    if (cm === "sssn"){
        updateScore("won");
        alert("I doubt your abilities still but you won.");
    }
}
function onClickPaper(){
    let cm = computersMove();
    if (cm === "jnpr"){
        updateScore("tied");
        alert("tie");
    }
    if (cm === "sssn"){
        updateScore("lost");
        alert("lose");
    }
    if (cm === "rwby"){
        updateScore("won");
        alert("I doubt your abilities still but you won.");
    }
}
function onClickScissors(){
    let cm = computersMove();
    if (cm === "sssn"){
        updateScore("tied");
        alert("tie");
    }
    if (cm === "rwby"){
        updateScore("lost");
        alert("lose");
    }
    if (cm === "jnpr"){
        updateScore("won");
        alert("I doubt your abilities still but you won.");
    }
}

document.getElementById("rwby").onclick = onClickRock;
document.getElementById("jnpr").onclick = onClickPaper;
document.getElementById("sssn").onclick = onClickScissors;
