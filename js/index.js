fetch("/js/pizzas.json")
    .then((rawData) => {
        return rawData.json()
    })
    .then(data => {
        console.log(data)

        for (var i = 0; i < data.length; i++) {
            document.getElementById("teste").innerHTML += (`<p>${data[i].nome} ${data[i].sobrenome} </p>`)
            document.getElementById("teste").innerHTML += (`<img src="/imgs/${data[i].img}"/>`)
        }
    })