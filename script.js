let team1 = 0;
let team2 = 0;

document.querySelector('#add1').onclick = function() {
    team1 = team1 + 1;
    document.querySelector('#score1').innerHTML = team1;
    if(team1 == 5){
        document.querySelector('#feedback').innerHTML = "Team 1 wins";
        document.querySelector('#score1').style.backgroundColor = "Green";
        document.querySelector('#score2').style.backgroundColor = "Red";
    }
};

document.querySelector('#add2').onclick = function() {
    team2 = team2 + 1;
    document.querySelector('#score2').innerHTML = team2;
    if(team2 == 5){
        document.querySelector('#feedback').innerHTML = "Team 2 wins";
        document.querySelector('#score2').style.backgroundColor = "Green";
        document.querySelector('#score1').style.backgroundColor = "Red";
    }
}
