var condom = document.getElementById("boutonPrincipal");
var compteur = document.getElementById("nbCapotes");
var auto = document.getElementById("capoteParSec");
var valeur = 10000;
var increase = 0;
var rainDiv = document.getElementById("condomRain");
var level = document.getElementsByClassName("niveauUpgrade");
const questions = [
  ["Que signifie VIH ?", ["Virus de l'Immuno déficience Humaine", "Vie incroyablement humaine ?", "Vache interne hospitalisée", "Voyage intergalactique hypervitesse"]],
  ["Parmi ces propositions laquelle est une méthode de protection contre le VIH ?", ["le préservatif", "Le retrait", "La pillule", "stérilet"]],
  ["Quand a lieu la journée mondiale de la lutte contre le SIDA ?", ["1er décembre", "20 avril", "3 février", "11 novembre"]],
  ["Dans quel infrastructure peut on se faire dépister ?", ["Laboratoire d'analyse sanguine", "Pharmacie", "boulangerie", "Ecole maternelle"]],
  ["Quel musique à été reprise pour la cause du sidaction ?", ["Macumba", "Encore un matin", "On fait tourner les serviettes", "Chui dans ma paranoïa"]],
  ["Qu'est ce que la trithérapie contre le VIH", ["Molécule servant au traitement du SIDA", "Un dinosaure", "la trinité", "Un plan a 3"]],
  ["Quand le vaccin a-t-il été développé ?", ["Bientôt on espère", "1985", "Dès qu'on a découvert le sida", "2001"]],
];

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

setInterval(appendImage, 500);
setInterval(increasePassif, 100);

function myTimer() {
  const d = new Date();
}

function increasePassif() {
  valeur += Math.floor(increase * 10) / 100;
  compteur.innerText = Math.floor(valeur);
  auto.innerText = Math.floor(increase * 10) / 10;
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

function upgrade(id) {
  var niveauActuel = parseInt(level[id - 1].textContent);
  var amountIncrease = [0.1, 0.3, 0.5, 1, 3, 5, 10];
  var amountCost = [50, 100, 250, 500, 1000, 2000, 5000];
  if (amountCost[id - 1] <= valeur && amountCost[id - 1] > 0) {
    if (niveauActuel == 0){
      popup(id);
    }
    valeur -= amountCost[id - 1];
    increase += Math.round(parseFloat(amountIncrease[id - 1]) * 10) / 10;
    niveauActuel += 1;
    compteur.innerText = Math.floor(valeur);
    auto.innerText = Math.floor(increase * 10) / 10;
    level[id - 1].innerText = niveauActuel;
  }
}

let question = document.getElementById("question");
let reponses = document.getElementsByClassName("reponse");

function random(max) {
  return Math.floor(Math.random() * max);
}

function cpyList(list) {
  let l = [];
  for (let i = 0; i < 4; ++i) {
    l[i] = list[i];
  }
  return l;
}

function initPopupQuestion(idquestion) {
  question.innerText = questions[idquestion - 1][0];
  question.setAttribute("index", idquestion);
  let reps = cpyList(questions[idquestion - 1][1]);
  for (let i = 0; i < 4; ++i) {
    let idrep = random(3 - i);
    reponses[i].innerText = reps[idrep];
    let r = reps[3 - i]; reps[3 - i] = reps[idrep]; reps[idrep] = r;
  }
}

function popup(idquestion) {
  condom.style.visibility = "hidden";
  initPopupQuestion(idquestion);
  document.getElementById("bg-popup").style.display = "block";
}

function verify() {
  for (let i = 0; i < 4; ++i) {
    if (document.getElementById(reponses[i].getAttribute("for")).checked) {
      if (reponses[i].innerText == questions[question.getAttribute("index") - 1][1][0]) {
        alert("Félicitations vous avez eu juste !");
        valeur += 100;
      } else {
        alert("Mauvaise réponse :(");
        alert("La bonne réponse était : " + questions[question.getAttribute("index") - 1][1][0]);
      }
      document.getElementById("bg-popup").style.display = "none";
      condom.style.visibility = "visible";
    }
  }
}
let keys = {
  37:"left",
  38: "up",
  39: "right",
  40: "down",
  65: "a",
  66: "b",

 
};

let konamiCode =["up","up","down","down","left","right","left","right","b","a"];

document.addEventListener("keydown", checkCode, false);

let keyCount=0;

function checkCode(event){
  //console.log(event.keyCode);
  let keyPressed= keys[event.keyCode];

  if(keyPressed===konamiCode[keyCount]){
      keyCount++;

      if(keyCount=== konamiCode.length){
          cheatCodeActivated();
          resetKeyState();
      }
  }
  else{
      resetKeyState();
  }
  
}

function cheatCodeActivated(){
  valeur += 1000000;
  alert("Félicitations, vous avez trouvé le code secret et avez débloqué un million de préservatifs.");
}

function resetKeyState(){
  keyCount=0;
}