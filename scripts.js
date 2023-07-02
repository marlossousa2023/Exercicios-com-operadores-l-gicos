const button = document.querySelector('.change-img')

function changeText(texto) {

    let textTwo = document.querySelector('h3')
    textTwo.innerHTML = texto
}

function changeImg(imagem){

    let mainImg = document.querySelector('.main-img')
    mainImg.src = imagem
}

