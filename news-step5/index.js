// 페이징 처리에 필요한 변수 선언하기
// 페이징 처리는 react에서도 반복적으로 사용된다. 제대로 관찰스관찰스
//  insert here - currentPage -> react에서는 redux
const store = {
    currentPage : 1
  }

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
      //insert here - 페이징 처리를 고려한 for문으로 변경
      for(let i=(store.currentPage - 1) * 10; i < store.currentPage * 10; i++){
      // for(let i=0;i<30;i++){
        newsList.push(`
          <li>
            <a href='#${result[i].id}'>
              ${result[i].title}(${result[i].comments_count})
            </a>
          </li>
          `);  // #을 빼면 안돼
        } ///////////end of for
          newsList.push("</ul>");
          // inser here [이전페이지:현페에서-1를 함] - #/page/이동할 페이지 번호
          // 삼항연산자 | 조건문?참일때:거짓일때
          // 삼항연산자 | 조건문?현페-1: 1
          // inser here [다음페이지:현페에서+1을 함] - #/page/이동할 페이지 번호
          newsList.push(`
          <div>
            <a href="#/page/${store.currentPage > 1 ? store.currentPage -1 : 1}">이전페이지</a>
            <a href="#/page/${store.currentPage + 1}">다음페이지</a>
          </div>
          
              `)
        // container.innerHTML = "111";// 왜 111출력이 안될까?? - html쪽에 defer를 추가하지 않음.-  but why? - 
        container.innerHTML = newsList.join("");
    }).catch(error => console.log('error', error));// 에러가 발생했을 때 던져줄 곳이 필요하다. 사용자에게 굳이 보여지는것은 좋지 못하다. 해커들에게 유용한 정보를 줄 수 있다.
}////////////////////////////end of getNewsList()

  const requestOptions2 = { 
    method: 'GET',
    redirect: 'follow'
  };

  function getNewsContent(){
    const id = this.location.hash.substring(1); // #31914288에서 첫번째 자리 #은 잘라내고 쓴다. 샵이 있어야 해쉬값이 된다.
    fetch(CONTENT_URL.replace("@id", id), requestOptions2) // url을 위에 변수로 담아서 따로 뺏다. "https://api.hnpwa.com/v0/item/@id.json"
      .then(response => response.text())
      .then(result => {
        container.innerHTML = `
         <h1>${result.title}</h1>
         <div>
            <a href="#/page/${store.currentPage}">목록으로</a>
         </div>
        `;
      })
      .catch(error => console.log('error', error));
  }

  function router() {
    const hashValue = location.hash; // #/page/2 - 몇 번째 부터 자르지?? 7번째부터 자르기
    // http://localhost:5000/index.html# - 디폴트 처음일 때
    // http://localhost:5000/index.html#3214567
    if(hashValue === "") {
      getNewsList();
    } 
    // #/page/2 숫자2(currentPage)는 이동해야 되는 이전페이지 번호임
    // "http://localhost:5000/index.html#/page/2"가 있는거야? 스트링 객체 찾기 indexOf()
    else if(hashValue.indexOf("#/page/" >= 0)){
      // hashValue.substring(7);// 문자열
      // 타입을 따져야 한다. 현페 = Number(x)
      store.currentPage = Number(hashValue.substring(7));
      console.log(store.curentPage);//상세보기 전에 페이지 정보를 확인
      getNewsList();
    }
    else { //컨텐트로 가는 케이스
      getNewsContent();
    }
  }/////////////////////end of router
  window.addEventListener("hashchange", router);
  router();