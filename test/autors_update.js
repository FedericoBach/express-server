const fetch = require('node-fetch')

const request_create = {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "id": process.env.ID,
        "name": "Leandro",
        "lastname": "Bustos",
        "birth_date": "2000-12-11",
        "alive": true
    }),
    redirect: 'follow'
};

fetch("http://localhost:5000/autors/update", request_create)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));