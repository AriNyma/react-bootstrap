import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function GridCard(props) {
    return (
        <>  
        
                <Row>
                    <Col style = {{width: '18rem', background: "success"}} sm><p></p></Col>
                    <Col style = {{background: "lightgrey"}} sm><p>Column 1</p></Col>
                    <Col style = {{background: "Lightgrey"}} sm><p>Column 2</p></Col> 
                    <Col style = {{background: "lightgrey"}} sm><p>Column 3</p></Col>
                </Row>

        </>
    )
}