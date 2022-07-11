/* function hap(a, b, c) {
  // hap이 호출되면 어떤 문장을 실행할거야?
  if (a > 0 && b > 2 && c > 5) {
    return a+b+c; // 내가 만든 기능에 대한 값을 보여준다. 기능에 부합하는 파라미터 값일 때
  }
}
//hap(2, 3, 6);
console.log(hap(2, 1, 6))
 */


function hap2(a=1, b=1){
  console.log(a + ', ' + b);
  return a + b;
}
//hap2(2, 3);
console.log(hap2(2, 4));

console.log("-----------------");
console.log(hap2(4,6));