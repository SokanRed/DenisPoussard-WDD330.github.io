// ================ XMLHttpRequest ============
function reqListener() {
    // console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.txt", true);
req.open("get", "data.json", true);
req.send();

// -----------------------------------------------
// ================ FETCH ========================
// -----------------------------------------------
fetch("monlien", "objet d'option")
    .then((response) => {
        // console.log(response);
    })
    .catch((err => console.log(err)))