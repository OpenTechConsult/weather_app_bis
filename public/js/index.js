fetch('http://localhost:3000/weather?address=ijjskjks')
.then(response => response.json())
.then(responseData => console.log(responseData)).catch((error) => console.log('Error: ' + error));