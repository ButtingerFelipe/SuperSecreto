let texts = ["Olá", "Você passará por um teste", "Baseado em sorte", "Será sorteado um número", "entre 1 e 1000", "você terá 4 tentativas", "cada erro te dará uma dica", "boa sorte!", "Comece!"];
let index = 0;

document.addEventListener("DOMContentLoaded", function() {
    const paragrafo = document.getElementById("changeComputer");

    function write() {
        let currentText = texts[index].split(""); 
        let textChange = "";
        let i = 0;
game(); 
        function typeWriter() {
            if (i < currentText.length) {
                textChange += currentText[i]; 
                paragrafo.textContent = textChange; 
                i++;
                setTimeout(typeWriter, 100); 
            } else {
                setTimeout(backSpace, 1000); 
            }
        }

        function backSpace() {
            if (textChange.length > 0) {
                textChange = textChange.slice(0, -1); 
                paragrafo.textContent = textChange; 
                setTimeout(backSpace, 100); 
            } else {
                index++; 
                if (index < texts.length) {
                    setTimeout(write, 1000); 
                } else {
                    game(); 
                }
            }
        }

        typeWriter(); 
    }

    write(); // Inicia o ciclo de escrita
});

function game(){
    const gamePlan = document.getElementById("gameArea");
    gamePlan.style.display = 'block'; 

    var numero = Math.floor(Math.random() * 1001);
    let chances = 0
   const button = document.getElementById("btnKick");
function handleClick() {
let chute = document.getElementById("input").value;

const dica1 = document.getElementById("clue1")
const dica2 = document.getElementById("clue3")
const dica3 = document.getElementById("clue4")
console.log(chute)
if(chances<3 && chute<=1000 && chute>=0){
    if(chute == numero){
        console.log("Acertou")
    }else{
        let fill=""
        if(chute<numero){
            fill = `Menor que `+chute 
        }else{
            fill = `Maior que `+chute 
        }
        switch(chances){
            case 0:
                
                dica1.textContent(fill)
                break
            case 1:
               
                dica1.textContent(fill)
                break
            case 2:
                
                dica1.textContent(fill)
                break
        }
    }
}
}


button.addEventListener("click", handleClick);
}
