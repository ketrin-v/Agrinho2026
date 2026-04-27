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

// Animate Number function
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
        id: 'irrigacao',
        icon: 'fa-droplet',
        title: 'Irrigação Inteligente',
        description: 'Sistema automatizado que economiza até 60% de água usando sensores de umidade do solo.',
        image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=600&h=400&fit=crop',
        fullDescription: 'A Irrigação Inteligente utiliza sensores de umidade do solo, estações meteorológicas e algoritmos de IA para determinar exatamente quando e quanto água aplicar nas plantações. Isso reduz o desperdício em até 60%, aumenta a produtividade e preserva os recursos hídricos.',
        benefits: [
            'Economia de até 60% no consumo de água',
            'Aumento médio de 25% na produtividade',
            'Redução de custos com energia elétrica',
            'Monitoramento remoto via smartphone',
            'Prevenção de doenças por excesso de água'
        ]
    },
    {
        id: 'drones',
        icon: 'fa-microchip',
        title: 'Monitoramento com Drones',
        description: 'Mapeamento aéreo para identificar pragas, nutrição do solo e otimizar colheitas.',
        image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&h=400&fit=crop',
        fullDescription: 'Drones equipados com câmeras multiespectrais e sensores térmicos sobrevoam as lavouras coletando dados precisos sobre saúde das plantas, pragas, deficiências nutricionais e estresse hídrico. Os dados são processados por IA que gera mapas de prescrição para aplicação localizada de insumos.',
        benefits: [
            'Redução de 30% no uso de defensivos',
            'Identificação precoce de pragas e doenças',
            'Mapeamento de produtividade em tempo real',
            'Economia de tempo e mão de obra',
            'Aplicação localizada de insumos'
        ]
    },
    {
        id: 'energia',
        icon: 'fa-solar-panel',
        title: 'Energia Limpa no Campo',
        description: 'Soluções em energia solar e biogás para reduzir custos e emissões.',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
        fullDescription: 'Implementamos sistemas de energia solar fotovoltaica e biodigestores que transformam resíduos orgânicos em biogás e biofertilizantes. Isso reduz a dependência de energia da rede elétrica, diminui os custos operacionais e elimina emissões de gases de efeito estufa.',
        benefits: [
            'Redução de até 90% na conta de energia',
            'Aproveitamento de resíduos da propriedade',
            'Geração de créditos de carbono',
            'Independência energética',
            'Valorização do imóvel rural'
        ]
    }
];

function createSolucoes() {
    const grid = document.getElementById('solucoesGrid');
    if (!grid) return;
    
    solucoesData.forEach(sol => {
        const card = document.createElement('div');
        card.className = 'solucao-card';
        card.setAttribute('data-card-type', 'solucao');
        card.setAttribute('data-card-id', sol.id);
        card.innerHTML = `
            <img src="${sol.image}" alt="${sol.title}" class="solucao-img">
            <div class="solucao-content">
                <i class="fas ${sol.icon} solucao-icon"></i>
                <h3 class="solucao-title">${sol.title}</h3>
                <p>${sol.description}</p>
            </div>
        `;
        card.addEventListener('click', () => openCardModal(sol));
        grid.appendChild(card);
    });
}

// Blog Data
const blogPosts = [
    {
        id: 'blog1',
        title: 'Agricultura Regenerativa: O futuro do campo',
        excerpt: 'Descubra como técnicas regenerativas estão transformando solos degradados em áreas produtivas.',
        date: '15 Mar 2025',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop',
        fullDescription: 'A agricultura regenerativa vai além da sustentabilidade - ela busca restaurar ativamente a saúde dos solos, aumentar a biodiversidade e melhorar o ciclo da água. Técnicas como plantio direto, rotação de culturas, integração lavoura-pecuária-floresta (ILPF) e uso de bioinsumos estão revolucionando a produção agrícola.',
        benefits: [
            'Sequestro de carbono no solo',
            'Aumento da matéria orgânica',
            'Melhor retenção de água',
            'Redução da erosão',
            'Maior resiliência climática'
        ]
    },
    {
        id: 'blog2',
        title: 'Tecnologia e Sustentabilidade andam juntas',
        excerpt: 'Startups brasileiras desenvolvem soluções inovadoras para o agro sustentável.',
        date: '10 Mar 2025',
        image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0a7cc2?w=600&h=400&fit=crop',
        fullDescription: 'O Brasil é destaque mundial em AgTechs - startups que aplicam tecnologia ao agronegócio. Soluções como sensores IoT para monitoramento remoto, plataformas de rastreabilidade blockchain, softwares de gestão agrícola e mercados digitais estão democratizando o acesso à agricultura de precisão.',
        benefits: [
            'Gestão mais eficiente da propriedade',
            'Transparência na cadeia produtiva',
            'Redução de perdas pós-colheita',
            'Acesso a novas oportunidades de mercado',
            'Integração de toda a cadeia produtiva'
        ]
    },
    {
        id: 'blog3',
        title: 'Certificações ambientais valorizam o produto',
        excerpt: 'Produtores que adotam práticas sustentáveis têm acesso a mercados premium.',
        date: '05 Mar 2025',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72b?w=600&h=400&fit=crop',
        fullDescription: 'Certificações como Rainforest Alliance, Orgânico Brasil e Carbono Neutro abrem portas para mercados internacionais e consumidores dispostos a pagar mais por produtos sustentáveis. Além do benefício ambiental, produtores certificados conseguem melhores preços e acesso a linhas de crédito especiais.',
        benefits: [
            'Agregação de valor ao produto',
            'Acesso a mercados internacionais',
            'Linhas de crédito com juros reduzidos',
            'Reconhecimento da marca',
            'Diferencial competitivo'
        ]
    }
];

function createBlogPosts() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    
    blogPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.setAttribute('data-card-type', 'blog');
        card.setAttribute('data-card-id', post.id);
        card.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="blog-img">
            <div class="blog-content">
                <div class="blog-date">📅 ${post.date}</div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
            </div>
        `;
        card.addEventListener('click', () => openBlogModal(post));
        grid.appendChild(card);
    });
}

// Dados para os cards de Impacto
const impactosData = {
    arvores: {
        title: 'Programa de Reflorestamento',
        icon: 'fa-tree',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
        description: 'Nosso programa de reflorestamento já plantou mais de 1.200 árvores nativas em áreas degradadas, restaurando ecossistemas e criando corredores ecológicos que conectam fragmentos florestais.',
        benefits: [
            'Restauração de nascentes e rios',
            'Aumento da biodiversidade local',
            'Sequestro de carbono da atmosfera',
            'Proteção do solo contra erosão',
            'Geração de renda para comunidades locais'
        ]
    },
    agua: {
        title: 'Economia de Água na Agricultura',
        icon: 'fa-tint',
        image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop',
        description: 'Através de sistemas de irrigação por gotejamento, captação de água da chuva e reuso de água, economizamos mais de 85.000 litros de água por ano em nossas propriedades parceiras.',
        benefits: [
            'Preservação de mananciais',
            'Redução do estresse hídrico',
            'Aumento da eficiência hídrica',
            'Economia de até 70% na conta de água',
            'Captação e armazenamento de água de chuva'
        ]
    },
    fazendas: {
        title: 'Fazendas Sustentáveis Certificadas',
        icon: 'fa-solar-panel',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
        description: 'Atualmente, 320 fazendas já adotaram nosso modelo de produção sustentável, combinando tecnologia de precisão, energia renovável e manejo regenerativo do solo.',
        benefits: [
            'Aumento médio de 35% na produtividade',
            'Redução de custos operacionais',
            'Acesso a mercados premium',
            'Certificação socioambiental',
            'Valorização da propriedade'
        ]
    },
    co2: {
        title: 'Redução de Emissões de CO₂',
        icon: 'fa-seedling',
        image: 'https://images.unsplash.com/photo-1441974231531-c622288dbd6f?w=600&h=400&fit=crop',
        description: 'Com a substituição de fontes fósseis por energia limpa e práticas de agricultura de baixo carbono, evitamos a emissão de mais de 25.000 toneladas de CO₂ na atmosfera - o equivalente a plantar 175.000 árvores!',
        benefits: [
            'Combate às mudanças climáticas',
            'Créditos de carbono comercializáveis',
            'Independência de combustíveis fósseis',
            'Participação no mercado de carbono',
            'Contribuição para as metas do Acordo de Paris'
        ]
    }
};

// Função para abrir modal dos cards de impacto
function openImpactoModal(cardType) {
    const data = impactosData[cardType];
    if (!data) return;
    
    const modal = document.getElementById('cardModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalBenefits = document.getElementById('modalBenefits');
    
    modalIcon.className = `fas ${data.icon}`;
    modalTitle.textContent = data.title;
    modalImage.src = data.image;
    modalDescription.textContent = data.description;
    
    modalBenefits.innerHTML = '';
    data.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        modalBenefits.appendChild(li);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Função para abrir modal dos cards de solução
function openCardModal(solucao) {
    const modal = document.getElementById('cardModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalBenefits = document.getElementById('modalBenefits');
    
    modalIcon.className = `fas ${solucao.icon}`;
    modalTitle.textContent = solucao.title;
    modalImage.src = solucao.image;
    modalDescription.textContent = solucao.fullDescription;
    
    modalBenefits.innerHTML = '';
    solucao.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        modalBenefits.appendChild(li);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Função para abrir modal dos cards de blog
function openBlogModal(blog) {
    const modal = document.getElementById('cardModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalBenefits = document.getElementById('modalBenefits');
    
    modalIcon.className = 'fas fa-newspaper';
    modalTitle.textContent = blog.title;
    modalImage.src = blog.image;
    modalDescription.textContent = blog.fullDescription;
    
    modalBenefits.innerHTML = '';
    blog.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        modalBenefits.appendChild(li);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fechar modal
const modalCard = document.getElementById('cardModal');
const modalCardClose = document.querySelector('.modal-card-close');
const modalActionBtn = document.getElementById('modalActionBtn');

function closeModal() {
    modalCard.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalCardClose.addEventListener('click', closeModal);
modalCard.addEventListener('click', (e) => {
    if (e.target === modalCard) closeModal();
});

modalActionBtn.addEventListener('click', () => {
    alert('🌱 Obrigado pelo interesse! Entraremos em contato em breve com mais informações.');
    closeModal();
});

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

// Adicionar eventos de clique nos cards de impacto
document.querySelectorAll('.impacto-card').forEach(card => {
    const cardType = card.getAttribute('data-card');
    card.addEventListener('click', () => openImpactoModal(cardType));
});

// Adicionar eventos de clique nas features (sobre section)
const features = document.querySelectorAll('.feature');
const featuresData = {
    regenerativa: {
        title: 'Agricultura Regenerativa',
        icon: 'fa-leaf',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop',
        description: 'A Agricultura Regenerativa é um sistema de produção que vai além da sustentabilidade, buscando ativamente restaurar a saúde do solo, aumentar a biodiversidade e melhorar o ciclo da água. Técnicas como plantio direto, rotação de culturas, integração lavoura-pecuária-floresta (ILPF) e uso de bioinsumos são fundamentais.',
        benefits: [
            'Sequestro de carbono no solo',
            'Aumento da matéria orgânica',
            'Melhor retenção e infiltração de água',
            'Redução significativa da erosão',
            'Maior resiliência a eventos climáticos extremos'
        ]
    },
    tecnologia: {
        title: 'Tecnologia de Precisão',
        icon: 'fa-microchip',
        image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&h=400&fit=crop',
        description: 'A Tecnologia de Precisão utiliza sensores, drones, imagens de satélite e inteligência artificial para monitorar cada metro quadrado da lavoura. Isso permite aplicar insumos apenas onde necessário, reduzindo desperdícios e aumentando a eficiência produtiva.',
        benefits: [
            'Redução de 30% no uso de fertilizantes',
            'Economia de 25% em defensivos agrícolas',
            'Aumento médio de 35% na produtividade',
            'Identificação precoce de problemas',
            'Redução do impacto ambiental'
        ]
    },
    certificacao: {
        title: 'Certificação Socioambiental',
        icon: 'fa-hand-holding-heart',
        image: 'https://images.unsplash.com/photo-1542838132-92c5331f1278?w=600&h=400&fit=crop',
        description: 'Nossas certificações garantem que os produtos são cultivados com respeito ao meio ambiente e aos trabalhadores. Elas abrem portas para mercados internacionais e consumidores que valorizam a sustentabilidade.',
        benefits: [
            'Agregação de valor ao produto final',
            'Acesso a mercados premium internacionais',
            'Linhas de crédito com juros reduzidos',
            'Reconhecimento e valorização da marca',
            'Diferencial competitivo no mercado'
        ]
    }
};

features.forEach(feature => {
    const featureType = feature.getAttribute('data-feature');
    feature.addEventListener('click', () => {
        const data = featuresData[featureType];
        if (data) {
            const modal = document.getElementById('cardModal');
            const modalIcon = document.getElementById('modalIcon');
            const modalTitle = document.getElementById('modalTitle');
            const modalImage = document.getElementById('modalImage');
            const modalDescription = document.getElementById('modalDescription');
            const modalBenefits = document.getElementById('modalBenefits');
            
            modalIcon.className = `fas ${data.icon}`;
            modalTitle.textContent = data.title;
            modalImage.src = data.image;
            modalDescription.textContent = data.description;
            
            modalBenefits.innerHTML = '';
            data.benefits.forEach(benefit => {
                const li = document.createElement('li');
                li.textContent = benefit;
                modalBenefits.appendChild(li);
            });
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
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