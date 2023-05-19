//------------------------------------------------------------ Salvar dados -----------------------------------------------------------------------//
var app = new Vue({
    el: '#app',
    data: {
        lista: [],
        obj: {
            nome: '',
            email: '',
            telefone: '',
            sexo: 'Masculino',
        }
    }
})

function adicionarPessoa() {
    var novo = {
        nome: app.obj.nome,
        email: app.obj.email,
        telefone: app.obj.telefone,
        sexo: app.obj.sexo
    }

    app.obj.nome = ""
    app.obj.email = ""
    app.obj.telefone = ""
    app.obj.sexo = "Masculino"

    app.lista.push(novo)

    alert()

    console.log(novo)
}

function alert() {
    Swal.fire(
        'Sucesso!',
        'Cadastro enviado',
        'success'
    )
}

//------------------------------------------------------------ Colocar Dark -----------------------------------------------------------------------//
var themeButton = document.getElementById('btnFuncao');
var btnImagem = document.getElementById('btnImagem');   
var body = document.body;
var footer = document.querySelector('.final');
var boxShadow = document.querySelectorAll('.banner');
var border1 = document.querySelector('.container');
var border2 = document.querySelectorAll('.banner3');
var savedTheme = localStorage.getItem('theme');
var clickKey = true;

// Verifica antes se ja está no dark //
if (savedTheme === 'dark') {
    //----------ICONE----------//
    var imagemAtual = btnImagem.getAttribute('src');
    var novaImagem = (imagemAtual == '../img/icon moon.png') ? '../img/icon sun.png' : '../img/icon moon.png';
    btnImagem.setAttribute('src', novaImagem);

    //----------GERAL----------//
    body.classList.toggle('dark');
    footer.classList.toggle('dark');

    //----------HTML 1----------//
    boxShadow.forEach(function(element) {
        element.classList.toggle('dark');
    });

    //----------HTML 2----------//
    if (border1) {
        border1.classList.toggle('dark');
    }

    //----------HTML 3----------//
    border2.forEach(function(element) {
        element.classList.toggle('dark');
    });
    clickKey = false;
}

// Botão para mudar tema
btnFuncao.addEventListener('click', function() {
    //----------ICONE----------//
    var imagemAtual = btnImagem.getAttribute('src');
    var novaImagem = (imagemAtual == '../img/icon moon.png') ? '../img/icon sun.png' : '../img/icon moon.png';
    btnImagem.setAttribute('src', novaImagem);

    //----------GERAL----------//
    body.classList.toggle('dark');
    footer.classList.toggle('dark');

    //----------HTML 1----------//
    boxShadow.forEach(function(element) {
        element.classList.toggle('dark');
    });

    //----------HTML 2----------//
    if (border1) {
        border1.classList.toggle('dark');
    }

    //----------HTML 3----------//
    border2.forEach(function(element) {
        element.classList.toggle('dark');
    }); 

    var isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'default');
    clickKey = !clickKey;
});

//------------------------------------------------------------ Efeitos Sonoros -----------------------------------------------------------------------//
var soundNav = document.getElementById('soundNav');
soundNav.currentTime = 0;
soundNav.volume = 0.5;
soundNav.play()

function audioEfect() {
    if (clickKey) {
        var soundSun = document.getElementById('soundMoon'); //som do modo claro
        soundSun.currentTime = 0;
        soundSun.volume = 0.5;
        soundSun.play()
    } else {
        var soundMoon = document.getElementById('soundSun'); //som do modo escuro
        soundMoon.currentTime = 0;
        soundMoon.volume = 0.5;
        soundMoon.play()
    }
}

function audioCadastrar() {
    var soundCadastrar = document.getElementById('soundCadastrar');
    soundCadastrar.currentTime = 0;
    soundCadastrar.volume = 0.5;
    soundCadastrar.play()
}

function playEvent1() {
    var soundBanner1 = document.getElementById('soundBanner1');
    soundBanner1.volume = 0.5;
    soundBanner1.play()
}

function playEvent2() {
    var soundBanner2 = document.getElementById('soundBanner2');
    soundBanner2.volume = 0.5;
    soundBanner2.play()
}

function playEvent3() {
    var soundBanner3 = document.getElementById('soundBanner3');
    soundBanner3.volume = 0.5;
    soundBanner3.play()
}