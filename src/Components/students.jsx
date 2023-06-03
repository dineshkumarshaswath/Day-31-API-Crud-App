import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useHistory } from 'react-router-dom';
import Base from './base'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarker,faTrashCan} from '@fortawesome/free-solid-svg-icons'




function Students({ students, setStudents }) {
  const history = useHistory()
const [show,setShow]=useState(true)

// delete function is here

    async function deletestudent(studentid) {
         setShow(false)
      const response= await fetch(`https://6474c1347de100807b1baffd.mockapi.io/users/students/${studentid}`,{
        method:"DELETE",
      })

    const newstudentslist = students.filter((student, idx) => student.id != studentid);
    setStudents(newstudentslist)
    console.log(newstudentslist)
    setShow(true)
     
  }

  return (
  

      <Base>

      <h1 style={{textAlign:'center',fontWeight:'bolder',margin:'15px',color:'whitesmoke'}}>STUDENTS DATA</h1>
      <hr/> 

    {show ? <div style={{ padding: '40px' }} className='cards'>

<Row xs={1} sm={2} md={2} lg={3} className='row'>

  {students.map((student, id) => (
    <Col>
      <Card style={{ width: '18rem' }} key={id}>
        <Card.Body>
          <Card.Title>Student list</Card.Title><hr />
          <Card.Text><h6>NAME:{student.name}</h6></Card.Text>
          <Card.Text><h6> STANDARD: {student.standard}</h6></Card.Text>
          <Card.Text><h6>GENDER: {student.gender}</h6></Card.Text>

          <Button variant="primary" style={{ marginRight: "25px", marginLeft: "10px" }}
            onClick={() => history.push(`/editstudent/${id}`)}><FontAwesomeIcon icon={faMarker}/>

           </Button>

          <Button variant="danger" onClick={() => deletestudent(student.id)}>
            <FontAwesomeIcon icon={faTrashCan}/></Button>
        </Card.Body>
      </Card>
    </Col>

  ))
  }
</Row>

</div>: <div style={{textAlign:'center'}}><Spinner  animation="border" /></div>}

      
      </Base> 

  

  )


}

export default Students;