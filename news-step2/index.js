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
  .then(result => {
    console.log(result);
    const ul = document.createElement("ul");
    for(let i=0;i<10;i++){
      const div = document.createElement("div");
      div.innerHTML = `
        <li>
          <a href='#${result[i].id}'>
            ${result[i].title}(${250})
          </a>
        </li>
      `; 
      ul.appendChild(div.firstElementChild)
      document.getElementById("root").appendChild(ul);
        //document.getElementById("root").appendChild(ul);
    } 
    document.getElementById("root").appendChild(ul);
    document.getElementById("root").appendChild(content);
  })
  .catch(error => console.log('error', error));

  const requestOptions2 = { 
    method: 'GET',
    redirect: 'follow'
  };

  window.addEventListener("hashchange", () => {
    console.log(location.hash);
    const id = this.location.hash.substring(1); // #31914288 에서 첫 번째 자리 #은 잘라내고 나머지를 가져오는게 substring
    fetch("https://api.hnpwa.com/v0/item/@id.json".replace("@id", id), requestOptions2)
      .then(response => response.json())
      // callback
      // .then(result => console.log(result))
      .then(result => {
        const title = this.document.createElement("h1");
        title.innerHTML = result.title;
        content.appendChild(title);
      })
      .catch(error => console.log('error', error));
  });


/* 
  라우터에서 화면 전환하는 걸 구현해 본다.
  뉴스 내용 보기를 화면 전환을 통해서 재구성해 보기
  조건에 따라 화면 전환이 일어나야 하므로 조건문에
  함수 호출을 통해서 이 문제를 해결해 본다.
  무엇으로 기준할 것인가?

  글목록의 링크는 #이었음. 그러면 location.hash에 #이 들어왔음
  그러면 이것으로 어떤 참 거짓을 나눌 수 있지? 0이면 false 나머지는 모두 true
  location.hash에 #만 들어오면 빈값을 반환함 ("")
  첫 진입일때는 getnewsList호출하고,
  해시값이 존재하면 getNewsContent호출한다.
*/  
  function router() {
    // console.log(location.hash);#3214567 뭘 기억?? 페이지의 특성은 변한다.
    // 1페이지를 보고있을 때 3페이지를 보고 있을 때, 
    // 페이지라는 정보는 언제 어디서 사용할까??
    // 한 페이지에 10개씩 보여준다. 나눠져있다.
    // 글 목록화면에서 실제 페이징이 일어난다.
    // 목록으로btn -> 어떤 페이지를 보여줘야 하나?? -> 1page or 2page 후자 -> getnewsList호출이 되어야 한다.
    // ??전역변수 ->
    // 커런트페이지 ->
    // 공유 -> static, singleton : 공유되는 자원들을 하나로 묶어둔다 -> js에서는 : 리덕스
    // ㅋㅋ

    const hashValue = location.hash;
    // 첫 진입이면
    if(hashValue === "") {
      getNewsList();
    } else{
      getNewsContent();
    }
  }/////////////////////end of router

  window.addEventListener("hashchange", router);
  router();