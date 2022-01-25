import React, {useEffect, useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/Edit.css';
import { useParams , useHistory} from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
const Edit = () => {

  const {id} = useParams();
  const [student, setStudent] = useState({author: '',handle: '',about: ''});

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

  const changeData = (e)=>{
    console.log('kdfjdkjfkl');
    const aboutData = document.getElementById('textarea').innerText;
    setStudent({...student, [ e.target.name ]: e.target.value, about: aboutData});
    console.log(student);
  }
  
  const updateData = (e)=>{
    e.preventDefault();
    async function update(){
      try{
        await axios.put(`http://localhost:3333/students/${id}`,student);
      }catch(error){
        console.log('couldnt updata data',error);
      }
    }
    update();
    history.push('/');
  }
 
  const goBack = (e)=>{
    e.preventDefault();
    history.push('/');
  }

  return <>

    
      <div className="col-12 mt-5">
  
          <form className='expand container'>
          <div className='col-12'>
                <h2  className='bg-primary text-center  d-flex justify-content-center align-items-center'  style={{height: '50px'}}> 
                      Update Data
                </h2>
              </div>
            <div className="row mb-3 d-flex justify-content-around">
                  <div className="col-auto ">
                    <label htmlFor="inputName" className="col-form-label">Name</label>
                </div>
                <div className="col-auto">
                  <input type="text" id="inputName" name='author' onChange={changeData} value={student.author}  className="form-control" aria-describedby="passwordHelpInline" />
                </div>
            </div>
            <div className="row mb-3 d-flex justify-content-around">
                  <div className="col-auto ">
                  <label htmlFor="inputHandle" className="col-form-label">Handle</label>
                </div>
                <div className="col-auto">
                  <input type="text" id="inputHandle" name='handle' onChange={changeData} value={student.handle}  className="form-control" aria-describedby="passwordHelpInline" />
                </div>
            </div>
            <div className="row mb-3 d-flex justify-content-around">
                  <div className="col-auto pr-5">
                  <label htmlFor="inputAbout" className="col-form-label">About</label>
                </div>
                <div className="col-auto">
                 {/* <textarea id='textarea' className='form-control'  value="fdfdfgdfghhhhhdfshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfgh"></textarea> */}

                 <div id='textarea' className='p-2 border-2' onKeyPress={changeData} contentEditable='true' suppressContentEditableWarning={true}>{student.about}</div>
                </div>
                
                <div className="col-12 d-flex justify-content-around mt-5">
                <button type="submit" onClick={goBack}  className="btn btn-primary w-25 ">Back to Home</button>
                <button type="submit" onClick={updateData}  className="btn btn-primary w-25 ">Update Data</button>
                </div>
            </div>
        </form>

      </div>
  </>;
};

export default Edit;
