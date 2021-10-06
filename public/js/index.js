

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    if(location.length == 0) {
        console.log('Please provide a location');
    }
    fetch(`http://localhost:3000/weather?address=${location}`)
        .then(response => response.json())
        .then(responseData => console.log(responseData)).catch((error) => console.log('Error: ' + error));
});

