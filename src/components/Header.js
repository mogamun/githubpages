import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import ThemeToggle from './ThemeToggle';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;
  color: #fff;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const textAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const tailAppear = keyframes`
  0% {
    opacity: 0;
    stroke-dashoffset: 60;
    transform: scaleX(0) translateX(-10px);
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    stroke-dashoffset: 0;
    transform: scaleX(1) translateX(0);
  }
`;

const LogoWrap = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
`;

const LogoText = styled.span`
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: -0.5px;
  color: #fff;
  opacity: 0;
  animation: ${textAppear} 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
`;

const TailSvg = styled.svg`
  opacity: 0;
  animation: ${tailAppear} 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
  transform-origin: left center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00c73c;
    opacity: 1;
  }
`;

const DropdownWrap = styled.li`
  position: relative;
`;

const DropdownTrigger = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.3s ease;
  font-family: inherit;

  &:hover {
    color: #00c73c;
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  min-width: 220px;
  background: rgba(20, 20, 30, 0.95);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 8px;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-8px)')};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity 0.2s ease, transform 0.2s ease;
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 8px;
  text-decoration: none;
  color: #fff;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const DropdownIcon = styled.span`
  font-size: 1.4rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f3460, #16213e);
  border-radius: 8px;
  flex-shrink: 0;
`;

const DropdownInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropdownItemTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
`;

const DropdownItemDesc = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
`;

const apps = [
  { icon: '📝', title: '일기써영', desc: 'AI 영어 일기 교정', to: '/todaydailyeng/' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <Wrapper>
      <LogoWrap to="/">
        <LogoText>EightTails</LogoText>
        <TailSvg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M4 20C6 16 10 12 14 14C18 16 20 10 24 8"
            stroke="#00c73c"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="60"
            strokeDashoffset="0"
          />
          <path
            d="M24 8L22 12M24 8L20 9"
            stroke="#00c73c"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </TailSvg>
      </LogoWrap>
      <Nav>
        <NavLinks>
          <li><NavLink to="/">Story</NavLink></li>
          <li><NavLink to="/">Tech</NavLink></li>
          <li><NavLink to="/">Design</NavLink></li>
          <li><NavLink to="/">Culture</NavLink></li>
          <DropdownWrap ref={wrapRef}>
            <DropdownTrigger $open={open} onClick={() => setOpen(!open)}>
              Apps
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </DropdownTrigger>
            <DropdownMenu $open={open}>
              {apps.map((app) => (
                <DropdownItem key={app.to} to={app.to} onClick={() => setOpen(false)}>
                  <DropdownIcon>{app.icon}</DropdownIcon>
                  <DropdownInfo>
                    <DropdownItemTitle>{app.title}</DropdownItemTitle>
                    <DropdownItemDesc>{app.desc}</DropdownItemDesc>
                  </DropdownInfo>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </DropdownWrap>
        </NavLinks>
        <ThemeToggle />
      </Nav>
    </Wrapper>
  );
};

export default Header;
