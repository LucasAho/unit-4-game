//Four crystals display as buttons
//Player shown random number
//Assign values to crystals randomly
//update score counter
//player win
//player lose
//restart
    //not with refresh


//Lets begin by console logging five random variables
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
        console.log(numHold);
    },
    
    
}
gemValues.gemSet();
console.log(gemValues.gemOne);




    


//gems:1-12
//guess:18-120