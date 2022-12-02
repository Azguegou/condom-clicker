const questions = [
    ["Question1", ["Reponse11", "Reponse12", "Reponse13", "Reponse14"]],
    ["Question2", ["Reponse21", "Reponse22", "Reponse23", "Reponse24"]],
    ["Question3", ["Reponse31", "Reponse32", "Reponse33", "Reponse34"]]
];
let question = document.getElementById("question");
let reponses = document.getElementsByClassName("reponse");

function random(max){
    return Math.floor(Math.random()*max);
}

function cpyList(list){
    let l = [];
    for (let i = 0;i<4;++i){
        l[i] = list[i];
    }
    return l;
}

function initPopupQuestion(idquestion){
    question.innerText = questions[idquestion][0];
    question.setAttribute("index", idquestion);
    let reps = cpyList(questions[idquestion][1]);
    for (let i = 0;i<4;++i){
        let idrep = random(3-i);
        reponses[i].innerText = reps[idrep];
        let r = reps[3-i]; reps[3-i] = reps[idrep]; reps[idrep] = r;
    }
}

function popup(idquestion){
    initPopupQuestion(idquestion);
    document.getElementById("bg-popup").style.display = "block";
}

function verify(){
    for (let i = 0;i<4;++i){
        if (document.getElementById(reponses[i].getAttribute("for")).checked){
            if (reponses[i].innerText == questions[question.getAttribute("index")][1][0]){
                console.log("C'est bon.");
            } else{
                console.log("C'est faux.");
            }
            document.getElementById("bg-popup").style.display = "none";
        } 
    }
}