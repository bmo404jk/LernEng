let burger_menu = document.querySelector(".burger_menu");
let burger_menu_content = document.querySelector(".burger_menu_content");
let nav_mobile = document.querySelector(".nav_mobile");


burger_menu.addEventListener('click', function() {
    burger_menu_content.classList.toggle('expanded');

    const contentBlocks = document.querySelectorAll('.benefit_block');
    if (burger_menu_content.classList.contains('expanded')) {
        // Скрываем элементы
        contentBlocks.forEach(block => {
            block.style.display = "none"; // Скрываем блоки при открытом меню
        });
        nav_mobile.style.position = "relative"; // Позиционирование навигации
       // document.documentElement.style.overflow = 'hidden'; // Блокируем прокрутку
    } else {
        // Показываем элементы
        contentBlocks.forEach(block => {
            block.style.display = "flex"; // Показываем блоки при закрытом меню
        });
        nav_mobile.style.position = "fixed"; // Устанавливаем фиксированное позиционирование
        document.documentElement.style.overflow = 'inherit'; // Восстанавливаем прокрутку
    }
});

document.querySelector(".quick_test_btn").addEventListener('click', function() {
    localStorage.setItem('count_current_answer', window.correct_answer_count);
    window.location.href = "test_page.html";
});
