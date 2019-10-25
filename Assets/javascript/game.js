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
        numGoal = Math.floor(Math.random()*121)+18;
        console.log(numGoal);
    },  
    
}
function scoreCheck() {
    
    if (playerScore === numGoal){
        alert("wow!");
    } else if (playerScore > numGoal){
        alert("oof");
    }
}


//Calls value initializers
gemValues.startGoal();
gemValues.gemSet();

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

//Writes player scores to page
if (numGoal !== 0) {
    $("#scoreSet-text").html(numGoal);
}
$("#playerScore").html(playerScore);
$("#scoreWin-text").html(" " + wins);
$("#scoreLoss-text").html(" " + losses);











    

