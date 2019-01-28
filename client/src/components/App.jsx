import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Nicholas Vincent-Hill',
      email: 'abc@example.com',
      message: 'Hello email server!',
      response: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  resetForm() {
    this.setState({ name: '', email: '', message: '' });
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
    const { name, email, message } = this.state;

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
      name,
      email,
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
      name, email, message, response,
    } = this.state;
    return (
      <div>
        <h1 className="title">Email bot</h1>
        <br />

        <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
          <div>
            <h3>Name</h3>
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
            <h3>Email address</h3>
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
