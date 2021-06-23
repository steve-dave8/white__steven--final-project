import React, { useState } from 'react'
import { Form, FormGroup, Col, Input, Label, Button, Container} from 'reactstrap'

const CreateUser = () => {
    const token = sessionStorage.getItem('token')
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alertContent, setAlertContent] = useState(null)

    const formSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/users', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setAlertContent(`Error for fields: ${payload.invalid.join(",")}`)
        } else {
            setAlertContent(null)
            alert(`Success! User created for ${payload.name} with email address ${payload.email}`)
            resetForm()
        }
    }

    const resetForm = () => {
        setName("")
        setEmail("")
        setPassword("")
    }

    return (
        <main>
            <Container>
                <section>
                    <h1>Create A User</h1>
                    <p style={{paddingTop: "1rem"}}>Fill out and submit the form below to add a new user to the system.</p>
                </section>
                <Form className="my-5" onSubmit={formSubmit}>
                    <p style={{fontStyle: "italic"}}>All fields are required</p>
                    <FormGroup row>
                        <Label for="nameEntry" sm={1}>Name</Label>
                        <Col sm={10}>
                            <Input type="name" name="name" id="nameEntry" placeholder="Enter name" required value={name} onChange={e => setName(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="emailEntry" sm={1}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="emailEntry" placeholder="Valid email address"  required value={email} onChange={e => setEmail(e.target.value) }/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="passwordEntry" sm={1}>*Password</Label>
                        <Col sm={10}>
                            <Input type="password" name="password" id="passwordEntry" value={password} onChange={e => setPassword(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    <p style={{fontSize: "80%", marginLeft: "2rem"}}>*password must be at least 8 characters long</p>
                    <div className={`alert ${!alertContent ? "hidden" : ""}`}>{alertContent}</div>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 1 }}>
                            <Button color="success" type="submit">Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        </main>
    )
}

export default CreateUser