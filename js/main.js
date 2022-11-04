// alert('bonjour');

function Week(number, link) {
    this.number = number,
        this.link = link
}

const week1 = new Week(01, './week01/index.html');
const week2 = new Week(02, './week02/index.html');
const week3 = new Week(03, './week03/index.html');
const week4 = new Week(04, './week04/index.html');
const week5 = new Week(05, './week05/index.html');
const week6 = new Week(06, './week06/index.html');
const week7 = new Week(07, './week07/index.html');
const week8 = new Week(08, './week08/index.html');
const week9 = new Week(09, './week09/index.html');
const week10 = new Week(10, './week10/index.html');
const week11 = new Week(11, './week11/index.html');
const week12 = new Week(12, './week12/index.html');
const week13 = new Week(13, './week13/index.html');
const week14 = new Week(14, './week14/index.html');

let weeks = [];
weeks.push(week1, week2, week3, week4, week5, week6, week7, week8)

console.log(weeks);

function linkWeekDisplay() {
    let listOfWeeks = '';
    weeks.forEach(prod =>
        listOfWeeks += "< p > $ { prod.link } < /p>"
    )
    document.getElementById('weekList').innerHTML = listOfWeeks

}