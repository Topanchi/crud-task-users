
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Import Bootstrap
import {Button, Modal } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Switch from "../Shared/switch.component";

const URI = 'http://localhost:4000/api/task/'

const TaskList = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, setValue] = useState(false);

    const [blogs, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[])

  //procedimineto para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        console.log(res.data)
        setBlog(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`)
        getBlogs()
    }
    dom.watch()


    const [name, setName] = useState('')
    const [completed, setCompleted] = useState('')
    //const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        console.log("name task: ",name, "completed task:", value)
        await axios.post(URI, {name: name, completed:value})
        getBlogs()
        handleClose()
    }

    return (
        <><div className='container'>
            <div className='row'>
                <div className='col'><br></br>
                    <Link to="/create-task" className='btn btn-primary mt-2 mb-2'>
                        <FontAwesomeIcon icon={faPlus} />
                    </Link> &nbsp;
                    <Button variant="primary" onClick={handleShow}>
                        Add task <FontAwesomeIcon icon={faPlus} />
                    </Button>
                    <br></br><br></br>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Name</th>
                                <th>Completed</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td> {blog.name} </td>
                                    <td> {blog.completed ? 'true':'false'} </td>
                                    <td>
                                        <Link to={`/edit-task/${blog.id}`} className='btn btn-info'>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Link>&nbsp;
                                        <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Create Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Name</label>
                        <input
                            value={name}
                            onChange={ (e)=> setName(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>   
                    <div className='mb-3'>
                        <label className='form-label'>Completed</label>
                        {/* <input
                            value={completed}
                            onChange={ (e)=> setCompleted(e.target.value)} 
                            type="text"
                            className='form-control'
                        />    */}
                        <Switch
                                isOn={value}
                                onColor="#47ef4a"
                                handleToggle={() => setValue(!value)}
                        />              
                    </div>  
                    <button type='submit' className='btn btn-primary'>Store</button>
                    {/* <Link to="/" className='btn btn-secondary mt-2 mb-2'>Back</Link> */}  
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type='submit' onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal></>
    );
  };
    
  export default TaskList;