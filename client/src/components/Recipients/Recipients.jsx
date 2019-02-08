import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Recipient from './Recipient';
import { StyledBtn } from '../../elements';

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
      <div>
        <h3>Email Recipients</h3>
        {this.renderRecipients()}
        <StyledBtn onClick={this.appendRecipient}>Add Recipient</StyledBtn>
      </div>
    );
  }
}

Recipients.propTypes = {
  addRecipient: PropTypes.func.isRequired,
};

export default Recipients;
