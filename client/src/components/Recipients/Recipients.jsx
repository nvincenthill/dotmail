import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Recipient from './AddRecipient';
import AddedRecipients from './AddedRecipients';
import { StyledBtn } from '../../elements';

const RecipientListStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  button {
    max-width: 50vw;
    margin-bottom: 0.5rem;
    align-self: center;
    justify-content: center;
  }

  .toggle-display {
    margin-left: 1rem;
  }
`;

class Recipients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputRecipients: [],
      id: 0,
      isRecipientsTableDisplayed: false,
    };
    this.appendRecipient = this.appendRecipient.bind(this);
    this.cancelRecipient = this.cancelRecipient.bind(this);
    this.toggleTableDisplay = this.toggleTableDisplay.bind(this);
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

  toggleTableDisplay() {
    this.setState(prevState => ({
      isRecipientsTableDisplayed: !prevState.isRecipientsTableDisplayed,
    }));
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

  render() {
    const { isRecipientsTableDisplayed } = this.state;
    const { recipients, removeRecipient } = this.props;
    const toggleRecipientsButton = (
      <StyledBtn onClick={this.toggleTableDisplay} area="showRecipients" className="toggle-display">
        {!isRecipientsTableDisplayed ? 'Show Recipients' : 'Hide Recipients'}
      </StyledBtn>
    );
    const recipientsTable = (
      <AddedRecipients recipients={recipients} removeRecipient={removeRecipient} />
    );

    return (
      <Fragment>
        {this.renderRecipients()}
        {isRecipientsTableDisplayed && recipients.length > 0 && recipientsTable}
        <RecipientListStyles>
          <StyledBtn area="addRecipient" onClick={this.appendRecipient}>
            Add Additional Recipient
          </StyledBtn>
          {recipients.length > 0 && toggleRecipientsButton}
        </RecipientListStyles>
      </Fragment>
    );
  }
}

Recipients.propTypes = {
  addRecipient: PropTypes.func.isRequired,
  removeRecipient: PropTypes.func.isRequired,
  recipients: PropTypes.instanceOf(Object).isRequired,
};

export default Recipients;
