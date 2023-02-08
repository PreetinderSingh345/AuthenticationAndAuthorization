const express = require('express');

const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('We have a request at the root route');
})

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
})