// ===== Backend Logic =====
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

function Player() {
  this.score = 0;
}

// ===== Frontend Logic ===== UI logic

 $(document).ready(function() {
   var die = new Die();
   var playerOne = new Player();
   var playerTwo = new Player();
   var isPlayerOne = true;
   $('#player-one-score').text(playerOne.score);
   $('#player-two-score').text(playerTwo.score);
   $('#running-totes').text(0);

   $('#button-play').text('Roll for Player 1');

   $("#button-play").click(function(event){
     event.preventDefault();
// needs winner notification
     var roll = die.rollTotal();
     $('#current-roll').text(roll);

     if (roll === 1) {
       if (isPlayerOne) {
         isPlayerOne = false;
         $('#button-play').text('Roll for Player 2');
       } else {
         isPlayerOne = true;
         $('#button-play').text('Roll for Player 1');
       }
     }

    $('#current-roll').text(roll);
    $('#running-totes').text(die.runningTotal);
  });

  $("#button-hold").click(function(event){
    event.preventDefault();

    if(isPlayerOne){
      playerOne.score += die.runningTotal;
      isPlayerOne = false;
      $('#button-play').text('Roll for Player 2');
    } else {
      playerTwo.score += die.runningTotal;
      isPlayerOne = true;
      $('#button-play').text('Roll for Player 1');
    }

    die.runningTotal = 0;
    $('#player-one-score').text(playerOne.score);
    $('#player-two-score').text(playerTwo.score);
    $('#running-totes').text(die.runningTotal);
    $('#current-roll').text('');
  });
});
