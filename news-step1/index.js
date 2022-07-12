const content = document.createElement('div')
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
/* fetch를 통한 callback */
/* 
  <ul> 직관적이다. 반복되는 코드를 일일이 열거 나열해야 한다.
    <li><a href="#">a</a></li>
    <li><a href="#">b</a></li>
    <li><a href="#">c</a></li> 
  </ul>
*/

fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
.then(response => response.json())// callback
.then(result => { // callback
  // 자바스크립트로 태그를 만들기
  const ul = document.createElement("ul");
  for(let i=0;i<10;i++){
    const li = document.createElement("li");
    li.innerHTML = result[i].title;//텍스트 노드추가
    ul.appendChild(li);
  }
  document.getElementById("root").appendChild(ul);
})
.catch(error => console.log('error', error)); /* callback 에러가 발생할 때 */

/* 
 돔을 생성해서 root라고 정의했던 디브 안에 append.Child에 담아와서 
 뿌릴 수 있다.

 ---------------------------------------------------------------
  220712
  dom방식이 아니라 문자열만 가지고 ui를 만든다
  문제제기
  DOM 구성을 코드적으로 작성하니 태그들의 위치, 위계, 구조가 명확하게 보이지 않는다!!!

  어떻게 하면 개선할 수 있지??
  해결 방법은 DOM API자체를 최대한 사용하지 않는다.
  예컨데 createElement, appendChild, innerHTML 따위를 말함
  
  DOM API를 최대한 활용하지 않는다.

*/