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
            if (window.count_correct >= 21) {
                p2.innerHTML = "Тест пройден, вы большой молодец &#129321;";
            } else{
                p2.innerHTML = "Тест не пройден, не набрано необходимое количество баллов, попробуйте снова(или продолжите обучение) &#129300;";
            }
        });
    });
}
show_result();