'use strict';

// #7
{
  // const scores = [80, 90, 40, 70]
  // const[a,b,c,d] = [80, 90, 40, 70]
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);
  
  // const[a,b, ...others] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(others);

  let x = 30;
  let y = 70;
  [x,y] = [y,x];
  console.log(x);
  console.log(y);
}

// #6
// {
//   const otherScores = [10,20];
//   const scores = [80, 90, 40, 70, ...otherScores];
//   console.log(scores);
//   sum(...otherScores);
// }

// #5
// {
//   const scores = [80, 90, 40, 70];
//   scores.splice(1,1,40,50);
//   //80,40,50,40,70

//   for(var i=0; i < scores.length ;i++){
//     console.log(`スコア ${i}:${scores[i]}`);
//     }
// }


// {
//   const scores = [80, 90, 40, 70];
//   scores.push(60,70);
//   scores.shift();

//   for(var i=0; i < scores.length ;i++){
//     console.log(`スコア ${i}:${scores[i]}`);
//     }
// }

// #1
// {
//   // const score1 = 80;
//   // const score2 = 90;
//   // const score3 = 40;

//   const scores = [80, 90, 40];
//   console.log(scores);
// }