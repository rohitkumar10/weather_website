console.log('Client side javascript file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messOne = document.querySelector('#mess1')
const messTwo = document.querySelector('#mess2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messOne.textContent = 'Loading...'
    messTwo.textContent =  ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messOne.textContent = data.error
        } else{
            messOne.textContent = data.location
            messTwo.textContent = data.forecast
        }
    })
})

})