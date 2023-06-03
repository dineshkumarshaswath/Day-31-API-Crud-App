import React from 'react'
import Base from './base'
import { Col, Row ,Card,Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Frontpage(){
           
     const history=useHistory()

    return(

        
        <Base>
        <div style={{margin:'50px',display:'grid' , placeItems:'center'}}>
        <Row className='row' xs={1} sm={2} md={2} lg={2}   >
            
            <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://as2.ftcdn.net/v2/jpg/03/18/40/09/1000_F_318400976_8xA8EmS76mI0wZKP9gF0H9h4DDYO7CI6.jpg" />
      <Card.Body>
        <Card.Title>Click here</Card.Title>
       
        <Button variant="success"  onClick={()=>history.push('/teachers')}>Teachers data</Button>
      </Card.Body>
    </Card></Col>
    <Col> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://as2.ftcdn.net/v2/jpg/01/64/54/61/1000_F_164546113_mB4RBgzN8WywCawviQUOzTafdSI7wFuY.jpg" />
      <Card.Body>
        <Card.Title>Click here</Card.Title>
       
        <Button variant="primary" onClick={()=>history.push('/students')}>Students data</Button>
      </Card.Body>
    </Card></Col>

        </Row>
        </div>
        </Base>
    )
}
export default Frontpage;