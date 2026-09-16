document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formobject');
    const error = document.getElementById('error');

    form.addEventListener('submit', function (event) {
        error.innerHTML = "";
        let ratingerror = false;
        
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === "") {
            nameInput.value = "Anonymous";
        }

        const rating = document.querySelector('input[name="rating"]:checked');
        if (!rating) {
            ratingerror = true;
        }

        if (ratingerror == true) {
            event.preventDefault(); 
            error.innerHTML = "You need to select a rating."
        }
    });
});