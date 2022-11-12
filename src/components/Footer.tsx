import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  color: white;
  height: 40px;
  width: 100%;
  line-height: 40px;
  text-align: center;
  background: linear-gradient(45deg, #292929 25%, transparent 25%, transparent 75%, #292929 75%), linear-gradient(45deg, #292929 25%, transparent 25%, transparent 75%, #292929 75%) 0.1875em 0.1875em, radial-gradient(at 50% 0, #484847, #090909);
  background-size: 0.375em 0.375em, 0.375em 0.375em, 100% 100%;
  position: fixed;
  bottom: 0;
`;

const Footer = () => {
  return <FooterWrapper> NETFLIX </FooterWrapper>;
};

export default Footer;