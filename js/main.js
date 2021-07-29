'use strict';
// #17
 {
   const str = 'hello';
   console.log(str.length);
   console.log(str.substring(2,4));
   console.log(str[1]);
 }

// #15#16
//  {
//   //  let x = [1,2];
//   //  let y = x;
//   //  x[0]=5;
//   //  console.log(x);//[5,2]
//   //  console.log(y);//[5,2]

//    let x = [1,2];
//    let y = [...x];
//    x[0]=5;
//    console.log(x);//[5,2]
//    console.log(y);//[1,2]
//  }

// #14
// {
  // const point = {
  //   x: 100,
  //   y: 180
  // }

  // const keys = Object.keys(point);
  // keys.forEach((key)=>{
  //   console.log(`key:${key} value:${point[key]}`);
  // });

  // const points =[
  //   {x:20, y:30},
  //   {x:30, y:40},
  //   {x:40, y:50}
  // ];

  // console.log(points[1].y);

// }

// #13
// {
//   const otherProps = {
//     r: 4,
//     color: 'red'
//   };
//   const point = {
//     x: 100,
//     y: 180,
//     ...otherProps
//   };
//   const {x,y,...others} = point;
//   console.log(x);
//   console.log(y);
//   console.log(others);
// }

// #11#12
// {
//   const point={
//     x:100,
//     y:180
//   };

//   point.x = 120;
//   point.z = 100;
//   delete point.y;
//   console.log(point);
// }

// #10
// {
//   const numbers = [1,4,7,8,10];
//   // const evenNumbers = numbers.filter((number)=>{
//   //   if(number % 2 === 0){
//   //     return true;
//   //   }else{
//   //     return false;
//   //   }
//   // });

//   const evenNumbers = numbers.filter(number => (number % 2 === 0));
//   console.log(evenNumbers);
// }

// #9
// {
//   const scores = [180, 190, 200];
//   // const updatePreices = scores.map((score)=>{
//   //   return score+20;
//   // });

//   const updatePreices = scores.map(score => score+20);
//   console.log(updatePreices);
// }

// #8
// {
//   const scores = [80, 90, 40, 70]
//   scores.forEach((score,index)=>{
//     console.log(`スコア ${index}:${score}`)
//   });
// }

// #7
// {
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

//   let x = 30;
//   let y = 70;
//   [x,y] = [y,x];
//   console.log(x);
//   console.log(y);
// }

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