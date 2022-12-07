let alire = document.getElementById("alire");
let lu = document.getElementById("lu");

document.getElementById("ajouter").addEventListener("click", function() {
    let titre = document.getElementById('titre').value;
    let lien = document.getElementById('lien').value;
    if (titre == "" || lien == "") {
        alert("Les deux champs doivent être remplis");
    } else {
        // alire.innerHTML += `<li>${titre}</li>`;
        document.getElementById('titre0').style.visibility = "hidden";
        document.getElementById('titre1').style.visibility = "visible";
        alire.insertAdjacentHTML("afterbegin",
            `<li>
        ${titre}<i class="fa-solid fa-check" id=${titre} onClick=marquerLu(this.id)></i>
        <i id=${titre} onClick=suprimer(this.id) class="fa-solid fa-trash"></i>
        <a href=${lien} target="_blank"><i class="fa-solid fa-cart-shopping"></i></a>
        
        </li>`);
        document.getElementById('titre').value = "";
        document.getElementById('lien').value = "";
    }
})

function suprimer(id) {
    document.getElementById(id).parentElement.outerHTML = "";
}

function marquerLu(id) {
    suprimer(id)
    document.getElementById('titre2').style.visibility = "visible";
    lu.insertAdjacentHTML("afterbegin", `<li>${id}<i class="fa-solid fa-trash" id=${id} onClick=suprimer(this.id)></i></li>`);
}