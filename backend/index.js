// write basis boilerplate code with express.json( middleware)
const express = require('express');
const { createTodo, updateTodo } = require('./types');
const todo = require('./db');
const port = 5000 || process.env.PORT;

const app = express();
app.use(express.json());


app.get('/todos', async (req, res) => {
  const todos = await todo.get(); // try find
  res.json({
    todos
  });
})

app.post('/todo', async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "You sent the wrong inputs",
    });
    return;
  }
  // put in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })

  res.json({
    message: 'Todo created'
  });
})

app.put('/completed', async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: 'You sent the wrong inputs'
    })
    return;
  }
  // update in mongodb
  await todo.update({
    _id: req.body.id
  }, {
    completed: true
  })

  res.json({
    message: 'Todo marked as completed'
  });
})

app.listen(port, () => {
  console.log('listening on port ' + port);
});