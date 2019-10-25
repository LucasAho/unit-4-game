# Crystal Collector
A game that utilizes javascript and jquery in order to randomly assign numerical values to gems and a player goal. The player must use these buttons to get their score equal to the goal. The game is deployed to https://lucasaho.github.io/unit-4-game/.

## Game Description
As players click on the gem buttons, a value is added to their score. When players reach their goal score or go over it, their score is checked for a win or loss condition, and a point will be added to their wins or losses accordingly and display a message. At this point, the game will assign a new number to reach and new values to the crystals, allowing players to endlessly increase their wins. The wins and losses will only be reset to 0 on a page refresh. 

## File Infrastructure
### HTML
  * index.html: Contains the instructions and html framework of the game, as well as links to Bootstrap, Jquery, the javascript external file, and the css external file

### Javascript
  * game.js: Contains the actual logic involved in the game and controls assigning gems values, counting up player scores, and resetting the game upon win or loss conditions.

### Image assets 
Contains the following images to be used as buttons for adding up a score
* ![Image of GemOne](https://github.com/LucasAho/unit-4-game/blob/master/Assets/images/GemOne.png?raw=true)
* ![Image of GemTwo](https://github.com/LucasAho/unit-4-game/blob/master/Assets/images/GemTwo.png?raw=true)
* ![Image of GemOne](https://github.com/LucasAho/unit-4-game/blob/master/Assets/images/GemThree.png?raw=true)
* ![Image of GemOne](https://github.com/LucasAho/unit-4-game/blob/master/Assets/images/GemFour.png?raw=true)



### CSS
  * style.css: Contains the typography and visual settings of any HTML sections not set with bootstrap.
  * Bootstrap is also linked within index.html and is primarily used for site framework.

### CSS
  * style.css: Contains the typography and visual settings of any HTML sections not set with bootstrap.
  * Bootstrap is also linked within index.html and is primarily used for site framework.
