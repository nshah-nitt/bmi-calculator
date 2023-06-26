const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html")
})

app.post("/bmiCalculator",(req,res)=>{
    var a = Number(req.body.weight);
    var b = Number(req.body.height)/100;
    var c = (a / Math.pow(b,2)).toFixed(2);
    res.send(`Your BMI is ${c}`);
})

app.listen(3000,()=>{
    console.log(`port is active in ${3000}`);
})