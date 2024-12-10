class Control {
  constructor(nave, juego) {
    this.nave = nave;
    this.juego = juego;
    this.teclasPresionadas = {};
  }

  manejarTeclaPresionada(keyCode) {
    this.teclasPresionadas[keyCode] = true;
  }

  manejarTeclaLiberada(keyCode) {
    this.teclasPresionadas[keyCode] = false;
  }

  actualizar() {

    if (this.teclasPresionadas[RIGHT_ARROW]) {
      this.nave.mover(5, 0); // Mover derecha
    }
    if (this.teclasPresionadas[LEFT_ARROW]) {
      this.nave.mover(-5, 0); // Mover izquierda
    }
    if (this.teclasPresionadas[UP_ARROW]) {
      this.nave.mover(0, -5); // Mover arriba
    }
    if (this.teclasPresionadas[DOWN_ARROW]) {
      this.nave.mover(0, 5); // Mover abajo
    }
    if (this.teclasPresionadas[32]) {
      this.disparar();
    }
  }

  disparar() {

    this.juego.balas.push(new Bala(this.nave.x + this.nave.ancho / 2, this.nave.y));
  }
}
