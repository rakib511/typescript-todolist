import React, { useState } from 'react';
import './App.css';
import User, {userInt} from './component/User';

const App: React.FC =() =>{

  
  interface allUsersInt{
    currentUser: userInt;
    allUsers:Array<userInt>;
  }
  const [usersState,setUsersState] = useState<allUsersInt>({

  currentUser : {
    name:'',
    age:'',
    job:'',
    deleteUser: () => {}
  },
  allUsers:[]
});

const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) :void =>{
  // console.log(e.target.value);
  setUsersState({
    ...usersState,
    currentUser:{
      ...usersState.currentUser,
      [e.target.name] : e.target.value
    }
  })
}
const submitForm =(e: React.SyntheticEvent):void =>{
  e.preventDefault()

  setUsersState({
  currentUser : {
        name:'',
        age:'',
        job:'',
        deleteUser: () => {}
      },
      allUsers:[
        ...usersState.allUsers,
        usersState.currentUser
       ]
  })
}

const deleteHandler = (index:number) =>{
  const filterUser = usersState.allUsers.filter((user,i) =>{
    return index !== i;
  })
   setUsersState(
     {...usersState,
     allUsers:filterUser}
   )
}

const allUser = usersState.allUsers.map((user,i) =>(
    <User 
    key={i}
    name={user.name} 
    age={user.age} 
    job={user.job}
    deleteUser={() => deleteHandler(i)}
    ></User>
  
))

console.log(usersState);
  return (
    <div className="container">
      <h2>Typescript ToDo list</h2>

      <form action="" onSubmit={submitForm} className="card">

        <label htmlFor="username">Name:</label>
        <input required type="text" name="name" id="username" value={usersState.currentUser.name} onChange={onChangeHandler}/>

        <label htmlFor="userAge">Age:</label>
        <input type="number" name="age" id="userAge" value={usersState.currentUser.age} onChange={onChangeHandler}/>

        <label htmlFor="userjob">Job:</label>
        <input required type="text" name="job" id="userjob" value={usersState.currentUser.job} onChange={onChangeHandler}/>

        <button type='submit' className='submit-btn'>Add user</button>
      </form>
      {allUser}

    </div>
  );
}

export default App;
