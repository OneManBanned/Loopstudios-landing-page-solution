const button = document.querySelector('#hamburger')
const nav = document.querySelector('nav')
const body = document.querySelector('body')
const { classList } = nav

button.onclick = () => toggleMenu()

function toggleMenu() {
    classList.toggle('navOpen')
    if (classList.contains('navOpen')) {
        button.style.background = 'center center url(./images/icon-close.svg) no-repeat transparent'
    } else {
        button.style.background = 'center center url(./images/icon-hamburger.svg) no-repeat transparent'
    }
}

// button.classList.toggle('open')
// nav.classList.toggle('open')
// body.classList.toggle('fixed')