const express = require("express");
const app = express();
const cors = require("cors")
const knex = require("./knex")

app.use(cors());
app.use(express.json())


app.post("/newtodo", async (req,res)=>{
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

//get all do do 

app.get("/alldata", async (req,res)=>{
    try{
        const allData = await knex("midterm").select("*").from("todolist")
        res.send(allData)
    } catch (err){
        console.log(err)
    }
})

//get by id 

app.get("/alldata/:id", async (req,res)=>{
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

app.put("/update/:id", async (req,res)=>{
    try {
        const id = req.params.id;
        const description = req.body.description; 
        const update = await knex("midterm").where('id',id).update({
            description: description
        }).then(()=>{res.send("Update Complete")})
        
    } catch (error) {
        console.error(error.message)
    }
})

// delete 

app.delete("/danger/:id", async(req,res)=>{
    try {
        const id = req.params.id;
        const deleteTask = await knex("midterm").where('id',id).del().
        then(()=>{res.send("Task deleted")})
    } catch (error) {
        console.error(error.message);
    }
})



app.listen(8050, ()=>{
    console.log("Server is listening on port 8050")
})