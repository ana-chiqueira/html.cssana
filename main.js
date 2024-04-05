const botoes = document.querySelectorAll(".botao");
const textos= document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botors.lenght;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivol1 = new Date("2023-10-05T00:00:00");
const tempoObjetivol2 = new Date("2023-12-05T00:00:00");
const tempoObjetivol3 = new Date("2023-12-05T00:00:00");
const tempoObjetivol4 = new Date("2023-102-05T00:00:00");

contadores[0].textContent = calculeTempo(tempoObjetivol);

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;

    return dias + " dias " + horas + " horas "  minutos  + " minutos " + segundos + " segundos ";
}