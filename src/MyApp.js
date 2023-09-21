import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MyApp(props) {
    return (
        <>  
        
            <Row>
                <Col style = {{background: "lightgrey"}} sm><p>Column 1</p></Col>
                <Col style = {{background: "white"}} sm></Col>
                <Col style = {{background: "Lightgrey"}} sm><p>Column 2</p></Col>
                <Col style = {{background: "white"}} sm></Col>
                <Col style = {{background: "lightgrey"}} sm><p>Column 3</p></Col>
            </Row>
        
            <Container>
                <Row>
                    <Col>
                    <h1>Test</h1>
                    </Col>
                </Row>
                {props.cards.map((card, index) => (
                <Card key={index} style = {{width: '18rem'}} bg={"success"} text={"strong"}>
                    <Card.Body>
                        <Row>
                            <Col md style={{ backgroundColor: 'success' }}>
                            <Card.Title>{card.vinkki} </Card.Title>
                            </Col>
                            <Col md style={{ backgroundColor: 'lightgreen' }}>
                            <Card.Text>
                                {card.teksti}
                            </Card.Text>
                            
                            <Button variant="primary" onClick={() => console.log("Clicked!")}>Click me!</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>    
                ))}
            </Container>
          
        </>
    )
}