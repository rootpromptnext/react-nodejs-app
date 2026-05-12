const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

let tasks = [
    {
        id: 1,
        title: "Learn React",
        status: "Pending"
    }
]

// Counter for proper incremental IDs
let nextId = 2

// Get All Tasks
app.get('/tasks', (req, res) => {

    res.json(tasks)
})

// Create Task
app.post('/tasks', (req, res) => {

    const task = {

        id: nextId++,

        title: req.body.title,

        status: req.body.status
    }

    tasks.push(task)

    res.json(task)
})

// Update Task
app.put('/tasks/:id', (req, res) => {

    const id = parseInt(req.params.id)

    tasks = tasks.map(task => {

        if (task.id === id) {

            return {

                ...task,

                title: req.body.title,

                status: req.body.status
            }
        }

        return task
    })

    res.json({
        message: "Task Updated"
    })
})

// Delete Task
app.delete('/tasks/:id', (req, res) => {

    const id = parseInt(req.params.id)

    tasks = tasks.filter(task => task.id !== id)

    res.json({
        message: "Task Deleted"
    })
})

// Start Server
app.listen(5000, '0.0.0.0', () => {

    console.log("Backend running on port 5000")
})
