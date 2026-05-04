import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  padding: 32px 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.875rem;
`;

const Footer = () => (
  <Wrapper>
    <p>&copy; {new Date().getFullYear()} My Dev Blog. All rights reserved.</p>
  </Wrapper>
);

export default Footer;
