const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

function calculateSalary(hoursworked, hourlyRate){
    const overtimerate = 1.5;
    const regularHours = 40;
    let overtimeHours =0;
    let regularpay= 0;
    let overtimePay = 0;

    if(hoursworked>regularHours){
        overtimeHour = hoursworked -regularHours;
        regularpay= regularHours*hourlyRate;
        overtimePay= overtimeHours*(hourlyRate*overtimerate);
    }
    else{
        regularpay = hoursworked*hourlyRate;
    }
    return regularpay+overtimePay
}
module.exports = calculateSalary;        

// function getEmployeeSalary(){
//     rl.question('Enter hours worked: ', (hoursworked) => {
//         rl.question('Enter hourly rate: ', (hourlyRate) => {
//             const salary = calculateSalary(parseFloat(hoursworked),parseFloat(hourlyRate))
//             console.log(`Employee salary : rs.${salary.toFixed(2)}`);
//             rl.close();
//           });
        
//       });
// }

// start the program
// getEmployeeSalary();