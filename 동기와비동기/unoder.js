/* 비동기처리를 해보자 */
// javascript is synchronous. 디폴트는 동기적이지만 js 비동기적으로 만들 수 있다.
console.log(1);
setTimeout(() => {
  console.log(2);
},2000);
console.log(3);

/* 
  setTimeout(() => {console.log("두 번째 메시지")}, 3000);
setTimeout(() => {
  console.log("첫 번째 메시지")}, 5000
  );
setTimeout(() => {console.log("세 번째 메시지")}, 1000);


 */