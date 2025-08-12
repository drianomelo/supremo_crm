const dropdown = document.querySelectorAll(".dropdown");

// Função para fechar todos os dropdowns e abrir apenas o clicado
dropdown.forEach((drop) => {
  drop.addEventListener("click", () => {
    const content = drop.nextElementSibling;
    const isOpen = !content.classList.contains("d-none");

    dropdown.forEach((d) => {
      const c = d.nextElementSibling;
      if (c) c.classList.add("d-none");
    });

    if (!isOpen) {
      content.classList.remove("d-none");
    }
  });
});

// ========================
// Função para checkboxes
// ========================
function bindCheckboxListeners(content, valueDropdown) {
  const checkboxes = content.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const icon = checkbox.closest("label").querySelector("i");
      icon.classList.toggle("d-none", !checkbox.checked);

      const selecionados = content.querySelectorAll(
        "input[type=checkbox]:checked"
      ).length;

      if (selecionados > 0) {
        valueDropdown.textContent = `${selecionados} Selecionado${
          selecionados > 1 ? "s" : ""
        }`;
      } else {
        valueDropdown.textContent = "Selecione";
      }
    });
  });
}

// ========================
// Função para radios
// ========================
function bindRadioListeners(content, valueDropdown, callback) {
  const radios = content.querySelectorAll("input[type=radio]");
  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      radios.forEach((r) =>
        r.closest("label").querySelector("i").classList.add("d-none")
      );
      const icon = radio.closest("label").querySelector("i");
      icon.classList.remove("d-none");

      valueDropdown.textContent = callback(radio.value);
    });
  });
}

// ========================
// Checkboxes - SELECT MÚLTIPLO
// ========================
const dropdownChecboxes = document.querySelectorAll(".dropdown-checkboxes");
dropdownChecboxes.forEach((drop) => {
  const content = drop.nextElementSibling;
  const valueDropdown = drop.querySelector(".value-select");
  bindCheckboxListeners(content, valueDropdown);
});

// ========================
// Radios - SELECT SIMPLES
// ========================
const dropdownRadios = document.querySelectorAll(".dropdown-radios");
const dropdownBairros = document.querySelector(".dropdown-bairros + div > ul");
const valueDropdownBairros = document.querySelector(
  ".dropdown-bairros > div > .value-select"
);

const CONTENT_BAIRROS_CIDADE = [
  {
    id: 0,
    cidade: "Balneário Camboriú",
    bairros: [
      { value: "centro", nome: "Centro" },
      { value: "pionerios", nome: "Pionerios" },
    ],
  },
  {
    id: 1,
    cidade: "Itajaí",
    bairros: [
      { value: "cabecudas", nome: "Cabeçudas" },
      { value: "centro", nome: "Centro" },
      { value: "fazenda", nome: "Fazenda" },
      { value: "fazendinha", nome: "Fazendinha" },
      { value: "praia brava", nome: "Praia Brava" },
      { value: "praia brava de itajai", nome: "Praia Brava de Itajaí" },
    ],
  },
  {
    id: 2,
    cidade: "Itapema",
    bairros: [{ value: "centro", nome: "Centro" }],
  },
];

dropdownRadios.forEach((radio) => {
  const content = radio.nextElementSibling;
  const initialValue =
    content.querySelector("input[type=radio]:checked")?.value || 0;
  const valueDropdown = radio.querySelector(".value-select");

  valueDropdown.textContent = CONTENT_BAIRROS_CIDADE[initialValue].cidade;

  renderBairros(initialValue);

  bindRadioListeners(content, valueDropdown, (value) => {
    valueDropdownBairros.textContent = "Selecione";
    renderBairros(value);
    return CONTENT_BAIRROS_CIDADE[value].cidade;
  });
});

// ========================
// Renderizar bairros + bind checkboxes
// ========================
function renderBairros(cidadeIndex) {
  dropdownBairros.innerHTML = CONTENT_BAIRROS_CIDADE[cidadeIndex].bairros
    .map(
      (bairro) => `
      <li class="position-relative itens-select-dropdown">
        <label
          for="${bairro.value}"
          class="d-flex align-items-center gap-1 p-3 pb-0"
        >
          <i class="fa-solid fa-check d-none fs-7 text-blue mt-1"></i>
          <input
            class="d-none"
            type="checkbox"
            name="bairros[]"
            value="${bairro.value}"
            id="${bairro.value}"
          />
          ${bairro.nome}
        </label>
      </li>
    `
    )
    .join("");

  bindCheckboxListeners(dropdownBairros, valueDropdownBairros);
}
