console.log("Welcome Home");

const btnWeek = document.querySelectorAll(".btnWeek");

console.log(btnWeek);

btnWeek.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.target.id);

    })
});


// onClick="window.location.href='mapage.html'"

// document.getElementById("BTN_CONNEXION").onclick = function () {
//     location.href = "http://localhost:8080/Connexion/";
// };