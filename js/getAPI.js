fetch("jlc_api.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro ao carregar JSON: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    document.getElementById("lancamentos").innerHTML = `
        ${data.secoes.lancamentos
          .map((lancamento) => {
            return `
                <div class="col-lg-4 col-sm-6 col-12 card-lancamentos">
                    <div class="card-lancamentos-figure position-relative rounded-4 p-3 d-flex gap-2 flex-column justify-content-end overflow-hidden" style="height: 300px;">
                        <span class="card-lancamentos-tag position-absolute z-2 bg-orange fs-8 rounded-start-4 px-3 text-white fw-semibold">${
                          lancamento.tipo
                        }</span>
                        <span class="card-lancamentos-tag position-absolute z-2 bg-orange fs-8 rounded-start-4 px-3 text-white fw-semibold">${
                          lancamento.codigo
                        }</span>
                        <div class="card-lancamentos-bg w-100 h-100 position-absolute start-0 top-0" style="background: url('${
                          lancamento.foto_link
                        }') center/cover no-repeat;"></div>
                        <h4 class="text-white fw-semibold position-relative mb-0 z-2">${
                          lancamento.titulo
                        }</h4>
                        <div class="d-flex position-relative align-items-center justify-content-between z-2">
                            <div class="d-flex align-items-center gap-2">
                                <i class="fa-solid fa-location-dot text-white"></i>
                                <p class="text-white mb-0">${
                                  lancamento.localizacao.bairro
                                }</p>
                            </div>
                            <button class="border bg-transparent px-3 rounded">
                                <i class="fs-7 fa-solid fa-arrow-right-long text-white"></i>
                            </button>
                        </div>
                    </div>

                    <div class="d-flex flex-column gap-2 p-3 mt-2">
                        <span class="fw-semibold text-black d-flex align-items-center gap-2">
                            <i class="fs-7 opacity-50 fa-solid fa-arrow-right"></i>
                            ${lancamento.localizacao.cidade}
                        </span>
                        <span class="fw-semibold text-black d-flex align-items-center gap-2">
                            <i class="fs-7 opacity-50 fa-solid fa-arrow-right"></i>
                            ${lancamento.localizacao.rua}
                        </span>
                        <span class="fw-semibold text-black d-flex align-items-center gap-2">
                            <i class="fs-7 opacity-50 fa-solid fa-arrow-right"></i>
                            A partir de: <b>${lancamento.preco_a_partir.toLocaleString(
                              "pt-BR",
                              {
                                style: "currency",
                                currency: "BRL",
                              }
                            )}</b>
                        </span>
                    </div>

                    <div class="w-100 d-flex justify-content-center mt-2">
                        <a href="" class="fw-semibold text-white w-75 text-center link-underline py-2 rounded-2 link-underline-opacity-0 bg-orange">
                            Ver mais informações
                        </a>
                    </div>
                </div>
          `;
          })
          .join("")}

    `;

    document.getElementById("venda").innerHTML = `
        ${data.secoes.venda
          .map((imovel) => {
            return `
                <div class="col-lg-4 col-sm-6 col-12 card-vendas">
                    <div class="card-vendas-figure position-relative rounded-3 p-2 overflow-hidden" style="height: 250px;">
                        <div class="card-vendas-bg w-100 h-100 position-absolute start-0 top-0" style="background: url('${
                          imovel.foto_link
                        }') center/cover no-repeat;"></div>
                        <div class="card-vendas-tags position-absolute row gap-1" style="left: 20px">
                            ${imovel.tags
                              .map((tag) => {
                                return `
                                    <span
                                        class="bg-orange text-white fs-8 rounded-5 px-3 fw-semibold"
                                        style="width: fit-content; padding:.1rem 0 .1rem 0"
                                        >${tag}</span
                                    >
                                `;
                              })
                              .join("")}
                        </div>
                    </div>

                    <div class="d-flex flex-column gap-2 mt-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="text-black fw-bold fs-5">${imovel.preco.toLocaleString(
                              "pt-BR",
                              {
                                style: "currency",
                                currency: "BRL",
                              }
                            )}</span>
                            <span class="fs-7 opacity-50">Cod. ${imovel.codigo}</span>
                        </div>

                        <div class="d-flex flex-column">
                            <span class="text-black opacity-75">${imovel.titulo}, ${imovel.tipo}</span
                            >
                            <span class="text-black opacity-75">${imovel.localizacao.endereco} - ${imovel.localizacao.bairro}, ${imovel.localizacao.cidade}</span>
                        </div>

                        <ul class="d-flex gap-4 ps-0 m-0">
                            <li class="fs-7 text-black fw-bold" style="list-style: none">
                            ${imovel.area_total_m2}
                            </li>
                            <li class="fs-7 text-black fw-bold">${imovel.quartos} quartos</li>
                            <li class="fs-7 text-black fw-bold">${imovel.suites} suites</li>
                            <li class="fs-7 text-black fw-bold">${imovel.vagas} vagas</li>
                        </ul>
                    </div>
                </div>
          `;
          })
          .join("")}

    `;

    document.getElementById("alugar").innerHTML = `
        ${data.secoes.aluguel
          .map((imovel) => {
            return `
                <div class="col-lg-4 col-sm-6 col-12 card-vendas">
                    <div class="card-vendas-figure position-relative rounded-3 p-2 overflow-hidden" style="height: 250px;">
                        <div class="card-vendas-bg w-100 h-100 position-absolute start-0 top-0" style="background: url('${
                          imovel.foto_link
                        }') center/cover no-repeat;"></div>
                        <div class="card-vendas-tags position-absolute row gap-1" style="left: 20px">
                            ${imovel.tipo
                              .map((tag) => {
                                return `
                                    <span
                                        class="bg-orange text-white fs-8 rounded-5 px-3 fw-semibold"
                                        style="width: fit-content; padding:.1rem 0 .1rem 0"
                                        >${tag}</span
                                    >
                                `;
                              })
                              .join("")}
                        </div>
                    </div>

                    <div class="d-flex flex-column gap-2 mt-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="text-white fw-bold fs-5">${imovel.preco.toLocaleString(
                              "pt-BR",
                              {
                                style: "currency",
                                currency: "BRL",
                              }
                            )}</span>
                            <span class="fs-7 opacity-50">Cod. ${imovel.codigo}</span>
                        </div>

                        <div class="d-flex flex-column">
                            <span class="text-white opacity-75">${imovel.titulo}</span
                            >
                            <span class="text-white opacity-75">${imovel.localizacao.endereco} - ${imovel.localizacao.bairro}, ${imovel.localizacao.cidade}</span>
                        </div>

                        <ul class="d-flex gap-4 ps-0 m-0">
                            <li class="fs-7 text-white fw-bold" style="list-style: none">
                            ${imovel.area_util_m2}
                            </li>
                            <li class="fs-7 text-white fw-bold">${imovel.banheiros} banheiros</li>
                            <li class="fs-7 text-white fw-bold">${imovel.vagas} vagas</li>
                        </ul>
                    </div>
                </div>
          `;
          })
          .join("")}

    `;
  })
  .catch((error) => {
    console.error("Erro:", error);
  });
