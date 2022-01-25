import axios from 'axios';
import React, {useState} from 'react';

const Add = (props) => {
  // console.log("Add render");
const [student, setStudent] =  useState({ 
    author : '',
    handle: '',
    about: ''
});
const [warning, setWarning] = useState('');
// const [status,setStatus] = useState(props.status);




const handleChange = (e) => {
    setStudent({...student, [e.target.name] : e.target.value});
}

async  function submitData(e){
    e.preventDefault();
    
    for(let value in student)
    {
      if(student[value] === '')
      {
        setWarning("Please fill all input fields");
        return;
      }
    }
    setWarning('');

    props.changeStatus(!props.status);   
    // console.log("props: " ,props, props.status);
    try{
        await axios.post("http://localhost:3333/students",student);
    }catch(error){
        console.log("something went wrong");
    }
    

}


  return (
    
    <div className="col-md-5 col-lg-4 Box m-5  mx-md-1  bg-white addBox">
        <div className="row">
              <div className="col-12 mt-3 " style={{background: 'aquamarine'}}>
                <h2 className='font-weight-bold text-center '>Add Box</h2>
              </div>
              <div className="col mt-4">
              <form>

                  <div className="mb-4">
                      <label htmlFor="exampleInputName" className="form-label">Name</label>
                      <input type="text" name="author" className="form-control" id="exampleInputName" value={student.name} onChange={e=>handleChange(e)}/>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                      <input type="email" name="handle" className="form-control" id="exampleInputEmail1" value={student.email} onChange={e=>handleChange(e)}aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="exampleInputtext" className="form-label">About</label>
                      <textarea type="text" name="about" value={student.about} onChange={e=>handleChange(e)}className="form-control" id="exampleInputtext" />
                    </div>
                
                    <button type="submit" onClick={submitData} className="btn btn-primary w-25 ">Add</button>
                    <div id="Help"  className="form-text text-danger text-center fs-4">{warning}</div>
                  </form>
              </div>
        </div>
    </div>
  );
};

export default Add;