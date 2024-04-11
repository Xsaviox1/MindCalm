// Espera o DOM estar completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as caixas de vídeo
    const videoContainers = document.querySelectorAll('.wrap-video');

    // Para cada caixa de vídeo
    videoContainers.forEach(container => {
        // Adiciona um ouvinte de evento de clique
        container.addEventListener('click', function() {
            // Obtém o ID do vídeo armazenado no atributo data-video-id
            const videoId = container.getAttribute('data-video-id');

            // Cria um elemento iframe
            const iframe = document.createElement('iframe');
            // Define os atributos do iframe
            iframe.width = '151';
            iframe.height = '95';
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.title = 'YouTube video player';
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.referrerPolicy = 'strict-origin-when-cross-origin';
            iframe.allowFullscreen = true;

            // Substitui a imagem em miniatura pelo iframe do vídeo
            container.innerHTML = ''; // Limpa o conteúdo da caixa de vídeo
            container.appendChild(iframe); // Adiciona o iframe à caixa de vídeo
        });
    });
});
