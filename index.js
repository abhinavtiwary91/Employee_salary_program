const express = require('express');
const bodyParser = require('body-parser');
const calculateSalary = require('./EMS');

const app = express();
const port = 5500;

// Serve static files from the "public" directory (e.g., styles.css)
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('', (req, res) => {
  res.send(`
    <html>
    <head>
    <style>
    body{
     align-items: center;
    justify-content: center;
    margin:auto;
    margin-top: 40px;
    margin-bottom: 200px;
    border: 3px solid red;
    padding: 50px;
    background-color:red;
    width:max-content;
    
    }
    .head{
        text-shadow: 0cap;
        color: brown;

    </style> 
    </head>
    <body>
    <div class="head">
    <h1 class="heading">welcome to Employee salary Program</h1>
        <a href="/about">click here to calculate Employee salary</a>
        </div>
    </body>
    </html>
  `);
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
  const name = req.body.name;
  const Designation = req.body.Designation;
  const hoursWorked = parseFloat(req.body.hoursWorked);
  const hourlyRate = parseFloat(req.body.hourlyRate);

  const salary = calculateSalary(hoursWorked, hourlyRate);

  res.send(`
    <html>
    <body>
        <h1>Salary Result</h1>
        <p>Name = ${name}, Designation = ${Designation}, Employee salary: $${salary.toFixed(2)}</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
