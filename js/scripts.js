// ===== Backend Logic =====

// Math.random() returns a number between 0 and 1. So you take that value and multiply the max value by it, which gives you something like 0.7 * 100 (if your max is 100) which equals a random value of 70
// then you add the minimum to ensure that your minimum value is never 0
// so if you got a 0 of of the 0 to 1, then that's 0 * 100, which is 0, plus your minimum, like 1 maybe
// I spotted a bug
// imagine with the example of minimum 1 max 100
// if Math.random( )returns 1, then that would be 1 * 100 + 1, which is 101
// that's too high, so we have to take the minimum out before we multiply the random value
// then add it back at the end
// so if Math.random() is 1, then the formula is 1 * (100 - 1) + 1, which is 100, which is what we want for the max value
debugger;
function rollDie (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Die() {
   this.runningTotal = 0;
}
  Die.prototype.rollTotal = function () {
  var roll = rollDie(1, 6);
  if (roll === 1) {
    this.runningTotal = 0;
  } else {
    this.runningTotal += roll;
  }
  return roll;
 }

function Player(turn) {
  this.score = 0;
  this.currentPlayer = turn;
  this.currentRoll = 0;
  this.currentTotal = 0;
}

  // Player.prototype.winner = function () {
  // if (this.score === 10) { alert ("We have a winner!");
  //   }
  // }

  Player.prototype.buttonToggle = function () {

    var roll = die.rollTotal();
    if (roll === 1) {
      if () {
        this.currentPlayer = false;
        return 'Roll for Player 2';
      } else {
        this.currentPlayer = true;
        return 'Roll for Player 1';
      }
    }
  }

  Player.prototype.updateScore = function () {
    if(true){
      playerOne.score += die.runningTotal;

    } else {
      playerTwo.score += die.runningTotal;

    }
  }
// ===== Frontend Logic =====

 $(document).ready(function() {
  //  var turnCount = 0;
   var die = new Die();
   var playerOne = new Player(true);
   var playerTwo = new Player(false);
   //var isPlayerOne = true;
   $('#player-one-score').text(playerOne.score);
   $('#player-two-score').text(playerTwo.score);
   $('#running-totes').text(0);

   $('#button-play').text('Roll for Player 1');

   $("#button-play").click(function(event){
     event.preventDefault();
     var roll = die.rollTotal();
     $('#current-roll').text(roll);
     $('#button-play').text(playerOne.buttonToggle())
     $('#button-play').text(playerTwo.buttonToggle())
    //  if (roll === 1) {
    //    if (isPlayerOne) {
    //      isPlayerOne = false;
    //      $('#button-play').text('Roll for Player 2');
    //    } else {
    //      isPlayerOne = true;
    //      $('#button-play').text('Roll for Player 1');
    //    }
    //  }

    $('#current-roll').text(roll);
    $('#running-totes').text(die.runningTotal);

  });

  $("#button-hold").click(function(event){
    event.preventDefault();

    // if(isPlayerOne){
    //   playerOne.score += die.runningTotal;
    //   isPlayerOne = false;
    //   $('#button-play').text('Roll for Player 2');
    // } else {
    //   playerTwo.score += die.runningTotal;
    //   isPlayerOne = true;
    //   $('#button-play').text('Roll for Player 1');
    // }

    die.runningTotal = 0;
    $('#player-one-score').text(playerOne.score);
    $('#player-two-score').text(playerTwo.score);
    $('#running-totes').text(die.runningTotal);
    $('#current-roll').text('');
  });
});
