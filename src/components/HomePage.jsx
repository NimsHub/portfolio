import React from "react";
import { Typography, Grid, Container } from "@mui/material";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Grow } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import Image from "./img";
import Css from "./../icons/css";
import Scss from "./../icons/sass";
import Git from "./../icons/git";
import Github from "./../icons/github";
import Html from "./../icons/html";
import Js from "./../icons/js";
import MongoDb from "./../icons/mongodb";
import Node from "./../icons/node";
import ReactIcon from "./../icons/react";
import Terminal from "./../icons/terminal";
import Vstudio from "./../icons/visual_studio";
import VScode from "./../icons/vs_code";
import FaceBook from "./../icons/facebook";
import Instagram from "./../icons/instagram";
import Whatsapp from "./../icons/whatsapp";
import GithubContact from "./../icons/githubContact";
// import Twitter from "./../icons/twitter";
import LinkedIn from "./../icons/linkedin";
import Gmail from "./../icons/gmail";
import Photo from "./../icons/avatar.png";
const HomePage = () => {
  return (
    <Grow in>
      <div id="main">
        <Grid container>
          <Grid container direction="row" marginTop={4} justifyContent="center">
            <Grid container xl={1} lg={1} md={2} sm={8} xs={10} justifyContent="center">
              <Avatar style={{ width: "120px", height: "120px" }} src={Photo} />
            </Grid>
            <Grid container xl={3} lg={4} md={5} sm={10} xs={10} marginTop={5} justifyContent="center">
              <Typography
                variant="h4"
                color="white"
                textAlign="center"
                sx={{ fontFamily: "Segoe UI", fontWeight: "400" }}>
                Nirmala Madhusankha
              </Typography>
            </Grid>
            <Grid container xl={7} lg={6} md={3} sm={0} xs={0}></Grid>
          </Grid>
          <Grid container marginBottom={8} spacing={1} paddingTop={1} justifyContent="center" alignItems="center">
            <Grid item lg={5} md={12} sm={12} xs={12}>
              <Container>
                <Image />
              </Container>
            </Grid>
            <Grid item lg={7} md={10} sm={12} xs={12}>
              <Container>
                <Container sx={{ padding: 3 }}>
                  <Typography variant="h3" color="white" marginBottom={3}>
                    Hello there !
                    <hr style={{ width: "70%", background: "whitesmoke", margin: "3px 0 0 0" }} />
                  </Typography>
                  <Typography variant="subtitle1" color="white" sx={{ fontFamily: "Segoe UI", fontWeight: "400" }}>
                    I'm an Undergraduate Engineering student at University of Ruhuna Srilanka.Currently studies under
                    Electrical and Information Engineering department and to be specialized in Software Engineering.At
                    the moment I'm interested in Web Development and doing some related stuff.Below I have listed some
                    of skills I've gained recently related to Web Dev and my contact links.This portfolio will be
                    updated as I progress through my carrier.
                  </Typography>
                </Container>
              </Container>
            </Grid>
          </Grid>
          <Grid container spacing={2} marginBottom={2} justifyContent="center">
            <Grid item lg={5} md={10} sm={12} xs={12} direction="column">
              <Container>
                <div>
                  <Container sx={{ padding: 3 }}>
                    <Typography variant="h6" color="white" marginBottom="20px" className="sub-text">
                      Currently Used Tools and Technologies
                      <hr style={{ width: "80%", background: "whitesmoke", margin: "3px 0 0 0" }} />
                    </Typography>
                    <Grid
                      container
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}>
                      <Router>
                        <Link to={{ pathname: "https://code.visualstudio.com/" }} target="_blank">
                          <VScode />
                        </Link>
                        <Vstudio />
                        <Html />
                        <Css />
                        <Scss />
                        <Js />
                        <ReactIcon />
                        <Node />
                        <MongoDb />
                        <Git />
                        <Github />
                        <Terminal />
                      </Router>
                    </Grid>
                  </Container>
                </div>
              </Container>
            </Grid>
            <Grid item lg={7} md={10} sm={12} xs={12}>
              <Container sx={{ padding: 3, marginLeft: 3 }}>
                <Typography variant="h6" color="white" marginBottom="20px" className="sub-text">
                  Reach Me
                  <hr style={{ width: "50%", background: "whitesmoke", margin: "3px 0 0 0" }} />
                </Typography>
                <div>
                  <Router>
                    <Link to={{ pathname: "mailto:nirmalasabaragamuwa@gmail.com" }} target="_blank">
                      <Gmail />
                    </Link>
                    <Link to={{ pathname: "https://www.linkedin.com/in/nirmala-sabaragamuwa" }} target="_blank">
                      <LinkedIn />
                    </Link>
                    <Link to={{ pathname: "https://github.com/Nims98" }} target="_blank">
                      <GithubContact />
                    </Link>
                    {/* <Link to={{ pathname: "https://twitter.com/Nims_9T8" }} target="_blank">
                        <Twitter />
                      </Link> */}
                    <Link to={{ pathname: "https://www.facebook.com/nirmala.madhusankha.1/" }} target="_blank">
                      <FaceBook />
                    </Link>
                    <Link to={{ pathname: "https://www.instagram.com/mad_nirmala/" }} target="_blank">
                      <Instagram />
                    </Link>
                    {/* <Link to={{ pathname: "https://wa.me/94719629058" }} target="_blank">
                      <Whatsapp />
                    </Link> */}
                  </Router>
                </div>
              </Container>
            </Grid>
          </Grid>
          <Box className="footer">
            <Typography variant="body2" color="white">
              ©️ 2021 All Rights Reserved
            </Typography>
          </Box>
        </Grid>
      </div>
    </Grow>
  );
};

export default HomePage;
