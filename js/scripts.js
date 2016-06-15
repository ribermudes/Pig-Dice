// ===== Backend Logic =====
// var turnScore = 0;
// var player1 = 0;
// var player2 = 0;
var diceRolls = [];
debugger;
function Die (rolls, runningtotal) {
   this.diceRolls = [];
   this.runningTotal = runningTotal;
}

 Die.prototype.rollTotal = function () {
   return this.diceRolls + runningTotal;
 }



// Math.random() returns a number between 0 and 1. So you take that value and multiply the max value by it, which gives you something like 0.7 * 100 (if your max is 100) which equals a random value of 70
// then you add the minimum to ensure that your minimum value is never 0
// so if you got a 0 of of the 0 to 1, then that's 0 * 100, which is 0, plus your minimum, like 1 maybe
// I spotted a bug
// imagine with the example of minimum 1 max 100
// if Math.random( )returns 1, then that would be 1 * 100 + 1, which is 101
// that's too high, so we have to take the minimum out before we multiply the random value
// then add it back at the end
// so if Math.random() is 1, then the formula is 1 * (100 - 1) + 1, which is 100, which is what we want for the max value
function rollDie (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// This function takes the diceRolls array and loops through it, adds the indexes together to return a total

function addRolls() {
  var totes = 0;
  for (var i =0; i < diceRolls.length; i++) {
    if (i ===1) { return totes=0;
  } else if (i !== 1 ) {
    totes = totes + diceRolls[i];
  }

  }
  return totes
}



// ===== Frontend Logic =====

 $(document).ready(function() {
   $("#button-task").click(function(event){
     event.preventDefault();
     var runningTotal = addRolls();
     var random = rollDie(1, 6);
     diceRolls.push(random);
     $('#running-totes').text(runningTotal);
     $('#current-roll').text(random);
  });
});
