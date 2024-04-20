// Given an array of objects, each object representing a person with a name and age property, write a function that 
// returns a new array containing the names of all people who are 18 years old or older.

const people = [
    {name:'Alice',age: 17},
    {name:'Eunice',age: 22},
    {name:'Charlie',age: 14},
    {name:'Max',age: 19},
]

function names(ages){
return people.filter(l => l.age >= 18).map(l =>l.name) 
};
console.log(names(people));


// Write a function that takes an array of objects, where each object represents a product with a name, price, and category property.
//  The function should return an object that groups the products by their categories, with the category names as keys and the 
//  arrays of products as values. 
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
  { name: 'Shoes', price: 60, category: 'Clothing' },
]
function itemsOfObjects(){
  var ObjectConstructor = Object.groupBy( products,item =>{
      return item.category
  })
  console.log(ObjectConstructor);
}

itemsOfObjects()


//   3
// Given an array of objects, where each object represents a student with a name and an array 
// of scores, write a function that returns a new array containing the names of all students whose
//  average score is greater than or equal to 85.

function averageScores(){
    const students = [
      { name: 'John', scores: [90, 80, 85] },
      { name: 'Jane', scores: [95, 92, 88] },
      { name: 'Jim', scores: [70, 80, 75] },
      { name: 'Jill', scores: [85, 90, 84] },
    ];
    let emptyArray = [];
    students.forEach(student => {
      let addition = student.scores.reduce((j,k) => j+k);
      const average = addition/student.scores.length;
      if(average >= 85){
        emptyArray.push(student.name)
      }
    });
    console.log(emptyArray);
    return emptyArray
  }
  averageScores();

// // // Given an object representing a car, with properties for the make, model, year, 
// // and a method to display the car's information, write a function that takes the car 
// // object and adds a new method to the object called age. The age method should return the 
// // current age of the car based on the current year and the car's year property.
const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInformation: function() {
     console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};

car.age = 14;
console.log({car});

  function addAge (car) {
    let year = new Date().getFullYear();
    car.age = (year - car.year);
    return car
   }
    console.log(addAge(car));
    car.displayInformation();














// const car = {
//     make: 'Toyota',
//     model: 'Hilux',
//     year: 2000,
//     age:function(){
//         let years = newDate().getFullYear();
//         let ageOfCar = years - car.year;
//         return ageOfCar
//     }
// };
// console.log(car.age);