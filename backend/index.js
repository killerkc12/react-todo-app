// write basis boilerplate code with express.json( middleware)
const express = require('express');
const { createTodo, updateTodo } = require('./types');
const port = 5000 || process.env.PORT;

const app = express();
app.use(express.json());


app.get('/todos', (req, res) => {
  console.log('GET /')
  res.send('Welcome');
})

app.post('/todo', (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "You sent the wrong inputs",
    });
    return;
  }
  // put in mongodb
})

app.put('/completed', (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: 'You sent the wrong inputs'
    })
    return;
  }
  // update in mongodb
})

app.listen(port, () => {
  console.log('listening on port ' + port);
});