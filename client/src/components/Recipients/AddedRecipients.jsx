import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Recipient from './Recipient';

const GridContainer = styled.div`
  margin: 1rem auto;
  display: grid;
  align-self: center;
  justify-content: center;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0.5rem;
`;

const AddedRecipients = ({ recipients, removeRecipient }) => (
  <GridContainer>
    {recipients.map((recipient, i) => (
      <Recipient removeRecipient={removeRecipient} recipient={recipient} i={i} key={i} />
    ))}
  </GridContainer>
);

export default AddedRecipients;

AddedRecipients.propTypes = {
  recipients: PropTypes.instanceOf(Object).isRequired,
  removeRecipient: PropTypes.func.isRequired,
};
