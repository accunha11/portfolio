import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const StyledJobsSection = styled.section`
  background-color: var(--green);
  min-height: 100vh;

  padding: 100px 300px;

  @media (max-width: 1080px) {
    padding: 80px 150px;
  }
  @media (max-width: 768px) {
    padding: 80px 15px;
  }
`;

const StyledTabPanel = styled(SwiperSlide)`
  background-color: var(--white);
  margin-top: 30px;
  border-radius: 15px;

  .inner-padding {
    padding: 20px;
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--gray);
    font-family: var(--font);
    font-size: var(--fz-xs);
  }
`;

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { frontmatter: { date: ASC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `);

  const jobsData = data.jobs.edges;

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledJobsSection id="jobs" ref={revealContainer}>
      <h2 className="main-heading">Experience</h2>

      <div className="inner">
        <Swiper
          grabCursor={true}
          spaceBetween={30}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { title, company, range } = frontmatter;

              return (
                <SwiperSlide key={i} width={'auto'}>
                  <StyledTabPanel>
                    <div className="inner-padding">
                      <h3>
                        <span>{title}</span>
                        <span className="company">
                          &nbsp;@&nbsp;
                          <span className="inline-link">{company}</span>
                        </span>
                      </h3>

                      <p className="range">{range}</p>

                      <div
                        dangerouslySetInnerHTML={{ __html: html }}
                        style={{ fontSize: 'var(--fz-lg)' }}
                      />
                    </div>
                  </StyledTabPanel>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
