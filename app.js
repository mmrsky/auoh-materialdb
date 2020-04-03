const express = require('express');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');

const app = express();
const body_parser = require('body-parser');
const material_controller = require('./materialcontroller');

// npm install express
// npm install nodemon --save-dev
// npm install mongoose
// npm run start-dev

app.use(body_parser.json());
app.use(body_parser.urlencoded( {
    extended: true
}));

app.use((req, res, next)=> {
    console.log(req.method, ' ', req.path);
    next();
}); // get api materials

app.post("/api/material", material_controller.api_post_material);
// Restful api 
//CRUD operations


//CREATE
// api.domain.com/materials
// READ
app.get("/api/material", material_controller.api_get_materials);
// 

//wejT1WbPfK3kQiPV

const database_uri = "mongodb+srv://server:wejT1WbPfK3kQiPV@cluster0-wizbr.mongodb.net/materialdb?retryWrites=true&w=majority";

mongoose.connect(database_uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false 
}).then( ()=>{
    console.log('database connected');
    app.listen(port);
}).catch((err)=>{
    console.log(err);
});


