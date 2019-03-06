import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Recipients from '../Recipients/Recipients';
import { CustomInput, StyledBtn } from '../../elements';
import Selector from './Selector';
import TextArea from './TextArea';
import Radio from './Radio';
import ResponseContainer from '../../containers/ResponseContainer';

import { Theme } from '../../utilities';

const FormStyles = styled.div`
  display: inline-block;
  flex-flow: column nowrap;
  background: #eee;
  padding: .5rem 2rem 2rem 2rem;
  border-radius: 2rem 2rem 0 0;

  .submit-button {
    width: 50%;
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
    const {
      updateField, updateDisplayedTemplate, templates, emailGroups,
    } = this.props;

    switch (name) {
      case 'templateSelector':
        updateDisplayedTemplate({ ...templates[value] });
        break;
      case 'recipientGroupSelector':
        emailGroups.forEach((group) => {
          if (group.id.toString() === value) {
            this.handleEmailGroupSelection(group);
          }
        });
        break;
      default:
        updateField({ value, field: name });
    }
  }

  handleInjectionChange(e, index) {
    const { value } = e.target;
    const { updateInjection, form } = this.props;
    const {
      displayName,
      name,
      type,
      options,
    } = form.injections[index];
    const newInjection = {
      name,
      displayName,
      type,
      options: options || [],
      data: value,
    };
    updateInjection({ index, newInjection });
  }

  handleEmailGroupSelection(group) {
    const { deleteRecipients, addRecipient } = this.props;
    deleteRecipients();
    for (let i = 0; i < group.recipients.length; i += 1) {
      addRecipient(group.recipients[i]);
    }
  }

  handleTemplateSubmission(e) {
    e.preventDefault();
    const {
      form, currentUser, recipients, updateResponse,
    } = this.props;

    /* eslint-disable */
    const result = confirm(`Are you sure you want to send emails to ${recipients.length} people?`);
    /* eslint-enable */

    if (!result) {
      return;
    }

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
      templates,
      currentUser,
      form,
      recipients,
      addRecipient,
      removeRecipient,
      emailGroups,
    } = this.props;
    const { name } = currentUser;
    const { value, subjectLine, injections } = form;
    const injectionInputs = injections.map((injection, index) => {
      let component;
      switch (injection.type) {
        case 'text':
          component = (
            <TextArea
              key={injection.name}
              name={injection.name}
              rows="5"
              value={injection.data}
              onChange={(e) => {
                this.handleInjectionChange(e, index);
              }}
            >
              {injection.displayName}
            </TextArea>
          );
          break;
        case 'radio':
          component = (
            <Radio
              injection={injection}
              key={injection.name}
              onChange={(e) => {
                this.handleInjectionChange(e, index);
              }}
            >
              {injection.displayName}
            </Radio>
          );
          break;
        default:
          component = <h4>Error, injection type missing</h4>;
      }
      return component;
    });
    return (
      <ThemeProvider theme={Theme}>
        <FormStyles>
          <ResponseContainer />
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
          {injectionInputs}
          <StyledBtn
            isAnimated
            onClick={this.handleTemplateSubmission}
            className="submit-button"
            category="positive"
            type="submit"
          >
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
  updateInjection: PropTypes.func.isRequired,
  form: PropTypes.instanceOf(Object).isRequired,
  currentUser: PropTypes.instanceOf(Object).isRequired,
  templates: PropTypes.instanceOf(Object).isRequired,
  emailGroups: PropTypes.instanceOf(Object).isRequired,
  recipients: PropTypes.instanceOf(Object).isRequired,
};

export default Form;
