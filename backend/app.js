const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const seedFood=require('./seed');

mongoose.connect('mongodb://127.0.0.1/food-app-noida-apr',{
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin:['http://localhost:3001']
}))
seedFood;
const foodApi = require('./apis/foodApi');


app.use('/api/v1',foodApi);


app.listen(3000,()=>{
  console.log('server started at port 3000');
});