const aa = new Promise(
    (resolve, reject) => {
        resolve(console.log("프라미스 이행"));
    });

aa.then(() =>{
    console.log("프라미스 실행 완료");
});



// const aa = new Promise(
//     (resolve, reject) => {
//         resolve("프라미스123");
//     });

// aa.then((result) =>{
//     console.log(result);
// }); //프라미스123

// const wait1seconds = new Promise(
//     (resolve, reject) => {
//         console.log("시작한다")
//         //1초 뒤에 콘솔에 찍습니다.
//         setTimeout(
//             () => {
//                 resolve(console.log("1초뒤에 찍는다"))
//             },1000 );
//     }
// );



// wait1seconds.then(() =>{
//     console.log("찍고난후");
// });

// const aa = new Promise(
//     (resolve, reject) => {
//         reject(console.log("error!!!")); //이런식으로 reject는 에러를 처리할 수 있음
//     });

// aa.then(() =>{
//     console.log("프라미스 실행 완료");
// });



// const wait1seconds = new Promise(
//     (resolve, reject) => {
//         reject('errer!!');
//     }
// );

// wait1seconds.then(() =>{
//     console.log("프라미스 이행완료");
// }).catch( (err) =>{
//     console.log(err);
// })