const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
// console.log(dataUppercase);
const dataNumbers = "0123456789";
const dataSymbols = "()][{}+*/-_],;:!?./§#&$£%";
const rangeValue = document.getElementById("password-length");
// console.log(rangeValue);
// console.log(rangeValue.value);
let passwordOutput = document.getElementById("password-output");

function generatePassword() {
    // console.log("I generate a password");
    let data = [];
    let password = "";

    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert("Please, select criteria");
        return;
    }

    for (i = 0; i < rangeValue.value; i++)
        password += data[Math.floor(Math.random() * data.length)];
    console.log(password);

    passwordOutput.value = password;

    passwordOutput.select();
    // document.execCommand("copy");
    navigator.clipboard.writeText(passwordOutput.value);

    generateButton.textContent = "Paste it wherever you need it!";
    setTimeout(() => {
        generateButton.textContent = "Generate Password";
    }, 5000);
}

generateButton.addEventListener("click", generatePassword);