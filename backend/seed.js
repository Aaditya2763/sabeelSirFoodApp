const mongoose = require('mongoose');
const Food = require('./models/Food');

// mongoose.connect('mongodb://localhost:27017/food-app-noida-apr')
//     .then(() => console.log("Connected"))
//     .catch(() => console.log('Error!!!!'));


const DUMMY_FOODS = [
    {
        name: 'Burger',
        desc: 'Extra Cheese and Spice',
        price: 10
    },
    {
        name: 'Panner Tikka',
        desc: 'Extra Cheese and Spice',
        price: 12
    },
    {
        name: 'Pizza',
        desc: 'Extra Cheese and Spice',
        price: 8
    },
    {
        name: 'Noodles',
        desc: 'Extra Cheese and Spice',
        price: 9
    },
    {
        name: 'Burger',
        desc: 'Extra Cheese and Spice',
        price: 7
    }
];



const seedFood = async () => {
    await Food.deleteMany({});
    // console.log("hello");
    await Food.insertMany(DUMMY_FOODS);
    console.log("FOOD SEEDED");
}

 module.exports =seedFood();