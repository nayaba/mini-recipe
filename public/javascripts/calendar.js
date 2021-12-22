// Get the date that opens the modal
let dateEl = document.querySelectorAll('.date')

// Get the modal
const modal = document.getElementById('myModal')
const span = document.getElementsByClassName("close")[0]

// add event listener to each date
dateEl.forEach(function (date) {
    
    // When the user clicks on the date, open the modal
  date.addEventListener('click', function (e) {
    let clickedDate = e.target.innerText
    console.log(clickedDate)

        modal.style.display = 'block'
      // When the user clicks on <span> (x), close the modal
      
  })
})

span.onclick = function () {
  modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}