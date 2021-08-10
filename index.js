const express = require('express');
const path = require('path');
const todoController = require('./controllers/todoController');

const app = express();
app.set('view enginer', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

todoController(app);

app.listen(3000, () => {
    console.log('On 3000');
});

