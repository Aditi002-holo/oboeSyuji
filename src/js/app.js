const subTitieEl = document.querySelector('.sub-title')
const rangeBtnEl = document.querySelectorAll('.range-btn')

// Event Listeners
rangeBtnEl.forEach(function(rangeBtn) {
    rangeBtn.addEventListener('click',function() {
        updateSubTitleContent()

        let initialValue = rangeBtn.dataset.value
        updateInitialValue(initialValue)
        
    })
})

// Functions
function updateSubTitleContent() {
    subTitieEl.textContent = 'how many numbers can you recite?' 
}

function updateInitialValue(initialValue) {
    document.querySelector('.btn-wrapper').style.display = "none"
    document.querySelector('.recite-content').style.display = "initial"
    document.querySelector('.recite-number').innerHTML = initialValue
}
