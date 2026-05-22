var cards = document.querySelectorAll('.carta');

[...cards].forEach((carta)=>{
  carta.addEventListener( 'click', function() {
    carta.classList.toggle('is-flipped');
  });
});

const textos = [
    { frente: "Atribuindo 10 à variável nota", costa: "nota = 10" },
    { frente: "Atribuindo 10 à variável nota e 5 à variável faltas", costa: "nota = 10<br>faltas = 5<br><br># OUTRA FORMA DE FAZER<br><br>nota, faltas = 10, 5" },
    { frente: "Incrementando a variável soma (acrescentando um do valor atual dela)", costa: "soma = soma+1<br><br>#OUTRA FORMA DE FAZER<br><br>soma += 1" }
];                                                                    

let indice = 0;
let mostrandoFrente = true;
const carta = document.querySelector(".carta")
const avancar = document.querySelector("#avançar"); 
const frente = document.getElementsByClassName("frente")[0]; 
const costa = document.getElementsByClassName("costa")[0];
const voltar = document.querySelector("#volta")

function atualizarCarta() {
    frente.innerHTML = "<strong>" + textos[indice].frente + "</strong>";
    costa.innerHTML = "<code>" + textos[indice].costa + "</code>";
}

atualizarCarta();

avancar.addEventListener("click", () => { 
    if (mostrandoFrente) { 
        mostrandoFrente = false;
        carta.classList.add("is-flipped");
    } else {  
        mostrandoFrente = true;
        indice++;
        if (indice >= textos.length) { 
            indice = 0;
        }
        carta.classList.remove("is-flipped");
        setTimeout(()=>{
            atualizarCarta();
        },300);
        
        
    }
    
});
voltar.addEventListener("click", () => {
    if (mostrandoFrente) {
        indice--;
        if (indice < 0) {
            indice = 0;
        }else{
            atualizarCarta();
            carta.classList.add("is-flipped");
            mostrandoFrente = false;
        }
    } else {
        carta.classList.remove("is-flipped");
        mostrandoFrente = true;

    }
});