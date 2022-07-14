/* 모든 코드는 직접 실행해보고 눈으로 확인하자~ */
/* 왜???왜?? 
   자바스크립트는 컴파일을 하지 않기 때문에 디버깅이 힘들다. : 문법체크, 타입체크를 하지 않는다.
   불안정하다.
*/
const a = document.querySelector("a");

a.addEventListener('click', (event) =>{
  // a태그가 링크가 걸려 있지만 아래 코드가 있어서 링크된 페이지로 이동이 안됨.
  // 파라미터로 event객체가 주입이 되었다.
  // 개발자모드에서 보면 클릭할때마다 콘솔에 1씩 증가함
  event.preventDefault(); // 페이지 이동을 막아줌.
  console.log("네이버클릭");;
})

const box = document.querySelector(".box");
box.addEventListener('mousemove', (event) => { // mousemove : 박스안에서 마우스가 움직일 때 위치를 출력
  console.log(event);
  // ui개발을 할 때 좌표값의 정보를 활용할 수 있다.
  console.log(`${event.pageX}`); // 개발자 모드에서 화면의 절대좌표를 보여준다
  console.log(`${event.pageY}`); 
  console.log(`${event.offsetX}`); // 박스클래스 안에서의 좌표를 표시해준다.
  console.log(`${event.offsetY}`); 
})