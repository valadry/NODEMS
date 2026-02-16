// var name = 'vvax';
// var age = 29;
// var hasHobbies = true;

const name = 'vvax';
let age = 29;
const hasHobbies = true;


//Array example
//map is used to iterate through an array
//map method can be used to edit the array
//When an array is a const, it does not change where it points in memories. Think of c++ pointers
const hobbies = ['Sports', 'Cooking']
console.log(hobbies.map(hobby => {
    return 'Hobbies are '+ hobby;
}));



//Similar to the code above but since using pointer function,
//No need to use return and {}
//edit's the array
console.log(hobbies.map(hobby => 'Hobbies are '+ hobby) );


//Object example
const person = {
    name: 'Max',
    age: 29,
    greet() { //this is a method in a object
        console.log('Hi, I am ' + this.name)
    }
};



//Example of adding to array. 
hobbies.push('Programming');
console.log(hobbies);



//Array can be immutable and we copy the contents of an array
//and then add the new element in the array.
//below is an example of copying an array
const copiedArray = hobbies.slice();
console.log(copiedArray);



//Spred operator(...___). It takes all the properties from the existing array. I.E. elements, etc.
//also works on objects
const copiedArray1 = [...hobbies];
console.log(copiedArray);



//Rest operators = (...___). could put many arguements and bundle them up and execute them 
const toArray = (...args) => {
    return args;
};

console.log(toArray(1,2,3,4));

//Destructuring
const printName = (personName) =>{
    console.log(personName.name)
};

printName(person);

//easier method of passing on object through a function is with Destructuring
//it only looks for the property "name" and only pulls out that "name" 
// from the object
const printName1 = ({name, age}) =>{
    console.log(name + " " + age)
};

printName1(person);

const {name1 , age1} = person;
console.log(name1, age1)

//this is a pointer (=>) function 
const summarizeUser = (userName, userAge, userHasHobby) => { 
    return 'Name is '+ userName + ', Age is ' + userAge + ", and user has hobbies: " + userHasHobby;
};

console.log(summuraizeUser(name, age, hasHobbies));

