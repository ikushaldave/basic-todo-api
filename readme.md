# Basic Todo API

This is simple basic todo api can be used to `GET`, `POST`, `UPDATE`, `DELETE` a todo.

> Note - Don't pollute the API by posting some test data (like testingggg etc).

BASE URL = `https://ac-todo-api.herokuapp.com/api/todo`

### Endpoints

1. `GET` */api/todo*

returns a array of all todos with total number of todos

2. `POST` */api/todo*

the request body should be in following format (isCompleted default to false if you want to true add isCompleted to true)

```json
{
  {
    "todo": {
      "title": "abc",
      "isCompleted": true
    }
  }
}
```

Note - title should be minimum of length 2 and is required

returns a response in array of todos in following format

```json
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

3. `PUT` */api/todo/:id*

To update a todo it required a id of todo you want to update

e.g - `/api/todo/60360d088c1327d639a525d1`

and take similar format as post todo which you want to update

```json
{
  {
    "todo": {
      "title": "qwerty"
    }
  }
}
```

return obj which have array of allTodos and noOfTodos

4. `DELETE` */api/todo/:id*

To delete a todo it required a id of todo you want to delete

e.g - `/api/todo/60360d088c1327d639a525d1`

it will return latest obj which have array of allTodos and noOfTodos
