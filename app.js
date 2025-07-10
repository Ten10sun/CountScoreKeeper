// document.addEventListener('DOMContentLoaded', () => {
//   let scores = {
//     p1: 0,
//     p2: 0
//   };
//   let winningScore = 5;
//   let isGameover = false;

//   const displays = {
//     p1: document.querySelector('#p1Display'),
//     p2: document.querySelector('#p2Display')
//   };
//   const buttons = {
//     p1: document.querySelector('#p1Button'),
//     p2: document.querySelector('#p2Button')
//   };
//   const resetButton = document.querySelector('#resetButton');




//   function updateScores(player) {
//     if (!isGameover) {
//       scores[player] += 1;
//       displays[player].textContent = scores[player];
//       if (scores[player] === winningScore) {
//         isGameover = true;
//         buttons[player].disabled = true;
//         buttons[player === 'p1' ? 'p2' : 'p1'].disabled = true;
//       }
//     }
//   }

//   function reset() {
//     scores.p1 = 0;
//     scores.p2 = 0;
//     isGameover = false;
//     buttons.p1.disabled = false;
//     buttons.p2.disabled = false;
//     displays.p1.textContent = scores.p1;
//     displays.p2.textContent = scores.p2;
//   }

//   buttons.p1.addEventListener('click', () => updateScores('p1'));
//   buttons.p2.addEventListener('click', () => updateScores('p2'));
//   resetButton.addEventListener('click', reset);

//   const select = document.createElement('select');
//   for (let i = 1; i <= 10; i++) {
//     const option = document.createElement('option');
//     option.value = i;
//     option.textContent = i;
//     select.appendChild(option);
//   }
//   document.body.appendChild(select);
//   select.addEventListener('change', () => {
//     winningScore = parseInt(select.value);
//     reset();
//   });
// });
    

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameover = false;

document.addEventListener('DOMContentLoaded', () => {
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');

p1Display.textContent = p1Score;
p2Display.textContent = p2Score;

});

// p1ボタン
p1Button.addEventListener('click', () => {
  if (!isGameover) {
    if (p1Score !== winningScore) {
      p1Score += 1;
      p1Display.textContent = p1Score;
      if (p1Score === winningScore) {
        p1Display.classList.add('has-text-success');
        p2Display.classList.add('has-text-danger');
        isGameover = true;
        p1Button.disabled = true;
        p2Button.disabled = true;
      }
    }
    
  } 
});

// p2ボタン
p2Button.addEventListener('click', () => {
  if (!isGameover) {
  if (p2Score !== winningScore) {
    p2Score += 1;
    p2Display.textContent = p2Score;
    if (p2Score === winningScore) {
      p2Display.classList.add('has-text-success');
      p1Display.classList.add('has-text-danger');
      p1Button.disabled = true;
      p2Button.disabled = true;
      isGameover = true;
    }
  }
}
});

// リセットボタン
resetButton.addEventListener('click', reset);

// リセット関数
function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
p2Display.textContent = p2Score;
isGameover = false;
p1Display.classList.remove('has-text-success', 'has-text-danger');
p2Display.classList.remove('has-text-success', 'has-text-danger');
p1Button.disabled = false;
p2Button.disabled = false;
}


// セレクト
const select = document.createElement('select');
for (let i=1; i<=10; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
  select.appendChild(option);
  
  }
  const selectDiv = document.querySelector('#selectDiv');
  document.body.appendChild(select);
  selectDiv.appendChild(select);
  select.addEventListener('change', () => {
      winningScore = parseInt(select.value);
      reset();
    });
    
    



    
//     p1 = {
//       score: 0,
//       display: document.querySelector('#p1Display'),
//       button: document.querySelector('#p1Button')
//     }
//     p2 = {
//       score: 0,
//       display: document.querySelector('#p2Display'),
//       button: document.querySelector('#p2Button')
//     }
    
//     const resetButton = document.querySelector('#resetButton');
    
//     let p1Score = 0;
//     let p2Score = 0;
//     let winningScore = 5;
//     let isGameover = false;
    
//     // document.addEventListener('DOMContentLoaded', () => {
      
//     //   p1.display.textContent = p1.score;
//     //   p2.display.textContent = p2.score;
      
//     // });
    
    
// function updateScores(player, opponent) {
//   if (!isGameover) {
//       player.score += 1;
//       player.display.textContent = player.score;
//       if (player.score === winningScore) {
//         player.display.classList.add('has-text-success');
//         opponent.display.classList.add('has-text-danger');
//         isGameover = true;
//         player.button.disabled = true;
//         opponent.button.disabled = true;
//       }
//     }
// }



// // p1ボタン
// p1.button.addEventListener('click', () => updateScores(p1,p2));
// p2.button.addEventListener('click', () => updateScores(p2,p1));

// // // p2ボタン
// // p2Button.addEventListener('click', () => {
// //   if (!isGameover) {
// //   if (p2Score !== winningScore) {
// //     p2Score += 1;
// //     p2Display.textContent = p2Score;
// //     if (p2Score === winningScore) {
// //       p2Display.classList.add('has-text-success');
// //       p1Display.classList.add('has-text-danger');
// //       p1Button.disabled = true;
// //       p2Button.disabled = true;
// //       isGameover = true;
// //     }
// //   }
// // }
// // });

// // リセットボタン
// resetButton.addEventListener('click', reset);

// // リセット関数
// function reset() {
//   p1.score = 0;
//   p2.score = 0;
//   p1.display.textContent = p1.score;
// p2.display.textContent = p2.score;
// isGameover = false;
// p1.display.classList.remove('has-text-success', 'has-text-danger');
// p2.display.classList.remove('has-text-success', 'has-text-danger');
// p1.button.disabled = false;
// p2.button.disabled = false;
// }


// // セレクト
// const select = document.createElement('select');
// for (let i=1; i<=10; i++) {
//     const option = document.createElement('option');
//     option.value = i;
//     option.textContent = i;
//   select.appendChild(option);
  
//   }
//   const selectDiv = document.querySelector('#selectDiv');
//   document.body.appendChild(select);
//   selectDiv.appendChild(select);
//   select.addEventListener('change', () => {
//       winningScore = parseInt(select.value);
//       reset();
//     });
    







// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 5;
// let isGameover = false;

// document.addEventListener('DOMContentLoaded', () => {
//   const p1 = {
//     score: 0,
//     display: document.querySelector('#p1Display'),
//     button: document.querySelector('#p1Button')
//   }
//   const p2 = {
//     score: 0,
//     display: document.querySelector('#p2Display'),
//     button: document.querySelector('#p2Button')
//   }

// const resetButton = document.querySelector('#resetButton');

// p1.display.textContent = p1Score;
// p2.display.textContent = p2Score;

// });


// // p1ボタン
// p1Button.addEventListener('click', () => {
//   if (!isGameover) {
//     if (p1Score !== winningScore) {
//       p1Score += 1;
//       p1Display.textContent = p1Score;
//       if (p1Score === winningScore) {
//         p1Display.classList.add('has-text-success');
//         p2Display.classList.add('has-text-danger');
//         isGameover = true;
//         p1Button.disabled = true;
//         p2Button.disabled = true;
//       }
//     }
    
//   } 
// });

// // p2ボタン
// p2Button.addEventListener('click', () => {
//   if (!isGameover) {
//   if (p2Score !== winningScore) {
//     p2Score += 1;
//     p2Display.textContent = p2Score;
//     if (p2Score === winningScore) {
//       p2Display.classList.add('has-text-success');
//       p1Display.classList.add('has-text-danger');
//       p1Button.disabled = true;
//       p2Button.disabled = true;
//       isGameover = true;
//     }
//   }
// }
// });

// // リセットボタン
// resetButton.addEventListener('click', reset);

// // リセット関数
// function reset() {
//   p1Score = 0;
//   p2Score = 0;
//   p1Display.textContent = p1Score;
// p2Display.textContent = p2Score;
// isGameover = false;
// p1Display.classList.remove('has-text-success', 'has-text-danger');
// p2Display.classList.remove('has-text-success', 'has-text-danger');
// p1Button.disabled = false;
// p2Button.disabled = false;
// }


// // セレクト
// const select = document.createElement('select');
// for (let i=1; i<=10; i++) {
//     const option = document.createElement('option');
//     option.value = i;
//     option.textContent = i;
//   select.appendChild(option);
  
//   }
//   const selectDiv = document.querySelector('#selectDiv');
//   document.body.appendChild(select);
//   selectDiv.appendChild(select);
//   select.addEventListener('change', () => {
//       winningScore = parseInt(select.value);
//       reset();
//     });
    