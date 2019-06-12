import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledSubNavSection = styled.section`
  background-color: ${props => (props.linkTitle === 'TV' ? '#141414' : 'rgba(242,242,242,0.7)')};
  color: ${props => (props.linkTitle === 'TV' ? 'white' : 'black')};
`;

const StyledSubLinkNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 60px; */
  width: 90%;
  margin: 0 auto;
`;

const StyledSubLinkItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const StyledSubLinkItemDiv = styled.div`

  cursor: pointer;
  .image-icon {
    text-align: center;
  }
  .title {
    font-size: 11px;
    line-height: 1.09.91;
    font-weight: 400;
    letter-spacing: -.008em;
    text-align: center;
    /* padding-bottom: 10px; */
  }
  .new-product {
    font-size: 9px;
    padding: 0;
    margin: 0;
  }
  .text-section {
    display: flex;
    line-height: 2;
    flex-direction: column;
  }
`;

const StyledImageFigure = styled.figure`
  width: 52px;
  height: 54px;
  background-size: 52px 54px;
  background-repeat: no-repeat;
  background-image: url(${props => props.imageUrl});
  margin: 0 auto 6px;
`;

export default function SubNav({ subLinks, linkTitle, match }) {
  return (
    <StyledSubNavSection linkTitle={linkTitle}>
      <StyledSubLinkNav>
        {
          subLinks
            ? subLinks.map(subLink => (
              <StyledSubLinkItem
                key={subLink.id}
                to={`${match.path}/${subLink.id}`}
              >
                <StyledSubLinkItemDiv>
                  <StyledImageFigure imageUrl={subLink.imageUrl} />
                  <div className="text-section">
                    <span className="title">{subLink.title}</span>
                    {/* {
                      subLink.new
                        ? <span className="new-product">New</span>
                        : null
                    } */}
                  </div>
                </StyledSubLinkItemDiv>
              </StyledSubLinkItem>
            ))
            : null
        }
      </StyledSubLinkNav>
    </StyledSubNavSection>
  );
}
