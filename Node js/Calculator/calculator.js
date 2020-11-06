const express = require('express');
const bodyparser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyparser.urlencoded({ extended:true}));


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.post('/', (req, res) => {
 var num1 = Number(req.body.num1);
 var num2 = Number(req.body.num2);

 var result = num1 + num2;

res.send("The result of the calculation is " + result);
});

app.get('/bmiCalculator.html', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html');
});


app.post('/bmiCalculator.html', (req, res) => {
 var weight = parseFloat(req.body.weight);
 var height = parseFloat() req.body.height);

 var bmi= weight / (height * height);

res.send("Your BMI is" + bmi)

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
