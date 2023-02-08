const express = require('express');

const app = express();
const port = 3000;

const userRouter = require('./src/routers/auth');

app.use(express.json());
app.use('/', userRouter);

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
});