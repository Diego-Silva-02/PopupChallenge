const button = document.querySelector('button')
const popup = document.querySelector('.popup__wrapper')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup__close', 'popup__wrapper', 'popup__link']
    const shouldClosePopup = classNames.some(classNames => classNames === classNameOfClickedElement) //some -> percorre o array e vê se uma das strings atende a condição

    if(shouldClosePopup) {
        popup.style.display = 'none'
    }
})