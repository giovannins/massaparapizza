fetch("/js/pizzas.json")
    .then((rawData) => {
        return rawData.json()
    })
    .then(data => {
        data.forEach(data => {
            document.getElementById("produtos").innerHTML += (`
            <div class="col-md-4">
                <div class="card m-2">
                    <img src="/imgs/${data.img}" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">${data.titulo}</h5>
                        <p class="card-text">${data.descrição}</p>
                        <hr />
                        <h5 class="card-title">Preços</h5>
                        <span class="fw-lighter small">${data.aviso}</span>
                        <p class="card-text">Unidade - R$${data.preços.unidade}</p>
                        <p class="card-text">Pacote com ${data.preços.quantidade_pacote1} - R$${data.preços.pacote1}</p>
                        <p class="card-text">Pacote com ${data.preços.quantidade_pacote2} - R$${data.preços.pacote2}</p>
                    </div>
                </div>
            </div>
            `)
        });

    })