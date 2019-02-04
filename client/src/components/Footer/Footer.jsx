import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  font-size: 0.75rem;
  padding: 1rem;
`;

const Footer = () => (
  <FooterStyles>
    <p>Copyright © 2019 Nicholas Vincent-Hill</p>
  </FooterStyles>
);

export default Footer;
