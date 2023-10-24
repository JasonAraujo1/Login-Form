//INPUT ICONS COLOR 

const inputEmail = document.getElementById('E-mail')
const iconEmail = document.getElementById('icon-email')

const senhaInput = document.getElementById('senha')
const senhaIcon = document.getElementById('icon-senha')
const eyeIcon = document.getElementById('eye-icon')



inputEmail.addEventListener('focus',() => {
    iconEmail.style.color = '#FFC632';
})

inputEmail.addEventListener('blur',() => {
    iconEmail.style.color = '#AFB6C2';
})

senhaInput.addEventListener('focus', ()  => {
    senhaIcon.style.color = '#FFC632';
    eyeIcon.style.color = '#FFC632';
}) 

senhaInput.addEventListener('blur', ()  => {
    senhaIcon.style.color = '#AFB6C2';
    eyeIcon.style.color = '#AFB6C2';
}) 


