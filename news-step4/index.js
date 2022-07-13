const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.getElementById("main");
const content = document.createElement('div');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
}; 

/* fetch를 통한 callback */

function getNewsList(){
  console.log('getNewsList 호출 성공');
  fetch(NEWS_URL, requestOptions)
    .then(response => response.json())// callback
    .then(result => {
      const newsList = [];
      newsList.push("<ul>");
      for(let i=0;i<30;i++){
        newsList.push(`
          <li>
            <a href='#${result[i].id}'>
              ${result[i].title}(${result[i].comments_count})
            </a>
          </li>
        `);  // #을 빼면 안돼
        newsList.push("</ul>");
        // container.innerHTML = "111";// 왜 111출력이 안될까?? - html쪽에 defer를 추가하지 않음.-  but why? - 
        container.innerHTML = newsList.join("");
      } ///////////end of for
    }).catch(error => console.log('error', error));// 에러가 발생했을 때 던져줄 곳이 필요하다. 사용자에게 굳이 보여지는것은 좋지 못하다. 해커들에게 유용한 정보를 줄 수 있다.
}////////////////////////////end of getNewsList()

  const requestOptions2 = { 
    method: 'GET',
    redirect: 'follow'
  };

  function getNewsContent(){
    const id = this.location.hash.substring(1); // #31914288에서 첫번째 자리 #은 잘라내고 쓴다. 샵이 있어야 해쉬값이 된다.
    fetch(CONTENT_URL.replace("@id", id), requestOptions2) // url을 위에 변수로 담아서 따로 뺏다. "https://api.hnpwa.com/v0/item/@id.json"
      .then(response => response.json())
      .then(result => {
        container.innerHTML = `
         <h1>${result.title}</h1>
         <div>
            <a href="#">목록으로</a>
         </div>
        `;
      }).catch(error => console.log('error', error));
  }

  function router() {
    const hashValue = location.hash;
    if(hashValue === "") {
      getNewsList();
    } else {
      getNewsContent();
    }
  }/////////////////////end of router
  window.addEventListener("hashchange", router);
  router();