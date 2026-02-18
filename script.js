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
ы
