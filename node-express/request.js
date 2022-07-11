const express = require('express');
const app = express();

// nodejs로 부터 요청객체와 응답 객체는 주입 받음
app.get("/kh/:id", (req,res) => {
  console.log(req.param); /* 요청객체.params */
  console.log(req.params.id); /* 아이디 값을 가져온다 */
  console.log(req.query); /* 쿼리스트링을 가져온다. */
  console.log(`mem_id: ${req.query.mem_id}, mem_pw : ${req.query.mem_pw}`); /* 쿼리스트링의 키값이 되어야 한다 반드시 */
});

/* 
  포트번호를 여러번 호출하면 에러가 날 수 있다
  이런 경우 다른 포트번호 값을 준다.
 */
app.listen(3001); 

/* 
  http://localhost:3001/kh/tomato -> id값은 tomato

  이렇게 가져올 수 있는것은 nodejs기반으로 가져오는것이다.
  순수 자바스크립트 기반으로는 힘들다.
  http://localhost:3001/kh/tomato?mem_id=apple&mem_pw=123 -> 

*/