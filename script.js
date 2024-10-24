function textC(){
    var $textC = window.document.getElementById('curso');
    $textC.style.background="rgba(179, 143, 255)";
    $textC.innerHTML=`<b>Formação</b><br><br>
    Eu estou no último semestre de Análise e Desenvolvimento de Sistema na Cruzeiro
    do Sul. <br><br>Desde pequeno
    tive a oportunidade de ter um computador e a tecnologia
    tem me acompanhado desde dos meus 6 anos até atualmente.<br><br>
    A área de TI não foi a minha primeira escolha, tinha sido Recursos Humanos,
    porém não me identifiquei com o curso e tranquei no primeiro semestre. Um
    ano depois, me inscrevi em ADS e me encontrei na área.`;

}

function textC2(){
    $textC2 = window.document.getElementById('curso');
    $textC2.style.background ='#afff8f'
    $textC2.innerHTML = `<b>Hard Skills</b><br><br>
    <b>Inglês:</b> Intermediário<br><br>
    <b>HTML/CSS:</b> Intermediário<br><br>
    <b>Javascript:</b> Intermediário<br><br>
    <b>Python:</b> Intermediário<br><br>
    <b>Java:</b> Básico<br><br>
    <b>SQL:</b> Básico`;

}

function textC3(){
    $textC3 = window.document.getElementById('curso');
    $textC3.style.background="#ff8f8f"
    $textC3.innerHTML=`<b>Soft Skills</b><br><br> 
     Proatividade<br><br>Paciência<br><br>Empatia<br><br>Dedicação<br><br>Agilidade<br><br>
     Bom com metas<br>`

}

function color3(){
    var $color3 = window.document.getElementById('btnC-3');
    $color3.style.background ='#ff8f8f'

}

function mout3(){
    var $mout3 = window.document.getElementById('btnC-3');
    $mout3.style.backgroundColor =`rgba(240, 240, 240, 0.5)`

}

function color2(){
    var $color2 = window.document.getElementById('btnC-2');
    $color2.style.background ='#afff8f'

}
function mout2(){
    var $mout2 = window.document.getElementById('btnC-2');
    $mout2.style.backgroundColor =`rgba(240, 240, 240, 0.5)`

}

function color1(){
    var $color1 = window.document.getElementById('btnC');
    $color1.style.background="rgba(179, 143, 255)";

}

function mout1(){
    var $mout1 = window.document.getElementById('btnC');
    $mout1.style.backgroundColor =`rgba(240, 240, 240, 0.5)`
}

//função dinamica

function $caixa1(){

    document.body.style.backgroundSize = '100% 100%';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.height = '100vh';
    document.body.style.background='linear-gradient(0deg, rgba(121,25,120,1) 0%, rgba(155,62,154,1) 26%, rgba(240, 240, 240, 0) 71%)';

    var $caixa1 = window.document.getElementById('sobre1');
    $caixa1.style.display='flex';

    var $caixa2 = window.document.getElementById('display-curso');
    $caixa2.style.display = 'none';

    var $caixa3 = window.document.getElementById('display-prof');
    $caixa3.style.display = 'none';
    
}

function $caixa2(){
   
    document.body.style.backgroundSize = '100% 100%';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.height = '100vh';
    document.body.style.background='linear-gradient(0deg, rgba(25,121,70,1) 0%, rgba(62,155,121,1) 26%, rgba(240 , 240, 240, 0) 71%)';
    var $caixa1 = window.document.getElementById('sobre1');
    $caixa1.style.display='none';

    var $caixa2 = window.document.getElementById('display-curso');
    $caixa2.style.display = 'flex';

    var $caixa3 = window.document.getElementById('display-prof');
    $caixa3.style.display = 'none';
    
}

function $caixa3(){
    
    document.body.style.backgroundSize = '100% 100%';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.height = '100vh';
    document.body.style.background='linear-gradient(0deg, rgba(148,1,1,1) 0%, rgba(232,59,44,1) 26%, rgba( 240, 240, 240, 0) 71%)';
    var $caixa1 = window.document.getElementById('sobre1');
    $caixa1.style.display='none';

    var $caixa2 = window.document.getElementById('display-curso');
    $caixa2.style.display = 'none';

    var $caixa3 = window.document.getElementById('display-prof');
    $caixa3.style.display = 'flex';
    
}
window.onload = () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((button) => {
        // Adiciona uma classe indicando que a animação foi executada
        button.classList.add('animation-executed');
        
        button.addEventListener('animationend', () => {
            button.classList.remove('animation-executed'); // Remove a classe após a animação
        });
    });
};

console.log('script carregado!')