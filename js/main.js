/*var kilometri=parseInt(prompt("quanti km"));
var eta=parseInt(prompt("eta?"));


var prezzo = kilometri*0.21;

if(eta<=18){
    prezzo = prezzo*0.8;
}
if(eta>=65){
    prezz = prezzo*0.6;
}

document.getElementById("prezzo").innerHTML=prezzo.toFixed(2);
*/

document.getElementById("genera").addEventListener("click",generaPrezzo);

function generaPrezzo(){
    var nome = document.getElementById("nome").value;
    var eta = document.getElementById("eta").value;
    var distance = document.getElementById("distance").value;

    var prezzo = distance*0.21;

    if(eta=="minorenne"){
        prezzo = prezzo*0.8;
    }
    if(eta=="over65"){
        prezzo = prezzo*0.6;
    }
    document.getElementById("prezzo").innerHTML=prezzo.toFixed(2);
    document.getElementById("biglietto").className="show";
}

document.getElementById("resetta").addEventListener("click",resett);

function resett(){
    var nome = document.getElementById("nome").value="";
    var eta = document.getElementById("eta").value="";
    var distance = document.getElementById("distance").value="";
    document.getElementById("biglietto").className="nascondi";
}