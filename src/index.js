function calculate() {
  // getting the value of the age
  let ages = document.getElementById("age").value;

  // getting the value of the weight
  let weights = document.getElementById("weight").value;

  // a text variable to display the result
  let text;

  if (isNaN(ages) || ages <= 0 || ages > 20 || isNaN(weights) || weights <= 0) {
    text = "Input Data is wrong! Please input Correct Data";
  } 
  else {
      // logic for normal weight
    if (
      (ages >= 5 && ages <= 7 && weights >= 15 && weights <= 20) ||
      (ages >= 8 && ages <= 10 && weights >= 21 && weights <= 25) ||
      (ages >= 11 && ages <= 15 && weights >= 26 && weights <= 30) ||
      (ages >= 16 && ages <= 20 && weights >= 31 && weights <= 40)
    ) 
    {
      text = "Normal Weight";
    } 
    // logic for underweight
    else if (
      (ages >= 5 && ages <= 7 && weights < 15) ||
      (ages >= 8 && ages <= 10 && weights < 21) ||
      (ages >= 11 && ages <= 15 && weights < 26) ||
      (ages >= 16 && ages <= 20 && weights < 31)
    ) 
    {
      text = "Underweight";
    } 
    else {
      text = "Overweight";
    }
  }
  // changing the text of the result id which is coming from index.html
  document.getElementById("result").innerHTML = text;
}
