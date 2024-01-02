require('dotenv').config(); // for loading environment variables
const express = require('express');
const path = require('path');
// include and initialize the rollbar library with your access token
// include and initialize the rollbar library with your access token
let Rollbar = require('rollbar')
let rollbar = new Rollbar({
  accessToken: '4bc26e30cd7348e2800d8060e4131ce5',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


const app = express();
app.use(express.json());

const students = ['Jimmy', 'Timothy', 'Jimothy'];

app.use(express.static(path.join(__dirname, 'public')));


// Get all students
app.get('/api/students', (req, res) => {
    res.status(200).send(students);
    console.log('Student list retrieved.');
});

// Add a new student
app.post('/api/students', (req, res) => {
    const { name } = req.body;

    if (!name) {
        res.status(400).send('You must enter a name.');
        rollbar.warning('Attempted to add empty student name.');
        return;
    }

    if (students.includes(name)) {
        res.status(400).send('That student already exists.');
        rollbar.error('Attempted to add duplicate student.');
        return;
    }

    students.push(name);
    res.status(200).send(students);
    console.log('New student added.');
});

// Delete a student
app.delete('/api/students/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index < 0 || index >= students.length) {
        res.status(404).send('Student not found.');
        return;
    }

    students.splice(index, 1);
    res.status(200).send(students);
    console.log('Student removed.');
});

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Server listening on ${port}`));



