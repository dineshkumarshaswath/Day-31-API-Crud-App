import React from 'react'
 import Teachers from './Components/teacher'
 import Students from './Components/students'
import { useEffect,useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Addteacherlist from './Components/addteachers.jsx';
import { Switch,Route } from 'react-router-dom';
import Updateteacher from './Components/editteachers';
import Addstudents from './Components/addstudents';
import Updatestudents from './Components/editstudents';
import Frontpage from './Components/frontpage';



function App() {
   const[students,setStudents]=useState([])
   const[teachers,setTeachers]=useState([])

      
 useEffect(()=>{
    async function getStudents(){
    const response=await fetch("https://6474c1347de100807b1baffd.mockapi.io/users/students",{
      method:"GET"
    })
   
   const data= await response.json();
   if(data){
    setStudents(data)
   }
  
   }

   async function getTeachers(){
 
      const response= await fetch("https://6474c1347de100807b1baffd.mockapi.io/users/teachers",{
      method:"GET"
    })

     const data=  await response.json()
     setTeachers(data)
  
    
    }
       getStudents()
       getTeachers()

       },[])

  return (
   <div>
     <Switch>

      <Route exact path='/'>
        <Frontpage></Frontpage>

      </Route>
      <Route exact path="/teachers">
      <Teachers
       teachers={teachers}
       setTeachers={setTeachers}/>
      </Route>

      <Route path='/addteacher'>
      <Addteacherlist 
       teachers={teachers}
       setTeachers={setTeachers}/>

      </Route>
   
 
   
<Route path="/editteacher/:id">
  <Updateteacher
   teachers={teachers}
   setTeachers={setTeachers}
/>
</Route>

<Route path="/students">
    <Students
    students={students}
    setStudents={setStudents}/>
    </Route> 

   <Route path="/addstudent">
    <Addstudents
     students={students}
     setStudents={setStudents}
    />
   </Route>

   <Route path="/editstudent/:id">
      <Updatestudents 
       students={students}
       setStudents={setStudents}
      />
   </Route>

</Switch>
  </div>

 
   
  )
}

export default App
