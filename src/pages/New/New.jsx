import React, { useState } from 'react';
import './new.scss';
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useGlobalContext } from '../../Context';

function New({inputs,title}) {
  const {NewUser} = useGlobalContext();

  const [file,setFile] = useState('');
  console.log(file);
  
  return (
    <div className='new'>
      <Sidebar/>
      <div className='newContainer'>
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
              file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
            } alt="avatar" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">Image:<DriveFolderUploadOutlinedIcon className='icon'/></label>
                <input id='file'  type="file" onChange={ e => setFile(e.target.files[0])} style={{display:'none'}}/>
              </div>
              {
                inputs.map(input => {
                  const {id,label,type,placeholder} = input;
                  return (
                    <div key={id} className='formInput'>
                      <label htmlFor="">{label}</label>
                      <input  type={type} placeholder={placeholder} />
                    </div>
                  )
                })
              }
              <button onClick={(e)=> NewUser(e)}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New;
