const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message_one');
const messageTwo = document.querySelector('#message_two');

messageOne.textContent = '';

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    if(location.length == 0) {
        console.log('Please provide a location');
    }
    messageOne.textContent = 'Loading ...';
    messageTwo.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`)
        .then((response) => {
            response.json().then((data) => {
                if(data.error) {
                    messageOne.textContent = data.error;
                } else {
                    messageOne.textContent = data.location;
                    messageTwo.textContent = data.temperature;
                }
            });
        });
});
