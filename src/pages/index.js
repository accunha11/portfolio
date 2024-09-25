import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Home, About, Jobs, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
  margin-bottom: -100px;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Home />
      <About />
      <Jobs />
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
