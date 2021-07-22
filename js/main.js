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

var x = document.getElementsByClassName("viola");

for(let i = 0; i < x.length; i++) {
  x[i].addEventListener("mouseover", function(){
     x[i].className +=" bg-purple";
  });
  x[i].addEventListener("mouseout", function(){
      x[i].classList.remove("bg-purple");
  });
}




function generaPrezzo(){
    var nome = document.getElementById("nome").value;
    var eta = document.getElementById("eta").value;
    var distance = document.getElementById("distance").value;

    var prezzo = distance*0.21;
    var offerta="nessuna";
    if(eta=="minorenne"){
        prezzo = prezzo*0.8;
         offerta="minnorenne";
    }
    if(eta=="over65"){
        prezzo = prezzo*0.6;
         offerta="over65";
    }
       
    var carozza=Math.floor(Math.random()*10)+1;
    var codiceTreno=Math.floor(Math.random()*100000 )+90000 ;
    document.getElementById("nome_biglietto").innerHTML=nome;
    document.getElementById("prezzo").innerHTML=prezzo.toFixed(2);
    document.getElementById("offerta").innerHTML="offerta <br>" + offerta;
    document.getElementById("carozza").innerHTML=carozza;
    document.getElementById("codice").innerHTML=codiceTreno;
    document.getElementById("biglietto").classList.remove("nascondi");
}

document.getElementById("resetta").addEventListener("click",resett);

function resett(){
    var nome = document.getElementById("nome").value="";
    var distance = document.getElementById("distance").value=10;
    var eta = document.getElementById("eta").value="maggiorenne";
    document.getElementById("biglietto").className=document.getElementById("biglietto").classList+ " nascondi";
}