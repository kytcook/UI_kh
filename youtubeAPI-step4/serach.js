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
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

/*
const videoList = [];
const items = result.items;
console.log(items.length);
videoList.push(`<ul class='videos'>`);
for(let i=0; i<items.length; i++){
}
videoList.push(`</ul>`);
document.querySelector('#root').innerHTML = videoList.join("");
*/
  document.querySelector('#root').innerHTML = '111';
} ////////end of searchList
