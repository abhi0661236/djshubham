require('dotenv').config()

const express= require('express');
const app= express();
const cors= require('cors');
const sequelize = require('../src/configs/db');
const userController= require('../src/controller/user.controller');
const {login,register}= require("../src/controller/auth.conntroller")
const {uploadSingle, uploadMultiple} = require("./middleware/uploadmiddlerware/upload")

const path= require('path')
app.use(express.json());
app.use(cors());
app.use('/uploads',express.static(path.join(__dirname, 'uploads'))) //!making upload folder public for assest



app.use('/users',userController);
app.post('/login',login);
app.post('/register',register);




// admin controller



const PORT=process.env.PORT || 8000 ;
app.listen(PORT,async()=>{
    try {
        await sequelize.authenticate();
        console.log(`listening port number ${PORT}`)
        
    } catch (error) {
        console.log('error while connecting to db', error.message)
    }
})

