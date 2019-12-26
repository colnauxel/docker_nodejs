const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/nodejs',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const Users = require('./models/Users');

app.get('/', (req, res) => {
  Users.find()
    .then(users => res.render('index', { users }))
    .catch(err => res.status(404).json({ msg: 'No users found' }));
});

app.post('/users/add', (req, res) => {
  const newUser = new Users({
    username: req.body.name
  });

  newUser.save().then(users => res.redirect('/'));
});

const port = 3000;

app.listen(port, () => console.log('Server running...'));