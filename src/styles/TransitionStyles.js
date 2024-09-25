import { css } from 'styled-components';

// https://reactcommunity.org/react-transition-group/css-transition

const TransitionStyles = css`
  /* Fade up */
  #root .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition:
      opacity 300ms var(--easing),
      transform 300ms var(--easing);
  }

  #root .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition:
      opacity 300ms var(--easing),
      transform 300ms var(--easing);
  }

  /* Fade down */
  #root .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition:
      opacity 300ms var(--easing),
      transform 300ms var(--easing);
  }

  #root .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition:
      opacity 300ms var(--easing),
      transform 300ms var(--easing);
  }

  /* Fade */
  #root .fade-enter {
    opacity: 0;
  }
  #root .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms var(--easing);
  }
  #root .fade-exit {
    opacity: 1;
  }
  #root .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms var(--easing);
  }
`;

export default TransitionStyles;
