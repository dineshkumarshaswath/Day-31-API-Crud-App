import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Row, Col, Button } from "react-bootstrap"
import Base from './base'
import { fieldSchema } from './addstudents'
import { useFormik } from 'formik'


function Updatestudents({ students, setStudents }) {

    const history = useHistory()
    const { id } = useParams()
    const a = students[id];

    //formik validation

    const { handleSubmit, handleChange, values, handleBlur, touched, errors } = useFormik({
        initialValues: {
            name: a.name,
            standard: a.standard,
            gender: a.gender
        },
        validationSchema: fieldSchema,
        onSubmit: (newupdate) => {
            console.log(newupdate)
            handleupdate(newupdate)
        }

    })






    //handlesubmit  function is here

    async function handleupdate(newupdate) {

        const response = await fetch(`https://6474c1347de100807b1baffd.mockapi.io/users/students/${a.id}`, {
            method: "PUT",
            body: JSON.stringify(newupdate),
            headers: {
                "content-type": "application/json"
            },


        })
        const data = await response.json()
        if (data) {

            students[id] = newupdate;
            console.log(newupdate);
            setStudents(students)
            history.push("/students")
            alert("update successfully")
        }

    }



    return (

        <Base>






            <div style={{ margin: "20px", textAlign: 'center' }}>

                <h3 style={{ textAlign: 'center', margin: "20px", fontWeight: 'bolder', color: 'whitesmoke' }}>
                    Update students data</h3>
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
                                type='submit'>update student</Button></Col>

                    </Row>
                </form>
            </div>

        </Base>









    )
}

export default Updatestudents