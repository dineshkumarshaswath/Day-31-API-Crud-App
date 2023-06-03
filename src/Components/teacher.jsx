import React from 'react'
import { useState } from 'react'
import Base from './base'
import { Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarker,faTrashCan} from '@fortawesome/free-solid-svg-icons'




function Teachers({ teachers, setTeachers }) {

  const history = useHistory();
  const [show, setShow] = useState(true)



  //delete function is here

  const deleteteacher = async (teacherid) => {
    setShow(false)

    const response = await fetch(`https://6474c1347de100807b1baffd.mockapi.io/users/teachers/${teacherid}`, {
      method: "DELETE"
    })
    const data = await response.json()
    if (data) {
      console.log(data)

      const newteacherlist = teachers.filter((teacher, idx) => teacher.id !== teacherid)

      setTeachers(newteacherlist)
     
    
     alert("Deleted successfully")
     setShow(true)
    }
  }






  return (



    <Base>

      <h1 style={{ textAlign: 'center', fontWeight: 'bolder', margin: '15px', color: 'whitesmoke' }}>
        TEACHERS DATA</h1>
      <hr />


      {show ? <div className='cards' style={{ padding: '40px' }}>
        <Row xs={1} sm={2} md={2} lg={3} className='row' >

          {teachers.map((teacher, id) => (
            <Col>
              <Card style={{ width: '18rem' }} key={id}>
                <Card.Body>
                  <Card.Title>Teacher list</Card.Title><hr />
                  <Card.Text> <h6>NAME: {teacher.name}</h6></Card.Text>
                  <Card.Text> <h6>GENDER: {teacher.gender}</h6> </Card.Text>
                  <Card.Text><h6>DEPARTMENT: {teacher.department}</h6></Card.Text>
                  <Card.Text><h6>EXPERIENCE: {teacher.experience}</h6> </Card.Text>
                  <Button style={{ marginRight: "25px", marginLeft: "10px" }}
                    onClick={() => history.push(`/editteacher/${id}`)}>
                      <FontAwesomeIcon icon={faMarker}/></Button>
                  <Button variant='danger' onClick={() => deleteteacher(teacher.id)}>
                    <FontAwesomeIcon icon={faTrashCan}/></Button>
                </Card.Body>
              </Card>
            </Col>

          ))
          }


        </Row>
      </div> :  <div style={{textAlign:'center'}}><Spinner animation="border" /></div>}



    </Base>



  )

}

export default Teachers;