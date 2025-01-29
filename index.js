document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".splash-screen").classList.add("fade-out");
        document.querySelector(".content").style.display = "block";
    }, 1200);
});