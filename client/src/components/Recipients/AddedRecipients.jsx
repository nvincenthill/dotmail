import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridContainer = styled.div`
  margin: 1rem auto;
  display: grid;
  align-self: center;
  justify-content: center;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0.5rem;
`;

const Recipient = styled.h6`
  margin: 0;
  font-size: 0.5rem;
  padding: 0.25rem;
  background: ${({ theme }) => theme.colors.accentColor2};
  color: ${({ theme }) => theme.colors.accentColor1};
  box-shadow: ${({ theme }) => theme.elevations.med};
  position: relative;

  span {
    position: absolute;
    top: 0;
    left: 100%;
    width: 0.5rem;
    height: 0.5rem;
    padding: 0.25rem;
    color: #fff;
    background: ${({ theme }) => theme.colors.accentColor3};
    transform: translate(-70%, -30%);
    font-size: 0.1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
  }
`;

const AddedRecipients = ({ recipients, removeRecipient }) => (
  <GridContainer>
    {recipients.map((recipient, i) => {
      const { firstName, lastName } = recipient;
      return (
        <Recipient key={i}>
          <span onClick={() => removeRecipient({ i })}>X</span>
          {firstName} {lastName}
        </Recipient>
      );
    })}
  </GridContainer>
);

export default AddedRecipients;

AddedRecipients.propTypes = {
  recipients: PropTypes.instanceOf(Object).isRequired,
  removeRecipient: PropTypes.func.isRequired,
};
