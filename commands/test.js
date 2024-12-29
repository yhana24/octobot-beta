const axios = require('axios');
const fs = require('fs');

module.exports = async function ({ dstryr, event, parameters }) {
  try {
    
    const ownerInfo = `
      Owner: Alvarez Yhana 󱢏
      FB: https://www.facebook.com/Yhana.alvarez.445
      Github: https://github.com/LeechShares
      FbPage: https://www.facebook.com/leechshares
    `;

    dstryr.sendMessage(ownerInfo, event.threadID);
     
  } catch (error) {
    console.error(error);
    dstryr.sendMessage('An error occurred while processing your request.', event.threadID);
  }
};
