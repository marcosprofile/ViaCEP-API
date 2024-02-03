function buscarCep(cep) {
  var url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (!data.erro) {
        var resultContainer = document.getElementById("resultContainer");
        resultContainer.innerHTML = `
          <p><strong>CEP:</strong> ${data.cep}</p>
          <p><strong>Logradouro:</strong> ${data.logradouro}</p>
          <p><strong>Complemento:</strong> ${data.complemento}</p>
          <p><strong>Bairro:</strong> ${data.bairro}</p>
          <p><strong>Cidade:</strong> ${data.localidade}</p>
          <p><strong>Estado:</strong> ${data.uf}</p>
        `;
      } else {
        var resultContainer = document.getElementById("resultContainer");
        resultContainer.innerHTML = "CEP não encontrado.";
      }
    })
    .catch(error => {
      var resultContainer = document.getElementById("resultContainer");
      resultContainer.innerHTML = "Ocorreu um erro na solicitação. Verifique sua conexão ou tente novamente mais tarde.";
    });
}

var cepForm = document.getElementById("cepForm");
cepForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var cepInput = document.getElementById("cepInput");
  var cep = cepInput.value;
  buscarCep(cep);
});
