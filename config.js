const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~ZQAiDbRT#-yuLS-tJw6UhgWiEwFUqA05xBexE7Zt_Q6rV6KEvEo4'
};
