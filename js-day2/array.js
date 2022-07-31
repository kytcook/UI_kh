// 배열
// 연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조
const colors = ["green", "wine", "deepblue"];
console.log(colors);

// 요즘 현장 실습이 이크마스크립트6 기준의 문법이 적용되고 있다.
// arrow function
colors.forEach((colors) =>
  console.log(colors)
); /* forEach : 전체처리가 가능하다. */

console.log("------------------------arror-------------------------------");

colors.forEach(function (color) {
  console.log(
    `element ==> ${color}`
  ); /* `백틱기호는 문자열을 표시하기 위한 기호? $는 백틱안에서 변수를 불러오기 위한 기호 */
});

console.log("------------------------------------------");

colors[1] = "black";
colors.map((color) => console.log("map", color));
// clg + space엔터 = console.log(object))
// 배열 선언
const copy = [];

for (let i = 0; i < colors.length; i++) {
  copy.push(colors[i]);
  console.log(`copy[${i}] : ${copy[i]}`);
}

colors.forEach(function (item) {
  copy.push(item);
  console.log(`copy : ${copy}`);
});

function add(a, b) {
  const result = a + b;
  return result;
} /* function도 객체이다. 주소번지를 갖는다. */

const add1 = function (a, b) {
  const result = a + b;
  return result;
};

/* arrowfunction 화살표함수라고 말한다 •최신 */
/* 기존의 익명함수를 좀 더 쓰기 편하게 축약한 형태 */
const add2 = (a, b) => {
  /* 위와 같은 값을 출력하는 function이다. */
  const result = a + b;
  return result;
};

add(3, 4);
console.log(add(3, 4));
///////////////////////////////////////////////

const msg = (txt) => {
  return txt;
};
/* 내부로 전달되는 파라미터가 하나면 괄호는 생략 가능하다. */
const msg2 = (txt) => txt; /* 리턴, 예약어 조차도 생략이 가능하다. */

console.log(msg2("hello arrow function"));

/************************************************************
 * 자바와는 다른 문법들이니 연습을 해두자.
 * 배열을 자유자제로 다룰때까지 반복해서 연습해두기.
 * 배열을 쓰지 않고는 react를 쓸 수 없다.
 */
