const express = require('express');
const app = express(); // 객체생성(heap에, 함수 호출stack memory(함수의 호출 순서대로 first in last out))
/* 
  app.all과 app.use와의 차이점.
  all은 정해진 url에 대해서만 반응함.
  use는 tomato가 들어간 어떤 url에 대해서도 모두 반응함.
  curl http://loacalhost:5000/tomato?mem_id=abc
  curl http://loacalhost:5000/api?mem_id=abc
  curl http://loacalhost:5000/tomato/bbb
  curl http://loacalhost:5000/api/bbb
*/
app.all("/api",(req,res,next) => {// app에서 제공하는 all이라는 함수
  console.log('all');
  next(); 
});
app.use("/tomato",(req,res,next) => {// app에서 제공하는 all이라는 함수
  console.log('use');
  next();
});

app.get("/",(req,res,next) => {// get에는 all/user/get/post가 올 수 있다. // next가 있어야 다음 middleware로 진행할 수 있다.
  console.log('first2');
  next(new Error("error")); //에러를 던진다 - 사용자에게 에러 결과가 그대로 출력되는건 좋지 못하다.
  // 반드시 마지막 체인에서 에러 처리하는 코드를 추가해야 함.
}),

app.get("/:id",(req,res,next) => {
  console.log('middile');
  res.send('Hello express!!!');
});

app.use((error, req, res, next)=> { // 주입을 받는다.
  console.log(error); // 에러에 뭐가 담겨있는지 찍어보고
  res.status(500).send("서버관리자에게 문의 바랍니다."); // 500번은 서버에러를 강제
});

const port = 5000; // 지정해준 포트[number]와 연결해준다
app.listen(port, () => {
  console.log(`The Express server is listening at port: ${port}`);
});

