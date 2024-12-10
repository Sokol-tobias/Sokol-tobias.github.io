class Boton {
  constructor(texto, x, y, ancho, alto, colorFondo, colorTexto) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.colorFondo = colorFondo || color(0, 153, 255);
    this.colorTexto = colorTexto || color(255);
    this.visible = true;
  }

  mostrar() {
    this.visible = true
    fill(this.colorFondo);
    rect(this.x, this.y, this.ancho, this.alto, 10);
    fill(this.colorTexto);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
}

ocultar() {
  this.visible = false;
}

esPresionado() {
  if (
    this.visible &&
    mouseX >= this.x &&
    mouseX <= this.x + this.ancho &&
    mouseY >= this.y &&
    mouseY <= this.y + this.alto &&
    mouseIsPressed
  ) {
    return true;
  }
  return false;
}
}
