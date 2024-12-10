class Pantalla {
  constructor() {
    this.botonComenzar = new Boton("COMENZAR", width / 2 - 250, height - 50, 150, 40);
    this.botonCreditos = new Boton("CREDITOS", width / 2 - 50, height - 50, 100, 40);
    this.botonInstrucciones = new Boton("INSTRUCCIONES", width / 2 + 80, height - 50, 150, 40);
    this.botonVolver = new Boton("VOLVER", width / 2 - 50, height - 100, 100, 40);
    this.botonReiniciar = new Boton("REINICIAR", width - 150, height - 50, 130, 40);
  }


  mostrarCreditos() {
    image(imagenes["creditos"], 0, 0, width, height);
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text("Juego creado por Tobias Ezequiel Sokol.", width / 2, height / 2);
    this.botonComenzar.ocultar();
    this.botonCreditos.ocultar();
    this.botonInstrucciones.ocultar();
    this.botonVolver.mostrar();
  }

  mostrarInstrucciones() {
    image(imagenes["instrucciones"], 0, 0, width, height);
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text("Usa flechas para moverte y Dispara con la barra espaciadora.", width / 2, height / 2);
    this.botonComenzar.ocultar();
    this.botonCreditos.ocultar();
    this.botonInstrucciones.ocultar();
    this.botonVolver.mostrar();
  }

  mostrarResultado(gano) {
    textSize(32);
    textAlign(CENTER);
    fill(255);
    text(gano ? "¡Ganaste!" : "¡Perdiste!", width / 2, height / 2);
    this.botonComenzar.ocultar();
    this.botonCreditos.ocultar();
    this.botonInstrucciones.ocultar();
    this.botonVolver.mostrar();
  }

  mostrarInicio() {
    image(imagenes["inicio"], 0, 0, width, height);
    textSize(32);
    textAlign(CENTER);
    fill(255);
    text("Destruye a la competencia y sus partes", width / 2, height / 2 - 100);
    this.botonComenzar.mostrar();
    this.botonCreditos.mostrar();
    this.botonInstrucciones.mostrar();
    this.botonVolver.ocultar();
  }

  interaccionPantallas() {
    if (this.botonComenzar.esPresionado()) {
      pantallaActual = "juego";
      juego = new Juego();
      sonido.play();
      console.log("Comenzar presionado");
    } else if (this.botonCreditos.esPresionado()) {
      pantallaActual = "creditos";
      console.log("Creditos presionado");
    } else if (this.botonInstrucciones.esPresionado()) {
      pantallaActual = "instrucciones";
      console.log("Instrucciones presionado");
    } else if (this.botonVolver.esPresionado()) {
      pantallaActual = "inicio";
      sonido.stop();
      console.log("Volver presionado");
    } else if (this.botonReiniciar.esPresionado()) {
      pantallaActual = "reinicio";
      console.log("Reiniciar presionado");
    }
    switch (pantallaActual) {
    case "inicio":
      this.mostrarInicio();
      break;
    case "juego":
      juego.actualizarJuego();
      break;
    case "creditos":
      this.mostrarCreditos();
      break;
    case "instrucciones":
      this.mostrarInstrucciones();
      break;
    case "resultado":
      this.mostrarResultado(true);
      break;
    case "reinicio":
      juego.reiniciar();
      pantallaActual = "juego";
      sonido.play();
      break;
    }
  }
  ocultarBotones() {
    this.botonComenzar.ocultar();
    this.botonCreditos.ocultar();
    this.botonInstrucciones.ocultar();
    this.botonVolver.ocultar();
  }
}
