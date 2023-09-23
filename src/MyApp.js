import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnswerCard from './AnswerCard';

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
                                <Card.Title>Subject: {card.vinkki} </Card.Title>
                            </Col>
                            <Col md style={{ backgroundColor: 'lightgreen' }}>
                                <Card.Text>Question: {card.teksti}</Card.Text>   
                            </Col>
                            <Col>
                                <AnswerCard cards = {card}/>  
                            </Col>
                        </Row>
                    </Card.Body>
                </Card> 
                ))}
            </Container>
        </>
    )
}