function calc(){
    var salario = document.getElementById("salario").value;
    var aumento = parseInt(salario) * 0.2;
    document.getElementById("aumento").value = aumento.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var salarioN = parseInt(salario) + aumento;
    document.getElementById("salarion").value = salarioN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
 
}