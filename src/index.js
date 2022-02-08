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


// keydown event for escape key

function escKey(evt) {
    if (evt.key === 'Escape') {
        alert('There is no escape!');
    }
}

document.addEventListener('keydown', escKey);

// load event

function pageLoad() {
    console.log('The page has loaded successfully!');
}

window.addEventListener('load', pageLoad);

// resize event

function reportSize() {
    console.log(`The window has been resized to ${window.innerWidth} x ${window.innerHeight}`);
}

window.addEventListener('resize', reportSize);

// wheel event


// focus event


// select event
