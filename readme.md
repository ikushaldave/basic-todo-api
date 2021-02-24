# Basic Todo API

This is simple basic todo api can be used to `GET`, `POST`, `UPDATE`, `DELETE` a todo.

> Note - Don't pollute the API by posting some test data (like testingggg etc).

BASE URL = `https://ac-todo-api.herokuapp.com/api/todo`

### Endpoints

1. `GET /api/todo`

To get all todo list

> return [todos](returns)

2. `POST /api/todo`

The request body should be in following format (isCompleted default to false if you want to true add isCompleted to true)

```js
{
  {
    "todo": {
      "title": "abc",
      "isCompleted": true
    }
  }
}
```

> return [todos](#returns)

Note - title should be minimum of length 2 and is required


3. `PUT /api/todo/:id`

To update a todo it required a id of todo you want to update

e.g - `/api/todo/60360d088c1327d639a525d1`

and take similar format as post todo which you want to update

```js
{
  {
    "todo": {
      "title": "qwerty"
    }
  }
}
```

> return [todos](#returns)

4. `DELETE /api/todo/:id`

To delete a todo it required a id of todo you want to delete

e.g - `/api/todo/60360d088c1327d639a525d1`

> return [todos](#returns)

### <h3 id="returns">Response</h3>

The following response(object containing available todo with total todo) will return on above method:

```js
{
  "todos": [
    {
      "isCompleted": false,
      "_id": "6036099201c9a39658f33787",
      "title": "Learn Node",
      "createdAt": "2021-02-24T08:08:50.687Z",
      "updatedAt": "2021-02-24T08:08:50.687Z",
      "__v": 0
    },
    {
      "isCompleted": false,
      "_id": "60360d088c1327d639a525d1",
      "title": "Learn Express",
      "createdAt": "2021-02-24T08:23:36.465Z",
      "updatedAt": "2021-02-24T08:25:09.868Z",
      "__v": 0
    }
  ],
  "noOfTodos": 2
}
```