/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="favicon-32x32"
      rel="icon"
      href="/favicon-32x32.png?v=82386017e0ae2213e84c51cd2b931f89"
      type="image/png"
      sizes="32x32"
    />,
    <link
      key="favicon-16x16"
      rel="icon"
      href="/favicon-16x16.png?v=82386017e0ae2213e84c51cd2b931f89"
      type="image/png"
      sizes="16x16"
    />,
    <link key="favicon-ico" rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />,
    <link
      key="apple-touch-icon"
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-touch-icon.png"
    />,
  ]);
};
