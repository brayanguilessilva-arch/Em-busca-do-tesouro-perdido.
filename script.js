const avanca = document.querySelector(' .bnt-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo')
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        arual.classList.remove('ativo');
        documento.getElementById(proximoPasso).classList.add('ativo');
    })
})