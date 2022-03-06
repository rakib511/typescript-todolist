import React from 'react';
import './User';
import './User.css';

export interface userInt{
  name:string;
  age?:string;
  job:string;
  deleteUser:() => void
}

const User: React.FC<userInt> = ({name,age,job,deleteUser}) => {
  return (
    <div className='Card'>
      <hr />
      <div className="row">
        <h4>name:</h4>
        <p>{name}</p>
      </div>
      <hr />
      {age && (<div className="row">
        <h4>age:</h4>
        <p>{age}</p>
      </div>
      )}

      <hr />
      <div className="row">
        <h4>job:</h4>
        <p>{job}</p>
      </div>
      <hr />
      <button className='delete-btn' onClick={deleteUser}>Remove user</button>
      <br /><br />
    </div>
  )
}

export default User;