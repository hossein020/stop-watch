const p = document.querySelector('p');

window.addEventListener('load', () => {
    p.innerHTML += 'load event <br>'
});

window.addEventListener('DOMContentLoaded', () => {
    p.innerHTML += 'DOMContentLoaded event <br>'
});

window.addEventListener('focus', () => {
    p.innerHTML += 'focus event <br>'
});

window.addEventListener('blur', () => {
    p.innerHTML += 'blur event <br>'
});

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = ''
});

window.addEventListener('resize', () => {
    p.innerHTML += 'resize event <br>'
})