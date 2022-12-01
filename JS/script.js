var condom = document.getElementById("mainCondom");
console.log(condom);
var compteur = document.getElementById("nbCapotes");
var valeur = 0;
condom.addEventListener("click", function(){
    valeur++;
    compteur.innerText = valeur;
})