import React from 'react';

export default function Nav() {
    return (
        <section class="nav">
            {/* /* <div class="sidenav">
                <a class="links" href="./index.html"><i class="fa fa-home" style="font-size:40px"></i></a>
                <a class="links" href="./html/projects.html"><i class="fa fa-laptop" style="font-size:40px"></i></a>
                <a class="links" href="./html/bio.html"><i class="fa fa-handshake-o" style="font-size:32px"></i></a>
                <a class="links" href="./html/contact.html"><i class="fa fa-envelope-o" style="font-size:40px"></i></a>
            </div>  */}
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
        </section>)
}