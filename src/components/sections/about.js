import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  background-color: var(--yellow);
  grid-gap: 50px;
  padding: 100px 300px;

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
    grid-template-columns: repeat(3, minmax(140px, 200px));
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
        content: '>';
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

  const skills = ['Python', 'React', 'Java', 'MongoDB', 'Express', 'Swift'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="main-heading">About Me</h2>

      <div>
        <StyledText>
          <div>
            <p>
              Hey, my name is Ana! <br />
              <br />
              I'm a software engineer with a degree from UC San Diego in cognitive science
              especializing in machine learning and neural computation.
              <br />
              <br />
              I love creating cool projects and am always up for a new challenge! <br />
              <br /> I coded up this webstie to share a little about my past experience and some of
              my favorite projects. <br />
              <br />
              Here are some of the technologies I've been working with recently:
            </p>
            <ul className="skills-list">
              {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;
