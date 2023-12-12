const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));


app.get('/login', (req,res,next) => {
    res.send(`<form onSubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login" method="POST"><input type="text" id="username" placeholder="username" name="username"><button>login</button></form>`)
});

app.post('/login', (req,res,next) => {
    res.redirect('/');
});

app.get('/', (req,res) => {

    fs.readFile('messege.txt', (err,data) => {
        if(err){
            data = 'No chat exist!'
        }

        res.send(
            `${data}<form onSubmit="document.getElementById('username').value = localStorage.getItem('username')" action="/" method="POST">
            <input type="text" id="messege" name="messege">
            <input type="hidden" id="username" name="username">
            <button>Send</button>
            </form>`)
        });
    })

    

app.post('/', (req,res) => {
    // console.log(req.data.messege);
    // console.log(req.data.username);

    fs.writeFile('messege.txt', `${req.body.username} : ${req.body.messege}`, {flag: 'a'}, (err) => {
        err? console.log(err) : res.redirect('/');
    });
});


app.listen(5000);

