import './less/index.less'

// 1. click event for buttons

function signUp() {
    alert("Congratulations! You're signed up!");
}

document.querySelectorAll('.btn').forEach(button => button.addEventListener('click', signUp));

// 2. dblclick event for background color

const siteBody = document.querySelector('body');

function bgColorChange() {
    document.body.style.backgroundColor = 'grey';
}

siteBody.addEventListener('dblclick', bgColorChange);

// 3. mouseover event for nav items

function highlight() {
    this.style.backgroundColor = "#FDFF47";
}

document.querySelectorAll('nav a').forEach(link => link.addEventListener('mouseover', highlight));

// 4. mouseout event for nav items

function removeHighlight() {
    this.style.backgroundColor = "white";
}

document.querySelectorAll('nav a').forEach(link => link.addEventListener('mouseout', removeHighlight));


// 5. keydown event for escape key

function escKey(evt) {
    if (evt.key === 'Escape') {
        alert('There is no escape!');
    }
}

document.addEventListener('keydown', escKey);

// 6. load event for window

function pageLoad() {
    console.log('The page has loaded successfully!');
}

window.addEventListener('load', pageLoad);

// 7. contextmenu event for window

window.addEventListener('contextmenu', () => {
    console.log('You opened the context menu!');
});

// 8. resize event for window

function reportSize() {
    console.log(`The window has been resized to ${window.innerWidth} x ${window.innerHeight}`);
}

window.addEventListener('resize', reportSize);

// 9. copy event for window

window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then (text => {
        console.log(`You copied the text: ${text}`);
    });
});

// 10. wheel event for header image

const headerImage = document.querySelector('header img');

let scale = 1;

function zoomImage(evt) {
    // preventDefault to prevent page from scrolling while zooming
    evt.preventDefault();
    scale += evt.deltaY * -0.001;
    scale = Math.min(Math.max(.125, scale), 1);
    this.style.transform = `scale(${scale})`;
}

headerImage.addEventListener('wheel', zoomImage);