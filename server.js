const express = require('express');
const myFunction = require('./poorva.js');
const app = express();
const port = process.env.PORT_NUMBER || 80; // port number is not pre given, process.env is the environment it is running.


app.use(express.static('./public'));


app.get('/', myFunction);
//app.get('/', (req, res) => res.send('Hello From Express!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))