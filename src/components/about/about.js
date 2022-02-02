import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from "../../assets/cryptoilet.gif";
import YButton from "../basic/YButton";

//import CSS
import "./about.css";
class About extends React.Component {
  render() {
    return (
      <div id="about" className="about-control">
        <Container
          style={{
            backgroundColor: "white",
            border: "10px solid darkcyan",
            boxShadow: "0px 0px 90px #68c2c5",
            borderRadius: 20,
            maxWidth: 1200
          }}
        >
          <Row style={{ padding: "25px", paddingBottom: "45px" }}>
            <Col
              md={6}
              xs={12}

            >
              <text className="about-description"
                style={{ textAlign: "center" }}>
                <header style={{ color: "#E8B331", textAlign: "center" }}>
                  <span style={{ color: "black" }}>About</span>
                  <br />
                </header>
                <p style={{maxWidth: 400, margin: "auto"}}>
                  <div style={{ textAlign: "center" }}>
                    <br />
                    CrypToil<text style={{color: "#008B8B"}}>ETH</text>s is a collection of 6969 toil<text style={{color: "#008B8B"}}>ETH</text>s. Each toilet is unique and no two are exactly alike. The NFTs were randomly “flushed” from a huge number of hand drawn traits.
                    <br /><br />
                    CrypToil<text style={{color: "#008B8B"}}>ETH</text>s is not your ordinary PFP project. It is your access to a community of fun-loving people who use memes to flush the bad vibes away.<br /><br />
                    In Crypto, sh<text style={{color: "#008B8B"}}>ETH</text> always happens, sometimes influencers take a dump on you, but that’s okay…WAGMI together as a community.<br /><br />
                    <text style={{fontSize: 22}}>SO LET’S ALL FUCKING GO TO THE MOON.</text>
                  </div>
                </p>

              </text>
            </Col>
            <Col md={6} xs={12} className="image-control">
              <img
                style={{ borderRadius: 20 }}
                src={AboutGif}
                alt="about gif"
              />
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default About;
