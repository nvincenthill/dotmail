import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Recipient from './Recipient';
import AddedRecipients from './AddedRecipients';
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
    this.cancelRecipient = this.cancelRecipient.bind(this);
    this.renderAddedRecipients = this.renderAddedRecipients.bind(this);
  }

  appendRecipient() {
    const { inputRecipients, id } = this.state;
    this.setState({
      inputRecipients: [...inputRecipients, { id }],
      id: id + 1,
    });
  }

  cancelRecipient(i) {
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
        cancelRecipient={this.cancelRecipient}
        addRecipient={addRecipient}
        key={recipient.id}
      />
    ));
  }

  renderAddedRecipients() {
    const { recipients, removeRecipient } = this.props;
    return <AddedRecipients recipients={recipients} removeRecipient={removeRecipient} />;
  }

  render() {
    return (
      <RecipientListStyles>
        {this.renderRecipients()}
        {this.renderAddedRecipients()}
        <StyledBtn className="add-recipient-button" onClick={this.appendRecipient}>
          Add Additional Recipient
        </StyledBtn>
      </RecipientListStyles>
    );
  }
}

Recipients.propTypes = {
  addRecipient: PropTypes.func.isRequired,
  removeRecipient: PropTypes.func.isRequired,
  recipients: PropTypes.instanceOf(Object).isRequired,
};

export default Recipients;
