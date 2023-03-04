var tombola=[];
var player=[];
var playerI=[];
var pc=[];
var pcI=[];
var winPlayer=0;
var winPc=0;




function cartonesPlayer(){
    for (let index = 0; index <15 ; index++) {
    let aleatorio=parseInt((Math.random()*99)+1);
    player[index]="<button>"+aleatorio+"</button>";;
    playerI[index]=aleatorio;

    if (index==4||index==9||index==14) {
        player[index]+="<br>"
    } 
}
}

function cartonesPC(){
    for (let index = 0; index <15 ; index++) {
    let aleatorio=parseInt((Math.random()*99)+1);
    pc[index]="<button>"+aleatorio+"</button>";;
    pcI[index]=aleatorio;

    if (index==4||index==9||index==14) {
        pc[index]+="<br>"
    } 
}
}

function mostrar(){
let jugador=document.getElementById("numPlayer");
let maquina=document.getElementById("numPc")
jugador.innerHTML=null;
maquina.innerHTML=null;
for (let index = 0; index < player.length; index++) {
    jugador.innerHTML+=player[index];
    maquina.innerHTML+=pc[index]
}
}

function rifa(){
    let tombo=document.getElementById("dentroTo");
    let aleatorio=parseInt((Math.random()*99)+1); 
    while (repeticion(aleatorio)) {
    aleatorio=parseInt((Math.random()*99)+1);
   }
    tombola.push(aleatorio);
    tombo.innerHTML+="<button id='buttonT'>"+aleatorio+"</button>";
     comprobar(); 
   if (tombola.length==99) {
    deshabilitar();
   }
}
function deshabilitar(){
    const boton=document.getElementById("tombo");
    boton.disabled=true;
}

function repeticion(num){
for (let index = 0; index < tombola.length; index++) {
    if (tombola[index]==num) {
        return true;
    }
}
return false;
}
function comprobarGanador(){
    winPc=0;
    winPlayer=0;
    for (let index = 0; index < tombola.length; index++) {
       for (let index2 = 0; index2 < pcI.length; index2++) {
        if (tombola[index]==playerI[index2]) {
            winPlayer++;
            
        }
        else if (tombola[index]==pcI[index2]) {
            winPc++;
        }
        
       }
        
    }
    if (winPlayer==15) {
        return 1;
    }else if(winPc==15){
        return 2;
    }
}

function habilitarR(){
    let botonR=document.getElementById("reset");
        botonR.disabled=false;
}

function reiniciarJuego(){
     tombola=[];
     player=[];
     playerI=[];
     pc=[];
     pcI=[];
     let numeros=document.getElementById("dentroTo");
     numeros.innerHTML=null;
    cartonesPlayer();
    cartonesPC();
    mostrar();
    let botonR=document.getElementById("reset");
    botonR.disabled=true;
    const boton=document.getElementById("tombo");
    boton.disabled=false;

}

function comprobar(){
    for (let index = 0; index <player.length; index++) {
      for (let index2 = 0; index2 < tombola.length; index2++) {
       
        if (pcI[index]==tombola[index2]) {
            pc[index]="<button style='background-color: red;'>"+tombola[index2]+"</button>";
            if (index==4||index==9||index==14) {
                pc[index]+="<br>"
            } 
        }
        else if (playerI[index]==tombola[index2]) {
            player[index]="<button style='background-color: red;'>"+tombola[index2]+"</button>";
            if (index==4||index==9||index==14) {
                player[index]+="<br>"
            } 
        }
       
      }
        
    }
    if (comprobarGanador()==1) {
        alert("El Player 1 es el ganador");
        deshabilitar();
        habilitarR();
        
       }
       else if(comprobarGanador()==2){
    alert("El ganador es la PC");
    deshabilitar();
    habilitarR();
       }
    
   // comprobarGanador();
    mostrar();

}


cartonesPlayer();
cartonesPC();
mostrar();
