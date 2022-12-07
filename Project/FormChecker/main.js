const form = document.querySelector("form");
const inputs = document.querySelectorAll(
    'input[type="text"],input[type="password"]'
);
// console.log(inputs);
const progressBar = document.getElementById("progress-bar");
let pseudo, email, password, confirmPass;

const errorDisplay = (tag, message, valid) => {
    const container = document.querySelector("." + tag + "-container");
    const span = document.querySelector("." + tag + "-container > span");

    if (!valid) {
        container.classList.add("error");
        span.textContent = message;
    } else {
        container.classList.remove("error");
        span.textContent = message;
    }
};

const pseudoChecker = (value) => {
    if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        errorDisplay(
            "pseudo",
            "The pseudo must be between 3 and 20 characters long"
        );
        pseudo = null;
    } else if (!value.match(/^[a-zA-Z0-9-._]*$/)) {
        errorDisplay(
            "pseudo",
            "The pseudo must not contain any special characters"
        );
        pseudo = null;
    } else {
        errorDisplay("pseudo", "", true);
        pseudo = value;
    }
};

const emailChecker = (value) => {
    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        // console.log(Test);
        errorDisplay("email", "The email is not valid");
        email = null;
    } else {
        errorDisplay("email", "", true);
        email = value;
    }
};

const passwordChecker = (value) => {
    progressBar.classList = "";
    if (!value.match(
            /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
        )) {
        errorDisplay(
            "password",
            "Minimum of 8 characters, one capital letter, one number and one special character"
        );
        progressBar.classList.add("progressRed");
        password = null;
    } else if (value.length < 12) {
        progressBar.classList.add("progressBlue");
        errorDisplay("password", "", true);
        password = value;
    } else {
        progressBar.classList.add("progressGreen");
        errorDisplay("password", "", true);
        password = value;
    }
    if (confirmPass) confirmChecker(confirmPass);
};

const confirmChecker = (value) => {
    if (value !== password) {
        errorDisplay("confirm", "The password does not match");
        confirmPass = false;
    } else {
        errorDisplay("confirm", "", true);
        confirmPass = true;
    }
};

inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        // console.log(e.target.id);
        // console.log(e.target.value);
        switch (e.target.id) {
            case "pseudo":
                pseudoChecker(e.target.value);
                break;
            case "email":
                emailChecker(e.target.value);
                break;
            case "password":
                passwordChecker(e.target.value);
                break;
            case "confirm":
                confirmChecker(e.target.value);
                break;
            default:
                null;
        }
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (pseudo && email && password && confirmPass) {
        const data = {
            pseudo,
            email,
            password,
        };
        inputs.forEach((input) => (input.value = ""));
        progressBar.classList = "";

        console.log(data);
        pseudo = null;
        email = null;
        password = null;
        confirmPass = null;
        alert("Registration validated!");
    } else {
        alert("Please complete all fields correctly!!");
    }
});