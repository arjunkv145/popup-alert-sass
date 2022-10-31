const popupSelfClosingContainer = document.querySelector('#popup-self-closing-container')
const popupSelfClosingOpenBtn = document.querySelector('#popup-open-self-closing')
const popupSelfClosingAlertBox = document.querySelector('#popup-self-closing-alert-box')

const popupSuccessContainer = document.querySelector('#popup-success-container')
const popupSuccessOpenBtn = document.querySelector('#popup-open-success')
const popupSuccessCloseBtn = document.querySelector('#popup-close-success')
const popupSuccessAlertBox = document.querySelector('#popup-success-alert-box')

const popupFailContainer = document.querySelector('#popup-fail-container')
const popupFailOpenBtn = document.querySelector('#popup-open-fail')
const popupFailCloseBtn = document.querySelector('#popup-close-fail')
const popupFailAlertBox = document.querySelector('#popup-fail-alert-box')

// Self closing alert box

popupSelfClosingOpenBtn.addEventListener('click', () => {
    popupSelfClosingContainer.classList.add('open')
    popupSelfClosingAlertBox.classList.add('open')
    setTimeout(() => {
        popupSelfClosingContainer.classList.remove('open')
        popupSelfClosingAlertBox.classList.remove('open')
    }, 2000)
})
popupSelfClosingAlertBox.addEventListener('click', (e) => {
    e.stopPropagation()
})
popupSelfClosingContainer.addEventListener('click', () => {
    popupSelfClosingContainer.classList.remove('open')
    popupSelfClosingAlertBox.classList.remove('open')
})

//  Success alert box

popupSuccessOpenBtn.addEventListener('click', () => {
    popupSuccessContainer.classList.add('open')
    popupSuccessAlertBox.classList.add('open')
})
popupSuccessCloseBtn.addEventListener('click', () => {
    popupSuccessContainer.classList.remove('open')
    popupSuccessAlertBox.classList.remove('open')
})
popupSuccessAlertBox.addEventListener('click', (e) => {
    e.stopPropagation()
})
popupSuccessContainer.addEventListener('click', () => {
    popupSuccessContainer.classList.remove('open')
    popupSuccessAlertBox.classList.remove('open')
})

// Fail alert box

popupFailOpenBtn.addEventListener('click', () => {
    popupFailContainer.classList.add('open')
    popupFailAlertBox.classList.add('open')
})
popupFailCloseBtn.addEventListener('click', () => {
    popupFailContainer.classList.remove('open')
    popupFailAlertBox.classList.remove('open')
})
popupFailAlertBox.addEventListener('click', (e) => {
    e.stopPropagation()
})
popupFailContainer.addEventListener('click', () => {
    popupFailContainer.classList.remove('open')
    popupFailAlertBox.classList.remove('open')
})