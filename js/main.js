'use strict';
// // #35
  {
      class Post{
      constructor(text){
        this.text = text;
        this.likeCount = 0;
      }

      show(){
        console.log(`${this.text}-${this.likeCount} likes`);
      }
    
      like(){
        this.likeCount++;
        this.show();
      }
      //静的メソッドstaticで直接よべる,thisは使えない
      //クラス内でのthisはこのクラスから作られるインスタンス
      //静的メソッドはインスタンスを作らずに呼ぶので、thisは使えない
      static showInfo(){
        console.log('Post Class Version 1.0');
      }
    }
      class SponsoredPost extends Post{
      constructor(text,sponsor){
        super(text);
        this.sponser = sponsor;
      }

      show(){
        super.show();
        console.log(`...sponsored by ${this.sponsor}`);
      }
    
      like(){
        this.likeCount++;
        this.show();
      }
      //静的メソッドstaticで直接よべる,thisは使えない
      //クラス内でのthisはこのクラスから作られるインスタンス
      //静的メソッドはインスタンスを作らずに呼ぶので、thisは使えない
      static showInfo(){
        console.log('Post Class Version 1.0');
      }
    }

    const posts = [
      new Post('JS'),
      new Post('プログラミング'),
      new SponsoredPost('３分動画でマスター','dotinstall')
    ];  

    // show(posts[0]);
    // posts[0].like();
    // Post.showInfo();
    posts[2].show();
    posts[2].like();

  }

// // #34
  // {
  //     class Post{
  //     constructor(text){
  //       this.text = text;
  //       this.likeCount = 0;
  //     }

  //     show(){
  //       console.log(`${this.text}-${this.likeCount} likes`);
  //     }
    
  //     like(){
  //       this.likeCount++;
  //       this.show();
  //     }
  //     //静的メソッドstaticで直接よべる,thisは使えない
  //     //クラス内でのthisはこのクラスから作られるインスタンス
  //     //静的メソッドはインスタンスを作らずに呼ぶので、thisは使えない
  //     static showInfo(){
  //       console.log('Post Class Version 1.0');
  //     }
  //   }
  //     class SponsoredPost{
  //     constructor(text,sponsor){
  //       this.text = text;
  //       this.likeCount = 0;
  //       this.sponser = sponsor;
  //     }

  //     show(){
  //       console.log(`${this.text}-${this.likeCount} likes`);
  //       console.log(`...sponsored by ${this.sponsor}`);
  //     }
    
  //     like(){
  //       this.likeCount++;
  //       this.show();
  //     }
  //     //静的メソッドstaticで直接よべる,thisは使えない
  //     //クラス内でのthisはこのクラスから作られるインスタンス
  //     //静的メソッドはインスタンスを作らずに呼ぶので、thisは使えない
  //     static showInfo(){
  //       console.log('Post Class Version 1.0');
  //     }
  //   }

  //   const posts = [
  //     new Post('JS'),
  //     new Post('プログラミング'),
  //     new SponsoredPost('３分動画でマスター','dotinstall')
  //   ];  

  //   // show(posts[0]);
  //   // posts[0].like();
  //   // Post.showInfo();
  //   posts[2].show();
  //   posts[2].like();

  // }

// // #33
//   {
//     class Post{
//       constructor(text){
//         this.text = text;
//         this.likeCount = 0;
//       }

//       show(){
//         console.log(`${this.text}-${this.likeCount} likes`);
//       }
    
//       like(){
//         this.likeCount++;
//         this.show();
//       }
//       //静的メソッドstaticで直接よべる,thisは使えない
//       //クラス内でのthisはこのクラスから作られるインスタンス
//       //静的メソッドはインスタンスを作らずに呼ぶので、thisは使えない
//       static showInfo(){
//         console.log('Post Class Version 1.0');
//       }
//     }
//     const posts = [
//       new Post('JS'),
//       new Post('プログラミング')    
//     ];  

//     // show(posts[0]);
//     // posts[0].like();
//     Post.showInfo();
//   }

// #32
  // {
  //   class Post{
  //     constructor(text){
  //       this.text = text;
  //       this.likeCount = 0;
  //     }

  //     show(){
  //       console.log(`${this.text}-${this.likeCount} likes`);
  //     }
    
  //     like(){
  //       this.likeCount++;
  //       this.show();
  //     }
  //   }

  //   const posts = [
  //     new Post('JS'),
  //     new Post('プログラミング')    
  //   ];  

  //   // show(posts[0]);
  //   posts[0].like();
  //   // posts[0].show();
  //   // posts[1].show();
  // }
  
// #30,31
  // {
  //   class Post{
  //     constructor(text){
  //       this.text = text;
  //       this.likeCount = 0;
  //     }

  //     show(){
  //       console.log(`${this.text}-いいね${this.likeCount}`);
  //     }
  //   }
    
  //   const posts = [
  //     new Post('JS'),
  //     new Post('プログラミング')    
  //   ];  

  //   // show(posts[0]);
  //   posts[0].show();
  //   posts[1].show();
  // }

// #29
  // {
  //   const posts = [
  //     {
  //       text:'JS',
  //       likeCount:0,
  //       // show:function(){
  //       //   console.log(`${this.text}-いいね${this.likeCount}`);
  //       // }
  //       show(){
  //         console.log(`${this.text}-いいね${this.likeCount}`);
  //       }
  //     },
  //     {
  //       text:'プログラミング',
  //       likeCount:0,
  //       show(){
  //         console.log(`${this.text}-いいね${this.likeCount}`);
  //       }
  //     },
  //   ];  
  //   // show(posts[0]);
  //   posts[0].show();
  //   posts[1].show();
  // }

// #28
  // {
  //   const posts = [
  //     {
  //       text:'JS',likeCount:0
  //     },
  //     {
  //       text:'プログラミング',likeCount:0
  //     }
  //   ];

  //   function show(post){
  //     console.log(`${post.text}-いいね${post.likeCount}`);
  //   }
    
  //   show(posts[0]);
  // }

// #27
  // {
  //     // const name = 'taguchi';
  //     const name = 5;
      
  //     try{
  //       console.log(name.toUpperCase());
  //     }catch(e){
  //       console.log('finish!');
  //     }
  // }

// #25#26
  // {
  //   let i = 0;
  //   function showTime(){
  //     console.log(new Date());
  //     const intervalId = setTimeout(showTime,1000);
  //     i++;
  //     if(i>2){
  //       clearTimeout(intervalId);
  //           }
  //   }
  //   showTime();
  // }

// #24
  // {
  //   let i = 0;
  //   function showTime(){
  //     console.log(new Date());
  //     i++;
  //     if(i>2){
  //       clearInterval(intervalId);
  //     }
  //   }

  //   const intervalId = setInterval(showTime, 1000);
  // }

// #23
  // {
    // alert('キャンセルしました');
    // const answer = confirm('削除しますか？');
    //   if(answer){
    //     console.log('削除しました');
    //   }else{
    //     console.log('キャンセルしました');
    //   }
  // }

// #22
  // {
    // const d = new Date(2021,6);
    // d.setHours(10,20,30);//2021年7月 10:20:30
    // d.setDate(20);//2021年7月20日 10:20:30
    // d.setDate(d.getDate()+3);//2021年7月23日 10:20:30
    // console.log(d);
  // }

// #21
  // {
  //   const d = new Date();
  //   // console.log(d);
  //   console.log(`${d.getMonth()+1}月 ${d.getDate()}日`);
    
  // }

// #20
//  {
  //0,1,2 
  // Math.floor(Math.random()*3)
  // //0,..,n
  // Math.floor(Math.random()*(n+1))
  // //min,..,max
  // Math.floor(Math.random()*(max+1-min)) + min

  // console.log(Math.floor(Math.random()*6)+1);
//  }

// #19
//  {
//    const scores = [10,3,9];
//    let sum = 0;
   
//    scores.forEach((score)=>{
//       sum += score; 
//    });
   
//   //  console.log(sum);

//    const avg = sum / scores.length;
//    console.log(avg);//7.3333333333

//    console.log(Math.floor(avg));//7
//    console.log(Math.ceil(avg));//8
//    console.log(Math.round(avg));//四捨五入7
//    console.log(avg.toFixed(3));//小数点を指定して丸める7.333

//    console.log(Math.random());//0以上1未満のランダムな数字
//  }

// #18
//  {
//   const d = [2021,7,31];
//   console.log(d.join('/'));

//   const t ='17:08:24';
//   console.log(t.split(':'));

//   const[hour,minute,second] = [t.split(':')]
//   console.log(hour);
//   console.log(minute);
//   console.log(second);
//  }

// #17
//  {
//    const str = 'hello';
//    console.log(str.length);
//    console.log(str.substring(2,4));
//    console.log(str[1]);
//  }

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