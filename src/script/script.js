function adicionarParametro(parametro){
    document.querySelector("[name = 'tela']").value += parametro;
}

function calcular(){
    conta = document.querySelector("[name = 'tela']").value;
    document.querySelector("[name = 'tela']").value = eval(conta)
}

function porcentagem(){
    conta = document.querySelector("[name = 'tela']").value + '/100';
    document.querySelector("[name = 'tela']").value = eval(conta)
}

function ac(){
    
    document.querySelector("[name = 'tela']").value = '';
}