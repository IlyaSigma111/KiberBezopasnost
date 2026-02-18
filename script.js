document.addEventListener('DOMContentLoaded', function() {
    // ========== НАВИГАЦИЯ ПО СЛАЙДАМ ==========
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('navPrev');
    const nextBtn = document.getElementById('navNext');
    const currentSpan = document.getElementById('currentSlide');
    const totalSpan = document.getElementById('totalSlides');
    const progressFill = document.getElementById('progressFill');
    const dotsNav = document.getElementById('dotsNav');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    totalSpan.textContent = totalSlides;
    
    // Создаем точки
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.dataset.index = i;
        dot.addEventListener('click', () => goToSlide(i));
        dotsNav.appendChild(dot);
    }
    
    const dots = document.querySelectorAll('.dot');
    
    function goToSlide(index) {
        if (index < 0 || index >= totalSlides) return;
        
        // Обновляем слайды
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        // Обновляем счетчик
        currentIndex = index;
        currentSpan.textContent = index + 1;
        
        // Обновляем прогресс
        const progress = ((index + 1) / totalSlides) * 100;
        progressFill.style.width = progress + '%';
        
        // Обновляем кнопки
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === totalSlides - 1;
        
        // Обновляем точки
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    
    // ========== РЕЖИМ ПРЕЗЕНТАЦИИ ==========
    const presentationBtn = document.getElementById('presentationBtn');
    const mainContainer = document.querySelector('.main-container');
    
    presentationBtn.addEventListener('click', () => {
        mainContainer.classList.toggle('presentation-mode');
        presentationBtn.innerHTML = mainContainer.classList.contains('presentation-mode') 
            ? '<span>🔲</span><span class="btn-text">Выйти</span>' 
            : '<span>🎬</span><span class="btn-text">Презентация</span>';
    });
    
    // ========== ФИШИНГ ==========
    const phishLink = document.getElementById('phishLink');
    phishLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('⚠️ ФИШИНГ! Это поддельная ссылка. Настоящий URL: http://sberbank.ru.fake-id432.ru');
    });
    
    // ========== СОЦИАЛЬНАЯ ИНЖЕНЕРИЯ ==========
    const showExample1 = document.getElementById('showExample1');
    const showExample2 = document.getElementById('showExample2');
    const exampleHidden1 = document.getElementById('exampleHidden1');
    const exampleHidden2 = document.getElementById('exampleHidden2');
    
    showExample1.addEventListener('click', () => {
        exampleHidden1.classList.toggle('show');
        showExample1.textContent = exampleHidden1.classList.contains('show') ? 'Скрыть' : 'Показать пример';
    });
    
    showExample2.addEventListener('click', () => {
        exampleHidden2.classList.toggle('show');
        showExample2.textContent = exampleHidden2.classList.contains('show') ? 'Скрыть' : 'Показать пример';
    });
    
    // ========== ДВУХФАКТОРКА ==========
    const loginBtn2FA = document.getElementById('simulateLogin2FA');
    const twofaPanel = document.getElementById('twofaPanel');
    const verifyBtn2FA = document.getElementById('verify2FA');
    const twofaCode = document.getElementById('twofaCode');
    const twofaMessage = document.getElementById('twofaMessage');
    
    loginBtn2FA.addEventListener('click', () => {
        twofaPanel.style.display = 'block';
        twofaMessage.textContent = 'Код отправлен (подсказка: 123456)';
        twofaMessage.style.color = '#a8ede0';
    });
    
    verifyBtn2FA.addEventListener('click', () => {
        if (twofaCode.value === '123456') {
            twofaMessage.textContent = '✅ Доступ разрешен! 2FA сработала.';
            twofaMessage.style.color = '#00C851';
        } else {
            twofaMessage.textContent = '❌ Неверный код! Доступ заблокирован.';
            twofaMessage.style.color = '#ff4444';
        }
    });
    
    // ========== ШИФРОВАНИЕ ==========
    const encryptBtn = document.getElementById('encryptMessageBtn');
    const originalMessage = document.getElementById('originalMessage');
    const encryptedMessage = document.getElementById('encryptedMessage');
    
    encryptBtn.addEventListener('click', () => {
        const text = originalMessage.textContent;
        // Простое base64 для демонстрации
        const encrypted = btoa(text);
        encryptedMessage.innerHTML = `<span>Зашифрованное:</span> <code>${encrypted}</code>`;
    });
    
    // ========== Wi-Fi ХАКЕР ==========
    const slider = document.getElementById('hackerSlider');
    const dataLight = document.getElementById('wifiDataLight');
    const dataMedium = document.getElementById('wifiDataMedium');
    const dataFull = document.getElementById('wifiDataFull');
    const sliderValue = document.getElementById('sliderValue');
    
    slider.addEventListener('input', (e) => {
        const value = parseInt(e.target.value);
        sliderValue.textContent = value + '%';
        
        // Сбрасываем классы
        dataLight.classList.remove('visible');
        dataMedium.classList.remove('visible');
        dataFull.classList.remove('visible');
        
        // Показываем в зависимости от значения
        if (value >= 0) dataLight.classList.add('visible');
        if (value >= 33) dataMedium.classList.add('visible');
        if (value >= 66) dataFull.classList.add('visible');
    });
    
    // ========== ВИКТОРИНА ==========
    const questions = [
        { left: 'qwerty123', right: 'G7$k2!mN9' },
        { left: 'password', right: 'Tr0ub4dor&3' },
        { left: '12345678', right: 'Ilov3C@ts!' },
        { left: 'admin', right: 'P@ssw0rd!$' },
        { left: 'letmein', right: 'XyZ$9#hL2p' },
        { left: 'monkey', right: 'M0nK3y!$trong' },
        { left: 'football', right: 'F00tB@ll#1' },
        { left: '111111', right: 'Str0ng!P@ss' },
        { left: 'sunshine', right: 'SunsH1n3&*' },
        { left: 'qwerty', right: 'Qw3rTy!@#' }
    ];
    
    // Разделяем на 3 части
    const part1 = questions.slice(0, 4);
    const part2 = questions.slice(4, 7);
    const part3 = questions.slice(7, 10);
    
    function createQuizCard(q, index, container) {
        const card = document.createElement('div');
        card.classList.add('quiz-card');
        
        const pairDiv = document.createElement('div');
        pairDiv.classList.add('password-pair');
        
        const leftItem = document.createElement('div');
        leftItem.classList.add('password-item');
        leftItem.textContent = q.left;
        
        const vsSpan = document.createElement('span');
        vsSpan.classList.add('vs');
        vsSpan.textContent = 'VS';
        
        const rightItem = document.createElement('div');
        rightItem.classList.add('password-item');
        rightItem.textContent = q.right;
        
        pairDiv.appendChild(leftItem);
        pairDiv.appendChild(vsSpan);
        pairDiv.appendChild(rightItem);
        card.appendChild(pairDiv);
        
        card.addEventListener('click', () => {
            // Просто подсвечиваем зеленым (правый всегда сильнее)
            card.classList.add('correct');
            document.getElementById('quizMessage').textContent = `✅ Правильно! "${q.right}" надежнее, чем "${q.left}"`;
        });
        
        return card;
    }
    
    // Заполняем викторины
    const quiz1 = document.getElementById('quiz1');
    const quiz2 = document.getElementById('quiz2');
    const quiz3 = document.getElementById('quiz3');
    
    part1.forEach(q => quiz1.appendChild(createQuizCard(q)));
    part2.forEach(q => quiz2.appendChild(createQuizCard(q)));
    part3.forEach(q => quiz3.appendChild(createQuizCard(q)));
    
    // ========== ЭФФЕКТ КУРСОРА ==========
    const cursorGlow = document.querySelector('.cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
    
    // ========== КЛАВИАТУРА ==========
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
            prevBtn.click();
        } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
            nextBtn.click();
        } else if (e.key === 'p' || e.key === 'P') {
            presentationBtn.click();
        }
    });
    
    // Инициализация
    goToSlide(0);
});
