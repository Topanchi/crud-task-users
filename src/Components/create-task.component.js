// CreateTaskComponent for add new task
  
// Import Modules
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Switch from "../Shared/switch.component";

const URI = 'http://localhost:4000/api/task'

// CreateTask Component
const CreateTask = () => {
    const notify = () => toast.success("¡Registro añadido con éxito!", {autoClose:3000});

    const [name, setName] = useState('')
    const [completed, setCompleted] = useState('')

    const [value, setValue] = useState(false);

    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        let  resp = await axios.post(URI, {name: name, completed:value})

        resp.status === 200 ? notify() : console.log(resp.data)
        navigate('/')
    }   

      
    // Return task form
    return(
        <>
            <div className='container'>
                <h3>Create Task</h3>
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Completed</label>
                        <input
                            value={completed}
                            onChange={(e) => setCompleted(e.target.value)}
                            type="text"
                            className='form-control' />

                        <Switch
                                isOn={value}
                                onColor="#47ef4a"
                                handleToggle={() => setValue(!value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary' onClick={notify}>Store</button>&nbsp;
                    <Link to="/" className='btn btn-secondary mt-2 mb-2'>Back</Link>

                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </>
    )
  }
    
  // Export CreateTask Component
  export default CreateTask