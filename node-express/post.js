const express = require('express');
const app = express();
app.use(express.json());
// nodejs로 부터 요청객체와 응답 객체는 주입 받음
app.post("/", (req,res) => { /* request */
  console.log(req.body); /* 쿼리스트링의 키값이 되어야 한다 반드시 */
});

app.listen(3000); 

/* 
  http://localhost:3000/kh/tomato -> id값은 tomato

  이렇게 가져올 수 있는것은 nodejs기반으로 가져오는것이다.
  순수 자바스크립트 기반으로는 힘들다.
  http://localhost:3000/kh/tomato?mem_id=apple&mem_pw=123 -> 

*/