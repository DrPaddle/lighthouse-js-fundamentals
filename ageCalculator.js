function ageCalculator(name,yearOfBirth,currentYear){
  var currentAge;
  currentAge = currentYear - yearOfBirth;
  return (name + " is " + currentAge + " years old.")
}

console.log(ageCalculator("Shivam",1996,2019));