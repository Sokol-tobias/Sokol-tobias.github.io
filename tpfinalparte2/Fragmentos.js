class Fragmento {
  constructor(x, y) {
    this.x = x + random(-20, 20);
    this.y = y + random(-20, 20);
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
  }

  mover() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x > width || this.x < 0) {
      this.vx *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.vy *= -1;
    }
  }

  mostrar() {
    push();
     imageMode(CENTER);
    image(imagenes["fragmento"],this.x, this.y, 30, 30);
    pop();  
}
}
