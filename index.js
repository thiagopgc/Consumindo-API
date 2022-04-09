const url =
  "https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook";

function usandoApi() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      monstrandoApi.textContent = JSON.stringify(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

usandoApi();
