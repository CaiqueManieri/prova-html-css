//Colocar modo dark
var themeButton = document.getElementById('btnFuncao');
var btnImagem = document.getElementById('btnImagem');   
var body = document.body;
var footer = document.querySelector('.final');
var boxShadow = document.querySelectorAll('.banner');
var border1 = document.querySelector('.container');
var border2 = document.querySelectorAll('.banner3');
var savedTheme = localStorage.getItem('theme')

// Verifica antes se ja está no dark
if (savedTheme === 'dark') {
    //----------ICONE----------
    var imagemAtual = btnImagem.getAttribute('src');
    var novaImagem = (imagemAtual == '../img/icon moon.png') ? '../img/icon sun.png' : '../img/icon moon.png';
    btnImagem.setAttribute('src', novaImagem);

    //----------GERAL----------
    body.classList.toggle('dark');
    footer.classList.toggle('dark');

    //----------HTML 1----------
    boxShadow.forEach(function(element) {
        element.classList.toggle('dark');
    });

    //----------HTML 2----------
    if (border1) {
        border1.classList.toggle('dark');
    }

    //----------HTML 3----------
    border2.forEach(function(element) {
        element.classList.toggle('dark');
    });
}

// Botão para mudar tema
btnFuncao.addEventListener('click', function() {
    //----------ICONE----------
    var imagemAtual = btnImagem.getAttribute('src');
    var novaImagem = (imagemAtual == '../img/icon moon.png') ? '../img/icon sun.png' : '../img/icon moon.png';
    btnImagem.setAttribute('src', novaImagem);

    //----------GERAL----------
    body.classList.toggle('dark');
    footer.classList.toggle('dark');

    //----------HTML 1----------
    boxShadow.forEach(function(element) {
        element.classList.toggle('dark');
    });

    //----------HTML 2----------
    if (border1) {
        border1.classList.toggle('dark');
    }

    //----------HTML 3----------
    border2.forEach(function(element) {
        element.classList.toggle('dark');
    }); 

    var isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'default');
});