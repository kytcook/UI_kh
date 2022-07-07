function handleEnter(){
  alert(event.keyCode)
  if(event.keyCode ===13) // 키를 눌렀을 때 13번이면 Enter코드값
    console.log('엔터 쳤을 때');
    searchList();
  }
 
function searchList() {
const query = document.querySelector('.input').value;
console.log('사용자가 입력한 검색어 : ' + query);
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyBTwWoYZPb-scjc5J4nTEnuee6FOH52bWI&type=video`, requestOptions)
  .then(response => response.jason())
  // .then(result => console.log(result))
  .then(result => {
    const items = result.items;
    const videoList = [];
    videoList.push(`<ul class='videos'>`);
    for(let i=0; i<items.length; i++){
      videoList.push(`<li class = 'container'>`);/* ul태그안에 li가 담긴다 */
      videoList.push(`<div class = 'video'>`);/* ul태그안에 li가 담긴다 */
      videoList.push(`<img class ='thumbnail' src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'>`);
      videoList.push(`<div>`); /* 반복문 안쪽에 넣어서 순서가 주루룩 */
      videoList.push(`<p class='title'>${items[i].snippet.title}</p>`);
      videoList.push(`<p class='channel'>${items[i].snippet.channelTitle}</p>`);
      videoList.push(`</div>`);
      videoList.push(`</div>`); 
    }
    videoList.push(`</ul>`);
    document.querySelector('#root').innerHTML = videoList.join("");
  })
  .catch(error => console.log('error', error));

/*
const items = result.items;
console.log(items.length);
*/
  document.querySelector('#root').innerHTML = '111';
} ////////end of searchList
