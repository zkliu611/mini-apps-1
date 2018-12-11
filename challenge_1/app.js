var array = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var player1 = window.prompt('Please enter Player 1 Name') || 'X';
var player2 = window.prompt('Please enter Player 2 Name') || 'O';
document.getElementById('player').innerHTML = player1;
var player = player1;
var box = 'X';
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
  colorReset('00');
  colorReset('01');
  colorReset('02');
  colorReset('10');
  colorReset('11');
  colorReset('12');
  colorReset('20');
  colorReset('21');
  colorReset('22');
  gameStart();
}

document.getElementById('btn').addEventListener('click', resetGame)

document.getElementById('player1').innerHTML = player1 + ' :';
document.getElementById('player2').innerHTML = player2 + ' :';

var gameStart = function() {
  if (winner === player1){
    alert(player2 + ' goes first');
    document.getElementById('player').innerHTML = player2;
  } else {
    alert(player1 + ' goes first');
    document.getElementById('player').innerHTML = player1;
  }
}

var toggleBox = function() {
  if (box === 'X'){
    box = 'O';
  } else {
    box = 'X';
  }
}

var togglePlayer = function() {
  if (player === player1){
    player = player2;
  } else {
    player = player1;
  }
}

var toggleArray = function(i, j) {
  if (array[i][j] === 0) {
    let id = String(i) + String(j);
    document.getElementById(id).innerHTML = box;
    array[i][j] = player;
    checkWin(player);
    togglePlayer();
    toggleBox();
    document.getElementById('player').innerHTML = player;
  } 
};

var checkWin = function(player) {
  for (let i = 0; i < 3; i++) {
    if (array[i][0] === player && array[i][1] === player && array[i][2] === player) {
      colorChange(i+'0', i+'1', i+'2');
      updateWinCount(player);
    }
    if (array[0][i] === player && array[1][i] === player && array[2][i] === player) {
      colorChange('0'+i, '1'+i, '2'+i);
      updateWinCount(player);
    }
  }
  if (array[0][0] === player && array[1][1] === player && array[2][2] === player) {
    colorChange('00', '11', '22');
    updateWinCount(player);
  }
  if (array[0][2] === player && array[1][1] === player && array[2][0] === player) {
    colorChange('02', '11', '20');
    updateWinCount(player);
  }
};

var updateWinCount = function(player) {
  if (box === 'X') {
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


var colorRowChange = function(i) {
  let id1 = i+'0';
  let id2 = i+'1';
  let id3 = i+'2';

  let box1 = document.getElementById(id1);
  let box1Style = box1.style;
  box1Style.backgroundColor = "#00ff00";

  let box2 = document.getElementById(id2);
  let box2Style = box2.style;
  box2Style.backgroundColor = "#00ff00";

  let box3 = document.getElementById(id3);
  let box3Style = box3.style;
  box3Style.backgroundColor = "#00ff00";
}

var colorChange = function(id1, id2, id3) {
  let box1 = document.getElementById(id1);
  let box1Style = box1.style;
  box1Style.backgroundColor = "#00ff00";

  let box2 = document.getElementById(id2);
  let box2Style = box2.style;
  box2Style.backgroundColor = "#00ff00";

  let box3 = document.getElementById(id3);
  let box3Style = box3.style;
  box3Style.backgroundColor = "#00ff00";
}

var colorReset = function(id) {
  let box = document.getElementById(id);
  let boxStyle = box.style;
  boxStyle.backgroundColor = "white";
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







