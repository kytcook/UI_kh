const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.getElementById("main");
const content = document.createElement('div');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
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
      container.appendChild(ul); // document.getElementById("main")를 container에 담았다.
        //document.getElementById("main").appendChild(ul);
    } 
    container.appendChild(ul);          //소스개선
    container.appendChild(content);     //소스개선
  })
  .catch(error => console.log('error', error)); //소스개선

  const requestOptions2 = { 
    method: 'GET',
    redirect: 'follow'
  };

  window.addEventListener("hashchange", () => {
    console.log(location.hash);
    const id = this.location.hash.substring(1); // #31914288 에서 첫 번째 자리 #은 잘라내고 나머지를 가져오는게 substring
    fetch(CONTENT_URL.replace("@id", id), requestOptions2) // url을 위에 변수로 담아서 따로 뺏다. "https://api.hnpwa.com/v0/item/@id.json"
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

  function router() {
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