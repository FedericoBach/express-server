const fetch = require('node-fetch')

const request_update = {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "id": 18,
        "name": "La torre oscura",
        "publish_date": "2005-12-11",
        "disponible": true
    }),
    redirect: 'follow'
};

fetch("http://localhost:5000/books/update", request_update)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));