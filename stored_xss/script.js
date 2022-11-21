const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true})); // body object is now accessible

const fs = require('fs');
const file = require('./data.json');

app.get('/', (req, res) => {
    const newEnroll = req.query.txt1;
    const newName = req.query.txt2;
    file[newEnroll] = newName;

    fs.writeFile('./data.json', JSON.stringify(file), function writeJSON(err) {
        if (err) return console.log(err);
    });
    console.log(file)
    res.render('index', {file});
})

app.listen(port, ()=>{
    console.log('server connected');
})