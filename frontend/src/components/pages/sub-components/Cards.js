import React from 'react'
import { Card, CardBody, CardTitle, CardFooter, Button } from 'reactstrap'

const cardList = [
    {
        title: "Card One",
        body: "He may play the Jack of diamonds",
        btnText: "Click Me",
        index: 0
    },
    {
        title: "Card Two",
        body: "He may lay the Queen of spades",
        btnText: "No, Click Me",
        index: 1
    },
    {
        title: "Card Three",
        body: "He may conceal a King in his hand",
        btnText: "Not Me!",
        index: 2
    }
];

const InsertCard = (props) => {
    let i = parseFloat(props.cardIndex);
    
    return (
        <Card>
            <CardBody>
                <CardTitle><h2>{cardList[i].title}</h2></CardTitle>
                <CardBody>{cardList[i].body}</CardBody>
            </CardBody>
            <CardFooter>
                <Button color="primary" size="sm">{cardList[i].btnText}</Button>
            </CardFooter>
        </Card>
    )
}

export default InsertCard