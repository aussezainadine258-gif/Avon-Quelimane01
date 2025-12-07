// Smooth Scroll para links internos
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

// Animação de entrada dos elementos ao scroll
const observerOptions = {
    threshold: 0.1,
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

// Aplica animação a todos os cards e seções
const animateElements = document.querySelectorAll('.product-card, .testimonial-card, .benefit-card, .emotion-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contador de visitantes (simulado)
function updateVisitorCount() {
    const baseCount = 847;
    const randomAdd = Math.floor(Math.random() * 20);
    return baseCount + randomAdd;
}

// Efeito de parallax suave no hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Tracking de cliques nos botões CTA
const ctaButtons = document.querySelectorAll('.cta-button, .whatsapp-button, .product-cta, .footer-button');
ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Animação de feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Aqui você pode adicionar tracking analytics
        console.log('CTA clicked:', this.textContent);
    });
});

// Efeito de hover nos cards de produtos
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Prevenção de loading de imagens até serem visíveis (lazy loading)
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Adiciona efeito de digitação na headline (opcional)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Atualiza o ano no footer automaticamente
const yearElement = document.querySelector('.copyright');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = yearElement.textContent.replace('2024', currentYear);
}

// Popup de notificação (simulando atividade)
function showNotification() {
    const notifications = [
        '🌟 Mariana acabou de encomendar o kit Far Away!',
        '💕 Cláudia comprou a loção de abacate!',
        '✨ Sónia encomendou o perfume Attraction!',
        '🎁 Ana acabou de fazer o pedido!'
    ];
    
    const notification = document.createElement('div');
    notification.className = 'notification-popup';
    notification.textContent = notifications[Math.floor(Math.random() * notifications.length)];
    notification.style.cssText = `
        position: fixed;
        bottom: 120px;
        right: 30px;
        background: white;
        padding: 20px 30px;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 999;
        font-size: 0.95rem;
        animation: slideIn 0.5s ease, slideOut 0.5s ease 4.5s;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Adiciona keyframes para animação do popup
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Mostra notificações aleatórias
setInterval(showNotification, 15000);
setTimeout(showNotification, 5000); // Primeira notificação após 5s

// Contador de scroll para o botão flutuante
let lastScroll = 0;
const floatingBtn = document.querySelector('.floating-whatsapp');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (floatingBtn) {
        if (currentScroll > 500) {
            floatingBtn.style.opacity = '1';
            floatingBtn.style.visibility = 'visible';
        } else {
            floatingBtn.style.opacity = '0';
            floatingBtn.style.visibility = 'hidden';
        }
    }
    
    lastScroll = currentScroll;
});

// Inicializa estado do botão flutuante
if (floatingBtn) {
    floatingBtn.style.transition = 'all 0.3s ease';
    floatingBtn.style.opacity = '0';
    floatingBtn.style.visibility = 'hidden';
}

// Efeito de shake nos botões CTA ao carregar a página
window.addEventListener('load', () => {
    setTimeout(() => {
        const mainCTA = document.querySelector('.hero .cta-button');
        if (mainCTA) {
            mainCTA.style.animation = 'shake 0.5s ease';
        }
    }, 2000);
});

// Adiciona animação de shake
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(shakeStyle);

// Rastreamento de tempo na página
let timeOnPage = 0;
setInterval(() => {
    timeOnPage++;
    if (timeOnPage === 30) {
        console.log('Usuário está há 30 segundos na página');
        // Aqui você pode disparar um evento especial, mostrar popup, etc.
    }
}, 1000);

// Detecta quando o usuário está prestes a sair da página
document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0) {
        // Usuário moveu o mouse para fora do topo da página
        // Aqui você pode mostrar um popup de "Não vai embora!"
        console.log('Usuário tentando sair da página');
    }
});

// Efeito de confetti ao clicar em alguns botões (celebração)
function createConfetti(x, y) {
    const colors = ['#FF6B9D', '#FFD700', '#667eea', '#f093fb'];
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${x}px;
            top: ${y}px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: confettiFall ${0.5 + Math.random()}s ease-out forwards;
        `;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 1000);
    }
}

const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 + 100}px) rotate(${Math.random() * 360}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Performance: remove animações para dispositivos com recursos limitados
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

console.log('✨ Página Avon Quelimane carregada com sucesso! 💕');