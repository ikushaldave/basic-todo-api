var express = require('express');
var router = express.Router();
const Todo = require("../model/Todo");

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const todos = await Todo.find({});
    res.type("json").send({ todos, noOfTodos: todos.length });
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
  const _id = req.params.id;
  console.log(_id);
	try {
    const isTodoAvailable = await Todo.findOne({_id});
    console.log(isTodoAvailable);
		if (!isTodoAvailable) throw new Error("Can't update todo maybe the looking todo is not available");
		const todo = await Todo.findByIdAndUpdate(_id, {...req.body.todo});
		res.type("json").redirect("/api/todo");
  } catch (error) {
		return next(error.message);
	}
});

/* DELETE /api/todo/:id */

router.delete("/:id", async (req, res, next) => {
  const _id = req.params.id;
  try {
    const isTodoAvailable = await Todo.findOne({_id});
    if(!isTodoAvailable) throw new Error("Can't update todo maybe the looking todo is not available");
    const todo = await Todo.findByIdAndDelete(_id);
    res.type("json").redirect("/api/todo");
  } catch (error) {
    return next(error.message);
  }
})

module.exports = router;
