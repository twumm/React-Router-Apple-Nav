import React from 'react';
import styled from 'styled-components';
import navLinksData from '../navLinkData';

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
`;

export default function NavWrapper() {
  return (
    <StyledNavWrapper>
      <StyledLeftNavLinks>
        <img alt="Logo" />
      </StyledLeftNavLinks>

      <StyledCenterNavLinks>
        {
          navLinksData.map(navLink => (
            <div key={navLink.id}>
              {navLink.title}
            </div>
          ))
        }
      </StyledCenterNavLinks>

      <StyledRightNavLinks>
        <div>
          <img alt="Search" />
        </div>
        <div>
          <img alt="Shop" />
        </div>
      </StyledRightNavLinks>
    </StyledNavWrapper>
  );
}
