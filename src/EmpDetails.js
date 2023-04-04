import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EmpDetails = () => {
  const{empid}=useParams();

  const[empdata,empdatachange]=useState({})

  useEffect(() => {
    fetch("http://localhost:8000/employee"+empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]);
   
  return (
    <div className='container'>
    <div className="card row" style={{"textAlign":"left"}}>
        <div className="card-title">
          <h2>Employee create</h2>
        </div>
        <div className="card-body">
          
        </div>
        {empdata &&  
        <div>
      <h2>The Employee name is : <b>{empdata.name}</b> ({empdata.id})</h2>
      <h2>Contact Details :</h2>
      <h2>Email is:{empdata.email}</h2>
      <h2>Phone is:{empdata.phone}</h2>
      <Link className='btn btn-danger' to="/">Back to Listing</Link>

      </div>
      
    }
   </div>
    </div>
  )
}

export default EmpDetails