let burger_menu = document.querySelector(".burger_menu");
let burger_menu_content = document.querySelector(".burger_menu_content");

burger_menu.addEventListener('click',function() {
    console.log(1);
    if(burger_menu_content.style.display == "none") {
         burger_menu_content.style.display = "flex";
    } else {
        burger_menu_content.style.display = "none";
    }
});
