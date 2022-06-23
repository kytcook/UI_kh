console.log('연습하기');

/* 
  function 함수이름(매개변수1, 매개변수2, ...) {
    함수가 호출되었을 때 실행하고자 하는 실행문;
  }
*/

function addNum(x, y) { // 함수 addNum이라는 이름에 파라미터 값을 x, y (함수가 실행되는데 필요한 매개변수)
  console.log(x + y); // 함수가 호출되면 실행이 된다.
}
addNum(3, 5);

function add(a, b) {
  return a + b;
}
//console.log(add(3, 6));
add(3, 7); // 이 상태로는 콘솔에 출력이 안됨. 왜? 콘솔에 출력할 수 있게 선언을 해주지 않았기 때문에