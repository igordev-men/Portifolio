document.addEventListener('DOMContentLoaded', function() {
    // Código para o Modal
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close"); // O "X" para fechar o modal
    const newCloseModalButton = document.querySelector(".modal-close-btn"); // Botão "Fechar" do modal

    // Fechar modal pelo "X"
    if (closeModal) {
        closeModal.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Fechar modal pelo novo botão "Fechar"
    if (newCloseModalButton) {
        newCloseModalButton.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Fechar ao clicar fora do modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Abrir modal
    function openModal(title, description) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = "block";
    }

    // Selecionar todas as box de hard skill e abrir o modal
    const boxes = document.querySelectorAll(".bg-hard");

    boxes.forEach(box => {
        box.addEventListener("click", function() {
            const imgAlt = this.querySelector("img").alt;
            const nivelElement = this.querySelector("b");
            // Adicionado verificação para garantir que nivelElement existe antes de tentar acessar textContent
            const nivel = nivelElement ? nivelElement.textContent : 'Nível não especificado'; 
            const descricao = this.getAttribute("data-desc");

            openModal(imgAlt, `${descricao}\n\nNível: ${nivel}`);
        });
    });

    // ----------------------------------------------------
    // Código para o Menu Hambúrguer
    // ----------------------------------------------------
    const menuIcon = document.getElementById('menu-icon'); // Ícone de abrir o menu
    const mobileNav = document.getElementById('mobile-nav'); // O div da navegação mobile
    const closeMenuIcon = document.getElementById('close-menu-icon'); // Botão de fechar o menu (o "X" dentro do menu)

    // Verifica se os elementos do menu existem antes de adicionar os event listeners
    if (menuIcon && mobileNav) {
        // Evento para abrir/fechar o menu clicando no ícone do hambúrguer
        menuIcon.addEventListener('click', function() {
            mobileNav.classList.toggle('active'); // Adiciona ou remove a classe 'active'
        });

        // Evento para fechar o menu pelo botão "X" dentro do menu
        if (closeMenuIcon) { // Garante que o botão de fechar existe
            closeMenuIcon.addEventListener('click', function() {
                mobileNav.classList.remove('active'); // Remove a classe 'active' para fechar o menu
            });
        }

        // Fechar o menu ao clicar em um link
        // Seleciona todos os links com a classe 'navbar' dentro do 'mobileNav'
        const navLinks = mobileNav.querySelectorAll('.navbar'); 
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active'); // Remove a classe 'active' para fechar o menu
            });
        });
    }
});