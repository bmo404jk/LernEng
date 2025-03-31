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

let array_answer_elements = [answer1_text,answer2_text,answer3_text,answer4_text];

let btn_next = document.querySelector(".button_next");

let array_questions = [
    "Какой язык вы изучаете?",  
    "Выберите правильную форму: He ___ (be) a doctor.",  
    "Переведите на английский: Мне 20 лет.",  
    "Какой из этих глаголов неправильный?",  
    "Завершите предложение: They ___ (not/like) apples.",  
    "Переведите на английский: У меня есть собака.",  
    "Выберите правильное слово: I am very ___ (happy/happily) today.",  
    "Какой глагол здесь не подходит? She can ___ (dance/sing/fly) very well.",  
    "Закончите предложение: We ___ (go/goes) to the park every weekend.",  
    "Какой из этих предметов не является мебелью?",  
    "Переведите на английский: Я люблю читать книги.",  
    "Выберите правильное слово: We ___ (are/is/am) friends.",  
    "Какой день недели перед пятницей?",  
    "Завершите предложение: I usually ___ (eat/eats) breakfast at 7 a.m.",  
    "Переведите на английский: Она говорит по-русски.",  
    "Выберите правильное слово: It’s ___ (raining/rain) outside.",  
    "Заполните пропуск: They ___ (not/be) at home now.",  
    "Какой у вас любимый фрукт?",  
    "Выберите правильное слово: She is ___ (teacher/teacher's) at school.",  
    "Переведите на английский: Мы любим плавать летом.",  
    "Какой из этих глаголов неправильный?",  
    "Переведите на английский: Это мой друг.",  
    "Какой у вас любимый цвет?",  
    "Выберите правильную форму: She ___ (go/goes) to school every day.",  
    "Закончите предложение: They are ___ (play/playing) football now.",  
    "Какое слово не является фруктом?",  
    "Переведите на английский: Я учусь в университете.",  
    "Заполните пропуск: I have ___ (many/much) friends.",  
    "Какой у вас номер телефона?",  
    "Выберите правильное слово: Today is ___ (sunny/sunnyly) day."
];

let array_answers = [
    ["I study English.", "I studying English.", "I studies English.", "I study the English."],
    ["am", "is", "are", "be"],
    ["I have 20 years.", "I am 20 years old.", "I is 20 years.", "I be 20 years old."],
    ["go", "eat", "play", "be"],
    ["does not like", "do not like", "not like", "do not likes"],
    ["I have a dog.", "I has a dog.", "I am have a dog.", "I haves a dog."],
    ["happiest", "happy", "happyly", "more happy"],
    ["dance", "sing", "fly", "read"],
    ["goes", "going", "go", "gone"],
    ["table", "chair", "car", "sofa"],
    ["I love read books.", "I loves to read books.", "I love to read books.", "I love reading a books."],
    ["are", "is", "am", "be"],
    ["Wednesday", "Thursday", "Saturday", "Tuesday"],
    ["eat", "eats", "eating", "eaten"],
    ["She speaks Russian.", "She speak Russian.", "She talking Russian.", "She say Russian."],
    ["raining", "rain", "rains", "rained"],
    ["not is", "do not is", "are not", "isn't"],
    ["my favorite fruit is bananas.", "I like bananas.", "Bananas is my favorite.", "Favorite fruit is banana."],
    ["teacher", "teachers", "teacher’s", "the teacher"],
    ["We like swimming in the summer.", "We love to swim in summer.", "We likes to swim in summer.", "We love swim in the summer."],
    ["go", "see", "do", "look"],
    ["This is my friend.", "This my friend.", "He is my friend.", "It is my friend."],
    ["My favorite color is blue.", "I like blue.", "The color is blue.", "Blue is my favorite color."],
    ["go", "goes", "gone", "going"],
    ["play", "playing", "plays", "played"],
    ["grape", "tomato", "car", "banana"],
    ["I learn in university.", "I study at the university.", "I studying in university.", "Learning in university."],
    ["many", "much", "few", "a lot"],
    ["My phone number is 123456789.", "123456789 is my phone number.", "My number is 123456789.", "I have phone number 123456789."],
    ["sunny", "sunnyly", "sun", "the sun"]
];

let array_correct_response = [
    "I study English.",
    "is",
    "I am 20 years old.",
    "be",
    "do not like",
    "I have a dog.",
    "happy",
    "read",
    "go",
    "car",
    "I love to read books.",
    "are",
    "Thursday",
    "eat",
    "She speaks Russian.",
    "raining",
    "are not",
    "I like bananas.",
    "teacher",
    "We like swimming in the summer.",
    "go",
    "This is my friend.",
    "My favorite color is blue.",
    "goes",
    "playing",
    "car",
    "I study at the university.",
    "many",
    "My phone number is 123456789.",
    "sunny"
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
        // Сброс стилей для всех меток
        answerLabels.forEach(label => {
            label.style.background = "white";
            label.style.opacity = "100%";
            label.style.color = "black";
        });

        // Применим стили только к выбранному варианту
        if (input.checked) {
            const label = input.closest('label');
            label.style.background = "linear-gradient(45deg,#E93A7D,#25DAC5)";
            label.style.opacity = "80%";
            label.style.color = "white";
        }
    });
});

btn_next.addEventListener('click',function(){
    if(answer1_input.checked && answer1_text.textContent === array_correct_response[y]) {
        console.log("Правильный ответ");
        answer1_input.style.background = "linear-gradient(45deg,rgb(14, 98, 87), #25DAC5)";
        answer1_input.style.opacity = "70%";
        answer1_input.style.color = "white";
        window.correct_answer_count+=1;
    }
    if(answer2_input.checked && answer2_text.textContent === array_correct_response[y]) {
        console.log("Правильный ответ");
        answer2_input.style.background = "linear-gradient(45deg,rgb(14, 98, 87), #25DAC5)";
        answer2_input.style.opacity = "70%";
        answer2_input.style.color = "white";
        window.correct_answer_count+=1;
    }
    if(answer3_input.checked && answer3_text.textContent === array_correct_response[y]) {
        console.log("Правильный ответ");
        answer3_input.style.background = "linear-gradient(45deg,rgb(14, 98, 87), #25DAC5)";
        answer3_input.style.opacity = "70%";
        answer3_input.style.color = "white";
        window.correct_answer_count+=1;
    }
    if(answer4_input.checked && answer4_text.textContent === array_correct_response[y]) {
        console.log("Правильный ответ");
        answer4_input.style.background = "linear-gradient(45deg,rgb(14, 98, 87), #25DAC5)";
        answer4_input.style.opacity = "70%";
        window.correct_answer_count+=1;
    }
    
        btn_next.style.pointerEvents = "auto";
        console.log("correct answer:" + window.correct_answer_count);
        if(i >= array_questions.length) {
            i = 0;
            x = 0;
            y = -1;
            count_of_number_test = 0;
        }
    
        test_number.innerHTML = count_of_number_test+=1;
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
        for(let i = 0; i < 4; i++) {
            console.log(array);
            array_answer_elements[i].innerHTML = array[i];
        }
        x++;    
        y++;
        console.log(y);
        if(count_of_number_test > 29) {
            btn_next.innerHTML = "Завершить тестирование"
            btn_next.addEventListener("click", function() {
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