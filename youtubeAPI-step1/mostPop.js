const ajax = new XMLHttpRequest();
let content = '';
const MOST_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBTwWoYZPb-scjc5J4nTEnuee6FOH52bWI"; /* 저장한 포스트맨의 유튜브 URL 저장 */
ajax.open("GET", MOST_URL, false);
ajax.send();

/* console.log(ajax.response); */
const result = JSON.parse(ajax.response);// {...items:[{snippet:...}]}
const items = result.items;// Array.에 대한 구조체를 갖게 되었다.
console.log(items.length);// 25 item배열의 길이만큼
content += `<ul class = 'videos'>`
for(let i=0;i<items.length;i++){ 
  content += `<li class = 'container'>`/* ul태그안에 li가 담긴다 */
  content += `<div class = 'video'>`/* ul태그안에 li가 담긴다 */
  content += `<img class='thumbnail' src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/>`;
  content += `<div>`; /* 반복문 안쪽에 넣어서 순서가 주루룩 */
  content += `<p class='title'>${items[i].snippet.title}</p>`;
  content += `<p class='channel'>${items[i].snippet.channelTitle}</p>`;
  content += `</div>`;
  content += `</div>`;
 /*  rhum네ㅣ이름 기억하곤ㄴ\.vido 부상 천재 아냐!""*/
}
content += `</ul>`;
document.querySelector('#root').innerHTML = content;