const resultContainer = document.getElementById("resultContainer")
const container = document.querySelector('.esconder')
const cepForm = document.getElementById("cepForm")
const cepInput = document.getElementById("cepInput")


cepForm.addEventListener("submit", function(event) {
  event.preventDefault()
  const cep = cepInput.value
  buscarCep(cep)
  container.setAttribute("style", "visibility: visible !important")
})

function buscarCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if(!data.erro) {
        resultContainer.innerHTML = `
          <p><strong>CEP:</strong> ${data.cep}</p>
          <p><strong>Logradouro:</strong> ${data.logradouro}</p>
          <p><strong>Complemento:</strong> ${data.complemento}</p>
          <p><strong>Bairro:</strong> ${data.bairro}</p>
          <p><strong>Cidade:</strong> ${data.localidade}</p>
          <p><strong>Estado:</strong> ${data.uf}</p>
        `;
      } else {
        resultContainer.innerHTML = "CEP não encontrado."
      }
    })
    .catch(error => {
      resultContainer.innerHTML = `
        <p class="erro">Ocorreu um erro na solicitação.<p>
        <p class="erro-message">Verifique sua conexão ou tente novamente mais tarde.<p>
      `
      console.error(error)
    })
}
