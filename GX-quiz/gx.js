//  해커뉴스 1단계 5단계 수업리뷰 
//  ul안에 추가하기
const items = document.querySelector('.items');
// 사용자가 입력한 운동명을 받기 위한 객체 찾기
const input = document.querySelector('.footer_input');
// 버튼 이벤트처리
const btn_add = document.querySelector('.btn_add');// +추가 버튼

function addItem() {
    // 추가하기
    const text = input.value;
    if(text === ""){
      input.focus();
      return;
    }
    // 아이템 만들기
    const item = createItem(text);
    items.appendChild(item);
    // 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'center'});
    input.value='';
    input.focus(); // 커서가 깜빡이게 해준다.
}

function createItem(text) {
  const item_row = document.createElement('li');
  item_row.setAttribute('class','item_row');
  const item = document.createElement('div');
  item.setAttribute('class','item_row');
  const name = document.createElement('span');
  item.setAttribute('class','item_name');
  // 클릭 후 innerHTML or innerText or textContent
  name.innerText = text;// name.textContent=text;
  const delbtn = document.createElement('button');
  item.setAttribute('class','item_delete');
  delbtn.innerHTML = '<i class = "fas fa-trash-alt"></i>';
  delbtn.addEventListener('click', () => {
    items.removeChild(item_row);
  });


  const itemdivider = document.createElement('div');
  name.setAttribute('class','item_divider');
  // div에 name넣기
  item.appendChild(name);
  // div에 삭제버튼 넣기
  item.appendChild(delbtn);
  // li태그에 div 넣기
  item_row.appendChild(item);
  // li태그에 구분선 추가하기
  item_row.appendChild(itemdivider);
  return item_row;
  }

  // 추가 버튼 눌렀을 때 item 추가하기
  btn_add.addEventListener('click',() => {
      addItem();
  })

  // 엔터 했을 경우도 동일하게 처리하기
  input.addEventListener('keypress', (e) => {
    // consle.log 쓱 지나가지 말기
    console.log('key ==> '+e.key);
    if(e.key === 'Enter'){
      addItem();
    }
  });

/* 

  createItem(스피닝 : 사용자가 입력한 운동명)
      <li class="item_row">
        <div class="item">
          <span class="item_name">스피닝??????매번달라져</span>
          <button class="item_delete" >
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
        <div class="item_divider"></div>
        <hr>
      </li>

--------------------------------------------------------

  ul안에 추가하기
  const items = document.querySelector('.items');
  // 사용자가 입력한 운동명을 받기 위한 객체 찾기
  const input = document.querySelector('.footer_input');
  // 버튼 이벤트처리
  const btn_add = document.querySelector('.btn_add');

  addItem(){
  // 추가하기
  const text = input.value;
  // 아이템 만들기
  const item = createItem(text);
  }

  function createItem(text) {
    const itemRow = document.createElement('li');
    item_Row.setAttribute('class','item_row');
    const item = document.createElement('div');
    item.setAttribute('class','item_row');
    const name = document.createElement('span');
    item.setAttribute('class','item_row');
    const delbtn = document.createElement('button');
    item.setAttribute('class','item_delete');
    delbtn.innerHTML = '<i class = "fas fa-trash-alt"></i>';
    delbtn.addEventListener('click,() => {
      items.removeChild(itemRow);
    });
    const itemDivider = document.createElement('div');
    name.setAttribute('class','item_divider');
    // div에 name넣기
    item.appendChild(name);
    // div에 삭제버튼 넣기
    item.appendChild(deleteBtn);
    // li태그에 div 넣기
    item_rwo.appendChild(item);
    // li태그에 구분선 추가하기
    itemRow.appendChild(itemDivider);
    return item_row;
  }

    // 추가 버튼 눌렀을 때 item 추가하기
    btn_add.addEventListner('click',() => {
           //추가하는 함수 호출하기
    })



*/
