document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".quick_test_btn").addEventListener("click", function() {
        window.location.href = "test_page.html";
    });

    document.querySelector(".back_to_main").addEventListener("click", function() {
        window.location.href = "index.html";
        console.log("sdgfsd");
    });
});