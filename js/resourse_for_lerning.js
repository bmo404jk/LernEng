let h3_title_1 = document.querySelectorAll(".h3_title_1");
let h3_title_2 = document.querySelectorAll(".h3_title_2");
let h3_title_3 = document.querySelectorAll(".h3_title_3");

h3_title_1.forEach((h3_title_1, index) => {
    let card_container = h3_title_1.nextElementSibling; 
    h3_title_1.addEventListener("click", () => {
        card_container.classList.toggle('expanded'); 
    });
});
h3_title_2.forEach((h3_title_2, index) => {
    let card_container = h3_title_2.nextElementSibling; 
    h3_title_2.addEventListener("click", () => {
        card_container.classList.toggle('expanded'); 
    });
});
h3_title_3.forEach((h3_title_3, index) => {
    let card_container = h3_title_3.nextElementSibling; 
    h3_title_3.addEventListener("click", () => {
        card_container.classList.toggle('expanded'); 
    });
});