import React, { useState, useEffect, useRef } from 'react';
import { Link, withPrefix } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navLinks } from '@config';
import { loaderDelay } from '@utils';
import { Menu } from '@components';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  z-index: 10;
  top: 0;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--white);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    height: var(--nav-scroll-height);
    transform: translateY(0px);
    background-color: var(--white);
    box-shadow: 0 10px 5px -10px #404040;
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--gray);
  font-family: var(--font);
  counter-reset: item 0;
  z-index: 12;
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      font-size: var(--fz-sm);

      a {
        padding: 10px;
        &:hover {
          color: var(--purple);
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

const Nav = () => {
  const [isMounted, setIsMounted] = useState(false);
  const linkRefs = useRef(navLinks.map(() => React.createRef()));
  const resumeRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const timeout = loaderDelay;

  const ResumeLink = (
    <a
      className="resume-button"
      href={withPrefix('/resume.pdf')}
      target="_blank"
      rel="noopener noreferrer"
      ref={resumeRef}>
      Resume
    </a>
  );

  return (
    <StyledHeader>
      <StyledNav>
        <StyledLinks>
          <ol>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition
                    in={isMounted}
                    key={i}
                    classNames="fadedown"
                    timeout={timeout}
                    nodeRef={linkRefs.current[i]}>
                    <li
                      key={i}
                      style={{ transitionDelay: `${i * 100}ms` }}
                      ref={linkRefs.current[i]}>
                      <Link to={url}>{name}</Link>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ol>
        </StyledLinks>

        <StyledLinks>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition
                in={isMounted}
                classNames="fadedown"
                timeout={timeout}
                nodeRef={resumeRef}>
                <div style={{ transitionDelay: `500ms` }}>{ResumeLink}</div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </StyledLinks>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition in={isMounted} classNames="fade" timeout={timeout} nodeRef={menuRef}>
              <Menu ref={menuRef} />
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
