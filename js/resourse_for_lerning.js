let h3_titles = document.querySelectorAll(".h3_title");
h3_titles.forEach((h3_title, index) => {
    let card_container = h3_title.nextElementSibling; 
    h3_title.addEventListener("click", () => {
        card_container.classList.toggle('expanded'); 
    });
});