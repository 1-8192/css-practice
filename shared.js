var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var selectPlanButton = document.querySelectorAll('.plan button')

for (let i = 0; i < selectPlanButton.length;i++) {
    selectPlanButton[i].addEventListener('click', function() {
        modal.getElementsByClassName.display = "none"
        backdrop.getElementsByClassName.display = "none";
    })
}
