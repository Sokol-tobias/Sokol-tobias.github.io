function decision(p, mouseX, mouseY) {
//decision 1
    if (p == 3 && mouseX < Px / 2 && mouseX <= Px && mouseY < Py) {
        p = 6;
        t = 4;
        console.log('zona1', p, 'txt:', texto[t], t);
    } else if (p == 3 && mouseX > Px / 2 && mouseX <= Px && mouseY < Py) {
        p = 4;
        t = 6;
        console.log('zona2', p, 'txt', t);
        sonido.play();
    }
//decision 2
    else if (p == 10 && mouseX > Px / 2 && mouseX <= Px && mouseY < Py) {
        p = 13;
        t = 13;
        console.log('zona1', p, 'txt:', texto[t], t);
        sonido.play();
    } else if (p == 10 && mouseX < Px / 2 && mouseX <= Px && mouseY < Py) {
        p = 11;
        t = 11;
        console.log('zona2', p, 'txt', t);
    }
//decision 3
    else if (p == 17 && mouseX < Px / 2 && mouseX <= Px && mouseY < Py) {
        p = 18;
        t = 18;
        sonido.play();
    } else if (p == 17 && mouseX > Px / 2 && mouseX <= Px && mouseY < Py) {
        p = 21;
        t = 21;
    }
    return [p, t];
}
