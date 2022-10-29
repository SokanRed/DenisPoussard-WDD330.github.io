// =================== Section 2| Make it Nice ======================

function showCongratulation(theButtonClicked) {
    document.getElementById("result_displayS2").innerHTML =
        "<h2>Congratulations, you did it!</h2><p>You got the page to update!</p>";
    theButtonClicked.innerHTML = "Click Me Again!";
}

// ============= Section 3 | Remembering User's Info ================
function loadStory() {
    let storyName = document.getElementById("name_input").value;
    let storyHTML = localStorage.getItem(storyName);
    document.getElementById("story_editor").value = storyHTML;
}

function saveStory() {
    let storyName = document.getElementById("name_input").value;
    let storyHTML = document.getElementById("story_editor");
    localStorage.setItem(storyName, storyHTML);
}

function displayStory() {
    let storyHTML = document.getElementById("story_editor").value;
    document.getElementById("story_display").innerHTML = storyHTML;
}

// ================== Section 4 | Making Choices ====================
function checkNumber() {
    let numberAsText = document.getElementById("number_input").value;
    let remainder = numberAsText % 2;
    if (remainder === 0) {
        document.getElementById("result_displayS4").innerHTML =
            numberAsText + " is even.";
    } else {
        document.getElementById("result_displayS4").innerHTML =
            numberAsText + " is odd.";
    }
}

// ================= Section 5 | Groups and Loops ===================
// ----------------- Even or Odd Numbers ---------------------------
function checkAnotherNumber() {
    let someNumbers = [25, 11, -2, 14, "What?? This isn't a number", -1, -10];

    for (let i = 0; i < 7; i++) {
        let numberAsText2 = someNumbers[i];
        let aNumberIndexi = parseInt(numberAsText2);
        if (numberAsText2 != "" && !isNaN(aNumberIndexi)) {
            let remainder2 = Math.abs(aNumberIndexi % 2);
            if (aNumberIndexi != 0 && remainder2 == 0) {
                document.getElementById("result_displayS5").innerHTML +=
                    "<p>" + aNumberIndexi + " is even.</p>";
            } else if (aNumberIndexi != 0 && remainder2 == 1) {
                document.getElementById("result_displayS5").innerHTML +=
                    "<p>" + aNumberIndexi + " is odd.</p>";
            } else {
                document.getElementById("result_displayS5").innerHTML +=
                    "<p>0 is neither even nor odd.</p>";
            }
        } else {
            document.getElementById("result_displayS5").innerHTML +=
                '<p>"' + someNumbers[4] + '" is not a number.</p>';
        }
    }
}
let fewNumbers = [25, 11, -2, 14, "What?? This isn't a number", -1, -10];
let array = "";
for (let i = 0; i < 7; i++) {
    array = document.getElementById("array").innerHTML +=
        "<p> " + fewNumbers[i] + ",</p>";
}

// ------------------- Application | Note It --------------------------
function saveNote() {
    let currentDateAndTime = new Date();
    let aNoteDescription = document.getElementById("description_input").value;
    let aNoteText = document.getElementById("note_editor").value;
    let aCompleteNote =
        currentDateAndTime.toLocaleString() + "--" + aNoteDescription;
    aCompleteNote += "<p>" + aNoteText + "</p>";
    let storedNotesString = localStorage.getItem("all_notes");
    let allNotes = JSON.parse(storedNotesString);
    if (allNotes == null) {
        allNotes = [];
    }
    allNotes.push(aCompleteNote);
    let allNotesString = JSON.stringify(allNotes);
    localStorage.setItem("all_notes", allNotesString);
}

function showAllNotes() {
    let storedNotesString = localStorage.getItem("allNotes");
    let allNotes = JSON.parse(storedNotesString);
    if (allNotes != null) {
        let noteDisplayer = document.getElementById("all_notes_display");
        noteDisplayer.innerHTML = null;
        let numberOfNotes = allNotes.length;
        for (let i = 0; i < numberOfNotes; i++) {
            let aNote = allNotes[i];
            noteDisplayer.innerHTML += "<hr><p>" + aNote + "</p>";
        }
    }
}