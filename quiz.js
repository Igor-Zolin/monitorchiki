const ALL_QUESTIONS = [
  {
    category: "Пароли",
    text: "Какой пароль считается самым надёжным?",
    answers: ["1234567890", "мояфамилия2010", "G7#kL!p2qX@9", "qwerty"],
    correct: 2,
    hint: "Надёжный пароль содержит буквы разного регистра, цифры и символы — и длиннее 8 знаков!",
  },
  {
    category: "Пароли",
    text: "Можно ли использовать один и тот же пароль на всех сайтах?",
    answers: [
      "Да, так удобнее запоминать",
      "Нет — если взломают один сайт, пострадают все",
      "Только если пароль очень длинный",
      "Можно, если менять его раз в год",
    ],
    correct: 1,
    hint: "Для каждого сайта нужен отдельный пароль. Используй менеджер паролей, чтобы не запоминать их все!",
  },
  {
    category: "Личные данные",
    text: "Что из этого нельзя публиковать в социальных сетях?",
    answers: [
      "Фото домашнего питомца",
      "Любимую книгу",
      "Домашний адрес и номер телефона",
      "Рисунок, который ты нарисовал",
    ],
    correct: 2,
    hint: "Домашний адрес, телефон и личные данные нельзя публиковать — незнакомцы могут ими воспользоваться!",
  },
  {
    category: "Интернет-угрозы",
    text: "Незнакомец в интернете просит тебя прислать фото. Что делать?",
    answers: [
      "Отправить, если он кажется добрым",
      "Рассказать родителям или учителю",
      "Согласиться, если он обещает подарок",
      "Ответить и спросить зачем",
    ],
    correct: 1,
    hint: "Никогда не отправляй фото незнакомцам! Всегда рассказывай взрослым о подозрительных сообщениях.",
  },
  {
    category: "Фишинг",
    text: "Ты получил письмо: «Ты выиграл iPhone! Введи данные карты». Что это?",
    answers: [
      "Настоящий приз — нужно спешить",
      "Рассылка от магазина",
      "Фишинговое мошенничество",
      "Опрос от школы",
    ],
    correct: 2,
    hint: "Это фишинг! Мошенники обещают призы, чтобы украсть данные. Никогда не вводи данные карты по ссылке из письма.",
  },
  {
    category: "Фишинг",
    text: "Как отличить настоящий сайт банка от поддельного?",
    answers: [
      "По красивому дизайну",
      "Проверить адрес сайта и значок замка в браузере",
      "Если сайт быстро загружается — он настоящий",
      "По количеству рекламы",
    ],
    correct: 1,
    hint: "Проверяй адрес: bank.ru — настоящий, bank-online.xyz — подозрительный. Замочек (https) тоже важен!",
  },
  {
    category: "Вирусы",
    text: "Друг прислал файл с расширением .exe. Что нужно сделать?",
    answers: [
      "Сразу открыть — друг же прислал",
      "Открыть, если антивирус молчит",
      "Проверить антивирусом и спросить у взрослых перед открытием",
      "Отправить всем контактам",
    ],
    correct: 2,
    hint: "Файлы .exe могут содержать вирусы. Всегда проверяй антивирусом и советуйся со взрослыми!",
  },
  {
    category: "Вирусы",
    text: "Что делает антивирусная программа?",
    answers: [
      "Ускоряет интернет",
      "Удаляет ненужные файлы",
      "Защищает компьютер от вредоносных программ",
      "Блокирует все сайты",
    ],
    correct: 2,
    hint: "Антивирус ищет и нейтрализует вредоносные программы, которые могут повредить компьютер или украсть данные.",
  },
  {
    category: "Общение онлайн",
    text: "Ты познакомился с человеком онлайн. Он предлагает встретиться лично. Что делать?",
    answers: [
      "Согласиться — мы уже хорошо общаемся",
      "Встретиться в людном месте",
      "Рассказать родителям и никуда не идти без их согласия",
      "Прийти с другом",
    ],
    correct: 2,
    hint: "Никогда не встречайся с интернет-знакомыми без разрешения родителей! Люди в сети могут быть не теми, за кого себя выдают.",
  },
  {
    category: "Двухфакторная аутентификация",
    text: "Что такое двухфакторная аутентификация?",
    answers: [
      "Два разных пароля для одного сайта",
      "Подтверждение входа через пароль и SMS-код",
      "Вход с двух устройств одновременно",
      "Смена пароля каждые два дня",
    ],
    correct: 1,
    hint: "2FA — это дополнительная защита: даже если злоумышленник узнал пароль, без SMS-кода он не войдёт!",
  },
  {
    category: "Wi-Fi",
    text: "Опасно ли пользоваться публичным Wi-Fi для онлайн-платежей?",
    answers: [
      "Нет, Wi-Fi везде одинаковый",
      "Да — мошенники могут перехватить данные",
      "Только если Wi-Fi без пароля",
      "Нет, если у тебя есть антивирус",
    ],
    correct: 1,
    hint: "В публичных сетях данные могут перехватить. Для платежей используй мобильный интернет или домашний Wi-Fi.",
  },
  {
    category: "Личные данные",
    text: "Какую информацию можно безопасно указывать при регистрации на детских сайтах?",
    answers: [
      "Настоящее имя, фамилию и дату рождения",
      "Никнейм и возраст (только год)",
      "Домашний адрес для доставки",
      "Номер школы и класс",
    ],
    correct: 1,
    hint: "Для регистрации достаточно никнейма. Чем меньше реальных данных — тем безопаснее!",
  },
];

//  Состояние викторины
let questions = [];
let curri = 0;
let score = 0;
let answered = false;

//  Запуск
function initQuiz() {
  questions = shuffle([...ALL_QUESTIONS]).slice(0, 10);
  curri = 0;
  score = 0;
  answered = false;

  document.getElementById("q-total").textContent = questions.length;
  document.getElementById("final-total").textContent = questions.length;
  document.getElementById("quiz-screen").style.display = "block";
  document.getElementById("result-screen").style.display = "none";

  renderQuestion();
}

function renderQuestion() {
  const q = questions[curri];
  answered = false;

  // Счётчик и прогресс
  document.getElementById("q-num").textContent = curri + 1;
  document.getElementById("score-now").textContent = score;
  const pct = (curri / questions.length) * 100;
  document.getElementById("progress-fill").style.width = pct + "%";

  // Категория и текст
  document.getElementById("q-category").textContent = q.category;
  document.getElementById("q-text").textContent = q.text;

  // Анимация карточки
  const card = document.getElementById("question-card");
  card.style.animation = "none";
  void card.offsetWidth; // reflow
  card.style.animation = "slideIn 0.4s ease";

  // Варианты ответов (перемешанные индексы)
  const grid = document.getElementById("answers-grid");
  grid.innerHTML = "";

  const shuffledIndexes = shuffleIndexes(q.answers.length);
  shuffledIndexes.forEach((origIdx) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = q.answers[origIdx];
    btn.dataset.index = origIdx;
    btn.addEventListener("click", () =>
      handleAnswer(btn, origIdx, q.correct, q.hint),
    );
    grid.appendChild(btn);
  });

  // Скрыть фидбек и кнопку «далее»
  const fb = document.getElementById("feedback");
  fb.style.display = "none";
  fb.className = "";
  document.getElementById("next-btn").style.display = "none";
}

function handleAnswer(btn, selectedIdx, correctIdx, hint) {
  if (answered) return;
  answered = true;

  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((b) => (b.disabled = true));

  const isCorrect = selectedIdx === correctIdx;

  if (isCorrect) {
    btn.classList.add("correct");
    score++;
    showFeedback(true, hint);
  } else {
    btn.classList.add("wrong");
    // Подсветить правильный
    buttons.forEach((b) => {
      if (parseInt(b.dataset.index) === correctIdx) {
        b.classList.add("show-correct");
      }
    });
    showFeedback(false, hint);
  }

  document.getElementById("score-now").textContent = score;

  const nextBtn = document.getElementById("next-btn");
  nextBtn.style.display = "block";
  nextBtn.textContent =
    curri + 1 < questions.length
      ? "Следующий вопрос →"
      : "Посмотреть результат 🎉";
  nextBtn.onclick = nextQuestion;
}

function showFeedback(isCorrect, hint) {
  const fb = document.getElementById("feedback");
  fb.style.display = "block";
  fb.className = isCorrect ? "correct" : "wrong";

  document.getElementById("feedback-icon").textContent = isCorrect
    ? "✅ "
    : "❌ ";
  document.getElementById("feedback-text").textContent = isCorrect
    ? "Правильно! Отличная работа!"
    : "Неправильно. Не расстраивайся!";
  document.getElementById("feedback-hint").textContent = "💡 " + hint;
}

function nextQuestion() {
  curri++;
  if (curri < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-screen").style.display = "none";
  const resultScreen = document.getElementById("result-screen");
  resultScreen.style.display = "block";

  const total = questions.length;
  const pct = score / total;

  document.getElementById("final-score").textContent = score;
  document.getElementById("progress-fill").style.width = "100%";

  let emoji, title, stars, msg;

  if (pct >= 0.9) {
    emoji = "🏆";
    title = "Супергерой безопасности!";
    stars = "⭐⭐⭐";
    msg = `Ты настоящий эксперт по кибербезопасности! ${score} из ${total} — невероятный результат. Ты точно защитишь себя в интернете!`;
  } else if (pct >= 0.7) {
    emoji = "😎";
    title = "Очень хорошо!";
    stars = "⭐⭐";
    msg = `${score} из ${total} — отличный результат! Ты многое знаешь о безопасности. Повтори пропущенные темы и станешь настоящим экспертом!`;
  } else if (pct >= 0.5) {
    emoji = "🙂";
    title = "Неплохо!";
    stars = "⭐";
    msg = `${score} из ${total} — хорошее начало! Почитай наши материалы о кибербезопасности и попробуй ещё раз.`;
  } else {
    emoji = "💪";
    title = "Учиться никогда не поздно!";
    stars = "🌱";
    msg = `${score} из ${total}. Не расстраивайся — загляни в раздел «Для детей» и узнай больше о безопасности в интернете. Потом попробуй снова!`;
  }

  document.getElementById("result-emoji").textContent = emoji;
  document.getElementById("result-title").textContent = title;
  document.getElementById("result-stars").textContent = stars;
  document.getElementById("result-msg").textContent = msg;
}

//  Перезапуск (доступна глобально для onclick)
function restartQuiz() {
  initQuiz();
}
window.restartQuiz = restartQuiz;

//  Утилиты
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleIndexes(n) {
  const arr = Array.from({ length: n }, (_, i) => i);
  return shuffle(arr);
}

//  Старт при загрузке страницы
document.addEventListener("DOMContentLoaded", initQuiz);