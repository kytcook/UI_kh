/* Spread */
// 리액트에서 우선순위가 있는 문법. 
// 리액트는 데이터 변경이 있는 경우에만 새로 렌더링을 함. - 효율적이고, 합리적, 속도가 빠름.
// Array에 추가하기
const colors = ["red","green","blue"];
// 기존의 배열이 새로운 배열로 복제된다. - 리액트에서 상태변화 감지 -> 자동렌더링
// 기존의 돔과 가상 돔을 비교해서 데이터 변경사항 발생 - 자동렌더링
const colors2 = [...colors, "black"];
const colors3 = ["white",...colors];
console.log(colors2);
console.log(colors3); 
// 리액트에서는 상태를 관리하는 훅이 있다. 그 훅이 useState / hook = 함수
// useState훅에서는 원본을 바꾸지 않아야 한다.(컨벤션) -> 복사본을 가져다

let dept = {// 객체이다.
  deptno : 10,
  dname : "총무부",
  loc: "인천"
}

let emp = {
  empno : 7566,
  ename : "scott",
}

let newObj = {...dept, ...emp};
console.log(newObj);; // 두 개의 객체가 합쳐졌다.

let newObj2 = {...emp, empno: 7499, ename: 'king'};
// 객체일때(중괄호)는 기존의 emp객체를 덮어 씌운다.
console.log(newObj2);
// useState({}), useState([]), useState([{}])
let depts = [
  {deptno:10, dname:"지국총무부", loc:"인천"},
  {deptno:20, dname:"개발 부", loc:"서울"},
  {deptno:30, dname:"인사", loc:"울산"},
]

let depts2 = [...depts, {deptno : 40, dname:"운영부", loc:"제주"}];
console.log(depts2);//객체일때는 덮어씌어지지만, 대괄호(자료구조)형태일 때는 추가가 된다.
let depts3 = [...depts, {deptno : 50}];
console.log(depts3);//
