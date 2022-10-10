// Review Type of Data
let string = "chaine";
let number = 25;
let boolean = true;
let myVariable; // Type Undifined

// ==================================
// Arrays
// ==================================
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

// =================================
// Control Structure
// =================================
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
console.log(data.length);
for (i = 0; i < data.length; i++) {
    // console.log(i);
    console.log(data[i]);
    document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
    document.body.innerHTML += "<h2>" + data[i].technos.join(" / ") + "</h2>";
}

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