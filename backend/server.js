const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

let tasks = [
    {
        id: 1,
        title: "Learn React",
        status: "Pending"
    }
]

app.get('/tasks', (req, res) => {
    res.json(tasks)
})

app.post('/tasks', (req, res) => {

    const task = {

        id: tasks.length > 0
            ? tasks[tasks.length - 1].id + 1
            : 1,

        title: req.body.title,

        status: req.body.status
    }

    tasks.push(task)

    res.json(task)
})

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

app.delete('/tasks/:id', (req, res) => {

    const id = parseInt(req.params.id)

    tasks = tasks.filter(task => task.id !== id)

    res.json({
        message: "Task Deleted"
    })
})

app.listen(5000, '0.0.0.0', () => {
    console.log("Backend running on port 5000")
})
