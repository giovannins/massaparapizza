    const data = [{
    "nome":"giovanni",
    "img": "pizzamaos.jpg",
    "sobrenome":"neves"
},
{
    "nome":"Jorge",
    "img": "foto2.jpeg",
    "sobrenome":"Sadauscas Filho"
},
{
    "nome":"Gabriel",
    "img": "foto1.jpeg",
    "sobrenome":"Neves"
}];

for(var i = 0; i < data.length; i++) {
    document.getElementById("teste").innerHTML += (`<p>${data[i].nome} ${data[i].sobrenome} </p>`)
    document.getElementById("teste").innerHTML += (`<img src="/imgs/${data[i].img}"/>`)
    }