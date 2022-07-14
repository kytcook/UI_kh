//e.target과 e.currentTarget의 차이를 알아보자--~

const main = document.querySelector("main");

main.addEventListener('click', (e) => {
  console.log(`${e.target}, ${e.currentTarget}`);
});


