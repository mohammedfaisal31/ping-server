const express = require('express');
const cron = require('node-cron');
const axios = require('axios');

const app = express();
const port = 3000; // Change this to your desired port

app.get('/', (req, res) => {
  res.send('Express server running!');
});

// Define the API call function
const makeApiCall = async () => {
  try {
    const response = await axios.get('https://lyxnlabsapi.online/api/getallvotes');
    console.log('API call successful:');
  } catch (error) {
    console.error('API call error:', error);
  }
};

// Schedule the API call every 5 minutes
cron.schedule('* * * * * *', () => {
  makeApiCall();
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
