function adicionarParametro(parametro){
    document.querySelector("[name = 'tela']").value += parametro;
}

function calcular(){
    conta = document.querySelector("[name = 'tela']").value;
    document.querySelector("[name = 'tela']").value = eval(conta)
}