// 클래스 - ES6에서 지원하게 됨
// 리액트 - 양이 늘어나더라도 복잡도는 증가하지 않는..
class Car { //객체선언
  // 생성자 함수에서 초기화 가능하다.
  // 공통분모 : 전변초기화를 담당한다 - 생성자 함수가 -
  constructor(name, emoji){ // 생성자는 초기화
    this.name = name; // 전역변수를 선언하지 않아도 에러발생x
    this.emoji = emoji; // 클래스 전역에서 사용할 수 있다.
  } // 사용자 정의 함수를 가질 수 있다. -> 제공되는 함수가 있다. - window, document.write() : io[input and output] (html문서 전체를 받을 수 있는 객체) : css,html 등등드~
  display = () => {
    console.log(`${this.name}, ${this.emoji}`);
  }
}

// myCar|yourCar는 Car클래스의 인스턴스 이다.
const myCar = new Car("Sonata","🚗")//어떤 자동차를 만들까?
const yourCar = new Car("Pride","🚕"); 

console.log(myCar);
console.log(yourCar);
const herCar = myCar;
console.log(myCar === yourCar); // ===타입까지 체크한다. ==값만 비교한다
console.log(myCar === herCar); // ===타입까지 체크한다. ==값만 비교한다
console.log(myCar.emoji, myCar.name);
yourCar.display();
herCar.display();

const himCar = { // 자바스크립트에서 객체와 클레스는 다르다.
  name: "싼타페",
  speed: 50,
};