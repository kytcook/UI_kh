// 변수 선언시 var를 사용하지 않는다 let, const
// 웹서비스시 비동기적 처리위해서 제공하는 객체
const ajax = new XMLHttpRequest(); // 객체생성 - 비동기통신객체
// 해커뉴스에서 제공하는 뉴스 정보 수집
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json' // I/O통신 비동기통신객체 -> dead lock, crash
// open함수는XMLHttpRequest에서 제공하는 함수
// 1. GET or POST, 2. URL - 데이터셋
ajax.open('GET', NEWS_URL, false) // true : 동기적으로 처리, false:비동기처리
ajax.send(); // 전송이 일어난다.
// console.log(ajax.response);
// URL로 해커뉴스 서버에 요청을 했을 때 응답값을 받을 수 있다.
// console.log(ajax.response);
const newsFeed = JSON.parse(ajax.response); // 리스판스를 통해서 정보들을 받아낸다.
const ul = document.createElement('ul')
for (let i = 0; i < 5; i++) { 
  const li = document.createElement('li');
  li.innerHTML = newsFeed[i].title;
  ul.appendChild(li);
  // console.log(newsFeed[i].title); // 여러가지 정보중 타이틀에 대한 정보만 꺼낸다
}
// defer가 있으먄 비동기적으로 js 처리가 된다.
// 그러니까 js가 root보다 먼저 있어도 읽을 수 있다.
// defer가 아니면 root 다음에 js를 두라.

/* 
  HTML안에 CSS 
  - 인라인뷰는 안됑
  - 비동기적으로 처리
  - 쓰레드 고민
  - 
 */

document.getElementById('root').appendChild(ul);


/* https://api.hnpwa.com/v0/news/1.json */