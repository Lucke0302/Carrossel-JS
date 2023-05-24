// definimos o botão previous do html como a variável previous
previous = document.getElementById("previous");
// definimos o botão next do html como a variável next
next = document.getElementById("next");
// definimos a div carousel do html como a variável carousel
carousel = document.getElementById("carousel");
// imgnum é o número da imagem no arquivo json (lembre-se que um objeto sempre se inicia por 0)
imgnum = 0;
// definimos a imagem de fundo do carrossel como a primeira
carousel.style.backgroundImage = "url('images/first.png')";

// atribuímos uma função ao clicar no botão previous
previous.addEventListener('click', () => {
    if(imgnum == 0){
        imgnum = 4;
    }
    else{
        imgnum -= 1;
    }
    // nosso script irá buscar no arquivo json a imagem correspondente ao número atual e defini-la como imagem de fundo
    fetch("images.json").then((response) => {
        response.json().then((dados) => {        
            img = dados.images[imgnum].link;
            carousel.style.backgroundImage = "url('images/"+img+"')";
        });
    });
});

// atribuímos uma função ao clicar no botão next
next.addEventListener('click', () => {
    if(imgnum == 4){
        imgnum = 0;
    }
    else{
        imgnum += 1;
    }
    // nosso script irá buscar no arquivo json a imagem correspondente ao número atual e defini-la como imagem de fundo
    fetch("images.json").then((response) => {
        response.json().then((dados) => {        
            img = dados.images[imgnum].link;
            carousel.style.backgroundImage = "url('images/"+img+"')";
        });
    });
});