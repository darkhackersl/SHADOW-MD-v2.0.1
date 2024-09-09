const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BYoX3Rob#3R59BfbBV1f8qw7Fz22f3tLMXfCUyPIGEs-ENqyBuzo",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/357b75726739a8b9c68de.jpg",
SUDO_NB: process.env.SUDO_NB || "94767910958",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
