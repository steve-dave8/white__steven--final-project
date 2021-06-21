import React, { useEffect, useState } from 'react'
import { Container, Row, Table } from 'reactstrap'

const Listings = () => {
    const token = sessionStorage.getItem('token')
    const [listing, setListing] = useState([]) 
    
    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:4000/contact_form/entries', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setListing(data)
        })()
    }, [token])

    return (
        <Container>
            <Row>
                <h1>Listings for contact form submissions:</h1>
            </Row>
            <Table responsive id="submissions">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {listing.length === 0 &&
                        <tr><td colSpan="4" className="text-center"><i>No listings found</i></td></tr>
                    }
                    {listing.length > 0 &&
                        listing.map(entry => <tr><td>{entry.id}</td><td>{entry.name}</td><td>{entry.phoneNumber}</td><td>{entry.email}</td><td>{entry.content}</td></tr>)
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default Listings