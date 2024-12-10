class Juego {
  constructor() {
    this.nave = new Nave(width / 2, height - 40);
    this.control = new Control(this.nave, this);
    this.balas = [];
    this.fragmentos = [];
    this.obstáculos = [];
    this.juegoTerminado = false;
    this.gano = false;
    this.iniciar();
  }

  iniciar() {
    this.obstáculos = [];
    for (let i = 0; i < 7; i++) {
      this.obstáculos.push(new Obstaculo(random(40,width- 50), random(40, height- 150)));
    }
  }

  reiniciar() {
    this.nave = new Nave(width / 2, height - 40);
    this.control = new Control(this.nave, this);
    this.balas = [];
    this.fragmentos = [];
    this.juegoTerminado = false;
    this.gano = false;
    this.iniciar();
    sonido.stop();
  }

  actualizarJuego() {
    image(imagenes["juego"], 0, 0, width, height);
    pantalla.ocultarBotones();
    this.control.actualizar();
    this.nave.mostrar();
    this.balas.forEach((bala, i) => {
      bala.mover();
      bala.mostrar();

      if (bala.fueraDePantalla()) {
        this.balas.splice(i, 1);
        return;
      }

      this.fragmentos.forEach((fragmento, j) => {
        if (
          bala.x > fragmento.x - 15 &&
          bala.x < fragmento.x + 15 &&
          bala.y > fragmento.y - 15 &&
          bala.y < fragmento.y + 15
          ) {
          this.fragmentos.splice(j, 1);
          this.balas.splice(i, 1);
          return;
        }
      }
      );
    }
    );

    this.obstáculos.forEach((obstaculo, i) => {
      obstaculo.mostrar();
      if (obstaculo.ahColisionadoConBala(this.balas)) {
        this.obstáculos.splice(i, 1);
      }
    }
    );

    this.fragmentos.forEach((fragmento, i) => {
      fragmento.mover();
      fragmento.mostrar();

      if (
        fragmento.x > this.nave.x &&
        fragmento.x < this.nave.x + this.nave.ancho &&
        fragmento.y > this.nave.y &&
        fragmento.y < this.nave.y + this.nave.alto
        ) {
        this.juegoTerminado = true;
        this.gano = false;
        this.nave.ocultar();
      }
    }
    );

    if (this.obstáculos.length === 0 && this.fragmentos.length === 0) {
      this.juegoTerminado = true;
      this.gano = true;
      this.nave.ocultar();
    }

    if (this.juegoTerminado) {
      pantalla.mostrarResultado(this.gano);
      pantalla.botonReiniciar.ocultar();
    }

    pantalla.botonReiniciar.mostrar();
  }
  
  manejarTeclaPresionada(keyCode) {
    this.control.manejarTeclaPresionada(keyCode);
  }

  manejarTeclaLiberada(keyCode) {
    this.control.manejarTeclaLiberada(keyCode);
  }
}
