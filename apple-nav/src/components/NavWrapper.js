import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import navLinksData from '../navLinkData';
import SubNav from './SubNav';

const StyledNavWrapper = styled.div`
  background-color: #333333;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  line-height: 3;
`;

const StyledLeftNavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 8%;
`;

const StyledCenterNavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

const StyledRightNavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 16%;
  align-items: center;
`;

const StyledNavLinkMain = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

export default function NavWrapper() {
  return (
    <div>
      <StyledNavWrapper>
        <StyledLeftNavLinks>
          <img alt="Logo" src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" />
        </StyledLeftNavLinks>

        <StyledCenterNavLinks>
          {
            navLinksData.map(navLink => (
              <StyledNavLinkMain
                key={navLink.id}
                to={`/${navLink.title.toLowerCase()}`}
                activeClassName="active"
              >
                {navLink.title}
              </StyledNavLinkMain>
            ))
          }
        </StyledCenterNavLinks>

        <StyledRightNavLinks>
          <img alt="Search" src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" />
          <img alt="Shop" src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg" />
        </StyledRightNavLinks>
      </StyledNavWrapper>

      {
        navLinksData.map(navLink => (
          <Route
            key={navLink.id}
            path={`/${navLink.title.toLowerCase()}`}
            render={props => (
              <SubNav
                {...props}
                subLinks={navLink.subLink}
                linkTitle={navLink.title}
              />
            )}
          />
        ))
      }
    </div>
  );
}
