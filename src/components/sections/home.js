import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { ReactTyped } from 'react-typed';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100vh;
  background-color: var(--purple);

  padding: 0 150px;

  @media (max-width: 1080px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0 35px;
  }

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    color: var(--white);
    font-size: clamp(80px, 10vw, 400px);
  }
`;

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const typewritterRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const typewritter = (
    <h1 className="title-heading">
      <ReactTyped strings={['hello, world!']} typeSpeed={150} cursorChar="_" showCursor={true} />
    </h1>
  );

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames="fadeup" timeout={loaderDelay} nodeRef={typewritterRef}>
            <div ref={typewritterRef} style={{ transitionDelay: `100ms` }}>
              {typewritter}
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Home;
