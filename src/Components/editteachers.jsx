import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import Base from './base.jsx'
import { Row, Col, Button } from "react-bootstrap"
import { fieldvalidationSchema } from './addteachers';




function Updateteacher({ teachers, setTeachers }) {

  const { id } = useParams();

  const a = teachers[id];

  const history = useHistory()

  //formik initialization

  const { handleChange, handleSubmit, values, handleBlur, touched, errors } = useFormik({
    initialValues: {
      name: a.name,
      gender: a.gender,
      department: a.department,
      experience: a.experience,
    },
    validationSchema: fieldvalidationSchema,
    onSubmit: (newupdate) => {
      console.log(newupdate)
      handleupdate(newupdate)
    }
  })




  //handleSubmit function is here

  async function handleupdate(newupdate) {

    const response = await fetch(`https://6474c1347de100807b1baffd.mockapi.io/users/teachers/${a.id}`
      , {
        method: "PUT",
        body: JSON.stringify(newupdate),
        headers: {
          "content-type": "application/json"
        }
      })

    const data = await response.json()

    if (data) {
      console.log(data)
      teachers[id] = newupdate;


      setTeachers(teachers)
      history.push("/teachers")


    }
  }


  return (



    <Base>

      <div style={{ margin: "20px", textAlign: 'center' }}>

        <h3 style={{ margin: "20px", fontWeight: 'bolder', color: 'whitesmoke' }}>
          Update Teacher data</h3>
        <hr />





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
            <Col style={{ color: 'crimson' }}>
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
            <Col style={{ color: 'crimson' }}>
              {touched.gender ? errors.gender : ''}
            </Col>
            <Col> <input value={values.department}
              onChange={handleChange}
              type='department'
              name='department'
              onBlur={handleBlur}
              placeholder='Teacher department' />
            </Col>
            <Col style={{ color: 'crimson' }}>
              {touched.department ? errors.department : ''}
            </Col>
            <Col> <input
              value={values.experience}
              onChange={handleChange}
              type='experience'
              name='experience'
              onBlur={handleBlur}
              placeholder='Teacher experience' />
            </Col>
            <Col style={{ color: 'crimson' }}>
              {touched.experience ? errors.experience : ''}
            </Col>

            <Col><Button variant="success" type="submit"  > Update Teacher</Button>
            </Col>
          </Row>
        </form>


      </div>


    </Base>


  )
}

export default Updateteacher;