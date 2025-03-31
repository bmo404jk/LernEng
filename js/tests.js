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

let array_questions = ["Did you ______ anything interesting last weekend?",
                    "I work as a doctor and my husband ______, too.",
                    "I think _____ accountant.",
                    "How _____ is your home town from Moscow?",
                    "I’m afraid I _____ to come to your birthday party.",
                    "How long _____ interested in arts?",
                    "He hasn’t walked since he _____ that terrible accident.",
                    "This is the best film I’ve _____ seen.",
                    "Write me soon! I’m looking _____ your reply.",
                    "My mother _____ born on the 3rd of August 1978.",
                    "He kept _____ last meeting.",
                    "If I _____ about it I’d definitely help.",
                    "She said she _____ come, but she didn’t.",
                    "I don’t have a cent to lend you. Sorry, I _____ bought a new TV.",
                    "Dad gave _____ smoking when I was born.",
                    "Do you want to hear a new story? _____ start reading?",
                    "Melissa looks _____ in her new suit.",
                    "Professor Higgins wants _____ to the blackboard.",
                    "There are _____ around here to start our rally.",
                    "This music box _____ of wood.",
                    "Do you know where _____ ?",
                    "He washes his car _____ month.",
                    "The laptop won’t work unless you _____ .",
                    "Maria has _____ old receipts in her purse.",
                    "James has got two university degrees, _____ ?",
                    "Do you _____ a cup of coffee?",
                    "Do ostriches fly? No, they _____.",
                    "_____ newspaper are you taking, the Express or the Times?",
                    "We haven’t got _____ Indian relations.",
                    "Pam can’t _____ to you now. She is busy."];

let array_answer1 = ["Do","Doing","Was","Did"];
let array_answer2 = ["Is","Works","Does","Work"];
let array_answer3 = ["He is a/an","His job is","His job is as","He work as a(n)"];
let array_answer4 = ["Long","Far","Away","Many"];
let array_answer5 = ["Will be able","Can","Will not be able","Wouldn’t"];
let array_answer6 = ["Have you been","Have you","Are you","Be you"];
let array_answer7 = ["Has had","Has","Had had","Had"];
let array_answer8 = ["Already","Never","Ever","Still"];
let array_answer9 = ["For","Forward","Forward to","Of"];
let array_answer10 = ["Was","Is","Had","Did"];
let array_answer11 = ["Silence","Silent","Silently","Silenced"];
let array_answer12 = ["Had known","Knew","Have known","Know"];
let array_answer13 = ["Will","May","Might","Can"];
let array_answer14 = ["Had just","Just","‘ve just","Soon will"];

let array_answer15 = ["Away","Off","Up","In"];
let array_answer16 = ["Shall I","Must I","Will I","Do I"];
let array_answer17 = ["Nice","Nicely","Such nice","Like nice"];
let array_answer18 = ["You coming","You come","You to come","That you come"];
let array_answer19 = ["People adult enough","Adult people enough","Enough adult persons","Enough adult people"];
let array_answer20 = ["Is made","Is making","Is make","Makes"];
let array_answer21 = ["Left I my glasses","I left my glasses","Did I leave my glasses","The glasses I left"];
let array_answer22 = ["Four times","Twice a","Every others","Every couple"];
let array_answer23 = ["Plugged it in","Plug in it","Plug it in","Will plug it in"];
let array_answer24 = ["A very lot","Lots","A lot of","Very much"];
let array_answer25 = ["Has he got","Has not he","Has he","Haven’t he"];
let array_answer26 = ["Feel","Feel like","Like","Would like"];
let array_answer27 = ["Won’t","Haven’t","Aren’t","Do not"];
let array_answer28 = ["Which","What","Whose","Who"];
let array_answer29 = ["No","Any","None","Some"];
let array_answer30 = ["To talk","Talked","Talk","Talking"];

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
    array_answer16,
    array_answer17,
    array_answer18,
    array_answer19,
    array_answer20,
    array_answer21,
    array_answer22,
    array_answer23,
    array_answer24,
    array_answer25,
    array_answer26,
    array_answer27,
    array_answer28,
    array_answer29,
    array_answer30
];
let array_correct_response = [
    "Do",
    "Works",
    "He is a/an",
    "Far",
    "Will not be able",
    "Have you been",
    "Had",
    "Ever",
    "Forward to",
    "Was",
    "Silent",
    "Knew",
    "Might",
    "Just",
    "Up",
    "Shall I",
    "Nice",
    "You to come",
    "Enough adult people",
    "Is made",
    "I left my glasses",
    "Every couple",
    "Plug it in",
    "A lot of",
    "Has not he",
    "Feel like",
    "Do not",
    "Which",
    "Any",
    "Talk"
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
