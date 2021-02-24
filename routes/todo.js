var express = require('express');
var router = express.Router();
const Todo = require("../model/Todo");
const dummyTodo = require("../data/data.json");

/* GET users listing. */

router.get('/', async (req, res, next) => {
  try {
    let allTodo = await Todo.find({});
    if (!allTodo.length) {
      allTodo = await addDummyTodo();
    }
    res.type("json").send({ todos: allTodo, noOfTodos: allTodo.length });
  } catch (error) {
    return next(error);
  }
});

/* POST /api/todo */

router.post("/", async (req, res, next) => {
  try {
    const todo = await Todo.create({ ...req.body.todo })
    res.type("json").redirect("/api/todo");
  } catch (error) {
    return next("title is required and minlength of title should be 2 and blank space on starting and end not count")
  }
})

/* PUT /api/todo/:id */

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
	try {
    const isTodoAvailable = await Todo.findById(id);
		if (!isTodoAvailable) throw new Error();
		const todo = await Todo.findByIdAndUpdate(id, {...req.body.todo});
		res.type("json").redirect("/api/todo");
  } catch (error) {
		return next("Can't update todo maybe the looking todo is not available or id is not valid");
	}
});

/* DELETE /api/todo/:id */

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const isTodoAvailable = await Todo.findById(id);
    if(!isTodoAvailable) throw new Error();
    const todo = await Todo.findByIdAndDelete(id);
    res.type("json").redirect("/api/todo");
  } catch (error) {
    return next("Can't update todo maybe the looking todo is not available or id is not valid");
  }
})

async function addDummyTodo (len) {
  const allTodo = await Todo.insertMany(dummyTodo);
  return allTodo;
}

module.exports = router;
