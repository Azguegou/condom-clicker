
var condom = document.getElementById("boutonPrincipal");
console.log(condom);
var compteur = document.getElementById("nbCapotes");
var valeur = 0;
var rainDiv = document.getElementById("condomRain");

condom.addEventListener("click", function () {
  valeur++;
  compteur.innerText = valeur;
  if (valeur % 2 == 0) {
    condom.setAttribute("src", "images/capote_fond.png");
  } else {
    condom.setAttribute("src", "images/capote_durex.png");
  }
})
setInterval(appendImage, 500);

function myTimer() {
  const d = new Date();
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
