document.title = "Document";

var imagem = document.createElement
("img");
imagem.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimgnike-a.akamaihd.net%2F1300x1300%2F022662P1.jpg&tbnid=1sAeM-gLdRpU4M&vet=12ahUKEwjD-NDotM3-AhXpFbkGHe2eCF8QMygEegUIARDgAg..i&imgrefurl=https%3A%2F%2Fwww.nike.com.br%2Fchuteira-nike-zoom-superfly-9-elite-km-campo-022662.html&docid=uCu9cIeyMf-yFM&w=1300&h=1300&q=chuteira&ved=2ahUKEwjD-NDotM3-AhXpFbkGHe2eCF8QMygEegUIARDgAg";

imagem.style.width = "100px";

document.body.appendChild(imagem);

const lista = ["arabica", "espresso", "coado"];

const quad = (x) => x + x;

for(var i = 0; i < lista.length; i++){
    const li = document.createElement("li");

    li.textContent = lista[i];
    li.className = "tenho";

    ol.appendChild(li);
}

const p = document.createElement("p");
document.bo