class Car {
  carName;
  speed;
  constructor(carName, speed){
    this.carName = carName;
    this.speed = speed;
  }
  speedUp(){ // speed앞에 - 클래스 선언시 function 예약어를 사용하지 않음
    this.speed += 1;
  }
  speedDown(){
    this.speed -= 1;
  }
}

class Sonata extends Car{
  speedUp(){
    super.speedUp();
    this.speed +=2;
  }
}

class K5 extends Car {
  stop() {
    this.speed = 0;
  }
}

const myCar = new Car("바보자동차",30)
myCar.speedUp();
myCar.speedUp();
myCar.speedDown();
console.log(myCar.speed);
const yourCar = new Sonata("방구자동차",min)