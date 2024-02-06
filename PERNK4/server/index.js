const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors());
app.use(express.json())






app.listen(8050, ()=>{
    console.log("Server is listening on port 8050")
})