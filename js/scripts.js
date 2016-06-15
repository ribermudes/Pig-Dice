// ===== Backend Logic =====
// var turnScore = 0;
// var player1 = 0;
// var player2 = 0;

var rollDie = function (min, max) {
  return Math.floor(Math.random() * (min - max + 1) + min);
}

var dieRoll;
while(dieRoll = rollDie(1, 6));

// ===== Frontend Logic =====

// $(document).ready(function(){
//   $(" ").submit(function(event){
//     event.preventDefault();
