//Game values
var numGoal = 0;
var wins = 0;
var losses = 0;
var playerScore = 0;

//Writes player scores to page
$("#playerScore").html(playerScore);
$("#scoreWin-text").html(" " + wins);
$("#scoreLoss-text").html(" " + losses);

//Gem values object initializes the gem values and the goal to beat
var gemValues = {
    gemOne: 0,
    gemTwo: 0,
    gemThree: 0,
    gemFour: 0,
    //gemSet assigns random values to each gem
    gemSet: function() {
        var numHold = [0,0,0,0];
        for (var i = 0; i <numHold.length; i++) {
            numHold[i] = Math.floor(Math.random()*12)+1;
        }
        this.gemOne = numHold[0];
        this.gemTwo = numHold[1];
        this.gemThree = numHold[2];
        this.gemFour = numHold[3];
        
    },  
    //startGoal assigns an initial value to the player's goal score
    startGoal: function() {
        if (numGoal === 0) {
        numGoal = Math.floor(Math.random()*121)+18;
        $("#scoreSet-text").html(numGoal);
        return numGoal;
        }
    }   
}
//Reset function gives new values to gems and goal to beat
function reset() {
    gemValues.gemSet();
    gemValues.startGoal();
    playerScore = 0;
    numGoal = Math.floor(Math.random()*121)+19;
    $("#scoreSet-text").html(numGoal);
    $("#playerScore").html(playerScore);
}
//Start function runs at the very beginning of the page
function start() {
    gemValues.startGoal();
    gemValues.gemSet();
}
//Runs start function if player has not finished a round
if (wins === 0 && losses === 0) {
    start();
}

//Score check looks if players have added enough points to win or lose the game
function scoreCheck() {    \
    //If player has won the game, this runs
    if (playerScore === numGoal){        
        wins++;
        reset();
        $("#winlossNote").html("You won!!!<br>");
    //If player has reached lose condition, this runs
    } else if (playerScore > numGoal){        
        losses++;
        reset();
        $("#winlossNote").html("You lost!!!<br>");
    }
    //This updates html text4
    $("#scoreWin-text").html(" " + wins);
    $("#scoreLoss-text").html(" " + losses);
}

//These assign value to each gem button and update player's score
$("#gemSlot1").click(function(){
    playerScore= playerScore + gemValues.gemOne;
    $("#playerScore").html(playerScore);
    scoreCheck();    
});
$("#gemSlot2").click(function(){
    playerScore= playerScore + gemValues.gemTwo;
    $("#playerScore").html(playerScore);
    scoreCheck(); 
});
$("#gemSlot3").click(function(){
    playerScore= playerScore + gemValues.gemThree;
    $("#playerScore").html(playerScore);
    scoreCheck(); 
});
$("#gemSlot4").click(function(){
    playerScore= playerScore + gemValues.gemFour;
    $("#playerScore").html(playerScore);
    scoreCheck();     
});