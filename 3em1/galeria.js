const images = [
    "img/fotoJeremias.jpeg",
    "img/showBurburinho.jpeg",
    "img/dataAABB.jpg",
    "img/dataTeamFenix.jpeg",
    "img/showClubedeCampo.jpg",
    "img/showJeremias.jpeg"
];

let currentIndex = 0;
const modal = document.getElementById("photoModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Função para abrir a modal
function openModal(index) {
    currentIndex = index;
    modal.style.display = "flex";
    modalImg.src = images[currentIndex];
}

// Função para fechar a modal
function closeModal() {
    modal.style.display = "none";
}

// Função para mudar a imagem
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    modalImg.src = images[currentIndex];
}

// Abrir modal ao clicar em uma imagem
const imageElements = document.querySelectorAll(".videos__item__pic, .videos__large__item");
imageElements.forEach((item, index) => {
    item.addEventListener("click", () => openModal(index));
});

// Fechar modal
closeBtn.addEventListener("click", closeModal);

// Fechar modal ao clicar fora da imagem
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Navegação por botões
prevBtn.addEventListener("click", () => changeImage(-1));
nextBtn.addEventListener("click", () => changeImage(1));

// Navegação por teclado
document.addEventListener("keydown", (e) => {
    if (modal.style.display === "flex") {
        if (e.key === "ArrowLeft") changeImage(-1);
        if (e.key === "ArrowRight") changeImage(1);
        if (e.key === "Escape") closeModal();
    }
});