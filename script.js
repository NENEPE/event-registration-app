const regForm = document.querySelector("#regForm");
const result = document.querySelector("#message");

let participantsArray = [];
const participantList = document.querySelector("#participants ol");
const participantCount = document.querySelector("#participants h3");

renderParticipants();

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
    regForm.reset();
}

regForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const age = document.getElementById("age");
    const field = document.getElementById("field");
    const terms = document.getElementById("terms");

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const ageValue = parseInt(age.value.trim());

    if (nameValue === "") {
        errorMessage("Please enter your full name");
        name.focus();
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        errorMessage("Email is invalid");
        email.focus();
        return;
    }
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

    createParticipant(nameValue, field.value, ageValue);
    successMessage(nameValue, field.value, ageValue);
});

function createParticipant(name, field, age) {

    let participant = {
        name: name,
        field: field,
        age: age
    };

    participantsArray.push(participant);

    renderParticipants();
}

function renderParticipants() {
    participantList.innerHTML = "";

    participantsArray.forEach(participant => {
        const participantItem = document.createElement("li");
        participantItem.textContent = `${participant.name} (${participant.age}) - ${participant.field}`;
        participantList.appendChild(participantItem);
    });

    participantCount.textContent = `Currently there are ${participantsArray.length} participant(s)`;
}

