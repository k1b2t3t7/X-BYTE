


const fs = require('fs');  //----- module----//

//checking if config.env exist otherwise settings.js will be used
//////////////////////////////////////////////////////////////
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
/////////////////////----END---///////////////////////////////




//////////////////////////////////////////////////
/////----------------Global---------------//////
/////////////////////////////////////////////////

global.thumb = fs.readFileSync('./lib/bugs/XByte.png') //Don't change
//////////////////////////////////////////////////////////
const BOTNAME = 'DAVAIL'; //BOT name
//////////////////////////////////////////////////////////
const FOOTERNAME = '*Powered by prince*'; //Footer text











//----------------OWNER NUMBER------------------------------//
//////////////////////////////////////////////////////////////////

global.owner = process.env.OWNER_NUMBER  || '234 802 493 2966' ;  //put your number without +

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//




//////////////////////Global-end////////////////////////////////////////
module.exports = { //exporting modules to use in plugins









//----------------Session ID------------------------------//
//////////////////////////////////////////////////////////////////

SESSION_ID: process.env.SESSION_ID || 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUQ3a2xCUkQzQzdsSnU5Z293SFdKOUh4YTlPK1g3K013ZUNZMFpHcVhYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV09GaFNqY05vYXdTNnNSeFJUc2QrK0xSajRFMjc3V1ZCZm1JdVU5aUxGQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTFJOTEo1N0I2ZXh5V0xYNmU1WFoyYjhWcm5PaTh0Uk1CWUoxNnFtYUc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxVGpoVzdEWHFFTGZRTHBEZW01KzlJNForSkdJMjZQcE9sSnUzSm4vZ1NVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVPSFYzR1lDNEt6dkNxb0R6V3lucEx3dFFKanJrMVpsMXlGbGxRWUJEV2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlUdmR6TGl0djNvWXBYZlRoTmNGZk9TcWg3TkhUNlhEcEtsZWFySzYyekU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUU0NDFwT2g5S092dEZYcW1YaUlqeXV4Q2xMYTlGTU9IWjg5dFR4SnJXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3FjYlVjaFRCcTNnekNHMkJOQytPT2JTb3NYR1ZPbFFFNTVmaEl2cmpCYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlYwMFdqR1BLM3Yxdm1udDJsd2RXcFBkZXRmRlZrTEZHUnZNR0M0UGtaTW8wNWlZV2htamZNUmNlVDgxQklyWVMvVXA4Znh5cDc2YkpiTmEzd2x6dGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6IkxQR29jSlEvKzFEcHhSUHFYdC9OaUYwOXJkVEpHZktUdWZKNDA4V3ZlUTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZYamYtLU1lUVVtUnZud3Zoc3BreWciLCJwaG9uZUlkIjoiMTE3YzJiZmUtOGU1ZS00MzE2LWIxZTAtOTRhMDBkNTM0YTQ3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpLU2pHdnFiUG8vSmNMVmRLNGl0QjQrN2Zrdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMbnNJWlVHWndjTjBUUm1ITENvSk9USTFQU0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWEZDWjdEQ0siLCJtZSI6eyJpZCI6IjIzNDgwMjQ5MzI5NjY6NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHFBaUkwQkVJbXRpclVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUHVuUnBvLzVXZ1Mzbjg1TGpwc3JMQkdmc2tMUFM4S3lydEF0YUpWSVFtbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSUFnbGJOVTdCVERWL1JKS3pycmRZN09wRDNLNm1XMWtLSzBlT0EyVDg2Q21oaXF4ZGZTQXBkeFZqMnBRaTlSd0JZZHZRRVplbWVRYTQ4a1M4bGEyQVE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9lZllBQnNtci9QOGhESXV5WEh1Sm13MGNyMHZqdm1PbS85Z0dPYVVQTHY1bVJOY1dXUmVNUm9MTEtJUXIrZVltbkxWYWFnTzFkNmtSQXdSWWZSVmpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODAyNDkzMjk2Njo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQ3cDBhYVArVm9FdDUvT1M0NmJLeXdSbjdKQ3owdkNzcTdRTFdpVlNFSnEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE5MzE0MTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRE9xIn0=', //Paste your session ID here

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//










//----------------BOT LOGO------------------------------//
//////////////////////////////////////////////////////////////////
LOGO: process.env.LOGO || `https://telegra.ph/file/4dc85a29bee9f0fd24c71.jpg` , //BOT logo
/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//





LANG:  process.env.LANG || 'EN' , //URDU OR EN
//////////////////////////////////////////////////////////

PREFIX: process.env.PREFIX || '.' , //PREFIX, LEAVE IT DEFAULT OTHERWISE BUTTON WILL NOT WORK
//////////////////////////////////////////////////////////

WORK_TYPE: process.env.WORK_TYPE || 'public' , //public or private
//////////////////////////////////////////////////////////

travaSend: process.env.TRAVA_SEND || '25' ,   //BUGS
//////////////////////////////////////////////////////////

COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' , //button or nonbutton
//////////////////////////////////////////////////////////

MODERATORS : process.env.MODERATORS === undefined ? "923072380380" : process.env.MODERATORS ,    
//////////////////////////////////////////////////////////

MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE, //Maximum size that bot can download a file   
//////////////////////////////////////////////////////////

OWNER_NAME: process.env.OWNER_NAME || 'prince' , //Your name
//////////////////////////////////////////////////////////

POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
//////////////////////////////////////////////////////////

FOOTER: process.env.FOOTER || '*Powered by prince*',    
//////////////////////////////////////////////////////////

ANTI_BAD: process.env.ANTI_BAD || false  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_REACT:  process.env.AUTO_REACT  || false  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_TYPING:  process.env.AUTO_TYPING  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_READ:  process.env.AUTO_READ  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_BIO:  process.env.AUTO_BIO  || false  ,        //true or false
//////////////////////////////////////////////////////////

ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,  //true or false
//////////////////////////////////////////////////////////

HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
//////////////////////////////////////////////////////////

HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
//////////////////////////////////////////////////////////

INBOX_USER: process.env.INBOX_USER === undefined ? '' : process.env.INBOX_USER,
//////////////////////////////////////////////////////////

BANNED_USER: process.env.BANNED_USER === undefined ? '' : process.env.BANNED_USER ,    //banned user number 
//////////////////////////////////////////////////////////

AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE, //true or false
//////////////////////////////////////////////////////////

ANTI_LINK: process.env.ANTI_LINK || true  , //true or false
//////////////////////////////////////////////////////////

BOT_DETECT: process.env.BOT_DETECT === undefined ? 'false' : process.env.BOT_DETECT,  //true or false    
//////////////////////////////////////////////////////////

ANTI_BOT: process.env.ANTI_BOT || false  , //true or false
//////////////////////////////////////////////////////////

ANTI_CALL: process.env.ANTI_CALL || false  , //true or false
//////////////////////////////////////////////////////////

ALIVE: process.env.ALIVE || `default`,     
//////////////////////////////////////////////////////////

AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_STICKER: process.env.AUTO_STICKER || false  , //true or false
//////////////////////////////////////////////////////////

WELCOME:  process.env.WELCOME  || false ,   //true or false
//////////////////////////////////////////////////////////

ANTI_DELETE : process.env.ANTI_DELETE || false , //true or false
//////////////////////////////////////////////////////////

DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
////////////---------X - B Y T E---------////////////////
};
