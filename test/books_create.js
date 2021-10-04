const fetch = require('node-fetch')

const request_create = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "name": "la torre oscura",
        "publish_date": "2000-12-11",
        "disponible": true
    }),
    redirect: 'follow'
};

fetch("http://localhost:5000/books/create", request_create)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));