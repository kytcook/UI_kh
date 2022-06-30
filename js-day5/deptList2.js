const ajax = new XMLHttpRequest();
// 오라클 서버를 경유해서 가져오는 대신에 해커뉴스에서 제공하는 데이터셋을
// 활용해서 dom(html요소-활용-> React수업 선수학습)을 조작해 보자.
const NEWS_URL = 'http://localhost:8000/json/deptToJSON.jsp';//I/O 통신 ->  dead lock , crash

ajax.open('GET', NEWS_URL, false);//true:동기적처리, false:비동기처리
ajax.send();// 전송이 일어난다
// 서버로 부터 응답받은 내용을 출력하기
console.log(ajax.response);
const depts = JSON.parse(ajax.response);
console.log('size : ',depts.length);
const table = document.createElement('table');
for (let i = 0; i < depts.length; i++) {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  const val = `<tr><td>${depts[i].deptno}</td><td>${depts[i].dname}</td><td>${depts[i].loc}</td></tr>`;
  td.appendChild(document.createTextNode(val));
  tr.appendChild(td);
  table.appendChild(tr);
}

document.getElementById('root').appendChild(table);