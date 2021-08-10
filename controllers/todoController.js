const bodyParser = require('body-parser');
const urlencodedparser = bodyParser.urlencoded({ extended: false });

let data = [{ item: "Get milk" }, { item: "Get Vaccine" }, { item: "Complete Project" }];

module.exports = app => {

    app.get('/todo', (req, res) => {
        res.render('todo', { todos: data });
    });

    app.post('/todo', urlencodedparser, (req, res) => {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', (req, res) => {
        let item = req.params.item;
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });


};