/*
  return을 명시적으로 하지 않으면 자동으로 undefined가 반환
  함수 중간에 사용하면 함수가 종료된다.
*/

function hap(a,b) {
  console.log(a+b);
}


// 함수형 프로그래밍 방법 - 컴파일을 하지 않는다.
// 리턴을 따로 명시하지 않으면 자바스크립트에서는 자동으로 undefined를 반환한다.
// 띄어쓰기나 오탈자가 나오지 않게 주의한다.
// 오류가 나오지 않더라도 결과가 아예 안나오는 경우도 있다. 
let imsi = hap(2,3);
console.log(imsi);

function print2(num){
  if(num < 0) return;
  console.log(num);
}
print2(-5);
print2(5);

// App
// UI에서 보면 입력 - 처리 - 출력
/*
함수
  특정한 일을 수행하는 코드집합.
  유지보수, 재사용성, 가독성
  자바와 같은 void가 없다. return의 유무에 따른 값출력(undefined)
  함수도 오브젝트이므로 주소번지를 갖게 되고 함수가 있는 곳은 다른 곳이다.
  함수의 이름은 함수를 참조한다.
*/