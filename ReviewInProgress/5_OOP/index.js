// ===========================================================================================
// ======================== Reminder on objects in javascript ===============================
// ===========================================================================================

const obj = {
    // index: value
    pseudo: "SokanRed",
    town: "Tokyo",
    admin: false,

    // sayHello() {
    //     console.log("Hello I am " + this.pseudo + " !");
    // },
    // better practice :
    sayHello: function() {
        console.log("Hello, I am " + this.pseudo + " !");
    },
};
// console.log(typeof obj); (> objet)
// console.log(obj); (> {pseudo: 'SokanRed', town: 'Tokyo', admin: false})

let array = [1, 2, 3];
// console.log(typeof array); (> object)
// console.log(typeof document.body); (> object)

// ----------- Add an element in an object --------------
obj.age = 24;
// console.log(obj); (> {pseudo: 'SokanRed', town: 'Tokyo', admin: false, age: 24})

// --------- Modify an element in an object --------------
obj.pseudo = "SR";
// console.log(obj); (> {pseudo: 'SR', town: 'Tokyo', admin: false, age: 24})

// --------- Delete an element in an object --------------
delete obj.town;
// console.log(obj); (> {pseudo: 'SR', admin: false, age: 24})

// ------------- check if a property exists ---------------
// console.log("pseudo" in obj); (> true)
// console.log("town" in obj); (> false)
// console.log(obj); (> {pseudo: 'SR', admin: false, age: 24, sayHello: ƒ})

// -------------- browse an object -----------------------------
for (const key in obj) {
    // console.log(key); (> pseudo admin age)
    // console.log(obj[key]); ( > SR false 24)
    // console.log(key + " : " + obj[key]);
}
// console.log(obj.sayHello()); (> Hello, I am SR ! )

// ==================================================================
// ===================== Methods in object ==========================
// ==================================================================

// ---------- obtain the indexes of an object -----------------------
const keys = Object.keys(obj);
// console.log(keys); (> (4) ['pseudo', 'admin', 'sayHello', 'age'])

// ----------- obtain the values of an object -----------------------
const values = Object.values(obj);
// console.log(values); (> (4) ['SR', false, ƒ, 24])

const nestedArray = Object.entries(obj);
console.log(nestedArray);