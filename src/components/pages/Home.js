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

            


            {/* <div id="carousel" className="carousel carousel-white slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img className="carousel-img d-block w-100" src="img/paris-902996_1920.jpg" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Torre Eiffel</h1>
                        <p>O edifício mais alto da cidade de paris é o monumento pago mais visitado do mundo.</p>
                        <p><a className="btn btn-lg" href="promocoes.html">Saiba mais</a></p>
                    </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img className="carousel-img d-block w-100" src="img/pink-house-907344_1920(1).jpg" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Casa Rosada</h1>
                        <p>Buenos Aires é uma das 20 maiores cidades do mundo. Ao lado de São Paulo e Cidade do México.</p>
                        <p><a className="btn btn-lg" href="promocoes.html">Saiba mais</a></p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img className="carousel-img d-block w-100" src="img/venice-3183168_1920.jpg" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Grande Canal de Veneza</h1>
                        <p>O Grande Canal é o maior e mais importante canal da cidade italiana de Veneza.</p>
                        <p><a className="btn btn-lg" href="promocoes.html">Saiba mais</a></p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Próximo</span>
                </button>
            </div>

            <div className="container marketing">
                <h3 style="text-align:center">Vai umas dicas?</h3>
                <hr className="featurette-divider"/>
            
                <div className="row featurette">
                    <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">Não se preocupe com as pequenas coisas</h2>
                    <p className="lead">Tenha a mente aberta e não se apegue a detalhes insignificantes, que podem frustrar toda a viagem e você vai se lembrar disso para sempre.</p>
                    </div>
                    <div className="col-md-5">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="img/airport-1822133_640.jpg" role="img" focusable="false"><rect width="100%" height="100%" fill="#eee"></rect></img>
                    </div>
                </div>
                <hr className="featurette-divider"/>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">Experimente a culinária local</h2>
                    <p className="lead">Não deixe de provar coisas diferentes na sua viagem! Alguns sabores são atração turística, de tão diferenciados e cheios de significado. Aproveite e se entregue às diferentes receitas.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="img/hd-wallpaper-2530069_640.jpg" role="img" focusable="false"><rect width="100%" height="100%" fill="#eee"></rect></img>
                    </div>
                </div>
                <hr className="featurette-divider"/>
                <div className="row featurette">
                    <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">Olhe para trás antes de sair</h2>
                    <p className="lead">Sempre que você se levanta para sair de algum lugar, seja de uma cadeira no aeroporto, um café, ou um bar, vire e certifique-se de que você não deixou nada para trás. Esse movimento pode salvar muitos objetos pessoais durante uma viagem!</p>
                    </div>
                    <div className="col-md-5">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="img/summer-2880261_640.jpg" role="img" focusable="false"><rect width="100%" height="100%" fill="#eee"></rect></img>
                    </div>
                </div>
                <hr className="featurette-divider"/>        
            </div>


            <div className="payment">
            <h3>Formas de pagamento</h3>
            <img src="img/images (1).png" alt="" sizes=""/>
            </div>

            <div>
            <h3>Nossas redes</h3>
            <img className="icons" src="img/instagram.svg" alt=""/>
            <img className="icons" src="img/facebook.svg" alt=""/>
            <img className="icons" src="img/twitter.svg" alt=""/>
            </div> */}
                   
        </>
    )
}

export default Home