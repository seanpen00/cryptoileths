import React from "react";
import { Row, Col, Container } from "react-bootstrap";

//import CSS
import './team.css';

//import image assets
import ooz from '../../assets/team/theteam/ooz.png';
import anthony from '../../assets/team/theteam/anthony.jpeg';
import davon from '../../assets/team/theteam/davon.jpeg';
import hamza from '../../assets/team/theteam/hamza.jpeg';
import kev from '../../assets/team/theteam/kev.png';
import ricky from '../../assets/team/theteam/ricky.png';
import marketing from '../../assets/team/theteam/marketing.png';
import chris from '../../assets/team/theteam/chris.png';
// import CTOImage from '../../assets/team/about.gif';
// import CMOImage from '../../assets/team/about.gif';
// import CFOImage from '../../assets/team/about.gif'

//import Component
import TeamMember from "./teammember";
class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [
                {
                    image: "https://cryptoileths.s3.amazonaws.com/1000.png",
                    title: 'Manure Farmer',
                    name: "Winnie the Poop"
                },
                {
                    image: "https://cryptoileths.s3.amazonaws.com/1001.png",
                    title: 'One Shit Wonder',
                    name: "Adolf Shitler"
                },
                {
                    image: "https://cryptoileths.s3.amazonaws.com/1002.png",
                    title: 'The Flush Expert',
                    name: "Barry Allen"
                },
                {
                    image: "https://cryptoileths.s3.amazonaws.com/1003.png",
                    title: 'The Plumber',
                    name: "Mario"
                },
                {
                    image: "https://cryptoileths.s3.amazonaws.com/1004.png",
                    title: 'Number 2',
                    name: "Poop John Paul"
                },
                {
                    image: "https://cryptoileths.s3.amazonaws.com/1005.png",
                    title: 'Janitor Extraordinaire',
                    name: "Wash the Throne"
                },
                {
                    image: "https://cryptoileths.s3.amazonaws.com/1006.png",
                    title: 'Lorem Ipsum',
                    name: "Lorem IpsumLorem Ipsum"
                },
                {
                    image: "https://cryptoileths.s3.amazonaws.com/1007.png",
                    title: 'Lorem Ipsum',
                    name: "Lorem IpsumLorem Ipsum"
                }
            ]
        }
    }

    render() {
        return (
            <div className='team-control' id='team'>
                <Container style={{ paddingLeft: "50px", paddingRight: "50px", backgroundColor: "white", border: "10px solid darkcyan", borderRadius: "20px" }}>
                    <header style={{ fontStyle: "italic", color: "black" }}> TEAM MEMBERS </header>
                    {/* <Row>
                        <Col className="team-control-card" md={6} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[0].image}
                                title={this.state.teams[0].title}
                                title2={this.state.teams[0].title2}
                                name={this.state.teams[0].name}
                            />
                        </Col>
                        <Col className="" md={6} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[1].image}
                                title={this.state.teams[1].title}
                                name={this.state.teams[1].name}
                            />
                        </Col>
                    </Row> */}
                    <Row>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[0].image}
                                title={this.state.teams[0].title}
                                name={this.state.teams[0].name}
                            />
                        </Col>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[1].image}
                                title={this.state.teams[1].title}
                                name={this.state.teams[1].name}
                            />
                        </Col>
                        <Col className="" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[2].image}
                                title={this.state.teams[2].title}
                                name={this.state.teams[2].name}
                            />
                        </Col>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[3].image}
                                title={this.state.teams[3].title}
                                name={this.state.teams[3].name}
                            />
                        </Col>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[4].image}
                                title={this.state.teams[4].title}
                                name={this.state.teams[4].name}
                            />
                        </Col>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[5].image}
                                title={this.state.teams[5].title}
                                name={this.state.teams[5].name}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Team