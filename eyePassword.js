


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


const inputCheck = document.getElementById('E-mail')
const iconCheck = document.getElementById('icon-email')

inputEmail.addEventListener('focus',() => {
    iconEmail.style.color = '#FFC632';
})

inputEmail.addEventListener('blur',() => {
    iconEmail.style.color = '#AFB6C2';
})