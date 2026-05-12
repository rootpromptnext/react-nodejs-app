import React, { useEffect, useState } from 'react'
import axios from 'axios'

function TaskManager() {

    const [tasks, setTasks] = useState([])

    const [title, setTitle] = useState('')

    const [status, setStatus] = useState('Pending')

    const [editId, setEditId] = useState(null)

    const API = "http://192.168.1.21:5000/tasks"
    useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = async () => {

        const response = await axios.get(API)

        setTasks(response.data)
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        if (editId) {

            await axios.put(`${API}/${editId}`, {
                title,
                status
            })

            setEditId(null)

        } else {

            await axios.post(API, {
                title,
                status
            })
        }

        setTitle('')
        setStatus('Pending')

        fetchTasks()
    }

    const handleEdit = (task) => {

        setEditId(task.id)
        setTitle(task.title)
        setStatus(task.status)
    }

    const handleDelete = async (id) => {

        await axios.delete(`${API}/${id}`)

        fetchTasks()
    }

    return (

        <div className="container">

            <div className="card">

                <div className="heading">
                    Modern Task Manager
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-row">

                        <input
                            className="input"
                            type="text"
                            placeholder="Enter Task"
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)
                            }
                            required
                        />

                        <select
                            className="select"
                            value={status}
                            onChange={(e) =>
                                setStatus(e.target.value)
                            }
                        >

                            <option>Pending</option>
                            <option>Completed</option>

                        </select>

                        <button className="button">

                            {
                                editId
                                ? "Update"
                                : "Add"
                            }

                        </button>

                    </div>

                </form>

                <table className="table">

                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            tasks.map(task => (

                                <tr key={task.id}>

                                    <td>{task.id}</td>

                                    <td>{task.title}</td>

                                    <td>

                                        <span className={
                                            task.status === "Completed"
                                            ? "badge completed"
                                            : "badge pending"
                                        }>

                                            {task.status}

                                        </span>

                                    </td>

                                    <td>

                                        <button
                                            className="action-btn edit-btn"
                                            onClick={() =>
                                                handleEdit(task)
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="action-btn delete-btn"
                                            onClick={() =>
                                                handleDelete(task.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default TaskManager
