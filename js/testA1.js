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
    "Какая погода сегодня?",  
    "Какой цвет у моря?",  
    "Что такое 'яблоко' на английском?",  
    "Какой праздник мы отмечаем 31 декабря?",  
    "Какое время года идет после лета?",  
    "Какой у вас любимый вид спорта?",  
    "Какой язык является официальным в США?",  
    "Какой из этих шагов для приготовления омлета?",  
    "Какой самый высокий океан в мире?",  
    "Какой цвет имеет трава?",  
    "Какой месяц идет после января?",  
    "Какой из этих фильмов является комедией?",  
    "Какой день недели перед воскресеньем?",  
    "Что такое 'книга' на русском?",  
    "Какой из этих животных является млекопитающим?",  
    "Какой город является столицей России?",  
    "Что значит 'поздравляю' на английском?",  
    "Какое натуральное явление происходит во время дождя?",  
    "Какой продукт обычно используется для приготовления хлеба?",  
    "Какой фрукт содержит много витамина C?",  
    "Какой из этих глаголов - неправильный?",  
    "Что такое 'вода' на английском?",  
    "Какой у вас любимый певец?",  
    "Какой цвет имеет небо в ясный день?",  
    "Какой день Святого Валентина?",  
    "Какой шоколад самый сладкий?",  
    "Что обычно дарят на Новый год?",  
    "Какой из этих собак - самая маленькая порода?",  
    "Какой овощ обычно используется для приготовления салата?",  
    "Какое время года бывает на севере зимой?",  
    "Какой из этих музыкантов сыграл в 'Битлах'?"
];

let array_answers = [
    ["Sunny", "Cold", "Rainy", "Windy"],
    ["Blue", "Green", "Yellow", "Red"],
    ["Apple", "Banana", "Grapes", "Orange"],
    ["New Year", "Christmas", "Valentine's Day", "Easter"],
    ["Autumn", "Winter", "Spring", "Summer"],
    ["Football", "Chess", "Diving", "Reading"],
    ["Spanish", "English", "French", "German"],
    ["Break the eggs", "Boil the water", "Fry the meat", "Chop the vegetables"],
    ["Pacific", "Atlantic", "Indian", "Arctic"],
    ["Green", "Yellow", "Blue", "Red"],
    ["February", "March", "April", "January"],
    ["Matrix", "Titanic", "Inception", "Joker"],
    ["Saturday", "Friday", "Monday", "Thursday"],
    ["Book", "Magazine", "Story", "Novel"],
    ["Cat", "Dog", "Fish", "Reptile"],
    ["Moscow", "New York", "London", "Paris"],
    ["Congratulations", "Hello", "Goodbye", "Thank you"],
    ["Rainbow", "Shadow", "Fog", "Mist"],
    ["Flour", "Sugar", "Salt", "Pepper"],
    ["Orange", "Apple", "Banana", "Lemon"],
    ["Go", "Wants", "Swim", "Be"],
    ["Water", "Milk", "Juice", "Tea"],
    ["Imagine Dragons", "Taylor Swift", "Drake", "Adele"],
    ["Blue", "Gray", "Green", "Red"],
    ["14 февраля", "20 декабря", "1 января", "31 октября"],
    ["Milk chocolate", "Dark chocolate", "White chocolate", "Bitter chocolate"],
    ["Gifts", "Flowers", "Food", "Cards"],
    ["Chihuahua", "Poodle", "German Shepherd", "Bulldog"],
    ["Tomato", "Potato", "Cucumber", "Carrot"],
    ["Snowy", "Sunny", "Windy", "Rainy"],
    ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"]
];

let array_correct_response = [
    "Sunny",
    "Blue",
    "Apple",
    "New Year",
    "Autumn",
    "Football",
    "English",
    "Break the eggs",
    "Pacific",
    "Green",
    "February",
    "Titanic",
    "Saturday",
    "Book",
    "Cat",
    "Moscow",
    "Congratulations",
    "Rainbow",
    "Flour",
    "Orange",
    "Go",
    "Water",
    "Imagine Dragons",
    "Blue",
    "14 февраля",
    "Milk chocolate",
    "Gifts",
    "Chihuahua",
    "Tomato",
    "Snowy",
    "John Lennon"
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