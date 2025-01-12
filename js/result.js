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
            if (window.count_correct <= 5) {
                engleesh_level.innerHTML = "A1";
            } else if (6 <= window.count_correct && window.count_correct <= 9) {
                engleesh_level.innerHTML = "A2";
            } else if (10 <= window.count_correct && window.count_correct <= 15) {
                engleesh_level.innerHTML = "B1";
            } else if (16 <= window.count_correct && window.count_correct <= 20) {
                engleesh_level.innerHTML = "C1";
            } else if (21 <= window.count_correct && window.count_correct <= 30) {
                engleesh_level.innerHTML = "C2";
            }
        });
    });
}
show_result();