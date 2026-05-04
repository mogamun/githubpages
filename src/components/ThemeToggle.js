import React from 'react';
import styled from 'styled-components';
import { useTheme } from './ThemeContext';

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
`;

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  return <Button onClick={toggleTheme}>{isDark ? '☀️' : '🌙'}</Button>;
};

export default ThemeToggle;
