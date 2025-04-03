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
    "She _____ to the gym every morning.",
    "They _____ TV when I called them.",
    "If it rains, we _____ the picnic.",
    "He has lived here _____ 2015.",
    "This is the book _____ I told you about.",
    "She is _____ than her sister.",
    "You _____ smoke here; it’s prohibited.",
    "I _____ my homework before dinner.",
    "She asked me _____ I liked coffee.",
    "We _____ to Paris last summer.",
    "Which sentence is correct?",
    "Choose the correct word order:",
    "Which sentence has a mistake?",
    "Which question is correct?",
    "\"I don’t like coffee, _____?\" (Choose the correct tag question.)",
    "Which sentence is in the passive voice?",
    "\"He said, 'I will call you later.'\" → Reported speech:",
    "Which sentence is correct?",
    "\"I’m not used to _____ early.\"",
    "Which sentence is a zero conditional?",
    "She _____ a doctor for five years.",
    "\"Could you _____ the window, please?\"",
    "The train _____ at 9 AM tomorrow.",
    "\"I have _____ finished my work.\"",
    "\"This is _____ interesting book.\"",
    "\"She’s the woman _____ helped me.\"",
    "\"I wish I _____ how to drive.\"",
    "\"He’s not here. He _____ to the bank.\"",
    "\"You look tired. You _____ take a break.\"",
    "\"By next year, I _____ English for three years.\""
];

let array_answers = [
    ["go", "goes", "going", "is go"],
    ["watched", "were watching", "are watching", "watch"],
    ["cancel", "will cancel", "would cancel", "cancelled"],
    ["for", "since", "ago", "in"],
    ["who", "which", "where", "when"],
    ["tall", "taller", "tallest", "the tallest"],
    ["must", "mustn't", "have to", "don't have to"],
    ["have finished", "finished", "had finished", "finish"],
    ["if", "that", "what", "why"],
    ["go", "went", "have gone", "were going"],
    ["She usually is late for meetings.", "She is usually late for meetings.", "Usually she is late for meetings.", "She is late usually for meetings."],
    ["I yesterday saw a movie.", "I saw a movie yesterday.", "I saw yesterday a movie.", "Yesterday I saw a movie."],
    ["He can swim very well.", "She doesn't likes pizza.", "They have been to Italy.", "We are going to the park."],
    ["Where you live?", "Where do you live?", "Where does you live?", "Where are you live?"],
    ["do I?", "don't I?", "isn't it?", "does it?"],
    ["She wrote a letter.", "A letter was written by her.", "She is writing a letter.", "She has written a letter."],
    ["He said he will call me later.", "He said he would call me later.", "He said he called me later.", "He said he calls me later."],
    ["Despite it rained, we went out.", "Although it rained, we went out.", "Even it rained, we went out.", "However it rained, we went out."],
    ["wake up", "waking up", "woke up", "wakes up"],
    ["If it rains, we will stay home.", "If it rained, we stayed home.", "If it rains, we stay home.", "If it had rained, we would have stayed home."],
    ["is", "has been", "was", "will be"],
    ["open", "to open", "opening", "opened"],
    ["leaves", "will leave", "is leaving", "left"],
    ["yet", "just", "already", "ever"],
    ["a", "an", "the", "- (no article)"],
    ["who", "which", "whose", "whom"],
    ["know", "knew", "have known", "will know"],
    ["goes", "has gone", "went", "had gone"],
    ["should", "must", "have to", "need"],
    ["will study", "will be studying", "will have studied", "studied"]
];

let array_correct_response = [
    "goes",
    "were watching",
    "will cancel",
    "since",
    "which",
    "taller",
    "mustn't",
    "had finished",
    "if",
    "went",
    "She is usually late for meetings.",
    "I saw a movie yesterday.",
    "She doesn't likes pizza.",
    "Where do you live?",
    "do I?",
    "A letter was written by her.",
    "He said he would call me later.",
    "Although it rained, we went out.",
    "waking up",
    "If it rains, we stay home.",
    "has been",
    "open",
    "leaves",
    "just",
    "an",
    "who",
    "knew",
    "has gone",
    "should",
    "will have studied"
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
            window.location.href = "resultB1.html";
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