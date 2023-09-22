import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GridCard from './GridCard';

export default function MyApp(props) {
    return (
        <>  
            <Container>
                <Row>
                    <Col>
                    <h1>Test</h1>
                    </Col>
                </Row>
                {props.cards.map((card, index) => (
                <Card key={index} style = {{width: '50rem'}} bg={"success"} text={"strong"}>
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
                            <Col>
                                <GridCard></GridCard>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card> 
                ))}
            </Container>
        </>
    )
}