import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Recipients from '../Recipients/Recipients';
import { CustomInput, StyledBtn } from '../../elements';
import TemplateSelector from './TemplateSelector';
import TextArea from './TextArea';

const FormStyles = styled.form`
  display: flex;
  flex-flow: column nowrap;
  background: #eee;
  padding: 1rem;
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleTemplateSubmission = this.handleTemplateSubmission.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { updateField, updateDisplayedTemplate, templates } = this.props;
    if (name !== 'templateSelector') {
      updateField({ value, field: name });
    } else {
      updateDisplayedTemplate({ ...templates[value] });
    }
  }

  handleTemplateSubmission(e) {
    e.preventDefault();
    function postData(url = '', data = {}) {
      return fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data),
      }).then(response => response.json());
    }

    const protocol = 'http';
    const domain = 'localhost';
    const port = 3000;
    const endpoint = '/api/send';

    const {
      form, currentUser, recipients, updateResponse,
    } = this.props;
    const url = `${protocol}://${domain}:${port}${endpoint}`;
    const emailData = {
      form,
      currentUser,
      recipients,
    };
    postData(url, emailData)
      .then(response => updateResponse(response))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      templates, currentUser, form, recipients, addRecipient,
    } = this.props;
    const { name } = currentUser;
    const { value, subjectLine, message } = form;
    return (
      <FormStyles onSubmit={this.handleTemplateSubmission} method="POST">
        <TemplateSelector
          name="displayedTemplate"
          value={value}
          handleChange={this.handleChange}
          templates={templates}
        >
          Select a template
        </TemplateSelector>
        <Recipients recipients={recipients} addRecipient={addRecipient} />
        <CustomInput type="text" name="name" value={name} onChange={this.handleChange}>
          Sender
        </CustomInput>
        <CustomInput
          name="subjectLine"
          value={subjectLine}
          onChange={this.handleChange}
          type="text"
        >
          Subject
        </CustomInput>
        <TextArea name="message" rows="5" value={message} onChange={this.handleChange}>
          Message
        </TextArea>
        <StyledBtn type="submit">Submit</StyledBtn>
      </FormStyles>
    );
  }
}

Form.propTypes = {
  updateField: PropTypes.func.isRequired,
  updateDisplayedTemplate: PropTypes.func.isRequired,
  updateResponse: PropTypes.func.isRequired,
  addRecipient: PropTypes.func.isRequired,
  form: PropTypes.instanceOf(Object).isRequired,
  currentUser: PropTypes.instanceOf(Object).isRequired,
  templates: PropTypes.instanceOf(Object).isRequired,
  recipients: PropTypes.instanceOf(Object).isRequired,
};

export default Form;
