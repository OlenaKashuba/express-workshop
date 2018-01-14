const express = require('express');
const formidable = require('express-formidable');
const app = express();



// app.get('/', (req,res) => res.send(`This is main page`));
// app.get('/cyf', (req,res) => res.send(`This is CYF page`));
// app.get('/nodegirls', (req,res) => res.send(`This is NodeGirls page`));

app.use(express.static('public'));
app.use(formidable());

app.post('/create-post', (req,res) => console.log(req.fields));

app.listen(3000, () => console.log(`Server is listening on port 3000! Ready to accept requests!`));
