let test_number = document.querySelector(".number_of_question");
let question_text = document.querySelector(".question_text1");

let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");

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

let count_of_number_test = 1;
let i = 1;
answer1.addEventListener("click",function(){
    console.log("answer1");
})
answer2.addEventListener("click",function(){
    console.log("answer2");
})
answer3.addEventListener("click",function(){
    console.log("answer3");
})

btn_next.addEventListener('click',function(){
    if(i > array_questions.length) {
        i = 1;
        count_of_number_test = 0;
    }
    console.log(test_number.innerHTML);
console.log("Did you ______ anything interesting last weekend?");

if (test_number.innerHTML.trim().toLowerCase() === "did you ______ anything interesting last weekend?".trim().toLowerCase()) {
    console.log("true");
    test_number.innerHTML = "2";
    question_text.innerHTML = array_questions[1];
} else {
    console.log("false");
}
    test_number.innerHTML = count_of_number_test++;
    question_text.innerHTML = array_questions[i];
    i++;
    console.log("I:" + i);
    console.log("count_of_number_test:" + count_of_number_test);
});