import React from "react";
import { Container} from "react-bootstrap";
import Logo from "../../assets/images/logo-transparent.png";
import Particle from "../particle";
import SocialIcons from "../social-icons";
import Type from "./type";

function ShowHomePage() {
    return (
        <section>
            <Container fluid className="home-container" id="home">
                <Particle />
                <Container className='home-content'>
                    <img src={Logo} alt="logo" className="img-fluid" />
                    <Type />
                </Container>
            </Container>
            <SocialIcons />
        </section>
    )
}

export default ShowHomePage;