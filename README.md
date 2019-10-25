# Crystal Collector
A game where players must blindly add up their number by clicking different crystals in efforts to get it equal to a goal number which is randomly generated.

## Game Description
When players reach this score, they are either given a point towards their wins and a message displaying that they won, or if they go over the goal score, they are given a message showing that they lost, and their number of losses increases. At this point, the game will assign a new number to reach and new values to the crystals. It self resets all scores except the win and loss count, but these will be lost if the page is refreshed. 

## File Infrastructure
(index.html) contains the instructions and html framework of the game, as well as links to Bootstrap, Jquery, the javascript external file, and the css external file

(Assets\javascript\game.js) contains the actual logic involved in the game and controls assigning gems values, counting up player scores, and resetting the game upon win or loss conditions

(Assets\images) contains 4 images used as buttons when adding up a score

(Assets\css\style.css) contains the typography and visual settings of any HTML sections not set with bootstrap

