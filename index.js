const colors = ['red', 'green', 'blue', 'purple']
const heading = document.querySelector('header')
const heads = document.querySelectorAll('h1')

heading.addEventListener('click', function(){
    let randomColor = getRandomColor()
    heading.style.backgroundColor = colors[randomColor]
    heading.style.transition = '1s'

})

function getRandomColor() {
    return Math.floor(Math.random()*colors.length)
}

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
})
ScrollReveal().reveal('.hi-text', {delay: 400})
// ScrollReveal().reveal('h1', {delay: 400})
ScrollReveal().reveal('img', {delay: 400})
ScrollReveal().reveal('i', {delay: 400})

