// Вопросы для опроса
const questions = [
    {
        text: "Какой пароль сложнее взломать?",
        options: ["qwerty123", "ArturPirozhkov1545435@#$!$"],
        correct: 1,
        explanation: "✅ Правильно! Длинный пароль с цифрами и символами взламывать миллионы лет. qwerty123 ломается за секунды."
    },
    {
        text: "Что такое двухфакторная аутентификация (2FA)?",
        options: ["Два разных пароля", "Пароль + код из СМС/приложения"],
        correct: 1,
        explanation: "✅ 2FA — это когда кроме пароля нужен ещё и код из телефона. Даже если пароль украдут, хакер не войдёт."
    },
    {
        text: "Как действовать, если в мессенджер пишет 'друг' и просит денег?",
        options: ["Перевести, если друг", "Позвонить другу и проверить"],
        correct: 1,
        explanation: "✅ Всегда перезванивай! Мошенники взламывают аккаунты и просят деньги от имени друзей."
    },
    {
        text: "Что такое фишинг?",
        options: ["Ловля рыбы", "Поддельные сайты для кражи паролей"],
        correct: 1,
        explanation: "✅ Фишинг — когда хакер делает копию сайта и ворует пароли. Всегда проверяй адрес сайта."
    },
    {
        text: "Можно ли подключаться к любому открытому Wi-Fi?",
        options: ["Да, если он бесплатный", "Только с VPN или без важных данных"],
        correct: 1,
        explanation: "✅ В открытом Wi-Fi хакер может перехватить твои пароли. Если подключаешься — используй VPN."
    },
    {
        text: "Как часто нужно обновлять программы?",
        options: ["Раз в год", "Сразу, как выходит обновление"],
        correct: 1,
        explanation: "✅ В обновлениях закрывают дыры, через которые лезут вирусы. Чем дольше не обновляешь — тем опаснее."
    },
    {
        text: "Что такое социальная инженерия?",
        options: ["Инженерия для соцсетей", "Когда хакер обманом заставляет сказать данные"],
        correct: 1,
        explanation: "✅ Это когда звонят из 'банка', пугают и просят код из СМС. Никому не называй код!"
    },
    {
        text: "Какой пароль использовать для всех сайтов?",
        options: ["Один сложный на всё", "Для каждого сайта свой"],
        correct: 1,
        explanation: "✅ Если украдут пароль от одного сайта — хакер проверит его везде. На каждом сайте должен быть свой пароль."
    },
    {
        text: "Что делать, если пришло письмо 'Вы выиграли айфон' со ссылкой?",
        options: ["Перейти скорее", "Не переходить, это ловушка"],
        correct: 1,
        explanation: "✅ Это классический развод. Не переходи по ссылкам из подозрительных писем."
    },
    {
        text: "Нужно ли на телефоне ставить антивирус?",
        options: ["Android — да, iPhone — осторожно", "Не нужно, телефон не ломают"],
        correct: 0,
        explanation: "✅ На Android вирусы бывают часто, на iPhone реже, но фишинг опасен везде."
    }
];

// Симуляции
document.addEventListener('DOMContentLoaded', function() {
    // Брутфорс
    const passwordDisplay = document.getElementById('passwordDisplay');
    const passStrength = document.getElementById('passStrength');
    const timeToCrack = document.getElementById('timeToCrack');
    
    document.getElementById('weakPassBtn')?.addEventListener('click', function() {
        passwordDisplay.innerText = 'qwerty123';
        passStrength.innerText = '🟢 Слабый';
        timeToCrack.innerText = '⏱️ 0.2 сек';
    });
    
    document.getElementById('strongPassBtn')?.addEventListener('click', function() {
        passwordDisplay.innerText = 'k#9F!mP2$sT@';
        passStrength.innerText = '🔴 Сложный';
        timeToCrack.innerText = '⏱️ 5 млрд лет';
    });

    // Фишинг
    const phishingUrl = document.getElementById('phishingUrl');
    document.getElementById('phishingDemoBtn')?.addEventListener('click', function() {
        phishingUrl.innerText = 'https://vk.com · на самом деле: vk-enter.ru';
        phishingUrl.style.background = 'rgba(200,60,60,0.6)';
        setTimeout(() => {
            phishingUrl.innerText = 'https://vk.com';
            phishingUrl.style.background = 'rgba(0,0,0,0.5)';
        }, 3000);
    });

    // 2FA
    const hackMsg = document.getElementById('hack2faMessage');
    let is2faEnabled = false;
    
    document.getElementById('sim2faOn')?.addEventListener('click', function() {
        is2faEnabled = true;
        hackMsg.innerText = '✅ 2FA включена';
        hackMsg.style.background = 'rgba(0,80,40,0.7)';
    });
    
    document.getElementById('sim2faOff')?.addEventListener('click', function() {
        is2faEnabled = false;
        hackMsg.innerText = '❌ 2FA выключена';
        hackMsg.style.background = 'rgba(120,30,30,0.8)';
    });
    
    document.getElementById('tryHackWith2fa')?.addEventListener('click', function() {
        if (is2faEnabled) {
            alert('✅ 2FA защитила! Хакер запросил код и не прошёл.');
        } else {
            alert('💥 Взлом! 2FA выключена, хакер вошёл.');
        }
    });
    
    document.getElementById('tryHackWith2faProtected')?.addEventListener('click', function() {
        if (is2faEnabled) {
            alert('🔐 Надёжно! Даже с паролем не пройти.');
        } else {
            alert('⚠️ Сначала включи 2FA!');
        }
    });

    // Wi-Fi
    const wifiStatus = document.getElementById('wifiStatus');
    const sniffedData = document.getElementById('sniffedData');
    
    document.getElementById('noVpnBtn')?.addEventListener('click', function() {
        wifiStatus.innerText = '🟡 Трафик открыт';
        wifiStatus.style.background = 'rgba(180,70,70,0.7)';
        sniffedData.innerText = 'Перехвачено: "login: student7, pass: 12345"';
    });
    
    document.getElementById('vpnBtn')?.addEventListener('click', function() {
        wifiStatus.innerText = '🟢 VPN защищает';
        wifiStatus.style.background = 'rgba(40,120,80,0.8)';
        sniffedData.innerText = '🔒 Перехвачено: "зашифрованный мусор"';
    });

    // Социальная инженерия
    const socialResult = document.getElementById('socialResult');
    
    document.getElementById('socialHack')?.addEventListener('click', function() {
        socialResult.innerText = '❌ ВЗЛОМ! Ты отдал код из СМС';
        socialResult.style.background = 'rgba(200,0,0,0.8)';
    });
    
    document.getElementById('socialSafe')?.addEventListener('click', function() {
        socialResult.innerText = '✅ Молодец! Положил трубку';
        socialResult.style.background = 'rgba(0,100,50,0.8)';
    });

    // Обновления
    const updateStatus = document.getElementById('updateStatus');
    
    document.getElementById('noUpdateBtn')?.addEventListener('click', function() {
        updateStatus.innerText = '🔴 Взломали! Вирус через дыру';
        updateStatus.style.background = 'rgba(200,0,0,0.8)';
    });
    
    document.getElementById('updateBtn')?.addEventListener('click', function() {
        updateStatus.innerText = '🟢 Обновлено, всё защищено';
        updateStatus.style.background = 'rgba(0,100,50,0.8)';
    });
});

// Опрос
let currentQuestion = 0;
let answered = false;

const pollContainer = document.getElementById('pollContainer');
const questionCounter = document.getElementById('questionCounter');
const nextBtn = document.getElementById('nextBtn');

function renderQuestion(index) {
    const q = questions[index];
    let html = `
        <div class="poll-grid">
            <div class="option-card" data-opt="0">
                <div class="option-number">ВАРИАНТ 1</div>
                <div class="option-text">${q.options[0]}</div>
            </div>
            <div class="option-card" data-opt="1">
                <div class="option-number">ВАРИАНТ 2</div>
                <div class="option-text">${q.options[1]}</div>
            </div>
            <div class="explanation" id="explanation">
                👆 Выберите вариант
            </div>
        </div>
    `;
    pollContainer.innerHTML = html;
    questionCounter.innerText = `Вопрос ${index + 1} из ${questions.length}`;
    
    nextBtn.style.display = 'none';
    answered = false;

    document.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (answered) return;
            
            const opt = parseInt(this.dataset.opt);
            const isCorrect = (opt === q.correct);
            
            document.querySelectorAll('.option-card').forEach(c => {
                c.classList.remove('selected', 'wrong');
            });
            
            if (isCorrect) {
                this.classList.add('selected');
            } else {
                this.classList.add('wrong');
                document.querySelectorAll('.option-card')[q.correct].classList.add('selected');
            }
            
            document.getElementById('explanation').innerHTML = q.explanation;
            
            answered = true;
            
            if (index < questions.length - 1) {
                nextBtn.style.display = 'inline-block';
            } else {
                nextBtn.style.display = 'inline-block';
                nextBtn.innerText = '🏁 Завершить';
            }
        });
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', function() {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            renderQuestion(currentQuestion);
            if (currentQuestion === questions.length - 1) {
                nextBtn.innerText = '🏁 Завершить';
            }
        } else {
            pollContainer.innerHTML = `
                <div style="text-align: center; padding: 4rem; background: rgba(0,0,0,0.4); border-radius: 4rem; font-size: 3rem;">
                    🎉 МОЛОДЦЫ!<br>
                    <span style="font-size: 2rem; display: block; margin-top: 2rem;">Теперь вы знаете основы кибербезопасности!</span>
                </div>
            `;
            nextBtn.style.display = 'none';
            questionCounter.innerText = 'Опрос завершён';
        }
    });
}

// Запуск
if (pollContainer) {
    renderQuestion(0);
}
