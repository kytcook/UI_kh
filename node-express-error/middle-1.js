const express = require('express');
const app = express(); // 객체생성(heap에, 함수 호출stack memory(함수의 호출 순서대로 first in last out))

app.get("/",(req,res,next) => {// get에는 all/user/get/post가 올 수 있다. // next가 있어야 다음 middleware로 진행할 수 있다.
  console.log('first');
  res.send('hello');
  if(true) return; // return이 있으면 첫번째 미들웨어를 탈출하면서 연결이 되지 않는다.
  next(); // next()가 없으면 다음 미들웨어로 진행되지 않는다./ 일급함수이다.
},
(req,res,next) => {
  console.log('first2');
  next();
});

app.get("/:id",(req,res,next) => {
  console.log('middile');
  res.send('Hello express!!!');
});

const port = 5000; // 지정해준 포트[number]와 연결해준다
app.listen(port, () => {
  console.log(`The Express server is listening at port: ${port}`);
});

