import React from 'react';
import Card from "react-bootstrap/Card";


function AboutCard() {
    return (
        <Card className="quote-card">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{}}>Enter text here</p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;

//create 4 cards to look like canva about mockup