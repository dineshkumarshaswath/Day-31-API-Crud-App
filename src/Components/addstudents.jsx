import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap';
import Base from './base'
import * as yup from 'yup'
import { useFormik } from 'formik';

//initialization for the yup object 

export const fieldSchema = yup.object({
    name: yup.string().required("* required"),
    standard: yup.string().required("* required"),
    gender: yup.string().required("* required")
})

function Addstudents({ students, setStudents }) {

    const history = useHistory();

    //This is Formik validation function

    const { handleSubmit, handleChange, values, handleBlur, touched, errors } = useFormik({
        initialValues: {
            name: "",
            standard: "",
            gender: ""
        },
        validationSchema: fieldSchema,
        onSubmit: (newstudent) => {
            console.log(newstudent)
            handleclick(newstudent)
        }

    })

    //handle submit funcion is here

    async function handleclick(newstudent) {

        const response = await fetch("https://6474c1347de100807b1baffd.mockapi.io/users/students", {
            method: "POST",
            body: JSON.stringify(newstudent),
            headers: {
                "content-type": "application/json"
            }
        })
        const data = await response.json()

        console.log(data);
        console.log(students);
        setStudents([...students, data])

        alert('added successfully')

        history.push("/students")

    }




    return (


        <Base>


            <div style={{ margin: "30px", textAlign: 'center' }}>
                <h2 style={{ margin: "30px", fontWeight: 'bolder', color: 'whitesmoke' }}>Addstudents here</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <Row xs={1} sm={1} md={1} lg={1}>

                        <Col><input
                            value={values.name}
                            name='name'
                            type="text"
                            placeholder="Enter student name"
                            onBlur={handleBlur}
                            onChange={handleChange} />
                        </Col>
                        <Col style={{ color: 'crimson' }}>{touched.name ? errors.name : ""}</Col>
                        <Col><input type="text"
                            value={values.standard}
                            name='standard'
                            placeholder="Enter standard"
                            onBlur={handleBlur}
                            onChange={handleChange} /></Col>
                        <Col style={{ color: 'crimson' }}>{touched.standard ? errors.standard : ""}</Col>

                        <Col><input type="text"
                            value={values.gender}
                            name='gender'
                            placeholder='Enter gender'
                            onBlur={handleBlur}
                            onChange={handleChange} /></Col>

                        <Col style={{ color: 'crimson' }}>{touched.gender ? errors.gender : ""}</Col>

                        <Col>
                            <Button variant='success'
                                type='submit'>add student</Button></Col>

                    </Row>
                </form>
            </div>


        </Base>




    )

}

export default Addstudents