// Here we are iterating our map with different aspects
const people = [
    {
        name: 'abc',
        age: 20,
        position: 'developer'
    },
    {
        name: 'xyz',
        age: 22,
        position: 'backend'
    },
    {
        name: 'pqr',
        age: 19,
        position: 'frontend'
    },
    {
        name: 'thish',
        age: 19,
        position: 'frontend'
    },

];
/*
This will return the new array and it also doesn't change the size of
original array (unlike filter) and it 
uses the values from original array when making the new one 
*/

const ages = people.map((person)=>{
    // here person is showing our whole map, but we are returning just age
    // return person.age;
    return person.name;
});
// console.log(ages)
// we can also write the above thing as 
const getAges = (person) => person.age*2;
const agess = people.map(getAges);
// console.log(agess);

// we can also create new object like this 
const newPr = people.map((item)=>
{
    return {
        firstName:item.name.toUpperCase(),
        oldage:item.age*10
    };
});
// console.log(newPr)

// if we want to return only the unique values then we can return the values
// by returning it as SET object
const post = new Set(people.map((pos)=>pos.position));
// But the above one will return SET object 
console.log(post)
// If we want to convert the SET object to array, we need to do like this
const pot = [...new Set(people.map((pos)=>pos.position))];
console.log(pot);
