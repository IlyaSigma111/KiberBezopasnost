// script.js

document.addEventListener('DOMContentLoaded', function() {
    // ========== 1. РЕЖИМ ПРЕЗЕНТАЦИИ ==========
    const presentationBtn = document.getElementById('presentation-toggle');
    const container = document.querySelector('.container');

    presentationBtn.addEventListener('click', () => {
        container.classList.toggle('presentation-mode');
        presentationBtn.textContent = container.classList.contains('presentation-mode') ? '🔲' : '🎬';
    });

    // ========== 2. ПРИМЕР С 2FA ==========
    const loginBtn = document.getElementById('simulateLoginBtn');
    const verifyBtn = document.getElementById('verify2faBtn');
    const messageEl = document.getElementById('2faMessage');
    const fake2faDiv = document.getElementById('fake2fa');

    loginBtn.addEventListener('click', () => {
        fake2faDiv.style.display = 'block'; // Показываем блок ввода кода
        messageEl.textContent = 'Логин прошел, введите код из SMS (подсказка: 123456)';
    });

    verifyBtn.addEventListener('click', () => {
        const code = document.getElementById('2faCode').value;
        if (code === '123456') {
            messageEl.textContent = '✅ Успех! 2FA сработала. Доступ разрешен.';
            messageEl.style.color = '#00b894';
        } else {
            messageEl.textContent = '❌ Неверный код! Доступ заблокирован.';
            messageEl.style.color = '#d63031';
        }
    });

    // ========== 3. ПРИМЕР С ШИФРОВАНИЕМ ==========
    const encryptBtn = document.getElementById('encryptBtn');
    const originalTextSpan = document.getElementById('originalText');
    const encryptedResultDiv = document.getElementById('encryptedResult');

    encryptBtn.addEventListener('click', () => {
        const original = originalTextSpan.textContent;
        // Простейшая имитация шифрования (замена на символы)
        let encrypted = '';
        for (let i = 0; i < original.length; i++) {
            encrypted += String.fromCharCode(original.charCodeAt(i) + 10); // Сдвиг на 10 символов
        }
        // Делаем нечитаемым
        encrypted = btoa(original); // Base64 для наглядности
        encryptedResultDiv.textContent = encrypted;
    });

    // ========== 4. Wi-Fi СЛАЙДЕР (HACKER VIEW) ==========
    const slider = document.getElementById('hackerSlider');
    const dataMedium = document.getElementById('hackerDataMedium');
    const dataFull = document.getElementById('hackerDataFull');

    slider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        // При 0 - видно только легкие данные, при 50 - средние, при 100 - все
        if (val < 30) {
            dataMedium.classList.add('hidden');
            dataFull.classList.add('hidden');
        } else if (val >= 30 && val < 70) {
            dataMedium.classList.remove('hidden');
            dataFull.classList.add('hidden');
        } else {
            dataMedium.classList.remove('hidden');
            dataFull.classList.remove('hidden');
        }
    });

    // ========== 5. ВИКТОРИНА (10 карточек с парами паролей) ==========
    const quizContainer = document.getElementById('quiz-container');
    const quizMessage = document.getElementById('quizMessage');

    // База данных вопросов (10 пар)
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
        { left: 'qwerty', right: 'Qw3rTy!@#', correct: 'right' } // Сложный, но все же слабый? Для примера оставим сложный справа
    ];

    // Функция для создания карточки
    function createQuizCard(q, index) {
        const card = document.createElement('div');
        card.classList.add('quiz-card');
        card.dataset.correct = q.correct;
        card.dataset.index = index;

        const pairDiv = document.createElement('div');
        pairDiv.classList.add('password-pair');

        const leftItem = document.createElement('div');
        leftItem.classList.add('password-item', 'weak');
        leftItem.textContent = q.left;

        const vsSpan = document.createElement('span');
        vsSpan.classList.add('vs');
        vsSpan.textContent = 'VS';

        const rightItem = document.createElement('div');
        rightItem.classList.add('password-item', 'strong');
        rightItem.textContent = q.right;

        pairDiv.appendChild(leftItem);
        pairDiv.appendChild(vsSpan);
        pairDiv.appendChild(rightItem);

        card.appendChild(pairDiv);

        // Добавляем обработчик клика
        card.addEventListener('click', function(e) {
            // Убираем предыдущие классы выбора на этой карточке
            this.classList.remove('selected-correct', 'selected-wrong');

            // Определяем, правильный ли выбор (всегда ожидаем, что кликнут по карточке, а не по элементу)
            // В нашей викторине "правильный" всегда тот, что справа (условно)
            const isCorrect = (q.correct === 'right'); // Всегда true в нашей БД, но для логики оставим

            if (isCorrect) {
                this.classList.add('selected-correct');
                quizMessage.textContent = `✅ Вопрос ${index+1}: Верно! Пароль "${q.right}" значительно сложнее для взлома.`;
                quizMessage.style.color = '#00b894';
            } else {
                this.classList.add('selected-wrong');
                quizMessage.textContent = `❌ Вопрос ${index+1}: Этот пароль слишком прост. Посмотри на правый вариант!`;
                quizMessage.style.color = '#d63031';
            }
        });

        return card;
    }

    // Очищаем контейнер и заполняем вопросами
    quizContainer.innerHTML = '';
    questions.forEach((q, idx) => {
        quizContainer.appendChild(createQuizCard(q, idx));
    });

    // Дополнительно: Начальное скрытие 2FA блока
    fake2faDiv.style.display = 'none';

    // ========== Эффект для фишинг-ссылки (уже работает через CSS, но добавим console.log для интерактива) ==========
    const phishLink = document.getElementById('phishLink');
    phishLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('⚠️ Предупреждение! Вы чуть не перешли по фишинговой ссылке. В реальной жизни это привело бы к краже данных.');
    });

    console.log('Сайт по кибербезопасности загружен. Приятного изучения!');
});
