console.log("script added!")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button) {
    console.log(button)

    button.addEventListener('click', function(event) { // Use 'event' instead of 'e'
        console.log(event) // Log the event object
        console.log(event.target) // Log the clicked element

        if (event.target.id === 'black') {
            body.style.backgroundColor = event.target.id
        } else if (event.target.id === 'white') {
            body.style.backgroundColor = event.target.id
        } else if (event.target.id === 'green') {
            body.style.backgroundColor = event.target.id
        } else if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id
        } else {
            console.log("Unidentified button clicked.") // Added for handling unexpected clicks
        }
    })
})

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function() {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);