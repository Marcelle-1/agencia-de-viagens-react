import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import towerBridge from './../assets/img/tower-bridge-980961_1280.jpg'
import newYork from './../assets/img/new-york-1587558_1280.jpg'
import rioDeJaneiro from './../assets/img/rio-de-janeiro-1963744_1280.jpg'
import fernandoDeNoronha from './../assets/img/fernando-2581811_1280.jpg'
import cataratas from './../assets/img/waterfalls-of-iguacu-455610_1280.jpg'
import muralha from './../assets/img/great-wall-3675637_1280.jpg'


function Destinos() {
    return (
        <Row xs={1} md={2} className="g-4">
            
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={towerBridge} />
                        <Card.Body>
                            <Card.Title>Londres</Card.Title>
                            <Card.Text>
                                Londres é uma importante cidade global (ao lado de Nova Iorque, Tóquio e Paris) e é um dos maiores, 
                                mais importantes e influentes centros financeiros do mundo. 
                            </Card.Text>
                            <Button variant="info">Comprar</Button>
                        </Card.Body>
                        
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={newYork} />
                        <Card.Body>
                            <Card.Title>Londres</Card.Title>
                            <Card.Text>
                                Londres é uma importante cidade global (ao lado de Nova Iorque, Tóquio e Paris) e é um dos maiores, 
                                mais importantes e influentes centros financeiros do mundo. 
                            </Card.Text>
                            <Button variant="info">Comprar</Button>
                        </Card.Body>
                        
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={rioDeJaneiro} />
                        <Card.Body>
                            <Card.Title>Londres</Card.Title>
                            <Card.Text>
                                Londres é uma importante cidade global (ao lado de Nova Iorque, Tóquio e Paris) e é um dos maiores, 
                                mais importantes e influentes centros financeiros do mundo. 
                            </Card.Text>
                            <Button variant="info">Comprar</Button>
                        </Card.Body>
                        
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={fernandoDeNoronha} />
                        <Card.Body>
                            <Card.Title>Londres</Card.Title>
                            <Card.Text>
                                Londres é uma importante cidade global (ao lado de Nova Iorque, Tóquio e Paris) e é um dos maiores, 
                                mais importantes e influentes centros financeiros do mundo. 
                            </Card.Text>
                            <Button variant="info">Comprar</Button>
                        </Card.Body>
                        
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={cataratas} />
                        <Card.Body>
                            <Card.Title>Londres</Card.Title>
                            <Card.Text>
                                Londres é uma importante cidade global (ao lado de Nova Iorque, Tóquio e Paris) e é um dos maiores, 
                                mais importantes e influentes centros financeiros do mundo. 
                            </Card.Text>
                            <Button variant="info">Comprar</Button>
                        </Card.Body>
                        
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={muralha} />
                        <Card.Body>
                            <Card.Title>Londres</Card.Title>
                            <Card.Text>
                                Londres é uma importante cidade global (ao lado de Nova Iorque, Tóquio e Paris) e é um dos maiores, 
                                mais importantes e influentes centros financeiros do mundo. 
                            </Card.Text>
                            <Button variant="info">Comprar</Button>
                        </Card.Body>
                        
                    </Card>
                </Col>
            
        </Row>
        

    )
}

export default Destinos