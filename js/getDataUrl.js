const params = new URLSearchParams(window.location.search);
const data = params.get("data");

if (data) {
  const parts = data.split("/");

  const getValue = (key) => {
    const idx = parts.indexOf(key);
    return idx >= 0 && idx + 1 < parts.length
      ? decodeURIComponent(parts[idx + 1])
      : "";
  };

  const fields = [
    {
      key: "cidade",
      selector: ".cidade-value",
      liSelector: "li:has(.cidade-value)",
    },
    {
      key: "categoria",
      selector: ".tipos-value",
      liSelector: "li:has(.tipos-value)",
      isList: true,
    },
    {
      key: "bairros",
      selector: ".bairros-value",
      liSelector: "li:has(.bairros-value)",
      isList: true,
    },
    {
      key: "valor_de",
      selector: ".valor-de-value",
      liSelector: "li:has(.valor-de-value)",
    },
    {
      key: "valor_ate",
      selector: ".valor-ate-value",
      liSelector: "li:has(.valor-ate-value)",
    },
    {
      key: "codigo",
      selector: ".codigo-value",
      liSelector: "li:has(.codigo-value)",
    },
  ];

  fields.forEach(({ key, selector, liSelector, isList }) => {
    const value = getValue(key);
    const li = document.querySelector(liSelector);
    const span = document.querySelector(selector);

    if (!value || value === "0") {
      if (li) li.style.display = "none";
    } else {
      if (li) li.style.display = "";

      const text = isList ? value.replace(/_/g, ", ") : value;
      if (span) span.textContent = text;
    }
  });
} else {
  document
    .querySelectorAll("section ul li")
    .forEach((li) => (li.style.display = "none"));
}
