import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Fade } from "react-reveal";

import { Title, Text, Button } from "../styles/Styled";

const HomePage = () => {
  return (
    <div className="home-cont">
      <div className="home-row">
        <Fade duration={2000}>
          <div className="home-title">
            <Title>Welcome to the DPL Student Group Creator.</Title>
          </div>
        </Fade>
      </div>
      <div className="home-row">
        <Link to="/cohorts">
          <Button>Get Started</Button>
        </Link>
      </div>
      <Fade duration={2000}>
        <div className="home-row">
          <div className="home-col">
            <Fade duration={2000} delay={500}>
              <Text>
                We created this app for Devpoint Labs for the purpose of
                creating groups of students for Hackathons, Portfolio groups,
                Pod, or pair programing groups based on each students skill
                level, effort level, and social skills level.
              </Text>
              <div className="home-row">
                <Text>
                  <a
                    href="https://github.com/harlanevans/Student_Group_Creator"
                    target="_blank"
                    className="git-link"
                  >
                    GithubLink
                  </a>
                </Text>
              </div>
              <div className="home-row">
                <Text>
                  Created by{" "}
                  <a
                    href="https://github.com/harlanevans"
                    target="_blank"
                    className="git-link"
                  >
                    Harlan Evans{" "}
                  </a>
                  &{" "}
                  <a
                    href="https://github.com/mbcoker"
                    target="_blank"
                    className="git-link"
                  >
                    Mike Coker
                  </a>
                </Text>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HomePage;
