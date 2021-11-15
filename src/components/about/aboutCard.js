import React from 'react';
import Card from "react-bootstrap/Card";
import { ImPointRight } "react-icons/im";

function aboutCard() {
    return (
        <Card className="quote-card">
            <Card.body>
                <blockquote className="blockquote mb-0">
                    <p style={{}}>Enter text here</p>
                </blockquote></Card.body>
    )
}

export default aboutCard;

//create 4 cards to look like canva about mockup