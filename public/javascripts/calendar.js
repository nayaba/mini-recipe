// hover over date
let dateEl = document.querySelectorAll('.date');

// add event listener to each date
dateEl.forEach(function (date) {
    date.addEventListener('click', function (e) {
        console.log(e)
        
    });
})
