let textArea = document.querySelector('.textarea');
let text = document.querySelector('.text');
let restart = document.querySelector('.restart');

let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let mili = document.querySelector('.mili');
let chrono = document.querySelector('.chrono');

var mil = 0;
var sc = 0;
var mn = 0;

var intervalId;
var i = 0;

//le tableau des paragraphes précis
let p1 = "En JavaScript, les opérations asynchrones sont placées dans des files d'attentes qui vont s'exécuter après que le fil d'exécution principal ou la tache principale (le main thread en anglais) ait  terminé ses opérations.";
let p2 = "Par défaut, le JavaScript est un langage synchrone, bloquant et qui ne s'exécute que sur un seul thread.";
let p3 = "On dit que deux actions sont synchrones lorsqu'elles se déroulent en meme temps ou de manière synchronisée. Au contraire, deux opérations sont asynchrones si elles ne se déroulent pas en meme temps ou ne sont pas synchronisées.";
let p4 = "Les machines disposent de plusieurs coeurs, ce qui leur permet d'exécuter plusieurs taches de façon indépendante et parallèle et que le JavaScript nous fournit des outils pour créer du code asynchrone.";
let textR = [p1,p2,p3,p4] ;


//faire un choix au hasard d'une paragraphe
let ind = Math.floor(Math.random()*4)
console.log(ind);
text.innerHTML = textR[ind];

function Timer(){
    intervalId = setInterval(UpdateChrono, 10);
    console.log("Into Timer id= "+intervalId);
}

function UpdateChrono(){
    mil+=10;
    if(mil==1000){
        mil=0;
        sc++;
        if(sc==60){
            sc=0;
            mn++;
        }
    }

    min.textContent = (mn>9 ? mn : "0"+mn);
    sec.textContent = (sc>9 ? sc : "0"+sc);
    mili.textContent = (mil>99 ? mil/10 : null);

}

function ValidC(e){
    console.log(textArea.value);
    console.log(text.innerHTML);
    if(intervalId != null){
        if(textArea.value.length != text.innerHTML.length){
            console.log("le texte ecrit est plus court que le texte fourni");
            console.log("text area "+textArea.value[i]);
            console.log("text fourni "+text.innerHTML[i]);
            if(textArea.value[i] == text.innerHTML[i]){
                textArea.style.borderColor = 'rgb(0, 139, 139)';
            }
            else{
                console.log("erreur dans "+textArea.value[i]);
                textArea.style.borderColor = 'rgb(255, 69, 0)';
            }
            i++;
        }
        else{
            console.log("le texte ecrit est égale au texte fourni id= "+intervalId);
            clearInterval(intervalId);
        }
    }
    else{
        console.log("Avant Timer");
        Timer();
        console.log("Après Timer");
        
    }
}


function Restart(e){
    console.log("restart");
    //choix d'une paragraphe comme sujet de test
    ind = Math.floor(Math.random()*4)
    text.innerHTML = textR[ind];
    //supprimer le contenu de text area
    textArea.value = null;
    //mettre le chrono au début
    console.log("Après Timer id="+intervalId);
    clearInterval(intervalId);
    intervalId = null;
    mn = 0; sc = 0; mil = 0;
    min.textContent = "00"; sec.textContent = "00"; mili.textContent = "00";
}


textArea.addEventListener('keypress',ValidC,true);
restart.addEventListener('click',Restart,true);