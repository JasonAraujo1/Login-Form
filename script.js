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





//EYE PASSWORD
function mostrarSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('eye-icon')

    if(inputPass.type === 'password'){//aqui diz que : se o tipo da minha variável 'input pass' for exatamente igual a password eu quero que mude algo...
        inputPass.setAttribute('type','text')//aqui vai mudar tipo do atributo do input para texto
        btnShowPass.classList.replace('bi-eye-slash', 'bi-eye')
    }
    else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye', 'bi-eye-slash')
    }


}


