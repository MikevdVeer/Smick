const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function() {
    const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const firstName = document.querySelector(".form-name");
    if (email.value.match(validRegex)) {
        alert("valid email");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    }
})