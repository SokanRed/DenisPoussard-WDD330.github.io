// Selectors
// document.querySelector("h4").style.background = "yellow";
// better practice
/*const subtitleh4 = document.querySelector("h4");
console.log(subtitleh4);
subtitleh4.style.background = "yellow"; */

// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const answer = document.getElementById("response");

// questionContainer.style.borderRadius = "50px";
// console.log(questionContainer);
// console.log(btn1, btn2);
// console.log(answer);

//questionContainer.addEventListener('évènement', function);
questionContainer.addEventListener("click", () => {
    // console.log("Click !");
    // questionContainer.style.background = "red";
    // questionContainer.style.border = "3px solid teal";
    questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
    // answer.style.visibility = "visible";
    answer.classList.add("show-answer");
    answer.style.background = "green";
    //console.log("Clicked Berne!");
});
btn2.addEventListener("click", () => {
    // answer.style.visibility = "visible";
    answer.classList.add("show-answer");
    answer.style.background = "red";
    // console.log("Clicked Zurich!");
});

// priority : #id > .class > htmltag
//------------------------------------------------------------------

// Mouse Events

const mousemove = document.querySelector(".mousemove");
console.log(mousemove);

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});