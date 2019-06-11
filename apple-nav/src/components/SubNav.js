import React from 'react';
import styled from 'styled-components';

const StyledSubNavSection = styled.section`
  background-color: rgba(242,242,242,0.7);
`;

const StyledSubLinkNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 60px; */
  width: 90%;
  margin: 0 auto;
`;

const StyledSubLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSubLinkItemA = styled.a`
  cursor: pointer;
  .image-icon {
    text-align: center;
  }
  .title {
    font-size: 11px;
    line-height: 1.09.91;
    font-weight: 400;
    letter-spacing: -.008em;
  }
`;

export default function SubNav({ subLinks }) {
  return (
    <StyledSubNavSection>
      <StyledSubLinkNav>
        {
          subLinks
            ? subLinks.map(subLink => (
              <StyledSubLinkItem
                key={subLink.id}
              >
                <StyledSubLinkItemA>
                  <img alt={subLink.title} src={subLink.imageUrl} width={20} height={54} />
                  <div className="title">{subLink.title}</div>
                </StyledSubLinkItemA>
              </StyledSubLinkItem>
            ))
            : null
        }
      </StyledSubLinkNav>
    </StyledSubNavSection>
  );
}
