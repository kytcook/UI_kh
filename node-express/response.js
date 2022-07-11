const express = require('express');
const app = express();

// nodejs로 부터 요청객체와 응답 객체는 주입 받음
app.get("/kh/:id", (req,res) => { /* request */
  console.log(`mem_id: ${req.query.mem_id}, mem_pw : ${req.query.mem_pw}`); /* 쿼리스트링의 키값이 되어야 한다 반드시 */
  res.send('<font color=red>${req.query.mem_id}</font>'); /* 변수로 받는다 */
  // res.send('<font color=red>${req.query.mem_id}</font>'); 같은 요청건에 대해서 같은 응답send를 2번 할 수 없다.
  res.json({"mem_id":"apple"});
  return;
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