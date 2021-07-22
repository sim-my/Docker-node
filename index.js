const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

app.use('/',(req,res,next) => {
    res.send('<p>Let\'s dockerize!!</p>')
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
