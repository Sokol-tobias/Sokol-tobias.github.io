//Tobias Ezequiel Sokol  120375/9
//https://youtu.be/e1p-Pfuh1JM
let imagenes = {};
let sonido;
let pantallaActual = "inicio";
let juego;


function preload() {
  imagenes["inicio"] = loadImage("data/img1.jpg");
  imagenes["juego"] = loadImage("data/img2.jpg");
  imagenes["creditos"] = loadImage("data/img4.jpg");
  imagenes["instrucciones"] = loadImage("data/img3.jpg");
  imagenes["nave"] = loadImage("data/auto.png");
  imagenes["obstaculo"] = loadImage("data/obstaculo.png");
  imagenes["fragmento"] = loadImage("data/fragmento.png");
  sonido = loadSound("data/sonido.mp3");
}

function setup() {
  createCanvas(640, 480);
  pantalla = new Pantalla();
}

function draw() {
  pantalla.interaccionPantallas();
}

function keyPressed() {
  juego.manejarTeclaPresionada(keyCode);
}

function keyReleased() {
  juego.manejarTeclaLiberada(keyCode);
}
