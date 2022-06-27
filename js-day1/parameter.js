// 매개변수의 기본값은 무조건 undefinded임
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨

function hap(a, b){
  console.log(a + ', ' + b);
  return a + b;
}
hap();

function hap2(a=1, b=1){
  console.log(a+ ', ' + b);
  return a + b;
}
hap2();


console.log('----------------------------------------');

function hap3(...numbers){
  console.log(numbers);
}
hap3(1,2,3,4,5,6,7);

function hap5(a,b,...numbers){
  console.log(numbers);
}
hap5(1,2,3,4,5,6,7);
// 아규먼트 객체에 저장된다.