/* react에서도 자주 쓰이니까 잘 봐둬 */
/* colors2 안에 colors를 넣고, 그 colors2를 다시 colors3에 넣고... 아앜 */
const colors = ["red", "green", "blue"];
const colors2 = [...colors, "black"]; /* ...전개연산자, 스프레드 연산자 */
console.log(colors2);
const colors3 = ["gray", ...colors2]; /* ...전개연산자, 스프레드 연산자 */
console.log(colors3);
let dept1 = [10, 20, 30];
let dept2 = [40, 50, 60];
let dept3 = [...dept1, ...dept2];
console.log(dept3);

let dept = {
  deptno: 10,
  dname : "개발부",
  loc : "제주",
};

let emp = {
  empno : 7466,
  enmae : 'king',
  hiredate : '2022-05-17', /* 콤마를 맨뒤에 붙인다. 뒤에 더 추가 할 수도 있으니까 잊지 말자는 의미로 */
};

let obj3 = {...dept,...emp};
console.log(obj3); /* 첫번째 사원정보와 두번째 사원정보가 같이 찍힌다. */

let obj4 = {...emp, empno : 7800, ename :'john', hiredate: '2000-11-28'}
console.log(obj4);
/* 전개연산자 spread 는 react 할 때 자주 사용하니까 잘 익혀두장 
   배열구조, 복합데이터, 클래스타입을 공부해야 하는 사항이다.
*/

let depts = [
  {deptno:10, dname:'지국총무부', loc:'인천'},
  {deptno:10, dname:'개발부', loc:'제주'},
  {deptno:10, dname:'기획부', loc:'부산'},
]

let depts2 = [...depts, {deptno : 40, dname : '인사부', loc:'서울'}]
console.log(depts2);
let depts3 = [...depts2, {deptno : 50}];
console.log(depts3);

/* 
커뮤니티가 잘되어있다.
: npm 이 많다.
 사용할 수 있는 라이브러리가 많다.
 */