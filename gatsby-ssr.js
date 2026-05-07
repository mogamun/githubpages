const React = require('react');

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const existing = getHeadComponents();

  const iconLinks = [
    React.createElement('link', { key: 'favicon-32', rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' }),
    React.createElement('link', { key: 'favicon-16', rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' }),
    React.createElement('link', { key: 'icon-192', rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' }),
    React.createElement('link', { key: 'apple-touch', rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }),
  ];

  replaceHeadComponents([...existing, ...iconLinks]);
};
