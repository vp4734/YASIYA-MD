const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~1BoRAZKa#i1lyOkiAjy889cat_PpGaoumt6UyvUcR_c9iyn4OImM'
};
