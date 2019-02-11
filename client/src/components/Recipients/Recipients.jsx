import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Recipient from './Recipient';
import { StyledBtn } from '../../elements';

const RecipientListStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .add-recipient-button {
    max-width: 50vw;
    margin-bottom: 0.5rem;
    align-self: center;
    justify-content: center;
  }
`;

class Recipients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputRecipients: [],
      id: 0,
    };
    this.appendRecipient = this.appendRecipient.bind(this);
    this.removeRecipient = this.removeRecipient.bind(this);
  }

  appendRecipient() {
    const { inputRecipients, id } = this.state;
    this.setState({
      inputRecipients: [...inputRecipients, { id }],
      id: id + 1,
    });
  }

  removeRecipient(i) {
    const { inputRecipients } = this.state;
    this.setState({
      inputRecipients: [...inputRecipients.slice(0, i), ...inputRecipients.slice(i + 1)],
    });
  }

  renderRecipients() {
    const { inputRecipients } = this.state;
    const { addRecipient } = this.props;
    return inputRecipients.map((recipient, i) => (
      <Recipient
        index={i}
        removeRecipient={this.removeRecipient}
        addRecipient={addRecipient}
        key={recipient.id}
      />
    ));
  }

  render() {
    return (
      <RecipientListStyles>
        {this.renderRecipients()}
        <StyledBtn className="add-recipient-button" onClick={this.appendRecipient}>
          Add Additional Recipient
        </StyledBtn>
      </RecipientListStyles>
    );
  }
}

Recipients.propTypes = {
  addRecipient: PropTypes.func.isRequired,
};

export default Recipients;
