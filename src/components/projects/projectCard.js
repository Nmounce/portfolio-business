import React from "react";
import { Card, Button} from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import '../../css/social-icons.css';

function ProjectCard(props) {
    return (
        <Card>
            <Card.Img variant='top' src={props.imgPath} alt='card-image' />
            <Card.Body>
                <Card.Title style={{
                    fontSize: '60px', color: '#a0bd2e',
                    fontFamily: 'Road Rage'
                }}>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Card.Text className='sub-text'>{props.subText}</Card.Text>
                <Button class="social-icons icon-colour" variant='primary' href={props.link1} target='_blank'><AiFillGithub /></Button>
                <Button class="social-icons icon-colour" variant='primary' href={props.link2} target='_blank'><CgWebsite /></Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;