const botao = document.getElementById("botao");
botao.addEventListener("click", (e) => {
  e.preventDefault();
  const valor = document.querySelector("#produto").value;
  const url = `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${valor}&source=nanook`;

  axios
    .get(url)
    .then((resp) => {
      const retornaProduto = document.getElementById("produtosRetornados");
      let produtos = resp.data.products;
      retornaProduto.innerHTML = "";

      produtos.map((item) => {
        console.log(item);
        retornaProduto.innerHTML += `
            <div class="card">
                <p class="text">Nome: ${item.name}</p>
                <p>ID: ${item.id}</p>
                <p>Pontuação: ${item._meta.score}</p>
                <p>Visitas ao produto: ${item._meta.visitsClickCount}</p>
            </div>
            `;
      });
    })
    .catch((e) => e.message);
});
