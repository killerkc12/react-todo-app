const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://mongodb_kiran:XWc8jyBMGeiEQMOR@cluster0.zmaf6to.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
// mongoose.connect(process.env.MONGODB_URL);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);
module.exports = todo;