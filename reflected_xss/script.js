const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true})); // body object is now accessible

animalInfo = {
    dog: "Dogs can sniff at the same time as breathing",
    cat: "Cats are believed to be the only mammals who don't taste sweetness.",
    mouse: "They're Good Jumpers, Climbers & Swimmers"
}

app.get('/', (req, res) => {
    const animal = req.query.txt1;
    info = animalInfo[animal];
    res.render('index', {animal, info});
})

app.listen(port, ()=>{
    console.log('server connected');
})