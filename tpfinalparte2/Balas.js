class Bala {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidad = 7;
    this.ancho = 5;
    this.alto = 10;
    this.visible = true;
  }

  mover() {
    this.y -= this.velocidad;
  }

  mostrar() {
    if (this.visible) {
      fill(255, 0, 0);
      ellipse(this.x, this.y, this.ancho, this.alto);
    }
  }
  ocultar(){
    this.visible = false;
}
  fueraDePantalla() {
    return this.y < 0;
  }
}
