var condom = document.getElementById("boutonPrincipal");
var compteur = document.getElementById("nbCapotes");
var auto = document.getElementById("capoteParSec");
var valeur = 50000;
var increase = 0;
var rainDiv = document.getElementById("condomRain");
var level = document.getElementsByClassName("niveauUpgrade");
//var askQuestion = document.getElementsByClassName("item");

condom.addEventListener("click", function () {
  valeur++;
  compteur.innerText = Math.floor(valeur);
  var randNum = Math.floor(Math.random() * 4);
  if (randNum == 0) {
    condom.setAttribute("src", "images/capote_fond.png");
  } else if (randNum == 1) {
    condom.setAttribute("src", "images/capote_vert.png");
  } else if (randNum == 2) {
    condom.setAttribute("src", "images/capote_violette.png")
  } else if (randNum == 3) {
    condom.setAttribute("src", "images/capote_durex.png")
  }
})

/*askQuestion.addEventListener("click", () => {
  console.log("hola");
})*/


setInterval(appendImage, 500);
setInterval(increasePassif, 100);

function myTimer() {
  const d = new Date();
}

function increasePassif(){
  valeur += Math.floor(increase * 10) / 100;
  compteur.innerText = Math.floor(valeur);
  auto.innerText = Math.floor(increase*10)/10;
}

function appendImage() {
  var img = document.createElement('img');
  img.setAttribute('src', 'images/capote_fond.png');
  img.classList.add('capote');
  img.style.left = Math.floor(Math.random() * 100) + 'vw';
  rainDiv.appendChild(img);
  setTimeout(() => {
    deleteImage(img)
  }, 20_000);
}

function deleteImage(img) {
  rainDiv.removeChild(img);
}

function resetCondom() {
  condom.style.width = "30%";
}

function popup(message) {
  alert (message);
  document.write ("This is a warning message!");
}

function upgrade(id) {
  var niveauActuel = parseInt(level[id-1].textContent);
  var amountIncrease = [0.1,0.3,0.5,1,3,5,10];
  var amountCost = [50,100,250,500,1000,2000,5000];
  if (amountCost[id-1] <= valeur && amountCost[id-1] > 0){
    valeur -= amountCost[id-1];
    increase += Math.round(parseFloat(amountIncrease[id-1]) * 10) / 10;
    niveauActuel += 1;
    compteur.innerText = math.floor(valeur);
    auto.innerText = math.floor(increase*10)/10;
    level[id-1].innerText = niveauActuel;
  }
}