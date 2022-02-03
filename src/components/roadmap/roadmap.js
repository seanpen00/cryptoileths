import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import "./roadmap.css";
import NewRoadMap from "../newroadmap/newroadmap";

//import Assets
import roadmap from "../../assets/Roadmap.mp4";

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roadmaps: [
        {
          tag: "25%",
          title: "Initiate Twitter and MEME Contests to Win Additional CrypToilETHs",
          content: "Twitter and MEME contests will begin, allowing community members to win additional CrypToilETHs."
        },
        {
          tag: "50%",
          title: "CrypToilETHs Will Start Revealing",
          content: "The CrypToilETHs will officially start revealing! Refresh your NFTs on OpenSea to view your revealed CrypToilETHs."
        },
        {
          tag: "75%",
          title: "Listing on Rarity Sites (rarity.tools, raritysniper, etc.)",
          content: "CrypToilETHs will officially be listed on rarity tracking websites, allowing users to see how rare and valuable their NFTs are."
        },
        {
          tag: "100%",
          title: "Chance to Win 1 ETH and 200 Free CrypToilETHs",
          content: "Members of our community will have the chance to win 1 ETH and 200 FREE CrypToilETHs!"}
      ],
    };
  }

  render() {
    return (
      <div
        className="roadmap-control"
        id="roadmap"
        style={{
          paddingTop: 50,
          paddingBottom: 50,
          marginLeft: 2,
          marginRight: 2,
          borderTop: "5px solid #68c2c5",
          borderBottom: "10px solid #68c2c5"
        }}
      >
        <Container
          style={{
            backgroundColor: "white",
            padding: 30,
            border: "10px solid darkcyan",
            borderRadius: 20,
            textAlign: "center",
            boxShadow: "0px 0px 50px #68c2c5",
          }}
        >
          <header>
            <text style={{ lineHeight: 1 }}>ROADMAP</text>
          </header>
          {/* <p className='roadmap-description'>
                        Welcome to the NFT Lottery Community.<br/>Get ready to go to the MOON!
                    </p> */}
          {/* <img  className="roadimage"style={{border:"solid 5px black", borderRadius: 20}}src="https://github.com/DeadBanditz/banditzsite/blob/main/src/assets/wood.png?raw=true" /> */}
          <Row style={{ paddingTop: 30 }}>
            <Col style={{ color: "white" }}>
              {this.state.roadmaps.map((item, index) => {
                return (
                  <RoadMapItem
                    style={{ color: "black" }}
                    key={index}
                    tag={item.tag}
                    title={item.title}
                    content={item.content}
                    content2={item.content2}
                    content3={item.content3}
                    content4={item.content4}
                    content5={item.content5}
                    content6={item.content6}
                  />
                );
              })}
            </Col>
          </Row>
          {/* <NewRoadMap /> */}
        </Container>
      </div>
    );
  }
}

export default RoadMap;
