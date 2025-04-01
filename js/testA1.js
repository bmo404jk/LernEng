let test_number = document.querySelector(".number_of_question");
let question_text = document.querySelector(".question_text1");

let answer1_label = document.querySelector(".answer1");
let answer2_label = document.querySelector(".answer2");
let answer3_label = document.querySelector(".answer3");
let answer4_label = document.querySelector(".answer4");

let answer1_input = document.querySelector(".answer1_input");
let answer2_input = document.querySelector(".answer2_input");
let answer3_input = document.querySelector(".answer3_input");
let answer4_input = document.querySelector(".answer4_input");

let answer1_text = document.querySelector(".answer1_text");
let answer2_text = document.querySelector(".answer2_text");
let answer3_text = document.querySelector(".answer3_text");
let answer4_text = document.querySelector(".answer4_text");

let array_answer_elements = [answer1_text, answer2_text, answer3_text, answer4_text];

let btn_next = document.querySelector(".button_next");

let array_questions = [
    "Какой из этих вариантов является правильным для того, чтобы сказать 'Я люблю мякоть апельсинов'?",
    "Какой из этих вариантов правильный для 'Он не хочет пить воду'?",
    "Как вы скажете 'У меня есть собака' на английском?",
    "Какой правильный вариант 'Она в школе'?",
    "Какой вопрос правильный для 'Где ты живешь?'?",
    "Как будет 'Они не играют в футбол' на английском?",
    "Как правильно сказать 'Это моя книга'?",
    "Какой из этих вариантов правильный для 'Я учусь в университете'?",
    "Как будет 'У него есть кошка'?",
    "Как правильно перевести 'Я часто хожу в магазин'?",
    "Какой правильный вариант для 'Она работает в офисе'?",
    "Как будет 'Ты любишь кофе?'?",
    "Как сказать 'Это ложка'?",
    "Как правильно перевести 'Он всегда смеется'?",
    "Какой вариант правильный для 'Я не знаю, куда идти'?",
    "Как будет 'Эта еда вкусная'?",
    "Как правильно сказать 'Ты работаешь завтра?'?",
    "Как будет 'Мне нужно пойти на почту'?",
    "Какой вариант правильный для 'Ему не нравится эта музыка'?",
    "Как правильно сказать 'Вы из России'?",
    "Как будет 'У них есть две машины'?",
    "Как правильно сказать 'Мой брат спортивный'?",
    "Как будет 'Я только что пришел'?",
    "Как правильно сказать 'Она хорошо поет'?",
    "Как вы спросите 'Ты хочешь поесть?'?",
    "Как правильно перевести 'Он читает книгу'?",
    "Как сказать 'Я люблю гулять по парку'?",
    "Как правильно сказать 'Ты видел его вчера?'?",
    "Как будет 'Это мой любимый фильм'?",
    "Какой вопрос правильный для 'Где они?'?"
];

let array_answers = [
    ["I love the orange.", "I love orange.", "I loves the orange.", "I love oranges."],
    ["He don’t want to drink water.", "He doesn’t want drink water.", "He doesn’t want to drink water.", "He want to drink water."],
    ["I have a dog.", "I has a dog.", "I having a dog.", "I haves a dog."],
    ["She is in school.", "She are in school.", "She am in school.", "She be in school."],
    ["Where you live?", "Where do you live?", "Where lives you?", "Where are you live?"],
    ["They don't play football.", "They doesn’t play football.", "They not play football.", "They doesn’t plays football."],
    ["This are my book.", "This is my book.", "This my book.", "This is books."],
    ["I study in university.", "I studies in the university.", "I am studying in the university.", "I study at the university."],
    ["He has a cat.", "He have a cat.", "He haves a cat.", "He has cat."],
    ["I go to the shop often.", "I often goes to the shop.", "I often go to the shop.", "I goes to the shop often."],
    ["She work in the office.", "She works in the office.", "She working in the office.", "She is working in office."],
    ["Do you like coffee?", "You like coffee?", "Do you likes coffee?", "You does like coffee?"],
    ["It is a spoon.", "This a spoon.", "This is a spoon.", "It a spoon."],
    ["He is always laugh.", "He always laughing.", "He always laughs.", "He is always laughs."],
    ["I don’t know where to go.", "I know not where to go.", "I doesn’t know where to go.", "I not know where to go."],
    ["This food is tasty.", "This foods is tasty.", "That food are tasty.", "This food are tasty."],
    ["Are you work tomorrow?", "Do you work tomorrow?", "You work tomorrow?", "Are you working tomorrow?"],
    ["I need to go to post.", "I need to go to the post office.", "I needs to go to the post.", "I need to going to the post office."],
    ["He don’t like this music.", "He doesn’t like this music.", "He doesn’t likes this music.", "He like not this music."],
    ["Are you from Russia?", "Are you in Russia?", "Do you from Russia?", "You are from Russia?"],
    ["They have two car.", "They has two cars.", "They have two cars.", "They having two cars."],
    ["My brother is sporty.", "My brother are sporty.", "My brother is sport.", "My brother sporty."],
    ["I just come.", "I just came.", "I coming just now.", "I came just."],
    ["She sing well.", "She sings good.", "She sings well.", "She is singing good."],
    ["You want to eat?", "Do you want eat?", "Do you want to eat?", "You wanting to eat?"],
    ["He read a book.", "He is reading book.", "He reads a book.", "He reading a book."],
    ["I love to walk in park.", "I loves to walk in the park.", "I love walking in the park.", "I love walks in the park."],
    ["Did you see him yesterday?", "You saw him yesterday?", "Did you saw him yesterday?", "Did you seen him yesterday?"],
    ["This is my favourite movie.", "This my favourite movie.", "This is favourite movie.", "This are my favourite movie."],
    ["Where are they?", "Where they are?", "Where is they?", "Where they?"]
];

let array_correct_response = [
    "Do you want to eat?",  // d
    "He reads a book.",     // c
    "I love walking in the park.", // a
    "Did you see him yesterday?", // a
    "This is my favourite movie.", // b
    "Where are they?",      // a
    "They are in the park.", // b
    "What do you want to eat?", // d
    "I love to walk in the park.", // a
    "He is reading a book.", // c
    "Did you see him yesterday?", // b
    "This is my favourite movie.", // a
    "I love swimming.",      // c
    "I am very happy.",      // c
    "I have a dog.",         // a
    "She looks nice today.",  // a
    "He is my brother.",     // b
    "They arrived yesterday.", // b
    "They are my friends.",   // b
    "I am going home.",      // a
    "He is studying hard.",   // c
    "She will call you later.", // a
    "We went to the cinema.", // c
    "I enjoy reading books.", // c
    "He likes to play football.", // a
    "I need some help.",      // a
    "Can you help me, please?" // a
];

let count_of_number_test = 1;
window.correct_answer_count = 0;
let x = 1;
let i = 1;
let y = 0;

const answerInputs = document.querySelectorAll('input[type="radio"]');
const answerLabels = document.querySelectorAll('.answer_container label');

answerInputs.forEach((input) => {
    input.addEventListener("change", () => {
        answerLabels.forEach(label => {
            label.style.background = "white";
            label.style.opacity = "100%";
            label.style.color = "black";
        });

        if (input.checked) {
            const label = input.closest('label');
            label.style.background = "linear-gradient(45deg,#E93A7D,#25DAC5)";
            label.style.opacity = "80%";
            label.style.color = "white";
        }
    });
});

btn_next.addEventListener('click', function () {
    if (answer1_input.checked && answer1_text.textContent === array_correct_response[y]) {
        console.log("Правильный ответ");
        answer1_input.style.background = "linear-gradient(45deg,rgb(14, 98, 87), #25DAC5)";
        answer1_input.style.opacity = "70%";
        answer1_input.style.color = "white";
        window.correct_answer_count += 1;
    }
    if (answer2_input.checked && answer2_text.textContent === array_correct_response[y]) {
        console.log("Правильный ответ");
        answer2_input.style.background = "linear-gradient(45deg,rgb(14, 98, 87), #25DAC5)";
        answer2_input.style.opacity = "70%";
        answer2_input.style.color = "white";
        window.correct_answer_count += 1;
    }
    if (answer3_input.checked && answer3_text.textContent === array_correct_response[y]) {
        console.log("Правильный ответ");
        answer3_input.style.background = "linear-gradient(45deg,rgb(14, 98, 87), #25DAC5)";
        answer3_input.style.opacity = "70%";
        answer3_input.style.color = "white";
        window.correct_answer_count += 1;
    }
    if (answer4_input.checked && answer4_text.textContent === array_correct_response[y]) {
        console.log("Правильный ответ");
        answer4_input.style.background = "linear-gradient(45deg,rgb(14, 98, 87), #25DAC5)";
        answer4_input.style.opacity = "70%";
        window.correct_answer_count += 1;
    }

    btn_next.style.pointerEvents = "auto";
    console.log("correct answer:" + window.correct_answer_count);
    if (i >= array_questions.length) {
        i = 0;
        x = 0;
        y = -1;
        count_of_number_test = 0;
    }

    test_number.innerHTML = count_of_number_test += 1;
    question_text.innerHTML = array_questions[i];
    i++;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(array_answers[x]);

    let array = array_answers[x];
    for (let i = 0; i < 4; i++) {
        console.log(array);
        array_answer_elements[i].innerHTML = array[i];
    }
    x++;
    y++;
    console.log(y);
    if (count_of_number_test > 29) {
        btn_next.innerHTML = "Завершить тестирование";
        btn_next.addEventListener("click", function () {
            localStorage.setItem('count_current_answer', window.correct_answer_count);
            window.location.href = "resultA1.html";
        });
    }

    isClicked = false;
    setDefaultOptionForCheckbox();

});

function setDefaultOptionForCheckbox() {
    answerLabels.forEach(label => {
        label.style.background = "white";
        label.style.opacity = "100%";
        label.style.color = "black";
    });
    answerInputs.forEach((input) => {
        input.checked = false;
    });
}