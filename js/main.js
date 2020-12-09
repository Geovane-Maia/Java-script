function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar !</b>";
    //console.log(document.getElementById("agradecimento"));
}
function redirecionar(){
    window.open("https://www.youtube.com/");
   // window.location .href = "https://www.youtube.com/";
}

function passemouse(elemento){
    //document.getElementById("mouse").innerHTML="Lasque-se";
    elemento.innerHTML = "Lasque-se";
    //alert("Trocar texto");
}
function voltar(elemento){
    //document.getElementById("mouse").innerHTML="Passe o Mouse aqui !";
    elemento.innerHTML = "Passe o Mouse aqui !";
    //alert("Trocar texto");
}
function carregar(){
    alert("Página carregada !!");
}
function change(elemento){
console.log(elemento.value)
}
// var d = new Date;
// alert(d);
// alert(d.getDay);
// alert(d.getHours);

// var contador;
// for(contador = 0; contador <= 5; contador++){
// alert(contador);
// };

// var count = 0;
// while(count <= 5){
//     console.log(count);
//     alert(count);
//     count ++;
// };

// var idade = prompt("Qual a sua idade ?");
// if(idade >= 18){
//     alert("Maior de idade !!");
// }else{
//     alert("Menor de idade !!");
// };

// var fruta = {nome:"maça",cor:"vermelho"};
// console.log(fruta.nome);
// alert(fruta.cor);

// var nome = "Geovane Maia";
// var idade = 27;
// var idade2 = 10;
// //alert(nome + " Tem " + idade + "anos");
// alert(idade + idade2);

// var lista = ["Maça","Pera","Laranja"];
// //lista.push("Uva");
// //lista.pop();
// console.log(lista);
// alert(lista);