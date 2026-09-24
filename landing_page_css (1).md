/* --- RESET E VARIÁVEIS --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #1b365d;
    --primary-light: #2b4c7e;
    --accent: #c5a059;
    --accent-hover: #b08d46;
    --bg-light: #f8f9fa;
    --bg-white: #ffffff;
    --text-dark: #222222;
    --text-muted: #555555;
    --border-color: #e5e7eb;
    --transition: all 0.3s ease;
}

body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: var(--text-dark);
    background-color: var(--bg-white);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3, h4, .hero-tag, .experience-badge strong {
    font-family: 'Playfair Display', serif;
}

.container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
}

/* --- BOTÕES E ELEMENTOS COMUNS --- */
.btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #25d366;
    color: #ffffff;
    padding: 16px 28px;
    font-size: 1.05rem;
    font-weight: 600;
    border-radius: 50px;
    text-decoration: none;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
    transition: var(--transition);
    text-align: center;
    width: 100%;
    max-width: 450px;
}

.btn-primary:hover {
    background-color: #20ba5a;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
}

.micro-text {
    display: block;
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-top: 8px;
}

.light-text {
    color: rgba(255, 255, 255, 0.8);
}

.section-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 50px auto;
}

.section-header h2 {
    font-size: 2.4rem;
    color: var(--primary);
    margin-bottom: 12px;
}

.section-header p {
    color: var(--text-muted);
    font-size: 1.1rem;
}

/* --- HERO SECTION --- */
.hero-section {
    padding: 60px 0 80px 0;
    background: linear-gradient(135deg, #f0f4f8 0%, #ffffff 100%);
}

.hero-container {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 50px;
    align-items: center;
}

.hero-image-wrapper {
    position: relative;
    text-align: center;
}

.hero-img {
    width: 100%;
    max-width: 420px;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(27, 54, 93, 0.12);
    object-fit: cover;
}

.hero-badge {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #ffffff;
    padding: 10px 20px;
    border-radius: 30px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--primary);
    white-space: nowrap;
    border: 1px solid var(--border-color);
}

.hero-badge i {
    color: var(--accent);
}

.hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #eef2f7;
    color: var(--primary);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 20px;
}

.hero-content h1 {
    font-size: 2.8rem;
    line-height: 1.2;
    color: var(--primary);
    margin-bottom: 20px;
}

.hero-subtitle {
    font-size: 1.15rem;
    color: var(--text-muted);
    margin-bottom: 30px;
}

.hero-cta-box {
    display: flex;
    flex-direction: column;
}

/* --- BLOCO QUEM SOU EU --- */
.about-section {
    padding: 90px 0;
    background-color: var(--bg-white);
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 60px;
    align-items: center;
}

.about-img-container {
    position: relative;
}

.about-main-img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.08);
}

.experience-badge {
    position: absolute;
    bottom: -20px;
    right: -20px;
    background: var(--primary);
    color: #ffffff;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(27, 54, 93, 0.3);
    text-align: center;
}

.experience-badge strong {
    display: block;
    font-size: 1.3rem;
    color: var(--accent);
}

.experience-badge span {
    font-size: 0.85rem;
    opacity: 0.9;
}

.about-text-content h2 {
    font-size: 2.3rem;
    color: var(--primary);
    margin-bottom: 20px;
}

.about-text-content p {
    color: var(--text-muted);
    margin-bottom: 25px;
    font-size: 1.05rem;
}

.about-bullets {
    list-style: none;
    margin-bottom: 30px;
}

.about-bullets li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 15px;
    font-size: 1.02rem;
    color: var(--text-dark);
}

.about-bullets i {
    color: var(--accent);
    margin-top: 4px;
    font-size: 1.1rem;
}

.procedures-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.proc-tag {
    background: var(--bg-light);
    border: 1px solid var(--border-color);
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--primary);
}

/* --- BLOCO RESULTADOS REAIS --- */
.results-section {
    padding: 90px 0;
    background-color: var(--bg-light);
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 30px;
}

.gallery-item {
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    cursor: pointer;
    background: #ffffff;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    aspect-ratio: 1 / 1;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(27, 54, 93, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.gallery-overlay i {
    color: #ffffff;
    font-size: 1.8rem;
}

.gallery-item:hover img {
    transform: scale(1.08);
}

.gallery-item:hover .gallery-overlay {
    opacity: 1;
}

.disclaimer-text {
    text-align: center;
    font-size: 0.85rem;
    color: #777777;
    font-style: italic;
}

/* --- BLOCO POR QUE CONFIAR EM MIM --- */
.why-section {
    padding: 90px 0;
    background-color: var(--bg-white);
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
}

.feature-card {
    background: var(--bg-light);
    border: 1px solid var(--border-color);
    padding: 35px 25px;
    border-radius: 16px;
    transition: var(--transition);
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.06);
    border-color: var(--accent);
}

.card-icon {
    width: 50px;
    height: 50px;
    background: rgba(197, 160, 89, 0.15);
    color: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    font-size: 1.3rem;
    margin-bottom: 20px;
}

.feature-card h3 {
    font-size: 1.25rem;
    color: var(--primary);
    margin-bottom: 12px;
}

.feature-card p {
    font-size: 0.95rem;
    color: var(--text-muted);
}

/* --- CTA INTERMEDIÁRIO & FINAL --- */
.cta-banner-section, .final-cta-section {
    padding: 80px 0;
    background-color: var(--primary);
    color: #ffffff;
    text-align: center;
}

.cta-banner-box, .final-cta-box {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cta-banner-box h2, .final-cta-box h2 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: #ffffff;
}

.cta-banner-box p, .final-cta-box p {
    font-size: 1.15rem;
    opacity: 0.9;
    margin-bottom: 30px;
}

/* --- BLOCO COMO FUNCIONA A PRIMEIRA CONSULTA --- */
.steps-section {
    padding: 90px 0;
    background-color: var(--bg-light);
}

.steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.step-card {
    background: var(--bg-white);
    padding: 40px 30px;
    border-radius: 16px;
    border: 1px solid var(--border-color);
    position: relative;
}

.step-number {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 15px;
    opacity: 0.8;
}

.step-card h3 {
    font-size: 1.3rem;
    color: var(--primary);
    margin-bottom: 12px;
}

.step-card p {
    color: var(--text-muted);
    font-size: 0.98rem;
}

/* --- BLOCO MAIS PROVAS (BASTIDORES) --- */
.behind-scenes-section {
    padding: 90px 0;
    background-color: var(--bg-white);
}

.scenes-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
}

.scene-item {
    border-radius: 16px;
    overflow: hidden;
    background: var(--bg-light);
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 12px rgba(0,0,0,0.04);
}

.scene-item img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.scene-item:hover img {
    transform: scale(1.05);
}

.scene-caption {
    padding: 15px;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--primary);
    text-align: center;
}

/* --- RODAPÉ --- */
.footer-section {
    background-color: #12223a;
    color: #ffffff;
    padding: 60px 0 30px 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-bottom: 40px;
}

.footer-info h3 {
    font-size: 1.5rem;
    margin-bottom: 5px;
    color: var(--accent);
}

.footer-info p {
    opacity: 0.8;
    font-size: 0.95rem;
}

.address-text {
    margin-top: 10px;
    font-size: 0.9rem;
}

.footer-social {
    display: flex;
    gap: 15px;
}

.footer-social a {
    width: 45px;
    height: 45px;
    background: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #ffffff;
    font-size: 1.2rem;
    transition: var(--transition);
}

.footer-social a:hover {
    background: var(--accent);
}

.footer-bottom {
    text-align: center;
    font-size: 0.85rem;
    opacity: 0.6;
}

/* --- LIGHTBOX MODAL --- */
.lightbox {
    display: none;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.85);
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.lightbox.active {
    display: flex;
}

.lightbox img {
    max-width: 90%;
    max-height: 85vh;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.lightbox-close {
    position: absolute;
    top: 25px;
    right: 30px;
    color: #ffffff;
    font-size: 2.5rem;
    cursor: pointer;
    font-weight: 300;
}

/* --- ANIMAÇÃO PULSE --- */
@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
    70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
    100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}

.pulse-effect {
    animation: pulse 2s infinite;
}

/* --- RESPONSIVIDADE (MOBILE & TABLET) --- */
@media (max-width: 992px) {
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 30px;
    }

    /* Regra estrita solicitada: No celular, a imagem em primeiro lugar e um pouco menor, depois o título */
    .hero-container {
        display: flex;
        flex-direction: column;
    }

    .hero-image-wrapper {
        order: 1;
        margin-bottom: 10px;
    }

    .hero-img {
        max-width: 260px; /* Imagem um pouco menor no celular conforme solicitado */
    }

    .hero-content {
        order: 2;
    }

    .hero-tag {
        margin: 0 auto 15px auto;
    }

    .hero-cta-box {
        align-items: center;
    }

    .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .cards-grid, .steps-grid, .scenes-grid {
        grid-template-columns: 1fr;
    }

    .footer-content {
        flex-direction: column;
        gap: 25px;
        text-align: center;
    }
}

@media (max-width: 576px) {
    .hero-content h1 {
        font-size: 2.1rem;
    }

    .section-header h2 {
        font-size: 2rem;
    }

    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
}