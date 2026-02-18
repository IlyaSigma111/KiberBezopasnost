// Функция для переключения режима презентации
function togglePresentationMode() {
    document.body.classList.toggle("presentation-mode");
}

// Симуляция атаки на пароль
function simulatePasswordAttack() {
    const feedbackElement = document.getElementById("password-feedback");
    const password = prompt("Введите ваш пароль:");

    // Простая проверка сложности пароля
    if (password.length < 8) {
        feedbackElement.textContent = "Пароль слишком слабый! Попробуйте снова.";
        feedbackElement.style.color = "red";
    } else {
        feedbackElement.textContent = "Пароль в порядке, но помните: используйте разные пароли для разных сервисов!";
        feedbackElement.style.color = "green";
    }
}

// Симуляция фишинга
function simulatePhishing() {
    const feedbackElement = document.getElementById("phishing-feedback");
    const response = prompt("Вам пришло письмо от банка. Оно просит ввести логин и пароль. Введите вашу реакцию (кликнуть/игнорировать):");
    
    if (response.toLowerCase() === "кликнуть") {
        feedbackElement.textContent = "Осторожно! Это фишинг. Вы только что раскрыли свои данные.";
        feedbackElement.style.color = "red";
    } else {
        feedbackElement.textContent = "Отлично! Вы избежали фишинга.";
        feedbackElement.style.color = "green";
    }
}

// Тест на безопасность пароля
function testPassword() {
    const password = document.getElementById("test-password").value;
    const feedbackElement = document.getElementById("test-feedback");

    if (password.length < 8) {
        feedbackElement.textContent = "Пароль слишком слабый!";
        feedbackElement.style.color = "red";
    } else {
        feedbackElement.textContent = "Ваш пароль достаточно сильный.";
        feedbackElement.style.color = "green";
    }
}
