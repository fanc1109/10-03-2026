const formulario = document.getElementById("cepForm");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit",async(evento)=>{
    evento.preventDefault();
    //sanitização de dados
    const cep = document.getElementById("cep").value.replace(/\D/g,"") ;
    if(cep.length!=8){
        alert("Por favor,digite umCEP com 8 dígitos")
    }
});