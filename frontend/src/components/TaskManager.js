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

        <div className="container mt-5">

            <div className="card shadow-lg border-0">

                <div className="card-header bg-dark text-white">
                    <h2 className="text-center">
                        Task Manager
                    </h2>
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="row">

                            <div className="col-md-5 mb-3">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Task"
                                    value={title}
                                    onChange={(e) =>
                                        setTitle(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <div className="col-md-3 mb-3">

                                <select
                                    className="form-select"
                                    value={status}
                                    onChange={(e) =>
                                        setStatus(e.target.value)
                                    }
                                >

                                    <option>Pending</option>
                                    <option>Completed</option>

                                </select>
                            </div>

                            <div className="col-md-4 mb-3">

                                <button
                                    className="btn btn-primary w-100"
                                >

                                    {
                                        editId
                                        ? "Update Task"
                                        : "Add Task"
                                    }

                                </button>
                            </div>

                        </div>

                    </form>

                    <table className="table table-hover mt-4">

                        <thead className="table-dark">

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
                                                ? "badge bg-success"
                                                : "badge bg-warning text-dark"
                                            }>

                                                {task.status}

                                            </span>

                                        </td>

                                        <td>

                                            <button
                                                className="btn btn-sm btn-info me-2"
                                                onClick={() =>
                                                    handleEdit(task)
                                                }
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="btn btn-sm btn-danger"
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

        </div>
    )
}

export default TaskManager
