// Obtém uma referência ao botão
const likeButton = document.getElementById('like-button');

// Inicializa uma variável para rastrear o estado de curtida
let curtido = false;

// Adiciona um evento de clique ao botão
likeButton.addEventListener('click', () => {
    // Inverte o estado de curtida
    curtido = !curtido;

    // Atualiza a cor do ícone de coração com base no estado de curtida
    if (curtido) {
        likeButton.innerHTML = '<i class="fas fa-heart liked"></i>'; // Coração preenchido quando curtido
    } else {
        likeButton.innerHTML = '<i class="far fa-heart"></i>'; // Coração vazio quando não curtido
    }
});
