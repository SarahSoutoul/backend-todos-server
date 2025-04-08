// Main server logic
// app -> routes -> controllers -> model 
const express = require("express");
const cors = require('cors');
const app = express();
const todosRouter = require("./routes/todos");

// localhost:3000/todos
app.use(cors())
// parsing the body for the POST and PATCH requests
app.use(express.json())
// middlewares
// Setting up our express routes 
app.use("/todos", todosRouter);


module.exports = app;