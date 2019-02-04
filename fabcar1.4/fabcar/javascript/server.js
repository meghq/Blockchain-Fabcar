const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const car = require('./controller.js');



var app = express();


app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}))


app.use('/tuna',car);


// app.get('/tuna/queryAllCars',(req,res)=>{
// 	console.log("get all data");
// 	res.send("hiiiiiiiiiiiiiii");
// })

const port = process.env.PORT || 8000

app.listen(port,(req,res)=>{
	console.log('running on port' + 8000)
})