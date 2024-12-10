class Nave {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 40;
    this.alto = 80;
    this.velocidad = 5;
    this.visible = true;
  }
  mover(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
  mostrar() {
    if (this.visible) {
      image(imagenes["nave"], this.x, this.y, this.ancho, this.alto)
    }
  }
  ocultar() {
    this.visible = false;
  }
}
