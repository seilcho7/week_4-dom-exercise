const allButtons = document.querySelectorAll("[data-target]");
const outputElement = document.querySelector("[data-output]");

// function sayHey() {
//     console.log("boop");
// }

// function sayBye() {
//     console.log("beep");
// }

// function sayNothing() {
//     console.log("mmmm, blop");
// }

let originalText;

function say(event) {
    console.log(event.target);
    console.log(event.target.getAttribute('data-message'));
    const message = event.target.getAttribute('data-message');
    
    if (originalText === undefined) {
        originalText = outputElement.textContent;
        outputElement.textContent = message;
    } else {
        outputElement.textContent = originalText;
        originalText = undefined;
    }
    

    // classList API lets you add/remove/toggle classes on a DOM element.
    event.target.classList.toggle('active');
}

function clickHandler(each) {
    each.addEventListener('click', say);
}

// allButtons[0].addEventListener('click', say);
// allButtons[1].addEventListener('click', say);
// allButtons[2].addEventListener('click', say);

allButtons.forEach(clickHandler);