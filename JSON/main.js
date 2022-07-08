import dept from './dept.json';
console.log(dept);
console.log(typeof dept);

const user = {
  name: 'scoot',
  age: 30,
  emails: [
    '이게머지',
    'test@hot.com',
    'nice@gmail.com',
  ] 
}

console.log(user.name);
console.log(user.age);
user.age = 15;
console.log(user['age']);
console.log(user.emails);
console.log(user['emails']);
console.log(user['emails'][0]);
console.log(user['emails'][1]);
const str = JSON.stringify(user);
console.log(str);/* 더블쿼테이션으로 묵여있따. */
console.log(typeof str);
const obj = JSON.parse(str);
obj['emails'][2] = 'good@hot.com';
console.log(obj);/* 싱글이 붙어있지 않다. */
console.log(typeof obj);
console.log('user', user);
console.log(typeof user);/* 타입체크를 하는 코드 - 객체Object이다. */