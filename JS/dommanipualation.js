let h1 = document.querySelector("h1");

// change text
h1.textContent = "Hi there!";

// change style
h1.style.color = "red";

// create and add new element
let newP = document.createElement("p");
newP.textContent = "This is new text";
document.body.appendChild(newP);

// remove element
h1.remove();
