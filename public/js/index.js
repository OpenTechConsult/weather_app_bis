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

    fetch(`/weather?address=${location}`)
        .then((response) => {
            response.json().then((data) => {
                if(data.error) {
                    messageOne.textContent = data.error;
                } else {
                    messageOne.textContent = `Here in ${data.location}, the weather is ${data.description}. The temperature is ${data.temperature} but it feels like ${data.feelslike} and the humidity is ${data.humidity}`;
                }
            });
        });
});
