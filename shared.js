var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var selectPlanButton = document.querySelectorAll('.plan button')
var noButton = document.querySelector(".modal__action--negative")

for (let i = 0; i < selectPlanButton.length;i++) {
    selectPlanButton[i].addEventListener('click', function() {
        modal.style.display = "none"
        backdrop.style.display = "none"
    })
}

backdrop.addEventListener('click', function() {
    modal.style.display = "none"
    backdrop.style.display = "none"
})

noButton.addEventListener('click', function() {
    modal.style.display = "none"
    backdrop.style.display = "none"
})