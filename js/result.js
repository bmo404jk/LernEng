let btn_results = document.querySelector(".btn_results");
let correct_result = document.querySelector(".correct_result");
let engleesh_level = document.querySelector(".engleesh_level");
let p1 = document.querySelector(".true_p");
let p2 = document.querySelector(".true_p2");
window.count_correct = localStorage.getItem('count_current_answer');

function show_result() {
    document.addEventListener("DOMContentLoaded", function () {
        btn_results.addEventListener("click", function () {
            correct_result.innerHTML = window.count_correct;
            p1.style.fontSize = "20px";
            p2.style.fontSize = "20px";
             if (window.count_correct <= 2 || window.count_correct < 5) {
                p2.innerHTML = "Тест пройден, ваш уровень владения языком A1  &#129321;";
            } else if (window.count_correct >= 5 && window.count_correct < 7){
                 p2.innerHTML = "Тест пройден, ваш уровень владения языком A2  &#129321;";
            }else if (window.count_correct >= 7 && window.count_correct < 10){
                 p2.innerHTML = "Тест пройден, ваш уровень владения языком B1  &#129321;";
            }else if (window.count_correct >= 10 && window.count_correct < 13){
                 p2.innerHTML = "Тест пройден, ваш уровень владения языком B2  &#129321;";
            }else if (window.count_correct >= 13 && window.count_correct < 15){
                 p2.innerHTML = "Тест пройден, ваш уровень владения языком С1  &#129321;";
            } else if (window.count_correct === 15){
                 p2.innerHTML = "Тест пройден, ваш уровень владения языком С2  &#129321;";
            } else {
                p2.innerHTML = "Тест не пройден, не набрано необходимое количество баллов,  попробуйте снова(или продолжите обучение) &#129300;";
            }
        });
    });
}
show_result();