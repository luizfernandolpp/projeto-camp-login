function mouseOverMail(){
    let logo = document.querySelector('span#mail')
    logo.style.color = 'var(--primary-color)'
}

function mouseOutMail(){
    let logo = document.querySelector('span#mail')
    logo.style.color = 'var(--text-base)'
}

function mouseOverLock(){
    let logo = document.querySelector('span#lock')
    let vis = document.querySelector('span#vis')
    vis.style.color = 'var(--primary-color)'
    logo.style.color = 'var(--primary-color)'
}

function mouseOutLock(){
    let logo = document.querySelector('span#lock')
    let vis = document.querySelector('span#vis')
    vis.style.color = 'var(--text-base)'
    logo.style.color = 'var(--text-base)'
}

function clickMail(){
    let logo = document.querySelector('span#mail')
    logo.style.color = 'var(--text-base)'
}

function clickLock(){
    let logo = document.querySelector('span#lock')
    let vis = document.querySelector('span#vis')
    vis.style.color = 'var(--text-base)'
    logo.style.color = 'var(--text-base)'
}


function ShowHide(){             // Função que mostra/esconde a senha conforme o usuário clica no ícone do "olhinho"
    let vis = document.querySelector('span#vis')
    let passContent = document.querySelector('input#ipass')
    if (vis.innerHTML == 'visibility'){
        vis.innerHTML = 'visibility_off'
        passContent.removeAttribute('type', 'text')
        passContent.setAttribute('type', 'password')
    } else if (vis.innerHTML == 'visibility_off'){
        vis.innerHTML ='visibility'
        passContent.removeAttribute('type', 'password')
        passContent.setAttribute('type', 'text')
    }
}