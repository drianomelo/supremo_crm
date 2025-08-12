const form = document.getElementById("form-search");

const CONTENT_CIDADE = [
  {
    id: 0,
    cidade: "balneario-camboriu",
  },
  {
    id: 1,
    cidade: "itajai",
  },
  {
    id: 2,
    cidade: "itapema",
  },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const tipos = Array.from(
    form.querySelectorAll('input[name="tipos[]"]:checked')
  )
    .map((input) => input.value)
    .join("_");

  const cidadeInput = form.querySelector('input[name="cidades"]:checked');
  const cidade = cidadeInput ? CONTENT_CIDADE[cidadeInput.value].cidade : "";

  const bairros = Array.from(
    form.querySelectorAll('input[name="bairros[]"]:checked')
  )
    .map((input) => input.value)
    .join("_");

  const valorDe = form.querySelector('select[name="valorDe"]').value || "0";
  const valorAte = form.querySelector('select[name="valorAte"]').value || "0";

  const codigoInput = form.querySelector(".cod-search input[type='text']");
  const codigo = codigoInput ? codigoInput.value.trim() : "0";

  const urlPath = `cidade/${encodeURIComponent(
    cidade || "0"
  )}/categoria/${encodeURIComponent(tipos || "0")}/bairros/${encodeURIComponent(
    bairros || "0"
  )}/valor_de/${encodeURIComponent(valorDe)}/valor_ate/${encodeURIComponent(
    valorAte
  )}/codigo/${encodeURIComponent(codigo || "0")}/`;

  window.location.href = `busca.html?data=${encodeURIComponent(urlPath)}`;
});
