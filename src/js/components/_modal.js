export function modal() {

    Array.from(document.querySelectorAll('[data-toggle="modal"]')).forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('body').classList.add('_open-modal')
            document.querySelector(btn.getAttribute('data-target')).classList.add('_show-modal')
        });
    });

    Array.from(document.querySelectorAll('.modal__close')).forEach((btn) => {
        btn.addEventListener('click', (event) => {
            console.log(event);
            event.preventDefault();
            event.target.parentElement.parentElement.parentElement.parentElement.classList.remove('_show-modal')
            document.querySelector('body').classList.remove('_open-modal')
            webCamvideo[0].media.pause();
        });
    });

}