import React from 'react';
import PropTypes from 'prop-types';

import FormContainer from './FormContainer';
import CustomInput from './CustomInput';
import TemplateSelector from './TemplateSelector';
import TextArea from './TextArea';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { updateField } = this.props;
    updateField({ value, field: name });
  }

  render() {
    const { templates, currentUser, form } = this.props;
    const { name } = currentUser;
    const { subjectLine, message } = form;
    return (
      <FormContainer onSubmit={this.handleTemplateSubmission} method="POST">
        <TemplateSelector
          name="displayedTemplate"
          value={name}
          onChange={this.handleChange}
          templates={templates}
        >
          Select a template:
        </TemplateSelector>
        <CustomInput type="text" name="name" value={name} onChange={this.handleChange}>
          Sender:
        </CustomInput>
        <CustomInput
          type="email"
          name="email"
          aria-describedby="emailHelp"
          value={currentUser.email}
          onChange={this.handleChange}
        >
          Recipient:
        </CustomInput>
        <CustomInput
          name="subjectLine"
          value={subjectLine}
          onChange={this.handleChange}
          type="text"
        >
          Subject:
        </CustomInput>
        <TextArea name="message" rows="5" value={message} onChange={this.handleChange}>
          Message:
        </TextArea>
        <button type="submit">Submit</button>
      </FormContainer>
    );
  }
}

Form.propTypes = {
  updateField: PropTypes.func.isRequired,
};

export default Form;
