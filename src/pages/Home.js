import React,{useState, useEffect} from 'react';
import View from './View';
import Add from './Add';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    // console.log("Home render");
    const [status, setStatus] = useState(true);
    const changeStatus = (value)=>{
        setStatus(value);
        // console.log("changeStatus: " ,status , value);
    }
   
  return <>
      <div className='row title'>
          <div className='col ' >
            <h2  className='bg-info text-center my-5 d-flex justify-content-center align-items-center'  style={{height: '75px'}}> 
                 CRUD using React JS with json API
            </h2>
          </div>
      </div>

      <div className="row d-flex justify-content-around">
        <Add status={status} changeStatus={changeStatus} />
        <View status={status} />
      </div>
  </>;
};

export default Home;
