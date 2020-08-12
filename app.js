//variables

const navBar = document.querySelector('.navbar') 
const navBar2 = document.querySelector('.navbar2')
const navBar3 = document.querySelector('.navbar3')

const footerImg1 = document.querySelector('.footer1')


//Event listeners

// navBar.addEventListener('click', (e) => {
//     e.preventDefault();
//     // navBar.classList.toggle('active')
// })
// navBar2.addEventListener('click', (e) => {
    
//     navBar2.classList.toggle('active')
// })
// navBar3.addEventListener('click', (e) => {
//     e.preventDefault();
//     navBar3.classList.toggle('active')
// })

footerImg1.addEventListener('click', () => {
    footerImg1.style.fill = 'red'
})