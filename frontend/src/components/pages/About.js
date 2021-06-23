import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import netImg from './page-images/digital-network.jpg'
import CodeSample from './sub-components/CodeSample'

const About = () => {
    return (
        <main>
            <section>
                <Container>
                    <Row className="my-5">
                        <Col lg="6">
                            <img className="img-fluid rounded mb-4 mb-lg-0" src={netImg} 
                            alt="Depiction of a network with a series of dots connected by lines." />
                        </Col>
                        <Col lg="6">
                            <h1 className="font-weight-light">About</h1>
                            <p>This web app was created for a course project for FS1010 Web UI Concepts 
                            and Frameworks course from York University's certificate in full-stack web 
                            development. Information on the program can be 
                                <a href="https://continue.yorku.ca/programs/certificate-in-full-stack-web-development/" 
                                target="_blank" rel="noreferrer"> found here</a>.
                            </p>
                            <p>In addition to using HTML, CSS, and JavaScript, here are some of the other 
                            main technologies used by this app:</p>
                            <ul>
                                <li>
                                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>
                                </li>
                                <li>
                                    <a href="https://getbootstrap.com/docs/4.5/getting-started/introduction/" 
                                    target="_blank" rel="noreferrer">Bootstrap</a>
                                </li>
                                <li>
                                    <a href="https://reactstrap.github.io/" 
                                    target="_blank" rel="noreferrer">Reactstrap</a>
                                </li>
                                <li>
                                    <a href="https://nodejs.org/en/about/" 
                                    target="_blank" rel="noreferrer">Node</a>
                                </li>
                                <li>
                                    <a href="https://expressjs.com/" 
                                    target="_blank" rel="noreferrer">Express</a>
                                </li>
                                <li>
                                    <a href="https://reactrouter.com/web/guides/quick-start" 
                                    target="_blank" rel="noreferrer">React Router</a>
                                </li>
                            </ul>
                            <p>Have a look at the code sample below to see 
                            how this "About" component was created.</p>               
                        </Col>
                    </Row>
                    <Row className="my-5" style={{flexDirection: "column"}}>
                        <hr />
                        <Button className="centerBtn" color="primary" href="/contact">Contact Me</Button>
                        <hr />
                    </Row>
                </Container>
            </section>
            <section>
                <CodeSample />
            </section>
        </main>
    )
}

export default About