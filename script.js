const openHam = document.getElementById('open-hamburger');
const closeHam = document.getElementById('close-hamburger');
const menu_log = document.getElementById('menu-log');

openHam.addEventListener('click', ()=>{
    openHam.classList.remove('open-hamburger')
    closeHam.classList.add('close-hamburger')
    menu_log.classList.add('visible')
})
closeHam.addEventListener('click', ()=>{
    openHam.classList.add('open-hamburger')
    closeHam.classList.remove('close-hamburger')
    menu_log.classList.remove('visible')
})