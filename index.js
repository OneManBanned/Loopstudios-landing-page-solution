const button = document.querySelector('#hamburger')
const nav = document.querySelector('nav')
const body = document.querySelector('body')

button.addEventListener('click', () => {
    button.classList.toggle('close')
    nav.classList.toggle('open')
    body.classList.toggle('fixed')
})