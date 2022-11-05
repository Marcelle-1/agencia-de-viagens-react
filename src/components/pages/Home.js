import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import torreEiffel from './../assets/img/paris-902996_1920.jpg';
import pinkHouse from './../assets/img/pink-house-907344_1920(1).jpg'
import veneza from './../assets/img/venice-3183168_1920.jpg'

function Home() {
    return (
        <>
            <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={torreEiffel}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Torre Eiffel</h3>
                <p>O edifício mais alto da cidade de paris é o monumento pago mais visitado do mundo.</p>
                <p><a className="btn btn-lg" href="promocoes.html">Saiba mais</a></p>
                <Button variant="info">Info</Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={pinkHouse}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Casa Rosada</h3>
                <p>Buenos Aires é uma das 20 maiores cidades do mundo. Ao lado de São Paulo e Cidade do México.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={veneza}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Grande Canal de Veneza</h3>
                <p>
                O Grande Canal é o maior e mais importante canal da cidade italiana de Veneza.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
                   
        </>
    )
}

export default Home