/*
 * 구조분해(destructuring assignment)할당
 * 배열이 객체의 속성 혹은 값을 해체하여 그 값을 변수에 각각 담아사용하는 표현식
 * 이것도 spread와 같이 react에서 자주 사용하는 식이다.
 * 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.
 * 최근에는 화면뷰 템플릿이 너무 많아져서 2가지만 UI템플릿 배워서 도전해보기
 */
const colors = ["green", "wine", "deepblue"];
const colors1 = colors[0];
const colors2 = colors[1];
const colors3 = colors[2];
// console.log(color1, color2, color3);

const [c1, c2, c3] = colors; /* 구조분해 할당 */
console.log(`구조분해 할당 : ${c1} ${c2} ${c3}`);

// 복합 데이터 객체도 가능한가요?

const dept = {
  deptno: 10,
  dname: "개발부",
  loc: "서울",
};

const { deptno, dname, loc } = dept;
console.log(deptno, dname, loc);
console.log(dept);
