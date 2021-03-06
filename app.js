const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/', require('./routes'))

app.listen(3000, () => {
    console.log('App is listening on PORT 3000')
})