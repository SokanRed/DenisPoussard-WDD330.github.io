// Review Type of Data
let string = "chaine";
let number = 25;
let boolean = true;
let myVariable; // Type Undifined

// ============================================
// ================= Arrays ===================
// ============================================

let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array);
// console.log(array[1]);
// console.log(array[0][3]);
let array2 = ["Bordeaux", 25, true, [1, 2], { name: "Denis" }];
// console.log(array2[3][1]);
// console.log(array2[4].name);

let object = {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJS"],
    admin: false,
};
// console.log(object.technos[0][1]);
// adding an element in object
/*object.address = "40 Avenue d'Eysines";
console.log(object);*/

let data = [{
        pseudo: "Denis",
        age: 33,
        technos: ["Javascript", "PHP", "NodeJS"],
        admin: false,
    },
    {
        pseudo: "Sandrine",
        age: 24,
        technos: ["Javascript", "CSS", "NodeJS"],
        admin: false,
    },
    {
        pseudo: "Thorgal",
        age: 25,
        technos: ["HTML", "CSS", "Javascript"],
        admin: true,
    },
];
// console.log(data[2].pseudo);

// =================================================
// =========== Control Structure ===================
// =================================================

// -----------if ... else-----------

if (data[0].age > data[1].age) {
    // console.log(data[0].pseudo + " is older than " + data[1].pseudo);
} else {
    console.log(data[1].pseudo + " is older than " + data[0].pseudo);
}

/* if (value tobe tested)
    value if true
else
    value if false */

// value tobe tested ? if true : if false

// ----------while-----------------

let w = 0;

while (w < 10) {
    w++;
    // console.log("the value of w is: " + w);
}

// ----------Do While--------------

let d = 0;

do {
    d++;
    // console.log(d);
} while (d < 8);

// ----------for loop---------------

for (const user of data) {
    document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}
// console.log(data.length);
// for (i = 0; i < data.length; i++) {
//     // console.log(i);
//     console.log(data[i]);
//     document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
//     document.body.innerHTML += "<h2>" + data[i].technos.join(" / ") + "</h2>";
// }

// ----------Switch------------------

document.body.addEventListener("click", (e) => {
    console.log(e.target);
    console.log(e.target.id);
    // if (e.target.id === "javascript") {

    switch (e.target.id) {
        case "javascript":
            document.body.style.background = "yellow";
            break;
        case "php":
            document.body.style.background = "blue";
            break;
        case "python":
            document.body.style.background = "green";
            break;
        default:
            null;
    }
});

// ============================================
// ============ Methods ========================
// ============================================

// ----------- Sting Methods ------------------

let stringSM = "Javascript is an Oriented Object Language";
// console.log(typeof stringSM);
// console.log(eval("1" + 2));
// console.log(eval(parseInt("1") + 2));
// console.log(typeof parseInt("42"));
// console.log(typeof "42");
// console.log(isNaN(stringSM));

// console.log(stringSM.length);
// console.log(stringSM[stringSM.length - 1]);

// console.log(stringSM.indexOf("j"));
// console.log(stringSM.indexOf("x")); return -1 if the letter is undefined

// let newString = stringSM.slice(2);
// let newString = stringSM.slice(17, 32);
// console.log(newString);

// console.log(stringSM.split(" "));

// console.log(stringSM.toLowerCase());
// console.log(stringSM.toUpperCase());

// console.log(stringSM.replace("Javascript", "PHP"));

// -------------- Number Methods ---------------------

let number2 = 42.1234;
let numberString = "54.618 is a number.";

// console.log(number2.toFixed(2));
// console.log(parseInt("43"));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// -------------- Math Methods -----------------------
// console.log(Math.PI);
// console.log(Math.round(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.pow(2, 7));
// console.log(Math.sqrt(25));

// console.log(Math.random() * 50);
// console.log(Math.floor(Math.random() * 50));

// -------------- Array Methods ----------------------

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// let newArray = array3.concat(array4);
// console.log(newArray);

let newArray = [...array3, ...array4];
// console.log(newArray);

// console.log(array3.join(" & "));

// console.log(newArray.slice(1));
// console.log(newArray.slice(3, 5));

// console.log(array3.indexOf("Python"));

// array3.forEach((languages) => console.log(languages));

// console.log(array3.every((language) => language === "Php"));
// console.log(array3.some((language) => language === "Php"));

// let shift = array3.shift();
// console.log(shift);
// console.log(array3);
// console.log(array3.pop()); the last element
// shift: first element | pop: last element

// const restArray = array3.splice(1, 1, "C++");
// console.log(restArray);
// console.log(array3);

// ----------------- IMPORTANT ----------------

let arrayNumber = [4, 74, 15, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));
arrayNumber.push(17);
// console.log(arrayNumber);

// ------------ FILTER, SORT, MAP ---------------

// console.log(arrayNumber.filter((number) => number > 12));
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => a - b));

// console.log(arrayNumber.filter((number) => number > 12).sort((a, b) => a - b));

// arrayNumber.map((number) => console.log(number));
// document.body.innerHTML = arrayNumber
//     .map((number) => `<li> ${number}</li>`)
//     .join("");

// ========================================================
// ================ Object Methods ========================
// ========================================================

// document.body.innerHTML = data
//     // .filter((user) => user.admin === false)
//     // .filter((user) => user.pseudo.includes("Den"))
//     .sort((a, b) => b.age - a.age)
//     .map(
//         (user) =>
//         `
//       <div class="user-card">
//         <h2>${user.pseudo}</h2>
//         <h3>Age : ${user.age} years</h3>
//         <p>Status : ${user.admin ? "Administrator" : "Member"}</p>
//       </div>
//       `
//     )
//     .join("");

// ==================================================
// =============== Date =============================
// ==================================================

// ------------- Classical --------------------------

let date = new Date();
// console.log(date);

// ------------- Timestamp --------------------------

let timestamp = Date.parse(date);
// console.log(timestamp);

// ------------- IsoString --------------------------

// console.log(date.toISOString());
let iso = date.toISOString();

function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        // hour: "numeric",
        // minute: "numeric",
    });
    return newDate;
}

// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

// ==================================================
// =============== Destructuring ====================
// ==================================================

let moreData = {
    destVar: ["Element 1", "Element 2"],
};

const { destVar } = moreData; // const destvar = moreData.destVar;
// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];
let [x, y, z] = array5;
// console.log(x, y, z);

console.log(iso);
const dateDestructuring = (chaine) => {
    let newDate = chaine.split("T")[0];
    console.log(newDate.split("-"));
    let [y, m, d] = newDate.split("-");
    // return [d, m, y];
    return [d, m, y].join("/");
    // console.log(newDate);
};
console.log(dateDestructuring(iso));

// ==================================================
// =================== Datasets =====================
// ==================================================

const h3js = document.getElementById("javascript");
// console.log(h3js);
// console.log(h3js.id);
// console.log(h3js.dataset);
// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");

// h3.forEach((language) => console.log(language.dataset.lang));

// ==================================================
// ==================== Regex =======================
// ==================================================

let mail = "sokanfenghuang@gmail.com";
// console.log(mail.search(/com/));
// console.log(mail.search(/fzrferf.com/));
// console.log(mail.replace(/sokan/, "sokanred"));
// console.log(mail.match(/Sokan/));
// console.log(mail.match(/Sokan/i));
// console.log(mail.match(/[zu]/));

// // All digits
// console.log(mail.match(/\d/));
// // All letters
// console.log(mail.match(/[a-z]/));

// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z] {2,4}$/i));

let separator = 25168984318;

console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));