export class DeptVO { //  내보낼때 expert
  constructor(deptno, dname, loc) {
    this.deptno = deptno;
    this.dname = dname;
    this.loc = loc;
  }
  get getDeptno(){
    return this.deptno;
  }
  set setDeptno(value){
    this.deptno = value;
  }
  get getDname(){
    return this.dname;
  }
  set setDname(value){
    this.dname = value;
  }
  get getLoc(){
    return this.loc;
  }
  set setLoc(value){
    this.loc = value;
  }
}

const dvo = new DeptVO(10,'총무부','서울');
console.log(dvo.deptno);
dvo.setDeptno = 20;
console.log(dvo.getDeptno);
// Repl로 내부에서 확인 가능

/* 
  ES6부터 제대로 모양을 갖춰서 지원을 해준다.
  이제는 함수형의 시대 ~
  자바스크립 기반의 getter setter
*/

