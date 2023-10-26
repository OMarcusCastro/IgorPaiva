// function multiplica(a,b){
//     console.log(a*b);
//     return a*b
// }
// multiplica(5,3)

// let r = multiplica(5,3)
// console.log(r)

// BMI Calculator
function calculateBMI(weight, height) {
    // Convert height from centimeters to meters
    height = height / 100;
    
    // Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
    const bmi = weight / (height * height);
    
    return bmi;
  }
  
  // Diet Suggestion
