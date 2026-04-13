// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hide');
    }, 1000);
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
    });
});

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animate Numbers (Hero Stats)
function animateNumber(element, target, suffix = '') {
    let current = 0;
    const increment = target / 50;
    const updateNumber = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = target + suffix;
        }
    };
    updateNumber();
}

// Animate Impact Numbers
const impactCards = document.querySelectorAll('.impacto-card');
let impactAnimated = false;

function animateImpactNumbers() {
    if (impactAnimated) return;
    
    const triggerBottom = window.innerHeight * 0.8;
    const impactoSection = document.querySelector('.impacto');
    const sectionTop = impactoSection.getBoundingClientRect().top;
    
    if (sectionTop < triggerBottom) {
        impactCards.forEach(card => {
            const target = parseInt(card.getAttribute('data-value'));
            const numberElement = card.querySelector('.impacto-number');
            animateNumber(numberElement, target, '');
        });
        impactAnimated = true;
    }
}

// Hero Stats Animation
const heroStats = document.querySelector('.hero-stats-card');
let heroAnimated = false;

function animateHeroStats() {
    if (heroAnimated) return;
    
    const triggerBottom = window.innerHeight * 0.6;
    const heroTop = heroStats.getBoundingClientRect().top;
    
    if (heroTop < triggerBottom) {
        animateNumber(document.getElementById('stat1'), 1250, '+');
        animateNumber(document.getElementById('stat2'), 45, '%');
        animateNumber(document.getElementById('stat3'), 60, '%');
        heroAnimated = true;
    }
}

// Soluções Data
const solucoesData = [
    {
        icon: 'fa-droplet',
        title: 'Irrigação Inteligente',
        description: 'Sistema automatizado que economiza até 60% de água usando sensores de umidade do solo.',
        image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=400&h=200&fit=crop'
    },
    {
        icon: 'fa-microchip',
        title: 'Monitoramento com Drones',
        description: 'Mapeamento aéreo para identificar pragas, nutrição do solo e otimizar colheitas.',
        image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=400&h=200&fit=crop'
    },
    {
        icon: 'fa-solar-panel',
        title: 'Energia Limpa no Campo',
        description: 'Soluções em energia solar e biogás para reduzir custos e emissões.',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=200&fit=crop'
    }
];

function createSolucoes() {
    const grid = document.getElementById('solucoesGrid');
    if (!grid) return;
    
    solucoesData.forEach(sol => {
        const card = document.createElement('div');
        card.className = 'solucao-card';
        card.innerHTML = `
            <img src="${sol.image}" alt="${sol.title}" class="solucao-img">
            <div class="solucao-content">
                <i class="fas ${sol.icon} solucao-icon"></i>
                <h3 class="solucao-title">${sol.title}</h3>
                <p>${sol.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Blog Data (simulando API)
const blogPosts = [
    {
        title: 'Agricultura Regenerativa: O futuro do campo',
        excerpt: 'Descubra como técnicas regenerativas estão transformando solos degradados em áreas produtivas.',
        date: '15 Mar 2025',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=200&fit=crop'
    },
    {
        title: 'Tecnologia e Sustentabilidade andam juntas',
        excerpt: 'Startups brasileiras desenvolvem soluções inovadoras para o agro sustentável.',
        date: '10 Mar 2025',
        image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0a7cc2?w=400&h=200&fit=crop'
    },
    {
        title: 'Certificações ambientais valorizam o produto',
        excerpt: 'Produtores que adotam práticas sustentáveis têm acesso a mercados premium.',
        date: '05 Mar 2025',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72b?w=400&h=200&fit=crop'
    }
];

function createBlogPosts() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    
    blogPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="blog-img">
            <div class="blog-content">
                <div class="blog-date">📅 ${post.date}</div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
const newsEmail = document.getElementById('newsEmail');
const newsMessage = document.getElementById('newsMessage');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsEmail.value.trim();
    
    if (email && email.includes('@') && email.includes('.')) {
        newsMessage.innerHTML = '✅ Inscrição realizada! Você receberá nossas novidades.';
        newsMessage.style.color = '#a8c686';
        newsEmail.value = '';
        setTimeout(() => {
            newsMessage.innerHTML = '';
        }, 3000);
    } else {
        newsMessage.innerHTML = '❌ Por favor, insira um e-mail válido.';
        newsMessage.style.color = '#ff9999';
        setTimeout(() => {
            newsMessage.innerHTML = '';
        }, 3000);
    }
});

// Video Modal
const videoBtn = document.getElementById('videoBtn');
const videoModal = document.getElementById('videoModal');
const modalClose = document.querySelector('.modal-close');
const videoIframe = document.getElementById('videoIframe');

videoBtn.addEventListener('click', () => {
    videoModal.classList.add('active');
    videoIframe.src = 'https://www.youtube.com/embed/8fCkfT3GZ3Y?autoplay=1';
});

modalClose.addEventListener('click', () => {
    videoModal.classList.remove('active');
    videoIframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
});

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        videoIframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
    }
});

// Explorar Button
const explorarBtn = document.getElementById('explorarBtn');
explorarBtn.addEventListener('click', () => {
    document.getElementById('solucoes').scrollIntoView({ behavior: 'smooth' });
});

// Scroll Animations
window.addEventListener('scroll', () => {
    animateHeroStats();
    animateImpactNumbers();
});

// Header Scroll Effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        header.style.background = 'rgba(255,255,255,0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255,255,255,0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
    }
    
    if (body.classList.contains('dark')) {
        if (currentScroll > 100) {
            header.style.background = 'rgba(26,26,46,0.98)';
        } else {
            header.style.background = 'rgba(26,26,46,0.95)';
        }
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Fade In
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.solucao-card, .blog-card, .impacto-card, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createSolucoes();
    createBlogPosts();
});