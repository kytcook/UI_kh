// 이 코드가 동기일까요 비동기일까요~?

/*
  함수문과 함수식 구분 ( 함수식은 호이스팅 X )
  앞에 문이 확정되기 전에는 그 다음 일을 수행할 수 없다.
  앞의 코드와 뒤의 코드가 종속성을 가지고 있다. 앞에서 코드를 완료하기 전에 뒤에 코드를 실행할 수 없는 상태
  -> 동기적 상황. 동기코드

  비동기 코드는 뭘까??
  log (1) ---->  1     1
  log (2) ---->  2     3
  log (3) ---->  3     2
  settimeout
*/

function add(x) { 
  // return x+2;
}

// 리턴값이 없다면 undefine 리턴 / 이 리턴을 받을곳은 어디인가? 리턴 a+b는 이미 지나갔다. 
// 비동기 - 프라미스
function account(a,b, cb) { // 파라미터에 콜백 함수를 담았다.
  setTimeout(() => {
    cb(a+b); // 리턴이 없을 때 undefined 전달
  }, 2000);
}
const result = add(3)
// console.log(result); /* 2번줄을 막아보면 undefind */
const tmep = result; 

const result2 = account(10,20, (result) =>{
  console.log('result : ', result);
}); /* undefine 출력이 담긴다. */
const temp2 = result2; //
console.log('temp2 : ', temp2);





/* 
  결정을 하려면 기준이 필요하다.
  7번을 실행되기전에 아래 9번이 실행될 수 있다 | 없다.


  1. js 컴파일을 하지 않는다.
  2. 순차적으로 진행된다.(예외 - 호이스팅)

  동기코드 & 비동기코드
  자바스크립트는 동기코드이다.
  but 비동기로 처리해야 하는 경우가 있다.(ex - ajax API : XMLHttpRequest)
  -> 두 동기를 구분할 수 있어야 한다.



 */