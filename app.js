const express = require('express');
const { isArray, isEmpty } = require('lodash');

const app = express();

const sendEmail = () => { };
const sendSms = () => { };

app.use(express.json());

app.post('/send', (request, response) => {
  try {
    const { body: contactList } = request;

    if (!isArray(contactList) || isEmpty(contactList)) {
      return response.status(400).send({ message: 'Wrong contact list format' });
    }

    let smsSends = 0;
    let emailSends = 0;

    for (const contact of contactList) {
      if (contact.sms) {
        smsSends++;
        sendSms();
      }

      emailSends++;
      sendEmail();
    }

    return response.json({ smsSends, emailSends });
  } catch (error) {
    console.error(error);
    return response.status(500).send(error);
  }
});

module.exports = { app };