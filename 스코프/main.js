let ename = "scott"; // 전역스코프
// 자바스크립트에서는 함수 내부에 또 다른 함수가 올 수 있다.
// 함수 선언 방법 2가지가 있다.
// 함수문
// 함수식

function methodA(){
  let i = 5;
  console.log(ename);/* 함수안에서 전역변수 scott을 호출할 수 있나? 함수를 정의한것만으로 스코프가 만들어진 것이 아니다.*/ 
  console.log(i);


  // insert here - before
  innerMethod();
  /* 중복스코프
  아직 함수가 만들어져 있지 않은데(선언이 먼저인데) 호출이 된다.? -> 호이스팅 
  함수안에 중복 함수가 있을 수 있다.
  - 호이스팅 : 변수를 미리 만들어두고 호출한다.
  */
  innerMethod(); /* 유령인것처럼 보이지만, 호이스팅에 의해서 끌어올려져서 만들어졌기 때문에 호출이 가능하다 */
    //함수문
    function innerMethod() {
     let j = 10;
     console.log(i); /* 바깥쪽에서 선언한 i를 호출할 수 있을까 */
    }
  // insert here - after
  // methodB();
  // 함수식일 때 befor
} // 함수식 - 함수선언은 제일먼저 해놓고 사용하는게 좋다.
  const methodB = function() {
    console.log('methodB');
  innerMethod(y);/*  */
}
console.log(methodB);


methodA();
console.log(i);   /* i변수의 함수스코프는 바깥에서 호출이 되나 */


/* 
  웹서비스에서는 메인메소드가 필요하지 않다.
  
  스코프에는 3가지가 있다.
  - 글로벌 스코프 : member variable, global variable(전역변수) 선언이 됐을 때 만들어짐.
    > 애플리케이션이 실행되면 즉시 만들어지고 종료되면 사라짐. 유지

  - 함수   스코프 : 함수안에서 정의됨 main.ival, sub.ival(지역변수)
    > 함수가 만들어 졌다고 해서 스코프가 생긴다|아닌데

  - 블록   스코프 : 블록을 진입했을 때 생성됨 { 좌중괄호 우중괄호 }
    > for(int i; 1!=1;) 블록이 만들어지고 안으로 진입이 됐을 때, 블록스코프가 생성이되고
    해당하는 스코프도 사라진다. - 라이프사이클
    init() -> service() -> destroy() 주체가 시스템이다. 톰캣과 같은 서버가 회수해간다. 자바=candydate 자원반납.

*/