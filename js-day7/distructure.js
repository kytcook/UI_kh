const colors = ["red","green","blue"];
const color1 = colors[0];
const color2 = colors[1];
const color3 = colors[2];
console.log(color1, color2, color3);

const [c1, c2, c3] = colors; //구조분해 할당이 일어나서 이 값들이 다 할당이 된다.
console.log(colors);
console.log(c1,c2,c3);

// react에서는~
// react - 일급함수 - 구조분해할당 - 부모태그에서 하위태그로 일급함수를 전달 할 수 있따.
// 재사용성을 위해서 코드를 분해해서 사용하는 경우가 많다.
[c1, c2, c3].map(function(item, i){// 이런꼴이 많이 나온다..// 두 번째 파라미터가 인덱스값 //ex- youtube, - json
  console.log(item, i);// 인덱스값이 리액트에서 중요해?
});

// useState({})
// useState([])
const dept = { // 오브젝트 꼴이다.
  deptno : 10,
  dname:"개발팀",
  loc:"대구"
}

const {deptno, dname, loc} = dept;
console.log(deptno, dname, loc);