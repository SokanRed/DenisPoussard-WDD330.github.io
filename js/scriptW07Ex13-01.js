console.log("Hello, AJAX!");

// This assigns each of the buttons in the HTML file to a variable, so we can refer to them later in the file.

const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

// Next, we'll assign some URLs to variables:

const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

// =================================== A number Fact ===========================================================

// We'll assign an event handler to each button. Let's start with the Number Fact button:
// This uses the format we saw earlier to construct a fetch request. 
// This returns a promise that resolves to a string. 
// We can then place that string inside the <div> with an id of 'output' by assigning it its innerText property.

textButton.addEventListener('click', () => {
    fetch(textURL)
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.text())
        .then(text => outputDiv.innerText = text)
        .catch(error => console.log('There was an error:', error))
}, false);

// =================================== A Chuck Norris "Fact" =================================================================

// This is almost identical to the Number example, except the response returns JSON, 
//      so we use the json() method to return a promise that resolves as a JavaScript object. 
// This object has a value property that contains the Chuck Norris fact, 
//      so we insert it into the <div> with an id of 'output' using innerText again.

apiButton.addEventListener('click', () => {
    fetch(apiURL)
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then(data => outputDiv.innerText = data.value)
        .catch(error => console.log('There was an error:', error))
}, false);