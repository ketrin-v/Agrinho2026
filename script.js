// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação dos números das estatísticas
const stats = document.querySelectorAll('.stat-number');
let animated = false;

function animateNumbers() {
    if (animated) return;
    
    const triggerBottom = window.innerHeight * 0.8;
    const statsSection = document.querySelector('.hero-stats');
    const sectionTop = statsSection.getBoundingClientRect().top;
    
    if (sectionTop < triggerBottom) {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50;
            const updateNumber = () => {
                current += increment;
                if (current < target) {
                    stat.innerText = Math.ceil(current);
                    requestAnimationFrame(updateNumber);
                } else {
                    stat.innerText = target;
                }
            };
            updateNumber();
        });
        animated = true;
    }
}

// Cards de Práticas Sustentáveis (inseridos via JS)
const cardsData = [
    {
        title: "Plantio Direto",
        text: "Técnica que preserva a estrutura do solo, reduz erosão e aumenta a retenção de água.",
        image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0a7cc2?w=400&h=200&fit=crop"
    },
    {
        title: "Energia Solar no Campo",
        text: "Utilização de painéis fotovoltaicos para reduzir custos e emissões nas operações agrícolas.",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=200&fit=crop"
    },
    {
        title: "Rotação de Culturas",
        text: "Alternância de espécies que melhora a fertilidade do solo e controla pragas naturalmente.",
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72b?w=400&h=200&fit=crop"
    }
];

function createCards() {
    const container = document.getElementById('cardsContainer');
    if (!container) return;
    
    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.title}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${card.title}</h3>
                <p class="card-text">${card.text}</p>
            </div>
        `;
        container.appendChild(cardElement);
    });
}

// Newsletter Form
const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    
    if (email && email.includes('@') && email.includes('.')) {
        formMessage.textContent = '✅ Inscrição realizada com sucesso! 🌱';
        formMessage.style.color = '#a8c686';
        emailInput.value = '';
        setTimeout(() => {
            formMessage.textContent = '';
        }, 3000);
    } else {
        formMessage.textContent = '❌ Por favor, insira um e-mail válido.';
        formMessage.style.color = '#ff9999';
        setTimeout(() => {
            formMessage.textContent = '';
        }, 3000);
    }
});

// Botão "Saiba Mais" com alerta personalizado
const saibaMaisBtn = document.getElementById('saibaMaisBtn');
if (saibaMaisBtn) {
    saibaMaisBtn.addEventListener('click', () => {
        alert('🌱 Juntos podemos construir um futuro onde o agro é forte e o planeta é respeitado! Vamos nessa?');
        document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
    
    // Trigger animação dos números quando rolar
    animateNumbers();
});

// Inicialização
window.addEventListener('load', () => {
    createCards();
    animateNumbers();
});

// Adicionar classe de animação ao scroll para os cards
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .sobre-grid, .newsletter-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});