function handleEnter(){
  alert(event.keyCode)
  if(event.keyCode ===13) // 키를 눌렀을 때 13번이면 Enter코드값
    console.log('엔터 쳤을 때');
    searchList();
  }
}
function searchList() {
  const query = document.querySelector('.input').value;
console.log('사용자가 입력한 검색어 : ' + query);
const ajax = new XMLHttpRequest();
let content = '';
const MOST_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBTwWoYZPb-scjc5J4nTEnuee6FOH52bWI"; /* 저장한 포스트맨의 유튜브 URL 저장 */
ajax.open("GET", SEARCH_URL, false);
ajax.send();
const videoList = [];
console.log(ajax.response);
const result = JSON.parse(ajax.response);
const items = result.items;
console.log(items.length);
videoList.push(`<ul class='videos'>`);
for(let i=0; i<items.length; i++){
  videoList.push(`<li class = 'container'>`);/* ul태그안에 li가 담긴다 */
  videoList.push(`<div class = 'video'>`);
  videoList.push(`<img src = '${items[i].snippet.thumbnails.medium.url}' alt='이미지'>`);
  videoList.push(`<div>`); /* 반복문 안쪽에 넣어서 순서가 주루룩 */
  videoList.push(`<p class='title'>${items[i].snippet.title}</p>`);
  videoList.push(`<p class='channel'>${items[i].snippet.channelTitle}</p>`);
  videoList.push(`</div>`);
  videoList.push(`</div>`);
}
videoList.push(`</ul>`);
document.querySelector('#root').innerHTML = videoList.join("");
} ////////end of searchList
