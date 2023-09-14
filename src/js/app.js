// how many numbers can you recite?
const subTitieEl = document.querySelector('.sub-title')
const rangeBtnEl = document.querySelectorAll('.range-btn')

rangeBtnEl.forEach(function(rangeBtn) {
    rangeBtn.addEventListener('click',function() {
        subTitieEl.textContent = 'how many numbers can you recite?'  
        let initialValue = rangeBtn.dataset.value
        console.log(initialValue)

        document.querySelector('.btn-wrapper').style.display = "none"

        document.querySelector('.recite-content').style.display = "initial"
        document.querySelector('.recite-number').innerHTML = initialValue
    })
})
// rangeBtnEl.addEventListener('click', function() {
//     subTitieEl.textContent = 'how many numbers can you recite?'
//     console.log('change success')
// })

