const ajax = new XMLHttpRequest();
const MOST_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBTwWoYZPb-scjc5J4nTEnuee6FOH52bWI"; /* 저장한 포스트맨의 유튜브 URL 저장 */
ajax.open("GET", MOST_URL, false);
ajax.send();

console.log(ajax.response);