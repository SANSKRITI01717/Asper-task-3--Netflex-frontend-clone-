let slider = document.querySelector(".gallery");
let nextBtn = document.querySelector(".forward-btn");
let prevBtn = document.querySelector(".back-btn");

nextBtn.addEventListener("click", function(){
    slider.scrollLeft += 300;
});

prevBtn.addEventListener("click", function(){
    slider.scrollLeft -= 300;
});
let questions = document.querySelectorAll(".ans");

questions.forEach(function(question) {
    question.addEventListener("click", function() {
        let icon = this.querySelector(".icon");
        let answer = this.nextElementSibling;
        let isOpen = answer.classList.contains("open");

        questions.forEach(function(q) {
            q.querySelector(".icon").classList.remove("open");
            q.nextElementSibling.classList.remove("open");
        });

        if (!isOpen) {
            icon.classList.add("open");
            answer.classList.add("open");
        }
    });
});