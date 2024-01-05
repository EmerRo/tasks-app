import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask}= useContext(TaskContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
       
        createTask({
            title,
            description
        })
        setTitle("")
        setDescription("")
    }
  return (
        <div className='max-w-md mx-auto'>
            <form  onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4' >
                <h1 className='text-white font-bold text-2xl text-center mb-4'>Crea Tu Tarea</h1>
                <input className='bg-slate-300 p-3 w-full mb-2' type="text" placeholder='escribe tu tarea'
                onChange={(e)=> setTitle(e.target.value)}
                value={title}
                autoFocus
                />
                <textarea className='bg-slate-300 p-3 w-full mb-2' placeholder='escribe tu tarea'
                onChange={(e)=> setDescription(e.target.value)}
                value={description}
                ></textarea>
                <button className='bg-indigo-500 px-3 py-1 text-white'>
                    Add Task
            
                </button>
            </form>
        </div>
    )
}

export default TaskForm