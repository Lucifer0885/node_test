const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname,"public")));

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.set('announcements', path.join(__dirname,'views/announcements'));

app.get('/', (req,res) => res.render('index'));

app.get('/announcement', (req,res) => res.render('announcement'));

app.get('/video', (req,res) => res.render('video'));

app.get('/image', (req,res) => res.render('image'));

app.get('/contactUs', (req,res) => res.render('contactUs'));

app.get('/announcement1', (req,res) => res.render('announcements/announcement1'));


app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

