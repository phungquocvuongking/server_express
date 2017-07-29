const express = require('express');
const caculus = require('./Caculus');

const app = express();

//template engine
app.set('view engine','ejs');
app.set('views','./views');

// httm method get post put delete
app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/home',(req,res)=>{
    res.send("homepage");
});

app.get('/hello/:name/:age',(req,res)=>{
    // const name = req.params.name;
    // const age = req.params.age;

    const { name, age} = req.params;
    res.send(`Xin chao toi la ${name}, ${age} tuoi`);
})

app.get('/tinh/:pheptinh/:a/:b',(req,res)=>{
    // const pheptinh = req.params.pheptinh;
    // const a = req.params.a;
    // const b = req.params.b;

    const {pheptinh,a,b} = req.params;

    console.log(pheptinh,a,b);
    let tinhtoan = new caculus(a,b,pheptinh)
    res.send(tinhtoan.getResultString());
});

app.get('*',(req,res)=>{
    res.send('khong tim thay duong dan')
});

app.listen(3001,()=> console.log("Server is runing..."));

