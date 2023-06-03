import React from 'react'
import Base from './base'
import { Button, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup'
import {useFormik } from 'formik'



 export const fieldvalidationSchema = yup.object({

   name: yup.string().required(" * required"),
   gender: yup.string().required(" * required"),
   department: yup.string().required("* required"),
   experience: yup.string().required("* required"),
})

function Addteacherlist({ teachers, setTeachers }) {

  
    const history=useHistory()
 
    //formik initialization
    
     const {handleChange,handleSubmit,values,errors ,touched,handleBlur} = useFormik({
     initialValues:{
      name:"",
      gender:"",
      department:"",
      experience: ""
     },
     validationSchema : fieldvalidationSchema,
     onSubmit:(newteacher)=>{
           console.log(newteacher)
            addteachers(newteacher)
     }

     });



   //handleSubmit function is here

    async function addteachers(newteacher) {
     
       const response= await fetch("https://6474c1347de100807b1baffd.mockapi.io/users/teachers",{
       method:"POST",
       body:JSON.stringify(newteacher),
       headers:{
        "content-type":"application/json"
       },


    })
        const data=await response.json()
        if(data){
            console.log(data)
      console.log(newteacher);
      setTeachers([...teachers,data])
        }
      alert('added successfully')
 history.push("/teachers")
   }

   return (
      <Base>

      <div style={{ textAlign:'center',marginTop:'30px'}} >

         <h3  style={{ margin: "30px" ,fontWeight:'bolder',color:'whitesmoke'}} >Addteacher here</h3>
       <hr/>
        
         <form onSubmit={handleSubmit}>
         <Row xs={1} sm={1} md={1} lg={1}>
            <Col> <input
               value={values.name}
               onChange={handleChange}
               type='name'
               name='name'
               onBlur={handleBlur}
               placeholder="Teacher name" />
            </Col>
            <Col style={{color:'crimson'}}>
               {touched.name ? errors.name : ''}
            </Col>
           
            <Col>  <input

               value={values.gender}
               onChange={handleChange}
               type='gender'
               name='gender'
               onBlur={handleBlur}
               placeholder='Teacher gender' />

            </Col>
            <Col style={{color:'crimson'}}>
               {touched.gender? errors.gender : ''}
            </Col>
            <Col> <input value={values.department}
               onChange={handleChange}
               type='department'
               name='department'
               onBlur={handleBlur}
               placeholder='Teacher department' />
            </Col>
            <Col style={{color:'crimson'}}>
               {touched.department ? errors.department: ''}
            </Col>
            <Col> <input
               value={values.experience}
               onChange={handleChange}
               type='experience'
               name='experience'
                 onBlur={handleBlur}
               placeholder='Teacher experience' />
            </Col>
            <Col style={{color:'crimson'}}>
               {touched.experience ? errors.experience: ''}
            </Col>

            <Col><Button variant="success" type="submit"  > add Teacher</Button>
            </Col>
            </Row>
            </form>
       

       



     </div>

         </Base>

   

   )
}

export default Addteacherlist;