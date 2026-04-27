// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hide');
    }, 1500);
});

// AOS Animation
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Header Scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu
const mobileBtn = document.getElementById('mobileBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileBtn.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileBtn.querySelector('i').classList.remove('fa-times');
        mobileBtn.querySelector('i').classList.add('fa-bars');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active Nav Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 300) {
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

// Animate Numbers
function animateNumbers() {
    const numberElements = document.querySelectorAll('.stat-number[data-target], .dado-number[data-target]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-target'));
                let current = 0;
                const increment = target / 60;
                const suffix = element.classList.contains('stat-number') ? '%' : '';
                
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
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    numberElements.forEach(el => observer.observe(el));
}

// Animate Bar Charts
function animateBars() {
    const bars = document.querySelectorAll('.barra-progresso');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percent = parseInt(bar.getAttribute('data-percent'));
                bar.style.width = percent + '%';
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    bars.forEach(bar => observer.observe(bar));
}

// Práticas Data (conteúdo verídico)
const praticasData = [
    {
        id: 'plantio-direto',
        icon: 'fa-tractor',
        title: 'Plantio Direto',
        description: 'Técnica que revolucionou a agricultura brasileira, mantendo a palhada da safra anterior sobre o solo, evitando erosão e aumentando matéria orgânica.',
        image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0a7cc2?w=600&h=400&fit=crop',
        fullDescription: 'O Plantio Direto é uma técnica conservacionista que consiste em semear sem preparar o solo, mantendo a cobertura vegetal da safra anterior. Isso protege o solo da erosão, aumenta a infiltração de água, sequestra carbono e melhora a fertilidade.',
        benefits: [
            'Redução da erosão do solo em até 90%',
            'Economia de água no solo',
            'Aumento da matéria orgânica',
            'Redução de 50% no consumo de combustível',
            'Sequestro de carbono na palhada'
        ],
        stats: '15 milhões de hectares adotam o sistema no Brasil',
        source: 'Fonte: Embrapa Soja'
    },
    {
        id: 'ilpf',
        icon: 'fa-tree',
        title: 'Integração Lavoura-Pecuária-Floresta (ILPF)',
        description: 'Sistema que integra produção de grãos, animais e árvores na mesma área, melhorando o solo e gerando renda o ano todo.',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop',
        fullDescription: 'A ILPF é uma estratégia de produção sustentável que integra componentes agrícolas, pecuários e florestais em mesmo espaço, em consórcio, sucessão ou rotação. Os benefícios incluem recuperação de pastagens degradadas, bem-estar animal e diversificação de renda.',
        benefits: [
            'Recuperação de pastagens degradadas',
            'Sombra para os animais (bem-estar)',
            'Diversificação da renda no campo',
            'Sequestro de carbono pelas árvores',
            'Melhoria da fertilidade do solo'
        ],
        stats: 'Mais de 15 milhões de hectares com ILPF no Brasil',
        source: 'Fonte: Rede ILPF / Embrapa'
    },
    {
        id: 'irrigacao-inteligente',
        icon: 'fa-droplet',
        title: 'Irrigação por Gotejamento',
        description: 'Tecnologia que economiza até 70% de água em comparação com métodos tradicionais de irrigação.',
        image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=600&h=400&fit=crop',
        fullDescription: 'A irrigação por gotejamento leva água diretamente à raiz da planta, gota a gota, eliminando perdas por evaporação e escoamento. Essa tecnologia é essencial para regiões com escassez hídrica e para culturas de alto valor agregado.',
        benefits: [
            'Economia de 50-70% de água',
            'Maior eficiência na aplicação',
            'Redução de ervas daninhas',
            'Menor incidência de doenças foliares',
            'Aplicação simultânea de fertilizantes'
        ],
        stats: '70% menos água que irrigação convencional',
        source: 'Fonte: FAO / Embrapa'
    },
    {
        id: 'abc',
        icon: 'fa-cloud-sun',
        title: 'Plano ABC (Agricultura de Baixo Carbono)',
        description: 'Programa brasileiro que incentiva práticas sustentáveis e já evitou a emissão de 170 milhões de toneladas de CO₂.',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
        fullDescription: 'O Plano ABC é uma política pública brasileira que financia e incentiva tecnologias sustentáveis no campo, como recuperação de pastagens, ILPF, plantio direto, fixação biológica de nitrogênio e florestas plantadas.',
        benefits: [
            '170 milhões de toneladas de CO₂ evitadas',
            '50 milhões de hectares de pastagens recuperadas',
            'Redução do desmatamento',
            'Geração de créditos de carbono',
            'Acesso a crédito com juros reduzidos'
        ],
        stats: 'R$ 8,7 bilhões em financiamentos sustentáveis',
        source: 'Fonte: MAPA - Plano ABC'
    }
];

function createPraticas() {
    const grid = document.getElementById('praticasGrid');
    if (!grid) return;
    
    praticasData.forEach(pratica => {
        const card = document.createElement('div');
        card.className = 'pratica-card';
        card.innerHTML = `
            <img src="${pratica.image}" alt="${pratica.title}" class="pratica-img">
            <div class="pratica-content">
                <i class="fas ${pratica.icon} pratica-icon"></i>
                <h3 class="pratica-title">${pratica.title}</h3>
                <p class="pratica-description">${pratica.description}</p>
                <div class="pratica-stats">
                    <p>📊 ${pratica.stats}</p>
                </div>
                <div class="pratica-source">${pratica.source}</div>
            </div>
        `;
        card.addEventListener('click', () => openModal(pratica));
        grid.appendChild(card);
    });
}

// Modal Function
const modal = document.getElementById('cardModal');
const modalClose = document.querySelector('.modal-card-close');

function openModal(pratica) {
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalBenefits = document.getElementById('modalBenefits');
    const modalSource = document.getElementById('modalSource');
    
    modalIcon.className = `fas ${pratica.icon}`;
    modalTitle.textContent = pratica.title;
    modalImage.src = pratica.image;
    modalDescription.textContent = pratica.fullDescription;
    
    modalBenefits.innerHTML = '';
    pratica.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        modalBenefits.appendChild(li);
    });
    
    modalSource.innerHTML = `<i class="fas fa-database"></i> ${pratica.source}`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Comparativo Data
const comparativoData = [
    { pais: 'Brasil', producao: '+403%', preservacao: '66%', area: '30%' },
    { pais: 'Estados Unidos', producao: '+180%', preservacao: '41%', area: '+15%' },
    { pais: 'China', producao: '+250%', preservacao: '23%', area: '+42%' },
    { pais: 'Índia', producao: '+220%', preservacao: '24%', area: '+38%' },
    { pais: 'União Europeia', producao: '+90%', preservacao: '35%', area: '-5%' }
];

function createComparativo() {
    const grid = document.getElementById('comparativoGrid');
    if (!grid) return;
    
    comparativoData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'comparativo-card';
        card.innerHTML = `
            <div class="comparativo-pais">${item.pais}</div>
            <div class="comparativo-producao">${item.producao}</div>
            <div class="comparativo-label">crescimento na produção</div>
            <div class="comparativo-preservacao">${item.preservacao}</div>
            <div class="comparativo-label">de território preservado</div>
            <div style="font-size: 12px; color: var(--gray); margin-top: 12px;">Área plantada: ${item.area}</div>
        `;
        grid.appendChild(card);
    });
}

// Fontes Data
const fontesData = [
    {
        nome: 'Embrapa',
        descricao: 'Dados históricos da agricultura brasileira, produtividade e tecnologias sustentáveis',
        link: 'https://www.embrapa.br'
    },
    {
        nome: 'MAPA - Ministério da Agricultura',
        descricao: 'Programa ABC, Plano Safra, dados oficiais do agronegócio brasileiro',
        link: 'https://www.gov.br/agricultura'
    },
    {
        nome: 'FAO - Organização das Nações Unidas',
        descricao: 'Dados sobre segurança alimentar e agricultura sustentável global',
        link: 'https://www.fao.org'
    },
    {
        nome: 'IBGE - Censo Agropecuário',
        descricao: 'Estatísticas oficiais sobre área plantada, produção e uso do solo no Brasil',
        link: 'https://www.ibge.gov.br'
    },
    {
        nome: 'Observatório do Clima',
        descricao: 'Dados sobre emissões de CO₂ e preservação do território brasileiro',
        link: 'https://www.observatoriodoclima.eco.br'
    },
    {
        nome: 'Rede ILPF',
        descricao: 'Informações sobre Integração Lavoura-Pecuária-Floresta no Brasil',
        link: 'https://www.redeilpf.org.br'
    }
];

function createFontes() {
    const grid = document.getElementById('fontesGrid');
    if (!grid) return;
    
    fontesData.forEach(fonte => {
        const card = document.createElement('div');
        card.className = 'fonte-card';
        card.innerHTML = `
            <div class="fonte-nome">${fonte.nome}</div>
            <div class="fonte-descricao">${fonte.descricao}</div>
            <a href="${fonte.link}" target="_blank" class="fonte-link">
                Acessar fonte oficial <i class="fas fa-external-link-alt"></i>
            </a>
        `;
        grid.appendChild(card);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createPraticas();
    createComparativo();
    createFontes();
    animateNumbers();
    animateBars();
});