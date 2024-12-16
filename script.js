const buttons = document.querySelectorAll('.rating')
const subButton = document.querySelector('form button') 
const card = document.querySelector('.card')
const tCard = document.querySelector('.thanks-card')
const tCardText = document.querySelector('.selection')
let rating = null

const getRating = () =>{
    buttons.forEach(button =>{
        button.addEventListener('click', () =>{
            buttons.forEach(btn => btn.classList.remove("active"))
            rating = button.getAttribute('value')
            button.classList.add('active')
        })
    }) 
}

const submit = () => {
    subButton.addEventListener('click', (event) => { 
        event.preventDefault()

        if(rating != null){
            card.style.visibility = 'hidden'
            tCard.style.visibility = 'visible'
            tCardText.textContent = `You selected ${rating} out of 5`
        } else {
            alert('Select a rating please!')
        }
    })
}


getRating()

submit()
