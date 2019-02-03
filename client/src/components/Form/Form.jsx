import React from 'react';
import PropTypes from 'prop-types';

import FormStyles from './FormStyles';
import CustomInput from './CustomInput';
import TemplateSelector from './TemplateSelector';
import TextArea from './TextArea';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleTemplateSubmission = this.handleTemplateSubmission.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { updateField } = this.props;
    updateField({ value, field: name });
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

    const { form } = this.props;
    const url = `${protocol}://${domain}:${port}${endpoint}`;
    const emailData = {
      form,
      recipients: [
        {
          firstName: 'First recipient firstName',
          lastName: 'First recipient lastName',
          preferred: 'First recipient preferredName',
          email: 'nvincenthill@gmail.com',
        },
      ],
    };
    postData(url, emailData)
      .then(data => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { templates, currentUser, form } = this.props;
    const { name } = currentUser;
    const { subjectLine, message } = form;
    return (
      <FormStyles onSubmit={this.handleTemplateSubmission} method="POST">
        <TemplateSelector
          name="displayedTemplate"
          value={name}
          onChange={this.handleChange}
          templates={templates}
        >
          Select a template
        </TemplateSelector>
        <CustomInput type="text" name="name" value={name} onChange={this.handleChange}>
          Sender
        </CustomInput>
        <CustomInput
          type="email"
          name="email"
          aria-describedby="emailHelp"
          value={currentUser.email}
          onChange={this.handleChange}
        >
          Recipient
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
        <button type="submit">Submit</button>
      </FormStyles>
    );
  }
}

Form.propTypes = {
  updateField: PropTypes.func.isRequired,
};

export default Form;
