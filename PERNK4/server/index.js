const express = require("express");
const app = express();
const cors = require("cors");
const knex = require("./knex.js");
require("dotenv").config()
const PORT = process.env.PORT; 

app.use(cors());
app.use(express.json())


app.post(`https://midterm-practice-app.onrender.com/newtodo`, async (req,res)=>{
    try{
        const postedContent = req.body;
        const newTask = await knex("midterm").insert({
            "id": postedContent.id,
            "description":postedContent.description 
        }).into("todolist")
        res.status(200).send(req.body)
    } catch (error){
        console.error(error.message)
    }
})

//get all to dos

app.get(`https://midterm-practice-app.onrender.com/alldata`, async (req,res)=>{
    try{
        const allData = await knex("midterm").select("*").from("todolist")
        res.send(allData)
    } catch (err){
        console.log(err)
    }
})

//get by id 

app.get(`https://midterm-practice-app.onrender.com/alldata/:id`, async (req,res)=>{
    try {
        const id = req.params.id;
        const getById = await knex("midterm").select({
            id: 'id',
            description: 'description',
        }).from("todolist").where('id',id);
        res.status(200).send(getById);
        
    } catch (error) {
        console.error(error.message)
    }
})

// update a todo 

app.put(`https://midterm-practice-app.onrender.com/update/:id`, async (req,res)=>{
    try {
        const id = req.params.id;
        const description = req.body.description; 
        const update = await knex("midterm").from("todolist").where('id',id).update({
            description: description
        }).then(()=>{res.send("Update Complete")})
        
    } catch (error) {
        console.error(error.message)
    }
})

// delete 

app.delete(`https://midterm-practice-app.onrender.com/danger/:id`, async(req,res)=>{
    try {
        const id = req.params.id;
        const deleteTask = await knex("midterm").from("todolist").where('id',id).del().
        then(()=>{res.send("Task deleted")})
    } catch (error) {
        console.error(error.message);
    }
})

// updated

app.listen(PORT, ()=>{
    console.log("Connected to server")
})