const content = document.createElement('div')
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
/* fetch를 통한 callback */
/* 
  <ul> 직관적이다. 반복되는 코드를 일일이 열거 나열해야 한다.
    <li></li>
    <li></li>
    <li></li> 
  </ul>
*/

fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
.then(response => response.json())// callback
.then(result => { // callback
  const ul = document.createElement("ul");
  for(let i=0;i<10;i++){
    const li = document.createElement("li");
    li.innerHTML = result[i].title;
    ul.appendChild(li);
  }
  document.getElementById("root").appendChild(ul);
})
.catch(error => console.log('error', error)); /* callback 에러가 발생할 때 */

/* 
 돔을 생성해서 root라고 정의했던 디브 안에 append.Child에 담와서 
 뿌릴 수 있다.
 */