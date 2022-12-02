var condom = document.getElementById("boutonPrincipal");
var compteur = document.getElementById("nbCapotes");
var auto = document.getElementById("capoteParSec");
var valeur = 10000;
var increase = 0;
var rainDiv = document.getElementById("condomRain");
var level = document.getElementsByClassName("niveauUpgrade");
const questions = [
  ["Question1", ["Reponse11", "Reponse12", "Reponse13", "Reponse14"]],
  ["Question2", ["Reponse21", "Reponse22", "Reponse23", "Reponse24"]],
  ["Question3", ["Reponse31", "Reponse32", "Reponse33", "Reponse34"]],
  ["Question4", ["Reponse41", "Reponse42", "Reponse43", "Reponse44"]],
  ["Question5", ["Reponse51", "Reponse52", "Reponse53", "Reponse54"]],
  ["Question6", ["Reponse61", "Reponse62", "Reponse63", "Reponse64"]],
  ["Question7", ["Reponse71", "Reponse72", "Reponse73", "Reponse74"]],
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
        console.log("C'est bon.");
      } else {
        console.log("C'est faux.");
      }
      document.getElementById("bg-popup").style.display = "none";
      condom.style.visibility = "visible";
    }
  }
}