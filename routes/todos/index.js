const express = require("express");
const router = express.Router();
const { index, random, show, create, update } = require("../../controllers/todos.js");

// /todos/random

// Allows the client to retrieve all of the todos - GET
router.get("/", index)

// Allows the client to retrieve a random todo - GET
router.get("/random", random)

// Allows the client to retrieve a specific todo - GET
router.get("/:id", show)

// Allows the client to add a new todo to the data - POST
router.post("/", create)

// Allows the client to update the text of an existing todo - PATCH/PUT
// PATCH -> allow you to update certain parts of the element 
// PUT -> allow you to update the entire element (replace the existing element with your updated data)
router.patch("/:id", update)


// index -> all of the data -> /todos, /fruits... 
// show -> retrieve one specific element -> /todos/:id
// create -> add new data -> /todos, /fruits...
// update -> update one specific element -> /todos/:id
// delete -> delete one specific element -> /todos/:id


module.exports = router;
