import cors from 'cors';

const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const HttpError = require('./Models/http-error');


// application configuration
const app = express()
const port=4000

// MiddleWare
app.use(express.json())
app.use(cors())

app.use(bodyParser.json());

app.use('/uploads/images', express.static(path.join('uploads','images')))

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin','*'); 
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})

app.use((req,res,next) => {
    const error = new HttpError('Could not find this route.',404);
    throw error;        
})

//error handling middleware
app.use((error,req,res,next)=>{        // execute if any middleware infront of it yields an error

    if(req.file){
      fs.unlink(req.file.path, (err) => {       //to remove a file -- i.e no image is uploaded until a new user created successfully
        console.log(err);
      })
    }

    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || "An unknown error occured!"})
});    


mongoose
.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@chat.5ojvxi4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=chat`)
.then(() => {
    app.listen(process.env.PORT || 4000);
    console.log("MongoDB Connected Successfully.")
})
.catch(err => {
    console.log(err);
});