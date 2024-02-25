// Receitas
const valorBase = document.getElementById('valor_base');
const valorTransporte = document.getElementById('valor_transporte');
const valorAlimentacao = document.getElementById('valor_alimentacao');
let receitaTotal = document.getElementById('valor_receita');

// Descontos
const valorAutomovel = document.getElementById('valor_automovel');
const faltas = document.getElementById('faltas');
let descontoTotal = document.getElementById('valor_descontos');

let valorTotal = document.getElementById('valor_total');
const btnCalcular = document.getElementById('btn_calcular');


const calculoTotal = () => {
    const totalReceita = parseInt(valorBase.value || 0) + parseInt(valorTransporte.value || 0) + parseInt(valorAlimentacao.value || 0);
    receitaTotal.value = totalReceita;
    
    const totalDescontos = parseInt(valorAutomovel.value || 0) + parseInt(faltas.value || 0); 
    descontoTotal.value = totalDescontos;
    
    valorTotal.value = totalReceita - totalDescontos;    
}

btnCalcular.addEventListener('click', calculoTotal);

document.querySelectorAll('input[type="number"]').forEach(entrada => {
    entrada.addEventListener('input', calculoTotal);
});