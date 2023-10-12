const button = document.querySelector('#hamburger')
const nav = document.querySelector('nav')
const links = document.querySelectorAll('nav ul li')
const { classList } = nav

if (classList.contains('navOpen')) {
    window.onresize = () => toggleMenu()
    window.onload = () => toggleMenu()
}

button.onclick = () => toggleMenu()
window.onscroll = () => { if (classList.contains('navOpen')) toggleMenu() }

function toggleMenu() {
    classList.toggle('navOpen')
    if (classList.contains('navOpen')) {
        button.style.background = 'center center url(./images/icon-close.svg) no-repeat transparent'
    } else {
        button.style.background = 'center center url(./images/icon-hamburger.svg) no-repeat transparent'
    }
}
