
function clicou(){
    //alert("obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
   // console.log(document.getElementById("agradecimento"))

}

function redirecionar(){
    window.open("https://github.com/williamlopesdev/JS_DIO_HTML_CSS");
    window.location.href = "https://github.com/williamlopesdev/JS_DIO_HTML_CSS";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse"
   // alert("trocar texto")
   elemento.innerHTML = "obrigado por passar o mouse"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"

}


function load(){
    alert("pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}



/*
function soma(n1,n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;

    if(idade >= 18){
    validar = true
}else{
    validar = false
}
    return validar
}


var idade = prompt("qual sua idade?")
console.log(validaIdade(idade))
*/
//alert(soma(5,10));





//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome)
//}

//alert(soma(5,10));
//alert(setReplace("vai, Japão", "Jãpão", "Brasil"));





/*
var d = new Date();
alert(d.getMonth()+1)
 */




/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/




/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};

*/

/*
var idade = prompt("Qual sua idade?")
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
}
*/
/*
var fruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(fruta);
alert(fruta[1].nome);
*/

//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta)

//var lista = ["maça", "pêra", "laranja"];

//console.log(lista;

//console.log(lista.join("-")); - transforma em string e coloca um traço


//console.log(lista.toString()); - transforma em string


//console.log(lista.reverse()); - inverte a posição dos elementos


//console.log(lista.length); - mostra o tamanho da lista


//lista.pop() / retira o ultimo elemento do array


//lista.push("uva"); - insere no final

//alert(lista[2])


//var nome = "William Lopes";
//var idade = 35;
//var idade2 = 29;
//var frase = "Japão é o melhor time do mundo!";

//alert(nome + " tem " + idade + " anos")

//alert(idade + idade2)

//console.log(nome);
//console.log(idade);
//console.log(idade2);
//console.log(idade + idade2)
//console.lo
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());


