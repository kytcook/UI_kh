// 인자 둘다 함수이다. resolve, reject이라는 함수
// 성공했다하면 성공의 수신을 프라미스 객체인 p가 참조하는 than이라는 메소드를 이용하면 성공했을 때 처리를 할 수 있다.

const p = new Promise((resolve, reject) => { // 성공하면 than으로 실패하면 catchg로 흘러간다
  setTimeout(() => {
    resolve('OK');
  }, 2000); 
  reject('Fail'); // catch가 받아준다.
});
p.then((ok) => {
  
  console.log('첫 번째 성공');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('두 번째 성공');
    }, 3000);
  }).then(function (ok){ // 성공했을 때(then) 실패했을 때(catch) 함수호출 : 기능구현, 처리 / 함수내부에
    console.log(ok);     // 캐
  })
}).catch((error) => {
  console.log(error);
})