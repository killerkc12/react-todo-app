// write basis boilerplate code with express.json( middleware)
const express = require('express');
const port = 5000 || process.env.PORT;

const app = express();
app.use(express.json());


app.get('/todos', (req, res) => {
  console.log('GET /')
  res.send('Welcome');
})

app.post('/todo', (req, res) => {
  console.log('GET /')
  res.send('Welcome');
})

app.put('/completed', (req, res) => {
  console.log('GET /')
  res.send('Welcome');
})

app.listen(port, () => {
  console.log('listening on port ' + port);
});