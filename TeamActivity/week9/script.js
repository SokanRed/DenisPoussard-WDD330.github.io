const containers = document.querySelectorAll('.drag_conttainer');
const draggables = document.querySelectorAll('.key');

let integer = 0;
let integerTotal = [];

onkeydown = (e) => {
    const keyColor = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const color = keyColor.style.backgroundColor = "Red";
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();

}

onkeyup = (e) => {
    const keyColor = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const color = keyColor.style.backgroundColor = "yellow";
    const marginTop = keyColor.style.marginTop ="40px";
    if(color == 'yellow'){ 
        integer += 1;
        integerTotal.push(integer);
        console.log('Count is: '+ integerTotal) // result 'After 10 presses of a key, reset the position of it's button.'
    }
    // reset button if key press is equal 10
    if(integerTotal.pop() == 10)
    {
        window.location.reload();
    }
}


draggables.forEach(graggable => {
    graggable.addEventListener('dragstart', ()=>{
        graggable.classList.add('dragging')
    })
    graggable.addEventListener('dragend', () => {
        graggable.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', (e)=> {
        e.preventDefault()
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable); 
    })
})
