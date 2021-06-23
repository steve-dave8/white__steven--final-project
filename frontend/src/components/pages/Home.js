import React from 'react'
import { Container, Row, Col, Button, CardBody, Card } from 'reactstrap'
import meme from './page-images/javascript-everywhere.jpg'
import InsertCard from './sub-components/Cards'

const Home = () => {
    return(
        <main>
            <Container>
                <section>
                    <Row className="my-5">
                        <Col lg="7">
                            <img className="img-fluid rounded mb-4 mb-lg-0" src={meme} alt="A Toy Story meme; Buzz Lightyear tells Woody that JavaScript is everywhere." />
                        </Col>
                        <Col lg="5">
                            <h1 className="font-weight-light">Business Name or Tagline</h1>
                            <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. 
                            React is used for the frontend and Express is used for the backend. Feel free to use this template for any project you want!</p>
                            <Button color="primary">Call to Action!</Button>
                        </Col>
                    </Row>
                    <Card className="text-white bg-secondary my-5 py-4 text-center">
                        <CardBody>
                            <p className="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p>
                        </CardBody>
                    </Card>
                </section>
                <section>
                    <Row>
                        <Col md="4" className="mb-5">
                            <InsertCard cardIndex="0" />
                        </Col>
                        <Col md="4" className="mb-5">
                            <InsertCard cardIndex="1" />
                        </Col>
                        <Col md="4" className="mb-5">
                            <InsertCard cardIndex="2" />
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default Home