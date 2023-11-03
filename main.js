document.getElementById("meuFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var campoA = document.getElementById("campoA").value;
  var campoB = document.getElementById("campoB").value;

  if (parseInt(campoB) > parseInt(campoA)) {
    document.getElementById("mensagem").innerHTML = "Formulário válido!";
    document.getElementById("mensagem").style.color = "green";
  } else {
    document.getElementById("mensagem").innerHTML = "Formulário inválido!";
    document.getElementById("mensagem").style.color = "red";
  }
});
