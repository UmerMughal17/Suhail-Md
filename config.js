const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923005307168";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_34_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NixcbiAgICAgICAgMTY3LFxuICAgICAgICA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDYyLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgODIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTksXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2LFxuICAgICAgICA0MixcbiAgICAgICAgMTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3LFxuICAgICAgICA0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxODksXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NixcbiAgICAgICAgMTAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExLFxuICAgICAgICA0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5M0RCTm00NCtjY0ZGZHlhWGdyZGxkMWRrSGw2Y2RmUE9Bdzgrb1V1UUNFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAwNTMwNzE2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUFFRjNBQTRCOTYzRjQ1MkQ2MTE1MDNBMTBBMjcxNEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMDcyODcxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDA1MzA3MTY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEODlCODBBMTBCMENGQzY1NURCNkM0NDE2NkM4RTUxRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIwNzI4NzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMDVtZG0xRVVSWml1czVWRFBOZzdaZ1wiLFxuICBcInBob25lSWRcIjogXCJlMDI4MDZlYS1lZDhjLTQwZWQtYTY1Yy0wNzk3MzZiZDFiY2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMjMyLFxuICAgICAgNjEsXG4gICAgICAxOTAsXG4gICAgICAxNzQsXG4gICAgICA3MSxcbiAgICAgIDg0LFxuICAgICAgODEsXG4gICAgICAyMzUsXG4gICAgICAxNTMsXG4gICAgICA0OSxcbiAgICAgIDE5NCxcbiAgICAgIDEzLFxuICAgICAgMTcwLFxuICAgICAgMTEsXG4gICAgICA4MSxcbiAgICAgIDIzOSxcbiAgICAgIDgsXG4gICAgICA5MSxcbiAgICAgIDE1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MyxcbiAgICAgIDYzLFxuICAgICAgMjE2LFxuICAgICAgMjM1LFxuICAgICAgMjI5LFxuICAgICAgMTEsXG4gICAgICAxMCxcbiAgICAgIDExNSxcbiAgICAgIDAsXG4gICAgICA3NyxcbiAgICAgIDE5MyxcbiAgICAgIDE1MSxcbiAgICAgIDIxMixcbiAgICAgIDE4MCxcbiAgICAgIDUxLFxuICAgICAgMTExLFxuICAgICAgNDksXG4gICAgICA3MCxcbiAgICAgIDE0LFxuICAgICAgNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDZUQjNaWFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAwNTMwNzE2ODo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiaWRrXCIsXG4gICAgXCJsaWRcIjogXCIxNTM0ODA5NzUxMzA4MDU6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLejloY29HRUovK2tyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlE2Yk9XQUlZelZjMTB6Y1NFV3lXbUNLMWtQVVhSU21YbzlaOHZlaXhHUXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidVhZRlVqM2dLUFJIdUhKS2ZadlN2SE1qZWRmVCtWc2xwT1k1d2ljOThYZ0ZvWWJQbEtpaFcyTDlBMWNEWkJRVDloVVNhbExYaHc0eDVOdS9pZjd1Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUFc2WUprVG16elhCYTQ5MWN1TUhPdkZBNVh4ekFXWWhXZ1plU1Y3QmhidVpiRVd5Rkd0WXJkWXk1ZEh4clVUNXVyUFNQdmhjSmt6bDJIZUZ6MGt2Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDA1MzA3MTY4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjA3Mjg2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJpelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQml6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTkpJdFFDRWRHRzdUa3N5c0Y0UzZJUktsMVNIc2FIcy9CYXRUQVNDMzh2UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzY1ODk5OTQ4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIwNzI4NzExODVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mughal",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  |
