/*
 함수
 함수도 객체이다. - 주소번지를 가지고 있다.
 메소드오버로딩, 오버라이딩 지원없다. 
 -> 같은이름 사용 불가하다. 같은 이름의 함수를 중복정의하지 않는다. 조심
*/
function hap(a, b){
  const result = a + b;
  return a+b;
}
console.log(hap(1,3));
console.log('---------------------------------------------------');

let lastName    = '김';
let firstName   = '오예스';
let fullName    = `${lastName} ${firstName}`;
let lastName2   = '이';
let firstName2  = '순신';
let fullName2   = `${lastName} ${firstName}`;

function namePrint(firstName, lastName) {
  return `${lastName} ${firstName}`; //
  return `${firstName} ${lastName}`; //
}
console.log(namePrint(firstName,lastName));
console.log(namePrint(lastName,firstName));
// total변수도 hap과 동일한 메모리 주소를 갖는다.
const total  =  hap;
console.log(hap(2,3));
console.log(total(2,3));