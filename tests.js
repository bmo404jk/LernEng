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

let array_questions = 
["Выберите корректное предложение:",
"Вставьте пропущенное слово: Mary has four ____",
"Вставьте пропущенное словосочетание: Tom wakes up at ____ (15 минут седьмого)",
"Вставьте нужную форму глагола: Andy ____ go to school yesterday",
"Вставьте нужное словосочетание: You need to overcome a(n) ____",
"Вставьте нужную форму глагола: He ____ a final test tomorrow.",
"Вставьте нужную форму глагола: Sally _ just _",
"Вставьте нужное слово: Children have a(n) ____ ability to easily learn new things.",
"Вставьте нужное слово: She's my wife's mom, so I call her ____",
"Вставьте нужный предлог: I arrived ____ the airport in the evening.",
"Вставьте нужное словосочетание: He's always so mysterious. He's a ____",
"Вставьте нужное слово: He ____ his teeth in anger.",
"Вставьте нужное словосочетание: Her behaviour inspired others to ____",
"Вставьте нужную форму глагола: When you finish your chores I ____ in my office for three hours",
"Вставьте нужную форму глагола: Lily said that she and Bob ____ because of his anger issues."];

let array_answer1 = ["a) He lives in London","b) He is live in London","c) He lives on London","d) He live in London"];
let array_answer2 = ["a) dolles","b) dols","c) dolls","d) doles"];
let array_answer3 = ["a) 7 past 15","b) 15 past 7","c) quarter past 15","d) half past 7"];
let array_answer4 = ["a) didn't","b) wasn't","c) don't","d) haven't"];
let array_answer5 = ["a) barrier race","b) jump-and-run race","c) hurdle race","d) obstacle race"];
let array_answer6 = ["a) have","b) will have","c) should has","d) had"];
let array_answer7 = ["a) has...woken up","b) was...woke up","c) had been...woken up","d) didn't...wake up"];
let array_answer8 = ["a) innate","b) natural","c) ordinary","d) mediocrity"];
let array_answer9 = ["a) step mother","b) motherland","c) mother-in-law","d) momma"];
let array_answer10 = ["a) in","b) into","c) above","d) at"];
let array_answer11 = ["a) dark horse","b) pain in the neck","c) piece of cake","d) cold foot"];
let array_answer12 = ["a) hit","b) clenched","c) struck","d) tighten"];
let array_answer13 = ["a) connect the dots","b) hit the sack","c) think outside the box","d) be in a pickle"];
let array_answer14 = ["a) will be working","b) will work","c) will have been working","d) will have worked"];
let array_answer15 = ["a) had broken up","b) had broke up","c) broke up","d) broken up"];

let array_answers = [array_answer1,
    array_answer2,
    array_answer3,
    array_answer4,
    array_answer5,
    array_answer6,
    array_answer7,
    array_answer8,
    array_answer9,
    array_answer10,
    array_answer11,
    array_answer12,
    array_answer13,
    array_answer14,
    array_answer15,
];
let array_correct_response = [
    "a) He lives in London",
    "c) dolls",
    "b) 15 past 7",
    "a) didn't",
    "d) obstacle race",
    "b) will have",
    "a) has...woken up",
    "a) innate",
    "c) mother-in-law",
    "d) at",
    "a) dark horse",
    "b) clenched",
    "c) think outside the box",
    "c) will have been working",
    "a) had broken up"
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
        window.correct_answer_count += 1;
    }
    if(answer2_input.checked && answer2_text.textContent === array_correct_response[y]) {
        console.log("Правильный ответ");
        answer2_input.style.background = "linear-gradient(45deg,rgb(14, 98, 87), #25DAC5)";
        answer2_input.style.opacity = "70%";
        answer2_input.style.color = "white";
        window.correct_answer_count += 1;
    }
    if(answer3_input.checked && answer3_text.textContent === array_correct_response[y]) {
        console.log("Правильный ответ");
        answer3_input.style.background = "linear-gradient(45deg,rgb(14, 98, 87), #25DAC5)";
        answer3_input.style.opacity = "70%";
        answer3_input.style.color = "white";
        window.correct_answer_count += 1;
    }
    if(answer4_input.checked && answer4_text.textContent === array_correct_response[y]) {
        console.log("Правильный ответ");
        answer4_input.style.background = "linear-gradient(45deg,rgb(14, 98, 87), #25DAC5)";
        answer4_input.style.opacity = "70%";
        window.correct_answer_count += 1;
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
        if(count_of_number_test > 14) {
            btn_next.innerHTML = "Завершить тестирование"
            btn_next.addEventListener("click", function() {
                localStorage.setItem('count_current_answer', window.correct_answer_count);
                window.location.href = "result.html";
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