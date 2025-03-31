let burger_menu = document.querySelector(".burger_menu");
let burger_menu_content = document.querySelector(".burger_menu_content");

burger_menu.addEventListener('click', function() {
    burger_menu_content.classList.toggle('expanded');

    if (burger_menu_content.classList.contains('expanded')) {
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку
    } else {
        document.body.style.overflow = 'inherit'; // Восстанавливаем прокрутку
    }
});

document.querySelector(".quick_test_btn").addEventListener('click', function() {
    localStorage.setItem('count_current_answer', window.correct_answer_count);
    window.location.href = "test_page.html";
});

document.querySelector(".A1_btn").addEventListener('click', function() {
    localStorage.setItem('count_current_answer', window.correct_answer_count);
    window.location.href = "testA1.html";
});
