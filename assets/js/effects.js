window.addEventListener('load', function() {
    var preloader = document.querySelector('.preloader');
    var content = document.querySelector('.content');

    // Adiciona a classe 'loaded' após o carregamento completo da página
    preloader.classList.add('loaded');
    
    // Após um tempo de exibição mais longo, oculta o preloader e exibe o conteúdo da página
    setTimeout(function() {
        preloader.style.display = 'none'; // Oculta o preloader
        content.style.display = 'block'; // Exibe o conteúdo da página
    }, 2000); // Ajuste o tempo de exibição conforme necessário (aqui são 2 segundos)
});

// Adicionando a classe 'loaded' ao corpo da página após o carregamento completo do documento
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
