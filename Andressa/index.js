
const jogarDado=()=> {
    let resultado = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById("resultado").innerHTML = "Você tirou o número " + resultado + "!";
  }