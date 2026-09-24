// Função para abrir o lightbox simples nas imagens de resultados
function openLightbox(element) {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const img = element.querySelector('img');
    
    modal.classList.add('active');
    modalImg.src = img.src;
}

// Função para fechar o lightbox
function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    modal.classList.remove('active');
}

// Fechar com a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});
