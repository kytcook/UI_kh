const btns = document.querySelectorAll('ul li');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    console.log(i); // 0 1 2 //일급함수 : 함수를 변수값처럼 사용한다.
  }) 
}

// 호이스팅 문제를 즉시실행함수로 해결함
for (var x = 0; x < btns.length; x++) {
  ((index) => {
    btns[x].addEventListener('click',( ) => {
      console.log('x => ', index);
    }); // 호이스팅 문제의 해결과 방안
  }) (x);
}
// ES5 - var - 전역변수와 지역변수
// ES6 - Let변경
// 호이스팅 - 기술면접 단골질문
// 블록 안에서 선언된 지역변수가 코드 블록 밖으로 나와
// 강제로 전역변수화 됨
/* 가장좋은  건 경험 */
/* 
  JavaScript는 함수의 코드를 실행하기 전에 함수 선언에 대한 메모리부터 할당합니다. 덕분에 함수를 호출하는 코드를 함수 선언보다 앞서 배치할 수 있습니다.
  변수를 선언하기 전에 먼저 초기화하고 사용할 수 있는 것입니다.

*/