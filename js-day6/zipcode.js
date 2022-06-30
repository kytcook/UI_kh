function dongInput(){
  let dong = prompt('동이름을 입력하세요')
  if(dong === null || dong.length === 0){
    alert("동이름을 입력하세요.");
    return;
  }else {
    action(dong);
  }
}

// 사용자가 선택한 정보를 텍스트필드에 자동 출력하기
function choice(zipcode, address) {
  document.querySelector('#zipcode').value = zipcode;
  document.querySelector('#address').value = address; // 파라미터로 넘어온 값을 주면 자동으로 꽂힌다.
    // 값이 선택되면 조회 결과 화면 지워주세요.
    // insert here

}

function action(dong){
  // 역 이름 추가 검색시 밑으로 붙는것 말고 초기화
  document.getElementById("root").innerHTML = "";// 두번 세번 클릭해도 새로 출력이 된다.
  console.log('사용자가 입력한 동이름 :' + dong);
  const ajax = new XMLHttpRequest();
  const ZIPCODE_URL = 'http://localhost:8000/json/jasonZipCodeList.jsp?dong='+dong;//I/O 통신 ->  dead lock , crash
  
  ajax.open('GET', ZIPCODE_URL, false);//true:동기적처리, false:비동기처리
  ajax.send();// 전송이 일어난다
  const address = JSON.parse(ajax.response);
  const table = document.createElement('table');
  table.setAttribute('border','1');
  table.setAttribute('width','400');
  const htr = document.createElement('tr');
  const th1 = document.createElement('th');
  th1.appendChild(document.createTextNode('우편번호'));
  const th2 = document.createElement('th');
  th2.appendChild(document.createTextNode('주소'));
  htr.appendChild(th1);
  htr.appendChild(th2);
  table.appendChild(htr);
  console.log('13'+address.length);
  for (let i = 0; i < address.length; i++) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const a = document.createElement('td');
    a.href = "javascript :choice('"+address[i].zipcode+"','"+address[i].address+"')";//싱글이나 더블을 붙이지 않으면 변수취급 - 앵커태그가 함수를 넘김(?)
    td.setAttribute('width','90');
    a.appendChild(document.createTextNode(`${address[i].zipcode}`));
    td.appendChild(a);
    const td2 = document.createElement('td');
    td2.appendChild(document.createTextNode(`${address[i].dname}`));
    tr.appendChild(td);
    tr.appendChild(td2);
    table.appendChild(tr);
  }
  document.getElementById('root').appendChild(table);
}