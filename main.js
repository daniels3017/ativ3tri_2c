document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

  
    const successMessage = document.getElementById("successMessage");

  
    successMessage.classList.remove("hidden");
    setTimeout(() => {
        successMessage.style.opacity = 1;
    }, 10);


    const form = document.querySelector('.form-container');
    form.classList.add('success-bounce');

    setTimeout(() => {
        form.classList.remove('success-bounce');
    }, 800);
});
