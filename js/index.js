//
const gameBoard = {
  canvas: document.getElementById('canvas'),
  ctx: canvas.getContext('2d'),
  cWidth: canvas.width,
  cHeight: canvas.height,
  /* backGround: function () {
    const img = new Image();
    img.addEventListener('load', () => {
        this.ctx.drawImage(img, 0, 0, this.cWidth, this.cHeight);
    });
    img.src ='/images/road.png';
  }, */
  bckgd(){
    const img = new Image();
    img.src ='/images/road.png';
    img.addEventListener('load', () => {
        this.ctx.drawImage(img, 0, 0, this.cWidth, this.cHeight);
    });
  }
}
//
// class section
class Car {
  constructor() {
    this.x = 250;
    this.y = 600;
    const img = new Image();
    img.src ='/images/car.png';
    img.addEventListener('load', () => {
        gameBoard.ctx.drawImage(img, 250, 600, 88, 88);
    });
  }
  moveRight() {
    this.x += 25;
  }
  moveLeft() {
    this.x -= 25;
  }
}

//
//
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}
//
//
  function startGame() {
    gameBoard.bckgd();
    let car = new Car();
}
//
window.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowRight':
      car.moveRight();
      break;
    case 'ArrowLeft':
      car.moveLeft();
      break;
  }
})