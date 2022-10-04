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
// console.log(mousemove);

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
    // console.log("test-Down");
});
window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid darkgreen";
    // console.log("test-Up");
});
questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.opacity = "0.6";
});
questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.opacity = "1";
    questionContainer.style.background = "green";
});
answer.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)";
});

//---------------------------------------------------------
// KeyPress Event

const keyPressContainer = document.querySelector(".keyPress");
// console.log(keyPressContainer);
const key = document.getElementById("key");
// console.log(key);
const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3";
    audio.play();
};

document.addEventListener("keypress", (e) => {
    // console.log("Great!!");
    // console.log(e.key);
    key.textContent = `vous venez d'apuyer sur la touche : "` + e.key + '"';
    if (e.key === "j") {
        keyPressContainer.style.background = "red";
    } else if (e.key === "h") {
        keyPressContainer.style.background = "green";
    } else {
        keyPressContainer.style.background = "blue";
    }
    if (e.key === "Enter") ring(e.key);
});

//--------------------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");
console.log(nav);
window.addEventListener("scroll", () => {
    // console.log("Test scroll!");
    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});

//-------------------------------------------------------
// Form Events

const inputName = document.querySelector('input[type="text"]');
// console.log(inputName);
const select = document.querySelector("select");
// console.log(select);
const form = document.querySelector("form");
// console.log(form);
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
    // console.log("Input test");
    // console.log(e.target.value);
    pseudo = e.target.value;
    // console.log(pseudo);
});

select.addEventListener("input", (e) => {
    // console.log(e);
    // console.log(e.target.value);
    language = e.target.value;
});

form.addEventListener("submit", (e) => {
    // console.log("form Test!");
    e.preventDefault();
    // console.log(gcs.checked);
    if (gcs.checked) {
        //Display the content of the variables
        document.querySelector("form > div").innerHTML = ` 
        <h3>Pseudo : ${pseudo}</h3> 
        <h4>Favorite Language : ${language}</h4>`;
    } else {
        alert("Accept the GCS");
    }
});

//-------------------------------------------------------------------
// Load Event

window.addEventListener("load", () => {
    // console.log("Loaded Document!");
});

//-------------------------------------------------------------------
// ForEach

const boxes = document.querySelectorAll(".box");
// console.log(boxes);
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        // console.log(e.target);
        e.target.style.transform = "scale(0.7)";
    });
});

//----------------------------------------------------------
// addEventlistener VS onclick

// document.body.onclick = function() {
//     console.log("Click !");
// };

// Bubbling (by default addEventlistener is set bubbling)
document.body.addEventListener(
    "click",
    () => {
        console.log("Click 1 !");
    },
    false
);

// Usecapture
document.body.addEventListener(
    "click",
    () => {
        console.log("Click 2 !");
    },
    true
);

// ---------------------------------------------------------
// Stop propagation

/*questionContainer.addEventListener("click", (e) => {
    alert("Test Alert!");
    e.stopPropagation();
// });*/

// removeEventlistener

//----------------------------------------------------------
// BOM (Browser Object Model)

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=600, width=800");
// window.close();

// Events linked to Window
// alert("Hello!");
// confirm
btn2.addEventListener("click", () => {
    confirm("Do you really want to be wrong ?");
});

// prompt
let answer2;
btn1.addEventListener("click", () => {
    answer2 = prompt("Enter your name !");
    questionContainer.innerHTML += "<h3>Bravo " + answer2 + " !!</h3>";
});