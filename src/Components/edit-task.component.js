
// EditTask Component for update student data
  
// Import Modules
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

const URI = 'http://localhost:4000/api/task/'

// EditTask Component
const EditTask = (props) => {
  const [name, setName] = useState('')    
  const [completed, setCompleted] = useState('')    
  const navigate = useNavigate()
  const {id} = useParams()

  //procedimiento para actualizar
  const update = async (e) => {
      e.preventDefault()
      await axios.put(URI+id, {
          name: name,
          completed: completed
      })
      navigate('/')
  }

  useEffect( ()=>{
    getBlogById()
  })

  const getBlogById = async () => {
      const res = await axios.get(URI+id)
      setName(res.data.name)
      setCompleted(res.data.completed)
  }

    // Return task form
    return (
      <div className="container">
        <h3>Edit Task</h3>
        <form onSubmit={update}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Completed</label>
            <input
              value={completed}
              onChange={(e) => setCompleted(e.target.value)}
              type="text"
              className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>&nbsp;
          <Link to="/" className='btn btn-secondary mt-2 mb-2'>Back</Link>

        </form>
      </div>
    );
  };
    
  // Export EditTask Component
  export default EditTask;