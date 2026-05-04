import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
    src: url('/fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
    src: url('/fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2');
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Spoqa Han Sans Neo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 400;
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  p {
    color: ${({ theme }) => theme.colors.paragraph};
    font-size: 1.125rem;
    line-height: 1.8;
  }

  strong {
    font-weight: 700;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.headline};
    font-weight: 700;
    line-height: 1.3;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  code, pre {
    font-family: Menlo, Consolas, Monaco, 'Liberation Mono', monospace;
  }

  pre {
    background: #2d2d2d;
    color: #ccc;
    padding: 1em;
    border-radius: 8px;
    overflow-x: auto;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  :not(pre) > code {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    padding: 0.15em 0.4em;
    border-radius: 4px;
    font-size: 0.875em;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    padding-left: 16px;
    margin: 16px 0;
    color: ${({ theme }) => theme.colors.gray};
    font-style: italic;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @keyframes slideUpFade {
    0% {
      opacity: 0;
      transform: translateY(60px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .horizontal-scroll::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
