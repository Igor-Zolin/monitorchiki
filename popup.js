const POPUP_MESSAGES = [
    {
        icon: "🔐",
        label: "Совет по паролям",
        text: "Используй разные пароли для каждого сайта — и никому их не говори, даже лучшему другу!",
        theme: "green"
    },
    {
        icon: "🎣",
        label: "Осторожно!",
        text: "Получил письмо с призом? Не спеши! Скорее всего, это фишинг — мошенники хотят украсть твои данные.",
        theme: "orange"
    },
    {
        icon: "🧑‍💻",
        label: "Личные данные",
        text: "Не публикуй в интернете свой адрес, телефон и школу. Эта информация должна быть только у близких.",
        theme: "purple"
    },
    {
        icon: "📶",
        label: "Совет про Wi-Fi",
        text: "Публичный Wi-Fi в кафе или торговом центре небезопасен. Не совершай там покупки и не вводи пароли.",
        theme: "blue"
    },
    {
        icon: "🤝",
        label: "Общение онлайн",
        text: "Незнакомец из интернета предлагает встретиться? Обязательно расскажи об этом родителям!",
        theme: "orange"
    },
    {
        icon: "🦠",
        label: "Вирусы",
        text: "Не открывай файлы от незнакомцев — даже если они выглядят безопасно. Сначала проверь антивирусом!",
        theme: "green"
    },
    {
        icon: "🔔",
        label: "Двухфакторная защита",
        text: "Включи подтверждение входа по SMS или почте — это двойная защита твоего аккаунта!",
        theme: "purple"
    },
    {
        icon: "💬",
        label: "Кибербуллинг",
        text: "Если тебя обижают в сети — не молчи. Расскажи взрослым и сохрани скриншоты переписки.",
        theme: "blue"
    },
    {
        icon: "🕵️",
        label: "Проверяй источники",
        text: "Не всё, что написано в интернете — правда. Проверяй информацию в нескольких источниках!",
        theme: "orange"
    },
    {
        icon: "⏰",
        label: "Время в сети",
        text: "Следи за временем в интернете. Делай перерывы каждые 40–50 минут — глаза и мозг скажут спасибо!",
        theme: "green"
    }
];

// ── Настройки ──
const POPUP_CONFIG = {
    displayDuration: 6000,   // мс — сколько уведомление висит на экране
    interval: 15000,         // мс — пауза между появлениями
    maxVisible: 3,            // максимум одновременно видимых уведомлений
    randomOrder: true         // true — случайный порядок, false — по очереди
};

// ── Внутреннее состояние ──
let popupQueue = [];         // перемешанная очередь индексов
let popupQueueIndex = 0;     // текущая позиция в очереди
let popupIntervalId = null;
let popupContainer = null;

// ── Инициализация при загрузке страницы ──
document.addEventListener("DOMContentLoaded", () => {
    createContainer();
    buildQueue();

    // Первое уведомление — через 3 секунды после загрузки
    setTimeout(() => {
        showNextPopup();
        popupIntervalId = setInterval(showNextPopup, POPUP_CONFIG.interval);
    }, 3000);
});

// ── Создать контейнер один раз ──
function createContainer() {
    popupContainer = document.createElement("div");
    popupContainer.id = "popup-container";
    document.body.appendChild(popupContainer);
}

// ── Сформировать очередь (случайную или последовательную) ──
function buildQueue() {
    popupQueue = POPUP_MESSAGES.map((_, i) => i);
    if (POPUP_CONFIG.randomOrder) {
        for (let i = popupQueue.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [popupQueue[i], popupQueue[j]] = [popupQueue[j], popupQueue[i]];
        }
    }
    popupQueueIndex = 0;
}

// ── Показать следующее уведомление ──
function showNextPopup() {
    const currentVisible = popupContainer.querySelectorAll(
        ".popup-toast:not(.popup-hiding)"
    ).length;

    if (currentVisible >= POPUP_CONFIG.maxVisible) return;

    // Взять следующий индекс из очереди
    const msgIndex = popupQueue[popupQueueIndex];
    popupQueueIndex++;

    // Когда очередь закончилась — пересобрать (и снова перемешать)
    if (popupQueueIndex >= popupQueue.length) {
        buildQueue();
    }

    showPopup(POPUP_MESSAGES[msgIndex]);
}

// ── Отрисовать одно уведомление ──
function showPopup(message) {
    const toast = document.createElement("div");
    toast.className = `popup-toast theme-${message.theme}`;

    toast.innerHTML = `
        <div class="popup-icon">${message.icon}</div>
        <div class="popup-body">
            <div class="popup-label">${message.label}</div>
            <p class="popup-text">${message.text}</p>
        </div>
        <button class="popup-close" aria-label="Закрыть">✕</button>
        <div class="popup-progress">
            <div class="popup-progress-fill"
                 style="animation-duration: ${POPUP_CONFIG.displayDuration}ms">
            </div>
        </div>
    `;

    // Кнопка закрытия
    toast.querySelector(".popup-close").addEventListener("click", () => {
        hidePopup(toast);
    });

    // Пауза прогресс-бара при наведении
    toast.addEventListener("mouseenter", () => {
        const fill = toast.querySelector(".popup-progress-fill");
        if (fill) fill.style.animationPlayState = "paused";
    });
    toast.addEventListener("mouseleave", () => {
        const fill = toast.querySelector(".popup-progress-fill");
        if (fill) fill.style.animationPlayState = "running";
    });

    popupContainer.appendChild(toast);

    // Запустить CSS-переход появления (нужен микро-delay для reflow)
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            toast.classList.add("popup-visible");
        });
    });

    // Автоматически скрыть через displayDuration
    const autoHide = setTimeout(() => hidePopup(toast), POPUP_CONFIG.displayDuration);

    // Если пользователь закрыл вручную — отменить таймер
    toast.dataset.autoHideId = autoHide;
}

// ── Скрыть уведомление с анимацией ──
function hidePopup(toast) {
    // Отменить автотаймер (если закрыли вручную)
    const autoHideId = parseInt(toast.dataset.autoHideId);
    if (!isNaN(autoHideId)) clearTimeout(autoHideId);

    toast.classList.remove("popup-visible");
    toast.classList.add("popup-hiding");

    // Удалить из DOM после завершения анимации
    toast.addEventListener("transitionend", () => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, { once: true });
}

// ── Публичные методы (можно вызвать вручную из консоли или другого скрипта) ──

// Показать конкретное сообщение: showPopupById(0)
function showPopupById(index) {
    if (index >= 0 && index < POPUP_MESSAGES.length) {
        showPopup(POPUP_MESSAGES[index]);
    }
}

// Остановить автоматический показ
function stopPopups() {
    if (popupIntervalId) {
        clearInterval(popupIntervalId);
        popupIntervalId = null;
    }
}

// Возобновить автоматический показ
function startPopups() {
    if (!popupIntervalId) {
        popupIntervalId = setInterval(showNextPopup, POPUP_CONFIG.interval);
    }
}
