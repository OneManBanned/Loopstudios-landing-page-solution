const button = document.querySelector('#hamburger')
const nav = document.querySelector('nav')
const links = document.querySelectorAll('nav ul li')
const { classList } = nav

button.onclick = () => toggleMenu()
window.onresize = () => resetNavState()
window.onload = () => resetNavState()
links.forEach((link, index) => {
    if (window.innerWidth < 476 && index === 0) {
        link.addEventListener('click', () => {
            if (window.innerWidth < 476 && classList.contains('navOpen')) {
                resetNavState()
            }
        })
    }
})
console.log(window.innerWidth)
// refresh to top of page

window.location.hash = ''
history.scrollRestoration = 'manual'

function toggleMenu() {
    classList.toggle('navOpen')
    if (classList.contains('navOpen')) {
        button.style.background = 'center center url(./images/icon-close.svg) no-repeat transparent'
    } else {
        button.style.background = 'center center url(./images/icon-hamburger.svg) no-repeat transparent'
    }
}

const resetNavState = () => {
    classList.remove('navOpen')
    button.style.background = 'center center url(./images/icon-hamburger.svg) no-repeat transparent'
}
