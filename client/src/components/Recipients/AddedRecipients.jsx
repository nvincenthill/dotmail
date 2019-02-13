import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Recipient from './Recipient';

const GridContainer = styled.div`
  margin: 1rem auto;
  display: flex;
  align-self: center;
  justify-content: center;
`;

const RecipientsTable = styled.table`
  padding: 0.5rem;
  font-size: 0.75rem;
  text-align: center;

  th,
  td {
    padding: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.accentColor5};
  }
`;

const AddedRecipients = ({ recipients, removeRecipient }) => (
  <GridContainer>
    <RecipientsTable>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {recipients.map((recipient, i) => (
          <Recipient removeRecipient={removeRecipient} recipient={recipient} i={i} key={i} />
        ))}
      </tbody>
    </RecipientsTable>
  </GridContainer>
);

export default AddedRecipients;

AddedRecipients.propTypes = {
  recipients: PropTypes.instanceOf(Object).isRequired,
  removeRecipient: PropTypes.func.isRequired,
};
