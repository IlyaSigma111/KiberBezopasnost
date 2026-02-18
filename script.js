document.addEventListener('DOMContentLoaded', function() {
    // ========== ГЕНЕРАЦИЯ МАТРИЧНОГО КОДА ==========
    const matrixElement = document.getElementById('matrixCode');
    if (matrixElement) {
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        let matrixHTML = '';
        for (let i = 0; i < 100; i++) {
            let line = '';
            for (let j = 0; j < 50; j++) {
                line += chars[Math.floor(Math.random() * chars.length)];
            }
            matrixHTML += line + '\n';
        }
        matrixElement.textContent = matrixHTML;
    }
    
    // ========== СОЗДАНИЕ БИНАРНОГО ДОЖДЯ ==========
    const binaryRain = document.getElementById('binaryRain');
    if (binaryRain) {
        for (let i = 0; i < 50; i++) {
            const drop = document.createElement('div');
            drop.style.position = 'absolute';
            drop.style.left = Math.random() * 100 + '%';
            drop.style.top = '-10%';
            drop.style.color = '#0f0';
            drop.style.fontSize = '20px';
            drop.style.fontFamily = 'monospace';
            drop.style.animation = `rainDrop ${5 + Math.random() * 5}s linear infinite`;
            drop.style.animationDelay = Math.random() * 5 + 's';
            drop.textContent = Math.random() > 0.5 ? '1' : '0';
            binaryRain.appendChild(drop);
        }
    }
    
    // ========== НАВИГАЦИЯ ПО СЛАЙДАМ ==========
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideCounter = document.getElementById('slideCounter');
    const progressFill = document.getElementById('progressFill');
    const dotsContainer = document.getElementById('dotsContainer');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Создаем точки навигации
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot-nav');
        dot.dataset.index = i;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll('.dot-nav');
    
    function goToSlide(index) {
        if (index < 0 || index >= totalSlides) return;
        
        // Эффект глитча при переключении
        const panel = document.querySelector('.glass-panel');
        panel.style.animation = 'none';
        setTimeout(() => {
            panel.style.animation = 'panelGlow 4s ease-in-out infinite';
        }, 10);
        
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        currentIndex = index;
        slideCounter.textContent = (index + 1) + '/' + totalSlides;
        
        const progress = ((index + 1) / totalSlides) * 100;
        progressFill.style.width = progress + '%';
        
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === totalSlides - 1;
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    
    // ========== РЕЖИМ ПРЕЗЕНТАЦИИ ==========
    const presentationBtn = document.getElementById('presentationModeBtn');
    const glassPanel = document.getElementById('glassPanel');
    
    presentationBtn.addEventListener('click', () => {
        glassPanel.classList.toggle('presentation-mode');
        
        if (glassPanel.classList.contains('presentation-mode')) {
            presentationBtn.innerHTML = '<span class="btn-icon">🔲</span><span class="btn-label">Выйти</span>';
        } else {
            presentationBtn.innerHTML = '<span class="btn-icon">🎬</span><span class="btn-label">Полный экран</span>';
        }
    });
    
    // ========== ФИШИНГ ==========
    const phishLink = document.getElementById('phishLink');
    const phishReveal = document.getElementById('phishReveal');
    
    if (phishLink) {
        phishLink.addEventListener('click', (e) => {
            e.preventDefault();
            phishReveal.classList.add('show');
        });
    }
    
    // ========== СОЦИАЛЬНАЯ ИНЖЕНЕРИЯ ==========
    const exampleBtns = document.querySelectorAll('.example-btn');
    
    exampleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const exampleId = btn.dataset.example;
            const exampleFull = document.getElementById('example' + exampleId);
            
            if (exampleFull) {
                exampleFull.classList.toggle('hidden');
                btn.textContent = exampleFull.classList.contains('hidden') ? 'Разобрать' : 'Скрыть';
            }
        });
    });
    
    // ========== ДВУХФАКТОРКА ==========
    const loginBtn = document.getElementById('loginBtn');
    const twofaStep = document.getElementById('twofaStep');
    const verifyBtn = document.getElementById('verifyBtn');
    const codeInput = document.getElementById('codeInput');
    const twofaMessage = document.getElementById('twofaMessage');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            twofaStep.classList.remove('hidden');
            twofaMessage.textContent = 'Введи код из приложения';
            twofaMessage.style.color = '';
        });
    }
    
    if (verifyBtn) {
        verifyBtn.addEventListener('click', () => {
            if (codeInput.value === '123456') {
                twofaMessage.textContent = '✅ ACCESS GRANTED! 2FA сработала.';
                twofaMessage.style.color = '#0f0';
            } else {
                twofaMessage.textContent = '❌ ACCESS DENIED! Неверный код.';
                twofaMessage.style.color = '#ff0000';
            }
        });
    }
    
    // ========== ШИФРОВАНИЕ ==========
    const encryptBtn = document.getElementById('encryptBtn');
    const originalText = document.getElementById('originalText');
    const encryptedText = document.getElementById('encryptedText');
    
    if (encryptBtn) {
        encryptBtn.addEventListener('click', () => {
            const text = originalText.textContent;
            const encrypted = btoa(text);
            encryptedText.textContent = encrypted;
            
            encryptedText.style.animation = 'glitch 0.3s 3';
            setTimeout(() => {
                encryptedText.style.animation = '';
            }, 300);
        });
    }
    
    // ========== Wi-Fi ХАКЕР ==========
    const wifiSlider = document.getElementById('wifiSlider');
    const sliderValue = document.getElementById('sliderValue');
    const hackerLine1 = document.getElementById('hackerLine1');
    const hackerLine2 = document.getElementById('hackerLine2');
    const hackerLine3 = document.getElementById('hackerLine3');
    
    if (wifiSlider) {
        wifiSlider.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            sliderValue.textContent = value + '%';
            
            if (value >= 0) hackerLine1.classList.remove('hidden');
            if (value >= 33) hackerLine2.classList.remove('hidden');
            else hackerLine2.classList.add('hidden');
            
            if (value >= 66) hackerLine3.classList.remove('hidden');
            else hackerLine3.classList.add('hidden');
        });
    }
    
    // ========== ВИКТОРИНА ==========
    // Для каждого слайда с викториной (12-21)
    for (let i = 12; i <= 21; i++) {
        const slide = document.querySelector(`[data-slide="${i}"]`);
        if (!slide) continue;
        
        const options = slide.querySelectorAll('.quiz-option');
        const feedback = slide.querySelector('.quiz-feedback');
        const nextBtn = slide.querySelector('.next-quiz-btn');
        
        options.forEach(option => {
            option.addEventListener('click', () => {
                const isCorrect = option.dataset.correct === 'true';
                
                options.forEach(opt => {
                    opt.classList.remove('correct-choice', 'wrong-choice');
                });
                
                if (isCorrect) {
                    option.classList.add('correct-choice');
                    if (feedback) {
                        feedback.textContent = '✅ [ACCESS GRANTED] Правильно! Этот пароль надежнее.';
                        feedback.style.color = '#0f0';
                        feedback.classList.remove('hidden');
                    }
                } else {
                    option.classList.add('wrong-choice');
                    if (feedback) {
                        feedback.textContent = '❌ [ACCESS DENIED] Нет, этот пароль слишком простой!';
                        feedback.style.color = '#ff0000';
                        feedback.classList.remove('hidden');
                    }
                    
                    options.forEach(opt => {
                        if (opt.dataset.correct === 'true') {
                            opt.classList.add('correct-choice');
                        }
                    });
                }
                
                if (nextBtn) {
                    nextBtn.classList.remove('hidden');
                }
            });
        });
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                goToSlide(i + 1);
            });
        }
    }
    
    // ========== ОБРАБОТКА КАСАНИЙ ==========
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            if (!nextBtn.disabled) {
                nextBtn.click();
            }
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            if (!prevBtn.disabled) {
                prevBtn.click();
            }
        }
    }
    
    // ========== КЛИК ПО ТОЧКАМ ==========
    document.querySelectorAll('.dot-nav').forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            goToSlide(index);
        });
    });
    
    // Инициализация
    goToSlide(0);
});
