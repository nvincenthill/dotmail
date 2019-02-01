import React from 'react';

// import Response from './Response';
import FormContainer from '../containers/FormContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    return (
      <div>
        <h1 className="title">Emailbot</h1>
        <FormContainer />
        {/* <Response /> */}
      </div>
    );
  }
}

export default App;
