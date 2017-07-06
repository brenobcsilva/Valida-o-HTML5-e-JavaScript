function cpf_mask(v) {
    
    /*d - para encontrar números
     * s - encontrar espaços
     * w - para encontrar alfanumericos e underline
     * ^ - Informação no inicio  da string = /^s/ true
     * $ - Verificar se termina com um numero =  /2$/ true
     * Verificar se existe digito no final do texto: /\d$.test("Breno") true
     * Verificar se existe dois(\d\d) digito no final do texto: /\d\d$.test("Breno") true
    */
    
    /*  Validação para Cep:
     * /^\d\d\d\\d\d-\d\d\d.test("12345-968");
     /*/
    
    alert(/\d{2}$/.test("Breno11"));// resultado: dois digitos no final da string)
    alert(/^\d{2}/.test("Breno11"));// resultado: dois digitos no incio da string)
    
    
    v = v.replace(/\D/g, "")                 //Remove tudo o que nao e digito
    
    // v = v.replace(/(\d\d\d) = (\d3)
    v = v.replace(/(\d{3})(\d)/, "$1.$2")    //Coloca ponto entre o terceiro e o quarto digitos
    v = v.replace(/(\d{3})(\d)/, "$1.$2")    //Coloca ponto entre o setimo e o oitava digitos
    v = v.replace(/(\d{3})(\d)/, "$1-$2")   //Coloca ponto entre o decimoprimeiro e o decimosegundo digitos
    return v
}

//validação para data

alert(//^\d{2}\/\d{2}\/\d{d}$/.test("20/11/1990));
alert(//^\d{2}\/\d{2}\/\d{d2,4}$/.test("20/11/90 - 1990));

//validação de emails

alert(/\w+@\w+\.\w{2,3}/.test("breno@yahoo.com.br"));


alert(/c[ae]u/.test("ceu")); //aceita a letra 'e' e 'a'

alert(/\d[\d\,]*/.test("23,45"));
alert(/\d[\d\.]*/.test("23.45"));

var str = "meu carro é vermelho meu carro é vermelho meu carro é vermelho" //pesquisa em toda string com o modificador g
alert(str.match(/vermlho/ig));
alert(str.replace(/vemelho/ig, "VERMELHO")); //vermlho muda para toUpperCase

alert(str.match(/b[a-z]/ig)); //ba, be, bi, bo, bu
alert(str.replace(/b[a-z]/ig, "C")); //troca a letra R por C

var url = "www.xti.com"

var url = "www.breno.com.br/javascript-2016.html";
var site = /www.breno.com.br\/\w{2,}-\d{4}\.html;
alert(site.test(url)); 
//ilimitado o numero maxio de caracteres

function validarCPF(cpf) {
    var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;

    if (!filtro.test(cpf))
    {
        window.alert("CPF inválido. Tente novamente.");
        document.getElementById('cpf').value = "";
        return false;
    }

    cpf = remove(cpf, ".");
    cpf = remove(cpf, "-");

    if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" ||
            cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" ||
            cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" ||
            cpf == "88888888888" || cpf == "99999999999")
    {
        window.alert("CPF invá1ido. Tente novamente.");
        document.getElementById('cpf').value = "";
        return false;
    }

    soma = 0;
    for (i = 0; i < 9; i++)
    {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    resto = 11 - (soma % 11);
    if (resto == 10 || resto == 11)
    {
        resto = 0;
    }
    if (resto != parseInt(cpf.charAt(9))) {
        window.alert("CPF inválido. Tente novamente.");
        document.getElementById('cpf').value = "";
        return false;
    }

    soma = 0;
    for (i = 0; i < 10; i++)
    {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto == 10 || resto == 11)
    {
        resto = 0;
    }

    if (resto != parseInt(cpf.charAt(10))) {
        window.alert("CPF inválido. Tente novamente.");
        document.getElementById('cpf').value = "";
        return false;
    }

    return true;
}