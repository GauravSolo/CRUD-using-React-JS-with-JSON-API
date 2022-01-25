import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const View = (props) => {
  // console.log("View render",  props.status);
    const [students, setStudents]  = useState([]);
    // const [status, setStatus] = useState(props.status);
    
    // if(props.status !== status)
    // {
    //   setStatus(props.status);
    //   console.log("should change" , status);
    // }

    useEffect(()=>{
      
      // console.log("useEffect :", props.status);
        async function fetchData(){
        try{
            const students = await axios.get("http://localhost:3333/students");
            setStudents(students.data);

        }catch(error){
            console.log("couldnt fetch data");
        }
    }
    fetchData();
    },[props.status])

    const deleteData = (id)=>{
      // console.log(id);
      async function DeleteData(){
        try{
          await axios.delete(`http://localhost:3333/students/${id}`);
        }catch(error){
          console.log("couldnt delete data");
        }
      }
      DeleteData();
      setStudents(students.filter((element)=>element.id !== id));
    }

  return (
    <div className="col-md-5 Box m-5  mx-md-1 bg-white viewBox">
    <div className="row">
      <div className="col-12 mt-3"  style={{background: 'aqua'}}>
            <h2 className='font-weight-bold text-center'>View Box</h2>
          </div>
      <div className="col-12  mt-4 p-0 overflow-auto">
      
      <table className="table  table-striped">
          <thead>
            <tr className='table-secondary'>
              <th scope="col">#</th>
              <th scope="col" >Name</th>
              <th scope="col" >Handle</th>
              <th scope="col" >About</th>
              <th scope='col' className='text-center'>Options</th>
            </tr>
          </thead>
          <tbody>

                {
                    students.map((student,i)=>{
                     return    <tr key={i}>
                            <th scope="row">{i+1}</th>
                            <td>{student.author}</td>
                            <td>{student.handle}</td>
                            <td ><div style={{
                                whiteSpace: 'nowrap',
                                maxWidth: '115px',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden'}
                                }>{`${student.about.substr(0, 25)} ...`}</div></td>
                            <td className='d-flex justify-content-around'>
                            <Link to={`/expand/${student.id}`}>
                            <i className="fas fa-eye text-primary"></i>
                            </Link>
                            <Link to={`/edit/${student.id}`}>
                            <i className="fas fa-edit text-secondary"></i>
                            </Link>
                           
                            <i className="fas fa-trash text-danger" onClick={()=>deleteData(student.id)}></i>
                           
                            </td>
                        </tr>
                    })
                }
            
          </tbody>
        </table>
      </div>
    </div>
</div>
  );
};

export default View;