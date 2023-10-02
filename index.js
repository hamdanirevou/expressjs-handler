//import library express.js
const express = require('express');
const app = express();//call function expresjs
const bodyParser =require('body-parser')
const cors = require('cors')


app.use(cors())
app.use(bodyParser.json())//for parsing application/json

//create http method get for api customer
app.get('/api/customers', (req, res) =>{
    res.json({
        message: 'get data success',
        data: [
            {
                name: 'Hamdani',
                emai: 'hamdanie100103@gmail.com',
                role: 'Software Engineering'
            }, 
            {
                name: 'Syifa Putri Maharani',
                emai: 'syifaputri@gmail.com',
                role: 'Nursing'
            },
            {
                name: 'Elok intan Restarina',
                emai: 'elokintan@gmail.com',
                role: 'Agribisnis'
            }
        ]
    })
})

app.post('/api/customers',(req, res) =>{
    const {name, email, role} =req.body;

    // res.send(`thank you, ${name} with email :${email} and role :${role} we have received your submission`);
    res.json({
        message: "create data customers berhasil",
        data: {
            name: name,
            email: email,
            role: role
        }
    })
})

app.get('/api/customers/:id', (req, res) =>{
    const customerID = req.params.id;
    res.json({
        message: 'get data success',
        data: {
            customerID: customerID,
            name: 'Hamdani',
            emai: 'hamdanie100103@gmail.com',
            role: 'Software Engineering'
        }
    })
})

const port = 3000;  //define variable port on 3000
app.listen(port, () =>{
    console.log(`App is listening on port ${port}`);
})
