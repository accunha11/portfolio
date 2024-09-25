import { css } from 'styled-components';

const variables = css`
  :root {
    --white: #f9f7fd;
    --light-gray: #e8e6ec;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --gray: #404040;
    --purple: #ae8fdb;
    --lighest-gray: #f1eff5;
    --green: #6fddbf;
    --yellow: #fef8b4;
    --pink: #f1c3bf;
    --blue: #a1c6ea;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --font: 'Poppins';

    --fz-xxs: 10px;
    --fz-xs: 14px;
    --fz-sm: 16px;
    --fz-md: 18px;
    --fz-lg: 19px;
    --fz-xl: 21px;
    --fz-xxl: 23px;
    --fz-heading: 30px;

    --border-radius: 15px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 50px;
    --tab-width: 150px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
