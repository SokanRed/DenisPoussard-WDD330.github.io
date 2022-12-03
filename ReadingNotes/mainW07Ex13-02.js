console.log("Hello, To Do List!")

// This code creates an event listener that first of all prevents the default behavior of the form, 
//      so it doesn't get submitted when the Add Task button is clicked. 
// Next it creates a task object with a title property that is taken from what was entered in the form. 
// It also has a completed property that has a default value of false. 
// This object is then transformed into a JSON string using the JSON.stringify method 
//      and assigned to the variable data.

// Then we use the fetch() method to send the request and deal with the response. 
// This creates a promise that resolves to a JSON object, 
//      so we use the json() method to create another promise that resolves to a JavaScript object. 
// This object has a single property of id to mimic successfully saving 
//      the task to a database (as this would result in it being assigned an ID by the database).

// We can use this to log a message to the console that refers to the id property that was returned.

// If you open up the 'todo.html' file, add a task in the form and then submit it, 
//      you should see a message in the console similar to the one below.

// << Task saved with an id of 201

// This fakes the fact that the task has been saved to a database and the relevant data has been returned. 
// In reality, the data hasn’t been saved, 
//      and the ID property has just been randomly generated for demonstration purposes.

const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);

function addTask(event) {
    event.preventDefault();
    const number = form.task.value;
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
    const data = JSON.stringify(task);
    const url = 'https://jsonplaceholder.typicode.com/todos';

    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url, {
        method: 'POST',
        header: headers,
        body: data
    })

    fetch(request)
        .then(response => response.json())
        .then(task => console.log(`Task saved with an id of ${task.id}`))
        .catch(error => console.log('There was an error:', error))

}