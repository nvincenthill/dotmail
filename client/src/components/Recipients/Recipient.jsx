import React from 'react';
import PropTypes from 'prop-types';

import { StyledBtn } from '../../elements';

const Recipient = ({ recipient, removeRecipient, i }) => (
  <tr>
    <td>{recipient.firstName}</td>
    <td>{recipient.lastName}</td>
    <td>{recipient.email}</td>
    <td>
      <StyledBtn fontSize="0.5rem" category="cancel" onClick={() => removeRecipient({ i })}>
        Remove
      </StyledBtn>
    </td>
  </tr>
);

Recipient.propTypes = {
  recipient: PropTypes.instanceOf(Object).isRequired,
  removeRecipient: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
};

export default Recipient;
