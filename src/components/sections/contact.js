import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import Icon from '../icons/icon';

const StyledContactSection = styled.section`
  background-color: var(--pink);
  padding: 100px 150px;
  min-height: 100vh;

  @media (max-width: 1080px) {
    padding: 50px 150px;
  }
  @media (max-width: 768px) {
    padding: 100px 50px;
  }
  @media (max-width: 480px) {
    padding: 60px 25px;
  }

  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--pink);
    font-family: var(--font);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .social-media-icon {
    margin: 20px;
    max-width: 40px;

    &:hover {
      transform: rotate(-15deg);
      color: var(--pink);
    }
  }

  .contact-info-div {
    width: 350px;
    height: 350px;
    align-content: center;
    background-color: var(--white);
    background-clip: content-box;
    border-radius: 200px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="main-heading">Contact</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="contact-info-div">
          <p>Feel free to say hi!</p>

          <a
            href={'https://github.com/accunha11'}
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-icon">
            <Icon name="GitHub" />
          </a>
          <a
            href={'https://www.linkedin.com/in/ana-cunha1/'}
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-icon">
            <Icon name="Linkedin" />
          </a>
          <a href={`mailto:${email}`} className="social-media-icon">
            <Icon name="Mail" />
          </a>
        </div>
      </div>
    </StyledContactSection>
  );
};

export default Contact;
