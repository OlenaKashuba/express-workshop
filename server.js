const express = require('express');
const formidable = require('express-formidable');
const fs = require('fs');

const app = express();



// app.get('/', (req,res) => res.send(`This is main page`));
// app.get('/cyf', (req,res) => res.send(`This is CYF page`));
// app.get('/nodegirls', (req,res) => res.send(`This is NodeGirls page`));



app.use(express.static('public'));
app.use(formidable());

app.post('/create-post', (req,res) => {
	fs.readFile(__dirname + '/data/posts.json', (error,file) => {
		let parsedFile = JSON.parse(file);
		parsedFile[Date.now()] = req.fields.blogpost;
		fs.writeFile(__dirname + '/data/posts.json', JSON.stringify(parsedFile), error => {});
	});
});

app.get('/get-posts', (req,res) => {
	// fs.readFile(__dirname + '/data/posts.json', (err, data) => {
 //  		if (err) throw err;
 // 		 res.send(JSON.parse(data));
	// });
	res.sendFile(__dirname + '/data/posts.json',  (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('data');
		}
	});
});


// fs.readFile(__dirname + '/data/posts.json', (error,file) => {
// 	let parsedFIle = JSON.parse(file);
// 	console.log(parsedFIle);
// });


app.listen(3000, () => console.log(`Server is listening on port 3000! Ready to accept requests!`));
