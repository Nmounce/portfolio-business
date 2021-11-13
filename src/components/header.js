import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>

                <header id="home">
                    <div id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show Navigation">Show Navigation</a>
                    <a className="mobile-btn" href="#" title="Hide Navigation">Hide Navigation</a>
                        <div className="side-nav">
                            <ul id='nav' className="nav">
                                <li className="current"><a className="smoothscroll" href="#home"><i class="fa fa-home" style="font-size:40px"></i></a></li>
                                <li><a className="smoothscroll" href="#about"><i class="fa fa-handshake-o" style="font-size:40px"></i></a></li>
                                <li><a className="smoothscroll" href="#projects"><i class="fa fa-laptop" style="font-size:40px"></i></a></li>
                                <li><a className="smoothscroll" href="#contact"><i class="fa fa-envelope-o" style="font-size:40px"></i></a></li>
                            </ul>
                        </div>
                </header>
            </React.Fragment>
        )
    }
}