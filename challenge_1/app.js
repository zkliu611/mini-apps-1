var array = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var player1 = window.prompt('Please enter Player 1 Name') || 'X';
var player2 = window.prompt('Please enter Player 2 Name') || 'O';
document.getElementById('player').innerHTML = player1;
var player = 'X';
var winCount = {};
var winner = null;
winCount[player1] = 0;
winCount[player2] = 0;

var resetGame = function() {
  array = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  document.getElementById('player').innerHTML = player;
  document.getElementById('00').innerHTML = '_';
  document.getElementById('01').innerHTML = '_';
  document.getElementById('02').innerHTML = '_';
  document.getElementById('10').innerHTML = '_';
  document.getElementById('11').innerHTML = '_';
  document.getElementById('12').innerHTML = '_';
  document.getElementById('20').innerHTML = '_';
  document.getElementById('21').innerHTML = '_';
  document.getElementById('22').innerHTML = '_';
  gameStart();
}

document.getElementById('btn').addEventListener('click', resetGame)

document.getElementById('player1').innerHTML = player1 + ' :';
document.getElementById('player2').innerHTML = player2 + ' :';

var updateWinCount = function(player) {
  if (player === 'X') {
    player = player1;
  } else {
    player = player2;
  }
  winner = player;
  alert(player + ' Won!!!');
  winCount[player]++;
  document.getElementById('xcount').innerHTML = winCount[player1];
  document.getElementById('ocount').innerHTML = winCount[player2];
}

var gameStart = function() {
  if (winner === player1){
    alert(player2 + ' goes first');
    document.getElementById('player').innerHTML = player2;
  } else {
    alert(player1 + ' goes first');
    document.getElementById('player').innerHTML = player1;
  }
}

var togglePlayer = function() {
  if (player === 'X'){
    player = 'O';
  } else {
    player = 'X';
  }
}

var toggleArray = function(i, j) {
  if (array[i][j] === 0) {
    let id = String(i) + String(j);
    document.getElementById(id).innerHTML = player;
    // document.getElementById(id).css(background-color: 
    array[i][j] = player;
    checkWin(player);
    togglePlayer();
    document.getElementById('player').innerHTML = player1;
  } 
};

var checkWin = function(player) {
  for (let i = 0; i < 3; i++) {
    if (array[i][0] === player && array[i][1] === player && array[i][2] === player) {
      updateWinCount(player);
    }
    if (array[0][i] === player && array[1][i] === player && array[2][i] === player) {
      updateWinCount(player);
    }
  }
  if (array[0][0] === player && array[1][1] === player && array[2][2] === player) {
    updateWinCount(player);
  }
  if (array[0][2] === player && array[1][1] === player && array[2][0] === player) {
    updateWinCount(player);
  }
}


document.getElementById('00').addEventListener('click', function() {
  toggleArray(0, 0);
})

document.getElementById('01').addEventListener('click', function() {
  toggleArray(0, 1);
})

document.getElementById('02').addEventListener('click', function() {
  toggleArray(0, 2);
})

document.getElementById('10').addEventListener('click', function() {
  toggleArray(1, 0);
})

document.getElementById('11').addEventListener('click', function() {
  toggleArray(1, 1);
})

document.getElementById('12').addEventListener('click', function() {
  toggleArray(1, 2);
})

document.getElementById('20').addEventListener('click', function() {
  toggleArray(2, 0);
})

document.getElementById('21').addEventListener('click', function() {
  toggleArray(2, 1);
})

document.getElementById('22').addEventListener('click', function() {
  toggleArray(2, 2);
})




// var toggleArray = function() {
//   console.log('clicks')
//   // if (array[i][j] === 0) {
//   //   array[i][j] === player;
//   // } 
//   // if (player === 'X'){
//   //   player = 'O';
//   // } else {
//   //   player = 'X';
//   // }
// };







