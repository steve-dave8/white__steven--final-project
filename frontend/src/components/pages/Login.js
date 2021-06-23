import React, { useState } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { useHistory, useLocation } from 'react-router-dom'

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alertContent, setAlertContent] = useState(null)

    const loginSubmit = async event => { 
        event.preventDefault()
        const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setAlertContent('Invalid credentials, please try again')
        } else {
            sessionStorage.setItem('token', payload.token)
            let { from } = location.state || { from: { pathname: "/submissions" } }
            history.replace(from)
            window.location.reload()
            /*I use reload() to get the Navigation component to re-render. Perhaps not the best way
            of doing this but the quickest/simplest method I could implement.*/
        }
    }

    return (
      <main>
        <Container>
          <Form className="my-5" onSubmit={loginSubmit}>
            <div className={`alert ${!alertContent ? "hidden" : ""}`}>{alertContent}</div>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="usernameEntry">Email</Label>
                  <Input type="text" name="username" id="usernameEntry" placeholder="Valid email address" value={email} onChange={e => setEmail(e.target.value)}/>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="passwordEntry">Password</Label>
                  <Input type="password" name="password" id="passwordEntry" placeholder="Valid password" onChange={e => setPassword(e.target.value)}/>
                </FormGroup>
              </Col>
            </Row>
            <Button color="success">Sign in</Button>
          </Form>
        </Container>
      </main>
    )
}

export default Login