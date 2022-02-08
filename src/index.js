import './less/index.less'

// click event for buttons

function signUp() {
    alert("Congratulations! You're signed up!");
}

document.querySelectorAll('.btn').forEach(button => button.addEventListener('click', signUp));

// dblclick event for background color

const siteBody = document.querySelector('body');

function bgColorChange() {
    document.body.style.backgroundColor = 'grey';
}

siteBody.addEventListener('dblclick', bgColorChange);

// mouseover event for nav items

function highlight() {
    this.style.backgroundColor = "#FDFF47";
}

document.querySelectorAll('nav a').forEach(link => link.addEventListener('mouseover', highlight));

// mouseout event for nav items

function removeHighlight() {
    this.style.backgroundColor = "white";
}

document.querySelectorAll('nav a').forEach(link => link.addEventListener('mouseout', removeHighlight));


// keydown event


// wheel event


// load event


// focus event


// resize event


// select event
