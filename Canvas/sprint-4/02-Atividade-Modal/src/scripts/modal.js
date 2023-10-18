function  handleModal(){
    const buttonRegister = document.querySelector('.form__register-link');
    const modalContainer = document.querySelector('#modalRegister');

    buttonRegister.addEventListener('click', function(){
        modalContainer.showModal();

        closeModal();
    })
}

function closeModal(){
    const buttonClose = document.querySelector('.button__close');
    const modalContainer = document.querySelector('#modalRegister');

    buttonClose.addEventListener('click', function(){
        modalContainer.close();
    })
}

handleModal();