let test_number = document.querySelector(".number_of_question");
let question_text = document.querySelector(".question_text1");

let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");

let array_answer_elements = [answer1,answer2,answer3,answer4];

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
let array_answer3 = ["He’s a(n)","His job is","His job is as","He work as a(n)"];
let array_answer4 = ["Long","Far","Away","Many"];
let array_answer5 = ["Will be able","Can","Won’t be able","Wouldn’t"];
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
let array_answer25 = ["Has he got","Hasn’t he","Has he","Haven’t he"];
let array_answer26 = ["Feel","Feel like","Like","Would like"];
let array_answer27 = ["Won’t","Haven’t","Aren’t","Don’t"];
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

let count_of_number_test = 1;
let x = 1;
let i = 1;

answer1.addEventListener("click",function(){
    if(answer1.textContent == array_answer1[0]) {
        console.log("Правильный ответ");
    }else {
        console.log("НЕ правильный ответ");
        console.log(answer1.textContent);
    }
})
answer2.addEventListener("click",function(){
    if(answer2.textContent == array_answer1[0]) {
        console.log("Правильный ответ");
    }else {
        console.log("НЕ правильный ответ");
        console.log(answer1.textContent);
    }
})
answer3.addEventListener("click",function(){
    if(answer3.textContent == array_answer1[0]) {
        console.log("Правильный ответ");
    }else {
        console.log("НЕ правильный ответ");
        console.log(answer1.textContent);
    }
})
answer4.addEventListener("click",function(){
    if(answer4.textContent == array_answer1[0]) {
        console.log("Правильный ответ");
    }else {
        console.log("НЕ правильный ответ");
        console.log(answer1.textContent);
    }
})

btn_next.addEventListener('click',function(){
    if(i >= array_questions.length) {
        i = 0;
        x = 0;
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
});