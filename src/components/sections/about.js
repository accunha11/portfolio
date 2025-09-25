import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  background-color: var(--yellow);
  grid-gap: 50px;
  padding: 100px 300px;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1080px) {
    padding: 80px 150px;
  }
  @media (max-width: 768px) {
    padding: 80px 50px;
  }
  @media (max-width: 480px) {
    padding: 80px 25px;
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font);
      font-size: var(--fz-md);

      &:before {
        content: '-';
        position: absolute;
        left: 0;
        color: var(--purple);
        font-size: var(--fz-md);
        line-height: 25px;
      }
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="main-heading">About Me</h2>

      <div>
        <StyledText>
          <div>
            <p>
              Hey, I'm Ana! <br />
              <br />
              I’m a full-stack software engineer with a focus on AI development. I have a Bachelor’s
              in Cognitive Science from UC San Diego, where I specialized in machine learning and
              neural computation. I’m currently pursuing a Master’s in Informatics at TUM, focusing
              on machine learning and analytics.
              <br />
              <br />
              This site includes a selection of my past experiences and projects. I’m currently
              focused on expanding into more AI and research-driven projects, with new work coming
              soon.
            </p>
          </div>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;
