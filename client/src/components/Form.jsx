import React from 'react';
import PropTypes from 'prop-types';

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
      <form id="contact-form" onSubmit={this.handleTemplateSubmission} method="POST">
        <h3>Select a template</h3>
        <select name="displayedTemplate" value={name} onChange={this.handleChange}>
          {templates.templates.map(template => (
            <option value={template.name} key={template.id}>
              {template.name}
            </option>
          ))}
        </select>
        <div>
          <h3>Sender</h3>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <h3>Recipient(s)</h3>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={currentUser.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <h3>Subject</h3>
          <input
            type="text"
            name="subjectLine"
            className="form-control"
            id="name"
            value={subjectLine}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <h3>Message</h3>
          <textarea
            className="form-control"
            name="message"
            rows="5"
            id="message"
            value={message}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

Form.propTypes = {
  updateField: PropTypes.func.isRequired,
};

export default Form;
