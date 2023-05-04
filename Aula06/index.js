console.log("Hello World");

let dados;
const ul = document.querySelector("#lista-links");

async function getData(){
    dadosJson = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
    let dados = await dadosJson.json();

    // console.log("DadosJSON: ", dadosJson);
    // console.log("Dados: ", dados);
    // console.log("Link: ", dados[2].url);
    // console.log("Array: ", dados.length);
    
    dados.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item.url;
        
        ul.appendChild(li);
    });
}
    
getData();


console.log("Fim");