import React, { Component } from 'react';
import {
    Button,   
    Container,
    Row,
    Col,
    Card,
  } from "react-bootstrap";
  import socialLink from "./socialLink.PNG"
  import darkLogo from "./darkLogo.PNG"

export default class Footer extends Component {
    render() {
        return (
            <>
            <div className="footer">
                <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <div className="footerOne">
                            <img className="darkLogo" src={darkLogo} height="45" />
                            <p className="footerTxt">Campushre supports diversity and has always had a great team to help me.</p>
                            <img className="socialLink" src={socialLink} height="50" />
                        </div>
                    </Col>
                    <Col xs lg="2">
                    <div className="footerTwo">
                           <div className="footerTitle">Corporate</div>
                           <ul className="footerTxt">
                               <li><a href="#">Browse Candidates</a></li>
                               <li><a href="#">Post a Job</a></li>
                               <li><a href="#">Employer Listing</a></li>
                               <li><a href="#">Resume Page</a></li>
                               <li><a href="#">Dashboard</a></li>
                               <li><a href="#">Job Packages</a></li>
                           </ul>
                        </div>
                    </Col>
                    <Col xs lg="2">
                    <div className="footerThree">
                           <div className="footerTitle">Candidate</div>
                           <ul className="footerTxt">
                               <li><a href="#">Browse Jobs</a></li>
                               <li><a href="#">Submit Resume</a></li>
                               <li><a href="#">Dashboard</a></li>
                               <li><a href="#">Browse Categories</a></li>
                               <li><a href="#">My Bookmarks</a></li>
                               <li><a href="#">Candidate Listing</a></li>
                           </ul>
                        </div>
                    </Col>
                    <Col xs lg="2">
                    <div className="footerFour">
                           <div className="footerTitle">Helpful Links</div>
                           <ul className="footerTxt">
                               <li><a href="#">Institute</a></li>
                               <li><a href="#">Corporate</a></li>
                               <li><a href="#">Students</a></li>
                               <li><a href="#">Blog</a></li>
                           </ul>
                        </div>
                    </Col>
                    <Col xs lg="3">
                    <div className="footerFive">
                           <div className="footerTitle">Contact Us</div>
                           <p className="footerTxt">
                               2nd Floor, 39, NGEF Ln<br/>
                               Binnamangala, Ist Stage<br/>
                               Indiranagar, Bengaluru, <br/>
                               Karnataka, 560038<br/>
                               hellow@campushyre.com<br/>
                               +91-9876543210
                           </p>
                        </div>
                       
                    </Col>
                </Row>
                
                </Container>
            </div>
            <div className="divider">

            <Container>
            <hr ></hr>
            </Container>
            </div>
            <div className="copyRight">
            <Container>
            <Row>
            <Col>
                    Campushre. @ 2021
            </Col>
        </Row>
         </Container>
                </div>
         </>
        )
    }
}
