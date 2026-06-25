const regForm = document.querySelector("#regForm");
const result = document.querySelector("#message");

function errorMessage(message) {
    result.textContent = message;
    result.style.color = "red";
    result.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    result.style.padding = "10px";
    result.style.border = "1px solid red";
    result.style.borderRadius = "5px";
}

function successMessage(name, field, age) {
    result.textContent = `${name} registered for the ${field} event\nAge: ${age}`;
    result.style.color = "#6cff6c";
    result.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
    result.style.border = "1px solid #6cff6c";
    result.style.borderRadius = "5px";
}

regForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const age = document.getElementById("age");
    const field = document.getElementById("field");
    const terms = document.getElementById("terms");

    const nameValue = name.value.trim();
    if (nameValue === "") {
        errorMessage("Please enter your full name");
        name.focus();
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        errorMessage("Email is invalid");
        email.focus();
        return;
    }
    if (!emailPattern.test(email.value.trim())) {
        errorMessage("Please enter a valid email address");
        email.focus();
        return;
    }
    
    const ageValue = parseInt(age.value.trim());
    if (isNaN(ageValue) || ageValue < 18) {
        errorMessage("Please enter a valid age (at least 18)");
        age.focus();
        return;
    }
    if (field.value === "") {
        errorMessage("Please choose your field");
        field.focus();
        return;
    }
    if (!terms.checked) {
        errorMessage("Please agree to the terms and conditions");
        terms.focus();
        return;
    }

    successMessage(nameValue, field.value, ageValue);
});