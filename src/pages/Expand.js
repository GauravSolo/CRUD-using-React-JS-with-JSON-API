import React, {useEffect, useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/Expand.css';
import { useParams , useHistory} from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
const Expand = () => {

  const {id} = useParams();
  const [student, setStudent] = useState({author: '',handle: '', about: ''});
  const history = useHistory();

  useEffect(() => {
    async function getData(id){
      try{
        const students = await axios.get(`http://localhost:3333/students/${id}`);
        setStudent({...student, author: students.data.author, handle: students.data.handle, about: students.data.about });
      }catch(error){
        console.log('couldnt fetch data : 3333');
      }
    }
    getData(id);
  }, [])

  const goBack = (e)=>{
    e.preventDefault();
    history.push('/');
  }


  return <>

    <div className='row title mb-5'>
              <div className='col-12'>
                <h2  className='bg-primary text-center my-5'> 
                      Show Data
                </h2>
              </div>
      </div>
      <div className="col-12 mt-5">

          <form className='expand container'>
            <div className="row mb-3 d-flex justify-content-around">
                  <div className="col-auto ">
                    <label htmlFor="inputName" className="col-form-label">Name</label>
                </div>
                <div className="col-auto">
                  <input type="text" id="inputName" value={student.author} disabled className="form-control" aria-describedby="passwordHelpInline" />
                </div>
            </div>
            <div className="row mb-3 d-flex justify-content-around">
                  <div className="col-auto ">
                  <label htmlFor="inputHandle" className="col-form-label">Handle</label>
                </div>
                <div className="col-auto">
                  <input type="text" id="inputHandle" value={student.handle} disabled className="form-control" aria-describedby="passwordHelpInline" />
                </div>
            </div>
            <div className="row mb-3 d-flex justify-content-around">
                  <div className="col-auto pr-5">
                  <label htmlFor="inputAbout" className="col-form-label">About</label>
                </div>
                <div className="col-auto">
                 {/* <textarea id='textarea' className='form-control'  value="fdfdfgdfghhhhhdfshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfgh"></textarea> */}

                 <div id='textarea' className='p-2 border-2' disabled>{student.about}</div>
                </div>
                
                <div className="col-12 d-flex justify-content-center mt-5">
                <button type="submit" onClick={goBack}  className="btn btn-primary w-25 ">Back to Home</button>
                </div>
            </div>
        </form>

      </div>
  </>;
};

export default Expand;
