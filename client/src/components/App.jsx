import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedTemplate: 'template',
      templates: [
        { id: 1, name: 'Thank You Email', type: 'personal' },
        { id: 2, name: 'Tech Checkup Follow-up', type: 'technicalMentor' },
        { id: 3, name: 'Attendance', type: 'coordinator' },
        { id: 4, name: 'Example Template', type: 'universal' },
      ],
      name: 'Nicholas Vincent-Hill',
      email: 'nvincenthill@gmail.com',
      subject: 'Email subject here',
      message: 'Hello world!',
      response: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
      subject: '',
    });
  }

  handleSuccess(data) {
    this.setState({ response: JSON.stringify(data) });
    this.resetForm();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      displayedTemplate, name, email, message, subject,
    } = this.state;

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
      template: displayedTemplate,
      name,
      email,
      subject,
      message,
    };
    postData(url, emailData)
      .then(data => this.handleSuccess(data))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      displayedTemplate, templates, name, email, subject, message, response,
    } = this.state;
    return (
      <div>
        <h1 className="title">Emailbot</h1>
        <br />

        <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
          <h3>Select a template</h3>
          <select name="displayedTemplate" value={displayedTemplate} onChange={this.handleChange}>
            {templates.map(template => (
              <option value={template.name} key={template.id}>
                {template.name}
              </option>
            ))}
          </select>
          <div>
            <h3>Sender Name</h3>
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
            <h3>Recipient address(es)</h3>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <h3>Subject</h3>
            <input
              type="text"
              name="subject"
              className="form-control"
              id="name"
              value={subject}
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
        <div>{response}</div>
      </div>
    );
  }
}

export default App;
