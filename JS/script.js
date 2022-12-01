var condom = document.getElementById("mainCondom");
console.log(condom);
var compteur = document.getElementById("nbCapotes");
var valeur = 0;
var rainDiv = document.getElementById("condomRain");

condom.addEventListener("click", function(){
    valeur++;
    compteur.innerText = valeur;
})
setInterval(appendImage, 1000);

function myTimer() {
  const d = new Date();


}

function appendImage() {
    var img = document.createElement('img');
    console.log("aa");
    img.setAttribute('src', 'images/capote_fond.png');
    img.classList.add('capote');
    img.style.left = Math.floor(Math.random() * 100) + 'vw';
    rainDiv.appendChild(img);
    setTimeout(deleteImage(img), 1000000);
  }

  function deleteImage(img) {
    console.log("delete")
    rainDiv.removeChild(img);
  }