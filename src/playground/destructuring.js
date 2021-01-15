// Object destructuring

// const person = {
//     name: 'Obate',
//     age: 26,
//     location: {
//         city: 'Onitsha',
//         temp: 92
//     }
// };
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`)

// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} in ${city}`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name:publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


// Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennysylvania', '191147'];
const [ , , state = 'New York'] = address;
console.log(`You are in ${state}`)

const item = ['Coffee (hot)', '$2.00', '$12.00', '$32.00'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);