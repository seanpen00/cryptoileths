import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import "./faqmap.css";

//import Assets
import roadmap from "../../assets/Roadmap.mp4";

//import Component
import RoadMapItem from "./faqmapitem";
class RoadMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roadmaps: [
        {
          tag: "1",
          title: "What is an NFT?",
          content:
            'An NFT stands for "Non-fungible token" and is a fancy way of saying it\'s a unique, one of a kind digital item that users can buy, own, and trade. Some NFTs main purpose is to be digital art.',
        },
        {
          tag: "3",
          title: "What is Metamask?",
          content:
            "Metamask is a crypto wallet that can store your Ethereum and is needed to purchase and mint NFTs. Having a wallet gives you an Ethereum address (i.e. 0xABCD....1234), this is where your NFT will be stored. You can get Metamask and learn more here: https://metamask.io/",
        },
        {
          tag: "4",
          title: "How do I join the community?",
          content:
            "Follow our Twitter and wait for further announcements.",
        },
        {
          tag: "4",
          title: "Which blockchain will the NFT be launched?",
          content: "Ethereum.",
        },
        {
          tag: "4",
          title: "How much is it to mint a CryptoilETHs NFT?",
          content: "0.0269 ETH + Gas.",
        },
        /*{
          tag: "4",
          title: "Where do VIP Pass holders vote?",
          content:
            "Shortly after launch, we will set up our voting platform on snapshop.org, allowing verified holders to vote and even introduce their own proposals. There’s also a VIP SECTION in the community discord only accessible to verified VIP Pass holders.",
        },
        {
          tag: "4",
          title: "Where will the raffles take place?",
          content:
            "Raffles will be hosted on OpenSea and will be on the Polygon Matic blockchain to reduce fees.",
        },
        {
          tag: "4",
          title: "How do raffles work?",
          content:
            "Smart contract capability allows us to use NFTs as a form of a raffle system. You along with others will own shares to an individual NFT, once all shares are owned the listed reward will randomly be distributed to the lucky winner. All others will lose that NFT from their wallet & are welcome to join another ongoing raffle.",
        }*/,
      ],
    };
  }

  render() {
    return (
      <div
        className="roadmap-control"
        id="roadmap"
        style={{ backgroundColor: "white", backgroundImage: "none", marginTop: 0 }}
      >
        <Container style={{ backgroundColor: "white" }}>
          <header
            style={{ fontStyle: "normal", color: "black", textAlign: "center" }}
          >
            FAQ's
          </header>
          <Row style={{ paddingTop: 0 }}>
            <Col>
              {this.state.roadmaps.map((item, index) => {
                return (
                  <RoadMapItem
                    style={{ color: "black" }}
                    key={index}
                    tag={item.tag}
                    title={item.title}
                    content={item.content}
                  />
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RoadMap;
