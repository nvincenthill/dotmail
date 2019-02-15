# dotmail

This is a FERN-stack app to programatically send responsively-designed emails with nodemailer + mjml templates

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

All dependencies listed in `package.json`.

Create a firebase project for authentication and user data permanence. This project currently uses nodemailer SMTP connection to gmail.com send email and thus requires a Gmail account to operate.

Create a folder named `data` in the root directory to store MJML templates to transpile, inject, and send. See below for `example.mjml`:

```
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Hello World</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

Create a .env in the root directory with the following:

```
EMAIL='YOUR_EMAIL_ADDRESS_HERE'
PASS='YOUR_EMAIL_PASSWORD_HERE'
PORT=3000
NAME='YOUR_NAME_HERE'
FIREBASE_API_KEY='YOUR_API_KEY_HERE'
FIREBASE_AUTH_DOMAIN='YOUR_AUTH_DOMAIN_HERE'
FIREBASE_DB_URL='YOUR_DB_URL_HERE'
FIREBASE_PROJECT_ID='YOUR_PROJECT_ID_HERE'
```

### Installing

To install dependencies

```
npm install
```

## Development

To run server

```
npm start
```

To run webpack

```
npm run react-dev
```

To run tests

```
npm test
```

## API

To send an email with dotmail just POST to `/api/send` with well-formed JSON:

```
curl -d 'EXAMPLE_JSON_BODY' -H "Content-Type: application/json" -X POST http://localhost:3000/api/send
```

```
EXAMPLE_JSON_BODY

{
  "form": {
    "greeting": "Hi",
    "id": 0,
    "injections": { "title": "example title" },
    "message": "Thanks for using dotmail!",
    "name": "examplePostRequest",
    "salutation": "Warm regards,",
    "subjectLine": "Thank you!",
    "templateName": "exampleTemplate",
    "type": "example"
  },
  "currentUser": { "name": "John Smith", "email": "example@gmail.com" },
  "recipients": [
    {
      "firstName": "exampleFirstName",
      "lastName": "exampleLastName",
      "preferred": "examplePreferredName",
      "email": "exampleRecipientAddress@gmail.com"
    }
  ]
}
```

## Deployment

Not currently deployed - http://dotmail.tech is our application's future home!

## Built With

- [Firebase](https://firebase.google.com/) - The OAuth and real-time database
- [React.js](https://reactjs.org/) - The front-end MVC framework
- [Express](https://expressjs.com/) - The server
- [Node.js](https://nodejs.org/) - The back-end
- [Jest](https://jestjs.io/) - The testing framework
- [Enzyme](https://airbnb.io/enzyme/) - The testing utilities
- [SuperTest](https://github.com/visionmedia/supertest/) - The http integration testing

## Versioning

We use [Git](https://git-scm.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Nicholas Vincent-Hill** - [Nicholas Vincent-Hill](http://nickvh.tech/)

- **Fernando De La Madrid** - [Fernando De La Madrid](https://github.com/ferdelamad/)

- **Josh Elder** - [Josh Elder](https://github.com/jcelder/)

**Our Trello Board** - [Check out what we're working on next](https://trello.com/b/PdQwFo3v/emailbot)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
