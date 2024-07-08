const names = ["suraj","sunil","deshmukh","vipul"]// JSON array

const people = {                      //JSON object
    "name": "suraj",
    "Age": 28,
    "place": "Thane"
   } 


// JSON.stringify = Convert JavaScript object to a JSON string.
// JSON.parse = Convert a JSON string to a JavaScript object.
const jsonPeople = JSON.stringify(people);
const jsPeople = JSON.parse(people);
console.log(jsonPeople);