function pantallas(){
 //pantalla inicio 
  if(p==0){
      image(imagenes[p], 0, 0, Px, Py);
  push();
   imageMode(CENTER);
   image(boton[0],Px/2,Py-boton[0].height);
  pop();
   text('Créditos',10,10,Px-5, Py-20);
    }
//creditos
    else if(p==50){
    image(imagenes[0], 0, 0, Px, Py)
     push();
      fill(0, 0, 0, 150);
      rect(0, Py/1.5, Px-10, Py-10);
    pop();
    rect();
    text('Alumnos: \n Sokol Tobias Ezequiel 120375/9 \n Ocanto Victoria 120350/9 \n autor: \n Jason Hall y Alex Tse',Px/2,Py/1.5);
    text('Créditos',10,10,Px-5, Py-20);
    }
//pantallas con boton siguiente
    else if(p==1 || p==2 || p==4 || p==5 || p==6 || p==8 || p==9 || p==11 || p==13 || p==14 || p==15 || p==16 || p==18 || p==19 || p==21 || p==22 ){
    image(imagenes[p], 0, 0, Px, Py);
    lineastxt();
    push();
   image(boton[1],Px-boton[1].width/2,Py-boton[1].height/2,boton[1].width/2,boton[1].height/2);
    pop();
  }
  //pantallas reiniciar
    else if(p==7 || p==12 || p==20 || p==23){
   image(imagenes[p], 0, 0, Px, Py);
   lineastxt()
  push();
   imageMode(CENTER);
   image(boton[2],Px/2,Py-boton[0].height);
  pop();
  }
  //primera decision
  else if(p==3){
 image(imagenes[p], 0, 0, Px, Py);
 lineastxt();
 if(mouseX>Px/2 && mouseX<=Px && mouseY < Py){ //boton si
   push();
   imageMode(CENTER);
     image(boton[3],Px,Py/2);
   pop();
 }else if(mouseX<Px/2 && mouseX<=Px && mouseY < Py){ //boton no
    push();
     imageMode(CENTER);
     image(boton[4],0,Py/2);
    pop(); 
   }
}
 //segunda decision
 else if(p==10){
 image(imagenes[p], 0, 0, Px, Py);
 lineastxt();
 if(mouseX<Px/2 && mouseX<=Px && mouseY < Py){ //boton afuera
   push();
   imageMode(CENTER);
     image(boton[5],Px-boton[5].width,Py/2,boton[5].width/2,boton[5].height/2);
   pop();
 }else if(mouseX>Px/2 && mouseX<=Px && mouseY < Py){ //boton adentro
    push();
     imageMode(CENTER);
     image(boton[6],boton[6].width,Py/2,boton[6].width/2,boton[6].height/2);
    pop(); 
   }
}
 //tercera decision
 else if(p==17){
 image(imagenes[p], 0, 0, Px, Py);
 lineastxt();
 if(mouseX<Px/2 && mouseX<=Px && mouseY < Py){ //boton arriesgar
   push();
   imageMode(CENTER);
     image(boton[8],Px-boton[8].width,Py/2,boton[8].width/2,boton[8].height/2);
   pop();
 }else if(mouseX>Px/2 && mouseX<=Px && mouseY < Py){ //boton sin riesgo
    push();
     imageMode(CENTER);
     image(boton[7],boton[7].width,Py/2,boton[7].width/2,boton[7].height/2);
    pop(); 
    }
  }
}
