// /* Вешаем обработчик клика на кнопку */
let clickToHide1 = document.querySelector('#click-to-hide-1')
clickToHide1.addEventListener("click", hideVisibleElem1)
function hideVisibleElem1() {
    let answer = document.querySelector('.answer')
    answer.classList.toggle("hide-element")

    if (answer.classList.contains("hide-element")) {
        clickToHide1.value = 'Показать ответ'
    } else {
        clickToHide1.value = 'Скрыть ответ'
    }
// // 2

}let clickToHide2 = document.querySelector('#click-to-hide-2')
clickToHide2.addEventListener("click", hideVisibleElem2)

function hideVisibleElem2() {
    let answer2 = document.querySelector('.answer2')
    answer2.classList.toggle("hide-element")

    if (answer2.classList.contains("hide-element")){
        clickToHide2.value = 'Показать ответ'
    } else {
        clickToHide2.value = 'Скрыть ответ'
    }

// // 3

}let clickToHide3 = document.querySelector('#click-to-hide-3')
clickToHide3.addEventListener("click", hideVisibleElem3)

function hideVisibleElem3() {
    let answer3 = document.querySelector('.answer3')
    answer3.classList.toggle("hide-element")

    if (answer3.classList.contains("hide-element")){
        clickToHide3.value = 'Показать ответ'
    } else {
        clickToHide3.value = 'Скрыть ответ'
    }

// // 4

}
let clickToHide4 = document.querySelector('#click-to-hide-4')
clickToHide4.addEventListener("click", hideVisibleElem4)

function hideVisibleElem4() {
    let answer4 = document.querySelector('.answer4')
    answer4.classList.toggle("hide-element")

    if (answer4.classList.contains("hide-element")){
        clickToHide4.value = 'Показать ответ'
    } else {
        clickToHide4.value = 'Скрыть ответ'
    }
}
let clickToHide5 = document.querySelector('#click-to-hide-5')
clickToHide5.addEventListener("click", hideVisibleElem5)

function hideVisibleElem5() {
    let answer5 = document.querySelector('.answer5')
    answer5.classList.toggle("hide-element")

    if (answer5.classList.contains("hide-element")){
        clickToHide5.value = 'Показать ответ'
    } else {
        clickToHide5.value = 'Скрыть ответ'
    }
}
let clickToHide6 = document.querySelector('#click-to-hide-6')
clickToHide6.addEventListener("click", hideVisibleElem6)

function hideVisibleElem6() {
    let answer6 = document.querySelector('.answer6')
    answer6.classList.toggle("hide-element")

    if (answer6.classList.contains("hide-element")){
        clickToHide6.value = 'Показать ответ'
    } else {
        clickToHide6.value = 'Скрыть ответ'
    }
}