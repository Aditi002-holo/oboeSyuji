const subTitieEl = document.querySelector('.sub-title')
const rangeBtnEl = document.querySelectorAll('.range-btn')

// Event Listeners
rangeBtnEl.forEach(function(rangeBtn) {
    rangeBtn.addEventListener('click',function() {
        updateSubTitleContent()

        let lowerBoundValue = rangeBtn.dataset.lower
        let upperBoundValue = rangeBtn.dataset.upper
        updateInitialValue(lowerBoundValue, upperBoundValue)
        
    })
})

// Functions
function updateSubTitleContent() {
    subTitieEl.textContent = 'how many numbers can you recite?' 
}

function updateInitialValue(lowerBoundValue, upperBoundValue) {
    document.querySelector('.btn-wrapper').style.display = "none"
    document.querySelector('.recite-content').style.display = "initial"

    const reciteNumberEl = document.querySelector('.recite-number')
    reciteNumberEl.textContent = lowerBoundValue

    reciteNumberEl.addEventListener('click', function() {
        let difference = (upperBoundValue - lowerBoundValue) + 1
        let randomNumbers = Math.floor(Math.random() * difference) + Number(lowerBoundValue)
        reciteNumberEl.textContent = randomNumbers
    })
}
