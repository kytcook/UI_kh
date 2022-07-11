const express = require('express');
const app = express();

app.get("/", (req,res,next) => {
  console.log("first");
  // return;/* 다음 응답까지 받지 않으려면 return을 넣어서 중지시킨다. */
  next();
});

app.get("/", (req,res) => {
  console.log("second");
  // next();/* next가 있어야 응답이 다음 코드로 넘어간다 */
res.send('응답처리...');
});

app.get("/", (req,res) => {
  console.log("third");
});

app.listen(3000); // 포트번호 3000