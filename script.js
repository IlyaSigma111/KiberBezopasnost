document.addEventListener('DOMContentLoaded', function() {
    // ========== НАВИГАЦИЯ ПО СЛАЙДАМ ==========
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const currentSpan = document.getElementById('current-slide');
    const totalSpan = document.getElementById('total-slides');
    const dotsContainer = document.getElementById('slideDots');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    totalSpan.textContent = totalSlides;

    // Создаем точки
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.dataset.index = i;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll('.dot');

    function updateSlides() {
        // Обновляем слайды
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        // Обновляем счетчик
        currentSpan.textContent = currentSlide + 1;
        
        // Обновляем кнопки
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
        
        // Обновляем точки
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(index) {
        if (index >= 0 && index < totalSlides) {
            currentSlide = index;
            updateSlides();
        }
    }

    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

    // ========== РЕЖИМ ПРЕЗЕНТАЦИИ ==========
    const presentationToggle = document.getElementById('presentationToggle');
    const glassContainer = document.querySelector('.glass-container');

    presentationToggle.addEventListener('click', () => {
        glassContainer.classList.toggle('presentation-mode');
        presentationToggle.innerHTML = glassContainer.classList.contains('presentation-mode') 
            ? '<span class="icon">🔲</span><span class="label">Выйти</span>' 
            : '<span class="icon">🎬</span><span class="label">Режим презентации</span>';
    });

    // ========== ФИШИНГ ==========
    const phishLink = document.getElementById('phishLink');
    phishLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('⚠️ ЭТО ФИШИНГ! Настоящий сайт: http://secure.com.fake-site.ru');
    });

    // ========== 2FA ==========
    const loginBtn = document.getElementById('simulateLoginBtn');
    const verifyBtn = document.getElementById('verifyTwofaBtn');
    const twofaPanel = document.getElementById('twofaPanel');
    const twofaMessage = document.getElementById('twofaMessage');
    const twofaCode = document.getElementById('twofaCode');

    twofaPanel.style.display = 'none';

    loginBtn.addEventListener('click', () => {
        twofaPanel.style.display = 'block';
        twofaMessage.textContent = 'Код отправлен (подсказка: 123456)';
        twofaMessage.style.color = '#a8ede0';
    });

    verifyBtn.addEventListener('click', () => {
        if (twofaCode.value === '123456') {
            twofaMessage.textContent = '✅ Доступ разрешен! 2FA сработала.';
            twofaMessage.style.color = '#00ff88';
        } else {
            twofaMessage.textContent = '❌ Неверный код! Доступ заблокирован.';
            twofaMessage.style.color = '#ff4444';
        }
    });

    // ========== ШИФРОВАНИЕ ==========
    const encryptBtn = document.getElementById('encryptBtn');
    const originalText = document.getElementById('originalText');
    const encryptedResult = document.getElementById('encryptedResult');

    encryptBtn.addEventListener('click', () => {
        const text = originalText.textContent;
        // Простое base64 "шифрование" для наглядности
        const encrypted = btoa(text);
        encryptedResult.innerHTML = `<span class="result">${encrypted}</span>`;
    });

    // ========== Wi-Fi ХАКЕР ==========
    const slider = document.getElementById('hackerSlider');
    const dataLight = document.getElementById('dataLight');
    const dataMedium = document.getElementById('dataMedium');
    const dataFull = document.getElementById('dataFull');

    slider.addEventListener('input', (e) => {
        const value = parseInt(e.target.value);
        
        // Сбрасываем видимость
        dataLight.classList.remove('visible');
        dataMedium.classList.remove('visible');
        dataFull.classList.remove('visible');
        
        // Показываем данные в зависимости от положения слайдера
        if (value >= 0) dataLight.classList.add('visible');
        if (value >= 33) dataMedium.classList.add('visible');
        if (value >= 66) dataFull.classList.add('visible');
    });

    // ========== ВИКТОРИНА ==========
    const questions = [
        { left: 'qwerty123', right: 'G7$k2!mN9', correct: 'right' },
        { left: 'password', right: 'Tr0ub4dor&3', correct: 'right' },
        { left: '12345678', right: 'Ilov3C@ts!', correct: 'right' },
        { left: 'admin', right: 'P@ssw0rd!$', correct: 'right' },
        { left: 'letmein', right: 'XyZ$9#hL2p', correct: 'right' },
        { left: 'monkey', right: 'M0nK3y!$trong', correct: 'right' },
        { left: 'football', right: 'F00tB@ll#1', correct: 'right' },
        { left: '111111', right: 'Str0ng!P@ss', correct: 'right' },
        { left: 'sunshine', right: 'SunsH1n3&*', correct: 'right' },
        { left: 'qwerty', right: 'Qw3rTy!@#', correct: 'right' }
    ];

    // Разделяем вопросы на 3 части
    const part1 = questions.slice(0, 3);
    const part2 = questions.slice(3, 7);
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
            // Убираем предыдущие классы
            card.classList.remove('correct', 'wrong');
            
            if (q.correct === 'right') {
                card.classList.add('correct');
                document.getElementById('quizMessage').textContent = `✅ Верно! "${q.right}" надежнее`;
            } else {
                card.classList.add('wrong');
                document.getElementById('quizMessage').textContent = `❌ "${q.left}" слишком простой`;
            }
        });
        
        return card;
    }

    // Заполняем все три части
    const quizPart1 = document.getElementById('quizPart1');
    const quizPart2 = document.getElementById('quizPart2');
    const quizPart3 = document.getElementById('quizPart3');
    
    part1.forEach((q, i) => quizPart1.appendChild(createQuizCard(q, i, quizPart1)));
    part2.forEach((q, i) => quizPart2.appendChild(createQuizCard(q, i, quizPart2)));
    part3.forEach((q, i) => quizPart3.appendChild(createQuizCard(q, i, quizPart3)));

    // Инициализация
    updateSlides();
});
