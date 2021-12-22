// Get the date that opens the modal
let dateEl = document.querySelectorAll('.date')

// Get the modal
const modal = document.getElementById('myModal')
const span = document.getElementsByClassName('close')[0]

// Get the modal date input
let modalDateEl = document.getElementById('modal-date-input')

// Get today's date
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this)
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
})

// add event listener to each date
dateEl.forEach(function (date) {
  // When the user clicks on the date, open the modal
  date.addEventListener('click', function (e) {
    let clickedDate = e.target.innerText
    console.log(clickedDate)

    modal.style.display = 'block'

    // set default date in modal form to today
    // modalDateEl.value = new Date().toDateInputValue()

    modalDateEl.value = new Date().toDateInputValue()
  })
})

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}
