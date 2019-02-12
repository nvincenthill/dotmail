import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Recipients from '../Recipients/Recipients';
import { CustomInput, StyledBtn } from '../../elements';
import Selector from './Selector';
import TextArea from './TextArea';

import { Theme } from '../../utilities';

const FormStyles = styled.form`
  display: flex;
  flex-flow: column nowrap;
  background: #eee;
  padding: 2rem 1rem;

  .submit-button {
    width: 50vw;
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.accentColor4};
  }
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleTemplateSubmission = this.handleTemplateSubmission.bind(this);
    this.handleEmailGroupSelection = this.handleEmailGroupSelection.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { updateField, updateDisplayedTemplate, templates } = this.props;

    switch (name) {
      case 'templateSelector':
        updateDisplayedTemplate({ ...templates[value] });
        break;
      case 'recipientGroupSelector':
        this.handleEmailGroupSelection(value);
        break;
      default:
        updateField({ value, field: name });
    }
  }

  handleEmailGroupSelection(value) {
    const { deleteRecipients, addRecipient, emailGroups } = this.props;
    deleteRecipients();
    for (let i = 0; i < emailGroups[value].recipients.length; i += 1) {
      addRecipient(emailGroups[value].recipients[i]);
    }
  }

  handleTemplateSubmission(e) {
    console.log('trigerred');
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
      templates, currentUser, form, recipients, addRecipient, removeRecipient, emailGroups
    } = this.props;
    const { name } = currentUser;
    const { value, subjectLine, message } = form;
    return (
      <ThemeProvider theme={Theme}>
        <FormStyles onSubmit={this.handleTemplateSubmission} method="POST">
          <Selector
            name="templateSelector"
            value={value}
            handleChange={this.handleChange}
            options={templates}
          >
            Select a template
          </Selector>
          <Selector
            name="recipientGroupSelector"
            value={value}
            handleChange={this.handleChange}
            options={emailGroups}
          >
            Select recipients
          </Selector>
          <Recipients
            recipients={recipients}
            addRecipient={addRecipient}
            removeRecipient={removeRecipient}
          />
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
          <StyledBtn className="submit-button" category="positive" type="submit">
            Submit
          </StyledBtn>
        </FormStyles>
      </ThemeProvider>
    );
  }
}

Form.propTypes = {
  updateField: PropTypes.func.isRequired,
  updateDisplayedTemplate: PropTypes.func.isRequired,
  updateResponse: PropTypes.func.isRequired,
  addRecipient: PropTypes.func.isRequired,
  deleteRecipients: PropTypes.func.isRequired,
  removeRecipient: PropTypes.func.isRequired,
  form: PropTypes.instanceOf(Object).isRequired,
  currentUser: PropTypes.instanceOf(Object).isRequired,
  templates: PropTypes.instanceOf(Object).isRequired,
  emailGroups: PropTypes.instanceOf(Object).isRequired,
  recipients: PropTypes.instanceOf(Object).isRequired,
};

export default Form;
