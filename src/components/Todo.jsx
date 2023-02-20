import React, { useState } from 'react'
import Card from './Card'
import Button from './Button'
import Input from './Input'
const Todo = () => {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([])

    const handleAddTask = (e) => { 
        e.preventDefault();
        setTasks(prevTask => [...prevTask, {
            id: Math.floor(Math.random() * Date.now()),
            name: newTask,
            complete: false
        }])
        setNewTask('')
    }

   function handleComplete (id) {
        const updateTask = tasks.map((task) => {
            if(id == task.id){
                return {
                    ...task,
                    complete: !task.complete
                }
            }
            return task;
        })
        setTasks(updateTask)
        console.log(id, 'id')
    }

    function handleRemove(id){
        const removeTask = tasks.filter(task => task.id !== id);
        setTasks(removeTask)
    }

    return (

        <Card>
            <Card.Title>Todo!</Card.Title>
            <Card.Body>
                <form>
                    <div className='flex items-center gap-x-2'>
                        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                        <Button text='Add Task' onClick={handleAddTask} />

                    </div>
                </form>
                {
                    tasks.length > 0 ? (
                        <ol className='space-y-2 mt-4'>{tasks.map((task) => (
                            <li key={task.id} className="flex items-center justify-between">
                                <span>{task.name} {task.complete ? "✅" : "❌"}</span>
                                <div className='flex items-center gap-x-2'>
                                    <button onClick={()=>handleComplete(task.id)} className='px-2 py-1 border text-xs'>
                                        Mark as {task.complete ? 'complete' : 'incomplete'}
                                    </button>
                                    <button onClick={()=> handleRemove(task.id)} className='px-2 py-1 border text-xs'>Remove</button>

                                </div>
                            </li>
                        ))}</ol>
                    ) : null
                }
            </Card.Body>
            <Card.Footer>
                You Have {tasks.length} Task List
            </Card.Footer>
        </Card>
    )
}

export default Todo