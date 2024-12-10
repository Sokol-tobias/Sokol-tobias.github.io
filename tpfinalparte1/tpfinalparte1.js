let imagenes = [], p=0; // arreglo para almacenar las imágenes
let Px=640, Py=480; //tamaño pantalla
let boton = [];
let texto=[], t=0;
let x, y, x1,y1 ;
let sonido;

function preload() {
   for(let i=0; i<=23; i++){
  imagenes[i]= loadImage('pantallas/img'+ i +'.jpg');
}
  boton[0]=loadImage('botones/comenzar.png');
  boton[1]=loadImage('botones/siguiente.png');
  boton[2]=loadImage('botones/reiniciar.png');
  boton[3]=loadImage('botones/si.png');
  boton[4]=loadImage('botones/no.png');
  boton[5]=loadImage('botones/afuera.png');
  boton[6]=loadImage('botones/adentro.png');
  boton[7]=loadImage('botones/sinRiesgo.png');
  boton[8]=loadImage('botones/arriesgar.png');
  texto=loadStrings('Texto.txt');
  sonido=loadSound('sonido/auto.mp3');
}

function lineastxt(){
  push();
  fill(0, 0, 0, 150);
  rect(5, 5, Px-10, Py/4);
  pop();
    text(texto[t], 10, 10, Px-20, Py-20);
}
function setup() {
createCanvas(Px,Py);
background (155);
textAlign(CENTER, TOP);
textSize(24);
fill(255);
}

function draw() {
 pantallas();
}
