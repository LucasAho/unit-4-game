//Four crystals display as buttons
//Player shown random number
//Assign values to crystals randomly
//update score counter
//player win
//player lose
//restart
    //not with refresh

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
    startGoal: function() {
        if (numGoal === 0) {
        numGoal = Math.floor(Math.random()*121)+18;
        $("#scoreSet-text").html(numGoal);
        return numGoal;
        }
    },   
}
function reset() {
    gemValues.gemSet();
    gemValues.startGoal();
    playerScore = 0;
    numGoal = Math.floor(Math.random()*121)+18;
    $("#scoreSet-text").html(numGoal);
    $("#playerScore").html(playerScore);
}
function start() {
    gemValues.startGoal();
    gemValues.gemSet();
}
if (wins === 0) {
    start();
}

function scoreCheck() {
    
    if (playerScore === numGoal){        
        wins++;
        reset();
        $("#winlossNote").html("You won!!!<br>");
    } else if (playerScore > numGoal){        
        losses++;
        reset();
        $("#winlossNote").html("You lost!!!<br>");
    }
    $("#scoreWin-text").html(" " + wins);
    $("#scoreLoss-text").html(" " + losses);
}

//Adds to player score based on button clicked
$("#gemSlot1").click(function(){
    playerScore= playerScore + gemValues.gemOne;
    $("#playerScore").html(playerScore);
    scoreCheck();    
})
$("#gemSlot2").click(function(){
    playerScore= playerScore + gemValues.gemTwo;
    $("#playerScore").html(playerScore);
    scoreCheck(); 
})
$("#gemSlot3").click(function(){
    playerScore= playerScore + gemValues.gemThree;
    $("#playerScore").html(playerScore);
    scoreCheck(); 
})
$("#gemSlot4").click(function(){
    playerScore= playerScore + gemValues.gemFour;
    $("#playerScore").html(playerScore);
    scoreCheck();     
})












    

