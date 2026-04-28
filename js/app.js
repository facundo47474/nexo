// app.js - Automatización y Simulación de Base de Datos / Procesos

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Base de Datos de Productos de Prueba (12 Mundos)
    const testProducts = [
        { id: 1, title: "Auditoría Financiera Q3", seller: "FinTrust Elite", score: "100", price: "$2,800", icon: "pie-chart", world: "Finanzas", cupos: 5 },
        { id: 2, title: "Desarrollo Smart Contracts", seller: "TechNode_01", score: "98.5", price: "$3,500", icon: "code", world: "Tecnología", cupos: 2 },
        { id: 3, title: "Asesoría Legal Corporativa", seller: "Alexandre M.", score: "99.8", price: "$1,200", icon: "scale", world: "Legales Corporativos", cupos: 1 },
        { id: 4, title: "Lote Premium Patagonia", seller: "RealEstate Pro", score: "97.2", price: "$150k", icon: "map-pin", world: "Bienes Raíces", cupos: 0 },
        { id: 5, title: "Optimización Fiscal 2026", seller: "Capital Advisors", score: "99.1", price: "$4,500", icon: "trending-up", world: "Capitales", cupos: 8 },
        { id: 6, title: "Diseño UX/UI App Mobile", seller: "Creative Node", score: "96.4", price: "$2,100", icon: "smartphone", world: "Desarrollo Tech", cupos: 3 },
    ];

    const renderProducts = (products) => {
        const marketGrid = document.getElementById('market-grid');
        if(!marketGrid) return;
        
        marketGrid.innerHTML = '';
        if(products.length === 0) {
            marketGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">No se encontraron productos en la base de datos de prueba.</p>';
            return;
        }

        products.forEach(p => {
            const card = document.createElement('div');
            card.className = 'card product-card';
            card.style.borderTop = '4px solid var(--border-subtle)';
            card.innerHTML = `
                <div class="product-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="${p.icon}" style="width:20px; height:20px; color: var(--text-muted);"></i>
                        <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">${p.world}</span>
                    </div>
                    <span style="display: inline-flex; align-items: center; gap: 4px; background: rgba(0,0,0,0.05); color: var(--text-main); padding: 4px 8px; border-radius: 20px; font-weight: 700; font-size: 0.8rem;">
                        <i data-lucide="shield-check" style="width:14px; height:14px;"></i> ${p.score}
                    </span>
                </div>
                <h4 style="margin-bottom:0.5rem; font-size: 1.15rem;">${p.title}</h4>
                <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1rem;">Avalado por: <strong>${p.seller}</strong></p>
                
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
                    <span style="font-size:1.5rem; font-weight:800; color:var(--bg-dark);">${p.price}</span>
                    <button class="btn btn-outline" style="padding:0.4rem 1rem; font-size:0.9rem; ${p.cupos === 0 ? 'opacity: 0.5; cursor: not-allowed;' : ''}">
                        ${p.cupos === 0 ? 'Sin Cupos' : `Comprar (${p.cupos} cupos)`}
                    </button>
                </div>
            `;
            marketGrid.appendChild(card);
        });
        if(window.lucide) window.lucide.createIcons();
    };

    // Render inicial
    renderProducts(testProducts);

    // 2. Integración: Buscador Funcional (Filtra la Base de Datos)
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('mainSearch');
    
    if(searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase().trim();
            const filtered = testProducts.filter(p => 
                p.title.toLowerCase().includes(query) || 
                p.seller.toLowerCase().includes(query) ||
                p.world.toLowerCase().includes(query)
            );
            renderProducts(filtered);
            
            // Scroll to market grid
            document.getElementById('mundos').scrollIntoView({ behavior: 'smooth' });
        });
        
        searchInput.addEventListener('keyup', (e) => {
            if(e.key === 'Enter') searchBtn.click();
        });
    }

    // 3. Automatización de Procesos: Generador de Link de Aval
    const generateLinkBtn = document.getElementById('generateLinkBtn');
    const inviteModal = document.getElementById('inviteModal');
    const closeModal = document.getElementById('closeModal');
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    const generatedLinkEl = document.getElementById('generatedLink');

    if(generateLinkBtn && inviteModal) {
        generateLinkBtn.addEventListener('click', () => {
            inviteModal.style.display = 'flex';
            generatedLinkEl.innerText = 'Presiona "Generar" para firmar criptográficamente...';
            generatedLinkEl.style.color = 'var(--text-muted)';
            copyLinkBtn.innerText = 'Generar y Copiar Link';
            copyLinkBtn.style.background = 'var(--bg-dark)';
        });

        closeModal.addEventListener('click', () => {
            inviteModal.style.display = 'none';
        });

        copyLinkBtn.addEventListener('click', () => {
            // Simulamos la generación del token
            const token = 'nx_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            const link = `https://nexo.trust/invite/${token}`;
            
            generatedLinkEl.innerText = link;
            generatedLinkEl.style.color = '#00c853'; // Green success
            
            // Simular copiado
            copyLinkBtn.innerHTML = '¡Link Copiado al Portapapeles! <i data-lucide="check"></i>';
            copyLinkBtn.style.background = '#00c853';
            if(window.lucide) window.lucide.createIcons();
            
            // Cerrar después de 2s
            setTimeout(() => {
                inviteModal.style.display = 'none';
            }, 2500);
        });
    }
    
    // Login Simulado
    const loginBtn = document.getElementById('loginBtn');
    if(loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const access = prompt("Sistema Privado Nexo.\n\nPor favor, ingresa tu código de acceso / token de aval:");
            if(access && access.trim() !== "") {
                alert("Verificando nodo en la red...\n\nAcceso exitoso. Bienvenido a Nexo Trust Network.");
                loginBtn.innerHTML = 'Mi Dashboard <i data-lucide="user"></i>';
                if(window.lucide) window.lucide.createIcons();
            }
        });
    }

    // 5. Animación de Red Constelación (Canvas Background)
    const canvas = document.getElementById('networkCanvas');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        const initCanvas = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles = [];
            
            // Cantidad de nodos dependiendo de la pantalla
            const particleCount = window.innerWidth < 768 ? 40 : 100;
            
            for(let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.8, // Velocidad de movimiento
                    vy: (Math.random() - 0.5) * 0.8,
                    radius: Math.random() * 2 + 1
                });
            }
        };

        const drawNetwork = () => {
            ctx.clearRect(0, 0, width, height);
            
            // Dibujar Nodos (Partículas)
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                
                // Rebote en los bordes
                if(p.x < 0 || p.x > width) p.vx *= -1;
                if(p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Dibujar Enlaces (Red de Confianza)
            const connectionDistance = 150;
            for(let i = 0; i < particles.length; i++) {
                for(let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    
                    if(dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = \`rgba(255, 255, 255, \${0.2 * (1 - dist/connectionDistance)})\`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(drawNetwork);
        };

        window.addEventListener('resize', initCanvas);
        initCanvas();
        drawNetwork();
    }

});
