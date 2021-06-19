import React, { useState } from 'react'
import { Form, FormGroup, Col, Input, Label, Button, Container, CardBody, Card, CardText } from 'reactstrap'



const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [content, setContent] = useState("")
    const [alertContent, setAlertContent] = useState(null)

    const formSubmit = async (event) => {
        event.preventDefault()
        console.log("start")
        const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name, email, phoneNumber, content})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setAlertContent(`Error for fields: ${payload.invalid.join(",")}`)
        } else {
            setAlertContent(null)
            alert("Message received. Thank you for reaching out.")
            resetForm()
        }
        console.log("finish")
    }

    const resetForm = () => {
        setName("")
        setEmail("")
        setPhoneNumber("")
        setContent("")
    }

    return (
        <main>
            <Container>
                <Card className="text-white bg-secondary my-5 py-4 text-center">
                    <CardBody>
                        <CardText className="text-white m-0">Use form to reach me, I'll get back to you in one business day.</CardText>
                    </CardBody>
                </Card>
                <Form className="my-5" onSubmit={formSubmit}>
                    <p style={{fontStyle: "italic"}}>All fields are required</p>
                    <FormGroup row>
                        <Label for="emailEntry" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="emailEntry" placeholder="Enter email to contact"  required value={email} onChange={e => setEmail(e.target.value) }/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="phoneEntry" sm={2}>*Phone Number</Label>
                        <Col sm={10}>
                            <Input type="phone" name="phone" id="phoneEntry" placeholder="Enter phone number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    <p style={{fontSize: "80%", marginLeft: "2rem"}}>*must be a 10-digit number with no dashes, brackets, etc.</p>
                    <FormGroup row>
                        <Label for="nameEntry" sm={2}>Full Name</Label>
                        <Col sm={10}>
                            <Input type="name" name="name" id="nameEntry" placeholder="Enter your full name" required value={name} onChange={e => setName(e.target.value)}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="messageEntry" sm={2}>Message</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="text" id="messageEntry" required value={content} onChange={e => setContent(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    <div className={`alert ${!alertContent ? "hidden" : ""}`}>{alertContent}</div>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button color="success" type="submit">Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        </main>
      )
    }

    export default Contact