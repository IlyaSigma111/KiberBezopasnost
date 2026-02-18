const slides = [
    { type: 'welcome', title: 'Введение' },
    { type: 'sim', sim: 'bruteforce', title: 'Брутфорс' },
    { type: 'sim', sim: 'phishing', title: 'Фишинг' },
    { type: 'sim', sim: 'twofa', title: 'Двухфакторка' },
    { type: 'sim', sim: 'wifi', title: 'Wi-Fi и VPN' },
    { type: 'sim', sim: 'social', title: 'Соц. инженерия' },
    { type: 'sim', sim: 'updates', title: 'Обновления' },
    { type: 'sim', sim: 'antivirus', title: 'Антивирусы' },
    { type: 'sim', sim: 'backup', title: 'Бэкапы' },
    { type: 'sim', sim: 'password', title: 'Менеджеры паролей' },
    { type: 'sim', sim: 'browser', title: 'Безопасность браузера' },
    { type: 'sim', sim: 'mobile', title: 'Мобильная безопасность' },
    { type: 'sim', sim: 'socialmedia', title: 'Соцсети' },
    { type: 'sim', sim: 'games', title: 'Игры' },
    { type: 'sim', sim: 'email', title: 'Почта' },
    { type: 'sim', sim: 'crypto', title: 'Криптовалюты' },
    { type: 'sim', sim: 'darkweb', title: 'Даркнет' },
    { type: 'sim', sim: 'hacking', title: 'Этичный хакинг' },
    { type: 'poll', pollId: 0, title: 'Опрос: Основы' },
    { type: 'poll', pollId: 1, title: 'Опрос: Пароли' },
    { type: 'poll', pollId: 2, title: 'Опрос: Фишинг' },
    { type: 'poll', pollId: 3, title: 'Опрос: 2FA' },
    { type: 'poll', pollId: 4, title: 'Опрос: Wi-Fi' },
    { type: 'results', title: 'Результаты' }
];

const pollQuestions = [
    [
        { q: "Какой пароль сложнее взломать?", opt: ["qwerty123", "ArturPirozhkov1545435@#$!$"], correct: 1, exp: "✅ Длинный пароль с символами взламывать миллионы лет" },
        { q: "Что такое 2FA?", opt: ["Два пароля", "Пароль + код из СМС"], correct: 1, exp: "✅ Второй фактор защиты — код из телефона" },
        { q: "Друг просит денег в мессенджере?", opt: ["Перевести", "Позвонить другу"], correct: 1, exp: "✅ Всегда перезванивай! Аккаунты взламывают" }
    ],
    [
        { q: "Один пароль на все сайты?", opt: ["Да, удобно", "Нет, разные"], correct: 1, exp: "✅ Для каждого сайта свой пароль" },
        { q: "Какая длина пароля безопасна?", opt: ["6-8 символов", "12+ символов"], correct: 1, exp: "✅ Минимум 12 символов" },
        { q: "Менеджер паролей это?", opt: ["Программа", "Блокнот"], correct: 0, exp: "✅ Хранит все пароли в зашифрованном виде" }
    ],
    [
        { q: "Фишинг это?", opt: ["Ловля рыбы", "Поддельные сайты"], correct: 1, exp: "✅ Хакеры делают копии сайтов и воруют пароли" },
        { q: "Как распознать фишинг?", opt: ["По адресу сайта", "По картинке"], correct: 0, exp: "✅ Всегда проверяй URL" },
        { q: "Письмо 'Вы выиграли айфон'?", opt: ["Перейти", "Удалить"], correct: 1, exp: "✅ Классический развод" }
    ],
    [
        { q: "Что защищает 2FA?", opt: ["От подбора пароля", "От кражи пароля"], correct: 1, exp: "✅ Даже если пароль украли, без кода не войти" },
        { q: "Можно ли передавать код 2FA?", opt: ["Да", "Никому"], correct: 1, exp: "✅ Никому, даже 'сотрудникам банка'" },
        { q: "Какой 2FA лучше?", opt: ["СМС", "Приложение"], correct: 1, exp: "✅ Приложение безопаснее" }
    ],
    [
        { q: "Можно в открытый Wi-Fi вводить пароли?", opt: ["Да", "Только с VPN"], correct: 1, exp: "✅ Данные перехватывают" },
        { q: "Что такое VPN?", opt: ["Шифрование", "Антивирус"], correct: 0, exp: "✅ Шифрует весь трафик" },
        { q: "Какой Wi-Fi безопаснее?", opt: ["Домашний", "В кафе"], correct: 0, exp: "✅ Домашний с паролем" }
    ]
];

let currentSlide = 0;
let userStats = { correct: 0, total: 0 };

const content = document.getElementById('content');
const slideCounter = document.getElementById('slideCounter');
const progressFill = document.getElementById('progressFill');
const slideTitle = document.getElementById('slideTitle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateUI() {
    slideCounter.textContent = `${currentSlide + 1}/${slides.length}`;
    progressFill.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
    slideTitle.textContent = slides[currentSlide].title;
}

function renderWelcome() {
    content.innerHTML = `
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
            <div style="font-size: 100px; margin-bottom: 30px; animation: float 3s infinite;">🛡️</div>
            <h2 style="font-size: 72px; background: linear-gradient(135deg, #fff, #5b8cff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">КИБЕРБЕЗОПАСНОСТЬ</h2>
            <h3 style="font-size: 48px; margin: 30px 0;">7 КЛАСС</h3>
            <div class="grid-3" style="margin: 40px 0; width: 100%;">
                <div class="glass-card"><span style="font-size: 48px;">🔐</span><br><span style="font-size: 28px;">80% взломов</span></div>
                <div class="glass-card"><span style="font-size: 48px;">⚡</span><br><span style="font-size: 28px;">2.5 квинтильона</span></div>
                <div class="glass-card"><span style="font-size: 48px;">🎯</span><br><span style="font-size: 28px;">Каждый 10-й</span></div>
            </div>
            <div style="font-size: 32px; margin: 30px;">👉 24 слайда, 6 симуляций, 5 опросов</div>
        </div>
    `;
}

function renderBruteforce() {
    content.innerHTML = `
        <div class="glass-card">
            <h2><span style="font-size: 48px;">👨‍💻</span> Брутфорс — подбор паролей</h2>
            <div class="grid-2">
                <div>
                    <div class="status-bar" style="border-left: 8px solid #5b8cff;">
                        <span style="font-size: 28px;">🔑</span>
                        <span class="status-text">Пароль:</span>
                        <span class="status-value" id="bfPass" style="font-size: 28px;">qwerty123</span>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 25px 0;">
                        <div class="glass-card" style="padding: 20px; text-align: center;">
                            <div style="font-size: 20px; color: #aaa;">Сложность</div>
                            <div style="font-size: 32px; font-weight: 700; color: #ff6b6b;" id="bfStrength">СЛАБЫЙ</div>
                        </div>
                        <div class="glass-card" style="padding: 20px; text-align: center;">
                            <div style="font-size: 20px; color: #aaa;">Время взлома</div>
                            <div style="font-size: 32px; font-weight: 700;" id="bfTime">0.2 сек</div>
                        </div>
                    </div>
                    
                    <div class="progress-sim">
                        <div style="display: flex; justify-content: space-between; font-size: 22px; margin-bottom: 10px;">
                            <span>Прогресс подбора</span>
                            <span id="bfPercent">0%</span>
                        </div>
                        <div class="progress-track">
                            <div class="progress-fill-sim" id="bfProgress" style="width: 0%;"></div>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 15px; margin-top: 30px;">
                        <button class="btn btn-red" id="bfWeak">Слабый</button>
                        <button class="btn btn-green" id="bfStrong">Сильный</button>
                        <button class="btn btn-blue" id="bfStart">Старт</button>
                    </div>
                </div>
                
                <div>
                    <div class="glass-card">
                        <h3>Как это работает?</h3>
                        <p style="font-size: 22px; line-height: 1.6; margin-bottom: 25px;">Хакер перебирает все варианты пароля. Слабый пароль ломается за секунды, сложный — за миллиарды лет.</p>
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            <div class="indicator"><span class="indicator-dot-red"></span> qwerty123: 0.2 секунды</div>
                            <div class="indicator"><span class="indicator-dot"></span> k#9F!mP2$sT@: 5 млрд лет</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    let cracking = false;
    let interval;
    let currentPass = 'qwerty123';

    document.getElementById('bfWeak').onclick = () => {
        currentPass = 'qwerty123';
        document.getElementById('bfPass').textContent = 'qwerty123';
        document.getElementById('bfStrength').textContent = 'СЛАБЫЙ';
        document.getElementById('bfStrength').style.color = '#ff6b6b';
        document.getElementById('bfTime').textContent = '0.2 сек';
        document.getElementById('bfPercent').textContent = '0%';
        document.getElementById('bfProgress').style.width = '0%';
        if (cracking) { clearInterval(interval); cracking = false; document.getElementById('bfStart').textContent = 'Старт'; }
    };

    document.getElementById('bfStrong').onclick = () => {
        currentPass = 'k#9F!mP2$sT@';
        document.getElementById('bfPass').textContent = 'k#9F!mP2$sT@';
        document.getElementById('bfStrength').textContent = 'СЛОЖНЫЙ';
        document.getElementById('bfStrength').style.color = '#4cd964';
        document.getElementById('bfTime').textContent = '5 млрд лет';
        document.getElementById('bfPercent').textContent = '0%';
        document.getElementById('bfProgress').style.width = '0%';
        if (cracking) { clearInterval(interval); cracking = false; document.getElementById('bfStart').textContent = 'Старт'; }
    };

    document.getElementById('bfStart').onclick = function() {
        if (cracking) {
            clearInterval(interval);
            cracking = false;
            this.textContent = 'Старт';
        } else {
            cracking = true;
            this.textContent = 'Стоп';
            let progress = 0;
            interval = setInterval(() => {
                progress += currentPass === 'qwerty123' ? 5 : 0.0000001;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    cracking = false;
                    document.getElementById('bfStart').textContent = 'Старт';
                    alert(currentPass === 'qwerty123' ? '💥 Пароль взломан за 0.2 секунды!' : '🔐 Пароль слишком сложный!');
                }
                document.getElementById('bfPercent').textContent = progress.toFixed(8) + '%';
                document.getElementById('bfProgress').style.width = progress + '%';
            }, 50);
        }
    };
}

function renderPhishing() {
    content.innerHTML = `
        <div class="glass-card">
            <h2><span style="font-size: 48px;">🎣</span> Фишинг — поддельные сайты</h2>
            <div class="grid-2">
                <div>
                    <div class="status-bar" style="border-left: 8px solid #ffcc00;">
                        <span style="font-size: 28px;">🌐</span>
                        <span class="status-text">URL:</span>
                        <span class="status-value" id="phishUrl" style="font-size: 26px;">https://vk.com</span>
                    </div>
                    
                    <div style="background: rgba(0,0,0,0.5); border-radius: 40px; padding: 35px; margin: 25px 0; text-align: center;">
                        <div style="font-family: monospace; font-size: 32px; word-break: break-all;" id="phishDisplay">
                            https://vk.com
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 20px;">
                        <button class="btn btn-red" id="phishFake">🎭 Показать фишинг</button>
                        <button class="btn btn-green" id="phishReal">✅ Настоящий URL</button>
                    </div>
                </div>
                
                <div>
                    <div class="glass-card">
                        <h3>Как распознать?</h3>
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            <div class="indicator"><span class="indicator-dot"></span> Проверяй домен (vk.com, а не vk-enter.ru)</div>
                            <div class="indicator"><span class="indicator-dot"></span> Смотри на замок в адресной строке 🔒</div>
                            <div class="indicator"><span class="indicator-dot"></span> Не переходи по ссылкам из писем</div>
                            <div class="indicator"><span class="indicator-dot"></span> Проверяй орфографию</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('phishFake').onclick = () => {
        document.getElementById('phishUrl').innerHTML = 'https://vk-enter.ru (МОШЕННИКИ!)';
        document.getElementById('phishUrl').style.color = '#ff6b6b';
        document.getElementById('phishDisplay').innerHTML = '<span style="color:#ff6b6b;">https://vk-enter.ru</span>';
    };
    document.getElementById('phishReal').onclick = () => {
        document.getElementById('phishUrl').innerHTML = 'https://vk.com';
        document.getElementById('phishUrl').style.color = '';
        document.getElementById('phishDisplay').innerHTML = 'https://vk.com';
    };
}

function renderTwoFA() {
    content.innerHTML = `
        <div class="glass-card">
            <h2><span style="font-size: 48px;">🔐</span> Двухфакторная аутентификация</h2>
            <div class="grid-2">
                <div>
                    <div class="status-bar" style="border-left: 8px solid #ff6b6b;" id="twofaBar">
                        <span style="font-size: 28px;">📱</span>
                        <span class="status-text">Статус 2FA:</span>
                        <span class="status-value" id="twofaStatus">ВЫКЛЮЧЕНА</span>
                    </div>
                    
                    <div style="display: flex; gap: 15px; margin: 25px 0;">
                        <button class="btn btn-green" id="twofaOn">✅ Включить</button>
                        <button class="btn btn-red" id="twofaOff">❌ Выключить</button>
                    </div>
                    
                    <div style="background: rgba(0,0,0,0.4); border-radius: 40px; padding: 25px; margin: 25px 0;">
                        <h4 style="margin-bottom: 20px;">Тест взлома</h4>
                        <div style="display: flex; gap: 15px;">
                            <button class="btn btn-red" id="hackNo">💣 Без 2FA</button>
                            <button class="btn btn-green" id="hackYes">🔒 С 2FA</button>
                        </div>
                    </div>
                    
                    <div class="status-bar" id="hackResult" style="margin-top: 20px; min-height: 90px;">
                        <span class="status-icon">ℹ️</span>
                        <span class="status-text">Нажми кнопку взлома</span>
                    </div>
                </div>
                
                <div>
                    <div class="glass-card">
                        <h3>Как работает 2FA?</h3>
                        <div style="font-size: 22px; line-height: 2;">
                            <div>1️⃣ Вводишь логин и пароль</div>
                            <div>2️⃣ Сайт просит код из приложения</div>
                            <div>3️⃣ Только после кода пускает</div>
                        </div>
                        <div style="margin-top: 30px; padding: 20px; background: rgba(76,217,100,0.1); border-radius: 30px;">
                            <div style="font-size: 24px;">✅ Защищает 99.9% взломов</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    let enabled = false;
    const status = document.getElementById('twofaStatus');
    const bar = document.getElementById('twofaBar');
    const result = document.getElementById('hackResult');

    document.getElementById('twofaOn').onclick = () => {
        enabled = true;
        status.textContent = 'ВКЛЮЧЕНА';
        status.style.color = '#4cd964';
        bar.style.borderLeftColor = '#4cd964';
    };
    document.getElementById('twofaOff').onclick = () => {
        enabled = false;
        status.textContent = 'ВЫКЛЮЧЕНА';
        status.style.color = '';
        bar.style.borderLeftColor = '#ff6b6b';
    };
    document.getElementById('hackNo').onclick = () => {
        result.innerHTML = enabled 
            ? '<span class="status-icon">✅</span><span class="status-text">2FA защитила! Хакер запросил код</span>'
            : '<span class="status-icon">💥</span><span class="status-text">ВЗЛОМ! Хакер вошёл в аккаунт</span>';
    };
    document.getElementById('hackYes').onclick = () => {
        result.innerHTML = enabled
            ? '<span class="status-icon">🔒</span><span class="status-text">Защита сработала, без кода не пустило</span>'
            : '<span class="status-icon">⚠️</span><span class="status-text">Сначала включи 2FA</span>';
    };
}

function renderWifi() {
    content.innerHTML = `
        <div class="glass-card">
            <h2><span style="font-size: 48px;">📡</span> Wi-Fi и VPN</h2>
            <div class="grid-2">
                <div>
                    <div class="status-bar" style="border-left: 8px solid #ff6b6b;" id="wifiBar">
                        <span style="font-size: 28px;">🛜</span>
                        <span class="status-text">Статус:</span>
                        <span class="status-value" id="wifiStatus">Без VPN</span>
                    </div>
                    
                    <div style="background: rgba(0,0,0,0.5); border-radius: 40px; padding: 25px; margin: 25px 0;">
                        <div style="font-family: monospace; font-size: 22px; word-break: break-all;" id="wifiData">
                            Перехвачено: "login: student7, pass: 12345"
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 20px;">
                        <button class="btn btn-red" id="wifiNo">🌐 Без VPN</button>
                        <button class="btn btn-green" id="wifiYes">🔒 С VPN</button>
                    </div>
                </div>
                
                <div>
                    <div class="glass-card">
                        <h3>Как VPN защищает?</h3>
                        <p style="font-size: 22px;">VPN шифрует все данные, хакер видит только мусор вместо паролей.</p>
                        <div style="margin-top: 25px;">
                            <div class="indicator"><span class="indicator-dot"></span> Без VPN: данные открыты</div>
                            <div class="indicator" style="margin-top: 10px;"><span class="indicator-dot"></span> С VPN: зашифрованы</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('wifiNo').onclick = () => {
        document.getElementById('wifiStatus').textContent = 'Без VPN';
        document.getElementById('wifiBar').style.borderLeftColor = '#ff6b6b';
        document.getElementById('wifiData').innerHTML = 'Перехвачено: "login: student7, pass: 12345"';
    };
    document.getElementById('wifiYes').onclick = () => {
        document.getElementById('wifiStatus').textContent = 'VPN активен';
        document.getElementById('wifiBar').style.borderLeftColor = '#4cd964';
        document.getElementById('wifiData').innerHTML = '🔒 Зашифровано: "h3@!fjKlp$7#2"';
    };
}

function renderSocial() {
    content.innerHTML = `
        <div class="glass-card">
            <h2><span style="font-size: 48px;">🎭</span> Социальная инженерия</h2>
            <div class="grid-2">
                <div>
                    <div class="status-bar" style="border-left: 8px solid #ffcc00;">
                        <span style="font-size: 28px;">📞</span>
                        <span class="status-text">Звонок из банка:</span>
                        <span class="status-value">"Назовите код из СМС"</span>
                    </div>
                    
                    <div style="background: rgba(0,0,0,0.5); border-radius: 40px; padding: 35px; margin: 25px 0; text-align: center;">
                        <div style="font-size: 28px;" id="socialResult">⚠️ Никому не называй код!</div>
                    </div>
                    
                    <div style="display: flex; gap: 20px;">
                        <button class="btn btn-red" id="socialBad">📢 Ответить "да"</button>
                        <button class="btn btn-green" id="socialGood">🚫 Положить трубку</button>
                    </div>
                </div>
                
                <div>
                    <div class="glass-card">
                        <h3>Схемы обмана</h3>
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            <div class="indicator"><span class="indicator-dot-red"></span> Звонки из "банка"</div>
                            <div class="indicator"><span class="indicator-dot-red"></span> Сообщения от "друга"</div>
                            <div class="indicator"><span class="indicator-dot-red"></span> Письма от "начальника"</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const result = document.getElementById('socialResult');
    document.getElementById('socialBad').onclick = () => {
        result.innerHTML = '❌ ВЗЛОМ! Ты отдал код из СМС';
        result.style.color = '#ff6b6b';
    };
    document.getElementById('socialGood').onclick = () => {
        result.innerHTML = '✅ Молодец! Безопасно';
        result.style.color = '#4cd964';
    };
}

function renderUpdates() {
    content.innerHTML = `
        <div class="glass-card">
            <h2><span style="font-size: 48px;">🔄</span> Обновления программ</h2>
            <div class="grid-2">
                <div>
                    <div class="status-bar" style="border-left: 8px solid #ff6b6b;" id="updateBar">
                        <span style="font-size: 28px;">⚠️</span>
                        <span class="status-text">Статус:</span>
                        <span class="status-value" id="updateStatus">Есть уязвимости</span>
                    </div>
                    
                    <div style="background: rgba(0,0,0,0.5); border-radius: 40px; padding: 25px; margin: 25px 0;">
                        <div style="font-size: 24px; text-align: center;" id="updateMsg">
                            Система не обновлялась 3 месяца
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 20px;">
                        <button class="btn btn-red" id="updateNo">⏳ Не обновлять</button>
                        <button class="btn btn-green" id="updateYes">⚡ Обновить</button>
                    </div>
                </div>
                
                <div>
                    <div class="glass-card">
                        <h3>Зачем обновлять?</h3>
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            <div class="indicator"><span class="indicator-dot"></span> Закрывают дыры в безопасности</div>
                            <div class="indicator"><span class="indicator-dot"></span> Защищают от новых вирусов</div>
                            <div class="indicator"><span class="indicator-dot"></span> Добавляют новые функции</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('updateNo').onclick = () => {
        document.getElementById('updateStatus').textContent = 'КРИТИЧЕСКИ УЯЗВИМ';
        document.getElementById('updateBar').style.borderLeftColor = '#ff6b6b';
        document.getElementById('updateMsg').innerHTML = '🔴 ВЗЛОМ! Вирус через дыру';
    };
    document.getElementById('updateYes').onclick = () => {
        document.getElementById('updateStatus').textContent = 'ЗАЩИЩЕНО';
        document.getElementById('updateBar').style.borderLeftColor = '#4cd964';
        document.getElementById('updateMsg').innerHTML = '🟢 Всё обновлено, безопасно';
    };
}

function renderDefault(title) {
    content.innerHTML = `
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
            <h2>${title}</h2>
            <p style="font-size: 28px;">Симуляция готовится</p>
            <div style="font-size: 60px; margin: 30px;">🔧</div>
        </div>
    `;
}

function renderPoll(pollId) {
    const questions = pollQuestions[pollId];
    let qIndex = 0;
    
    function showQuestion() {
        if (qIndex >= questions.length) {
            content.innerHTML = `
                <div class="glass-card" style="text-align: center;">
                    <h2>🎉 Опрос завершён!</h2>
                    <button class="btn btn-blue" style="margin-top: 30px;" onclick="nextBtn.click()">Продолжить</button>
                </div>
            `;
            return;
        }
        const q = questions[qIndex];
        content.innerHTML = `
            <div class="glass-card">
                <h2>📋 Вопрос ${qIndex+1}/${questions.length}</h2>
                <div style="font-size: 36px; margin: 40px 0; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 40px;">
                    ${q.q}
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                    <div class="poll-option" id="opt0">${q.opt[0]}</div>
                    <div class="poll-option" id="opt1">${q.opt[1]}</div>
                </div>
                <div class="explanation" id="pollExp">👆 Выбери ответ</div>
            </div>
        `;
        
        document.getElementById('opt0').onclick = () => handle(0);
        document.getElementById('opt1').onclick = () => handle(1);
        
        function handle(selected) {
            const opt0 = document.getElementById('opt0');
            const opt1 = document.getElementById('opt1');
            const exp = document.getElementById('pollExp');
            
            opt0.classList.remove('selected', 'wrong');
            opt1.classList.remove('selected', 'wrong');
            
            if (selected === q.correct) {
                selected === 0 ? opt0.classList.add('selected') : opt1.classList.add('selected');
                userStats.correct++;
            } else {
                selected === 0 ? opt0.classList.add('wrong') : opt1.classList.add('wrong');
                q.correct === 0 ? opt0.classList.add('selected') : opt1.classList.add('selected');
            }
            userStats.total++;
            exp.innerHTML = q.exp;
            
            setTimeout(() => {
                qIndex++;
                showQuestion();
            }, 2000);
        }
    }
    showQuestion();
}

function renderResults() {
    const score = userStats.total ? Math.round((userStats.correct / userStats.total) * 100) : 0;
    content.innerHTML = `
        <div class="glass-card" style="text-align: center;">
            <h2>📊 Твои результаты</h2>
            <div class="grid-3" style="margin: 40px 0;">
                <div class="glass-card">
                    <div style="font-size: 48px;">✅</div>
                    <div style="font-size: 36px; font-weight: 700;">${userStats.correct}</div>
                </div>
                <div class="glass-card">
                    <div style="font-size: 48px;">❌</div>
                    <div style="font-size: 36px; font-weight: 700;">${userStats.total - userStats.correct}</div>
                </div>
                <div class="glass-card">
                    <div style="font-size: 48px;">🎯</div>
                    <div style="font-size: 36px; font-weight: 700;">${score}%</div>
                </div>
            </div>
            <div style="font-size: 32px; padding: 40px; background: rgba(91,140,255,0.2); border-radius: 50px;">
                ${score >= 80 ? '🏆 Молодец! Ты готов к цифровой безопасности!' : 
                  score >= 50 ? '👍 Хорошо, но есть над чем работать' : 
                  '📚 Нужно повторить материал'}
            </div>
            <button class="btn btn-blue" style="margin-top: 30px;" onclick="location.reload()">🔄 Пройти заново</button>
        </div>
    `;
}

function renderCurrent() {
    const slide = slides[currentSlide];
    
    if (slide.type === 'welcome') renderWelcome();
    else if (slide.type === 'sim') {
        switch(slide.sim) {
            case 'bruteforce': renderBruteforce(); break;
            case 'phishing': renderPhishing(); break;
            case 'twofa': renderTwoFA(); break;
            case 'wifi': renderWifi(); break;
            case 'social': renderSocial(); break;
            case 'updates': renderUpdates(); break;
            default: renderDefault(slide.title);
        }
    }
    else if (slide.type === 'poll') renderPoll(slide.pollId);
    else if (slide.type === 'results') renderResults();
    
    updateUI();
}

prevBtn.onclick = () => {
    if (currentSlide > 0) {
        currentSlide--;
        renderCurrent();
    }
};

nextBtn.onclick = () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        renderCurrent();
    }
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
});

renderCurrent();
