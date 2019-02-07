import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Recipient from './Recipient';

class Recipients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      inputRecipients: [],
    };
    this.appendRecipient = this.appendRecipient.bind(this);
  }

  appendRecipient() {
    const { id, inputRecipients } = this.state;
    const { addRecipient } = this.props;
    this.setState({
      inputRecipients: [...inputRecipients, <Recipient addRecipient={addRecipient} key={id} />],
      id: id + 1,
    });
  }

  render() {
    const { inputRecipients } = this.state;
    return (
      <div>
        <h3>Email Recipients</h3>
        {inputRecipients}
        <button type="button" onClick={this.appendRecipient}>
          Add a new recipient
        </button>
      </div>
    );
  }
}

Recipients.propTypes = {
  addRecipient: PropTypes.func.isRequired,
};

export default Recipients;
