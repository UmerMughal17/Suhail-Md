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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_51_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzksXG4gICAgICAgIDMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNixcbiAgICAgICAgMTE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY3LFxuICAgICAgICA1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTExLFxuICAgICAgICA3NyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MixcbiAgICAgICAgODYsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDI3LFxuICAgICAgICA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU2LFxuICAgICAgICA0LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR0p1ajFKcTVJRUFGSktESDlDUGNIU3BKbGd1RXdSSnRKeVo4cmZnMDlUYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMDUzMDcxNjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAzMTZCNkY3MjMyRTU4MUU0NzNGMERBODUxN0FDOTI4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjA5NTQ2OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAwNTMwNzE2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDAxMDMwQzM5OEE2NzlBOTlBQ0I4QzQyRDA4M0M0MjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMDk1NDcwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk81SGJLTTJLUWZXR3Jycm8zb1RzS1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTZjY2IwZmItZGZiMy00ZWE5LTk1MjUtZjcxYjRjY2M1ODkxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM0LFxuICAgICAgMTczLFxuICAgICAgNDMsXG4gICAgICAyMDgsXG4gICAgICAxOTIsXG4gICAgICAxNTMsXG4gICAgICA4OCxcbiAgICAgIDE4NCxcbiAgICAgIDI0NixcbiAgICAgIDE5MSxcbiAgICAgIDE2MSxcbiAgICAgIDQ3LFxuICAgICAgNDAsXG4gICAgICAyMDgsXG4gICAgICAxODksXG4gICAgICAzMSxcbiAgICAgIDMzLFxuICAgICAgNixcbiAgICAgIDE1OSxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzUsXG4gICAgICA4MyxcbiAgICAgIDE1OCxcbiAgICAgIDE1NSxcbiAgICAgIDI0OCxcbiAgICAgIDExNyxcbiAgICAgIDkxLFxuICAgICAgODYsXG4gICAgICAxNTIsXG4gICAgICA1LFxuICAgICAgMTUzLFxuICAgICAgMTYyLFxuICAgICAgMjIxLFxuICAgICAgNTQsXG4gICAgICAxNzUsXG4gICAgICA1NSxcbiAgICAgIDE0NSxcbiAgICAgIDE3MixcbiAgICAgIDE1LFxuICAgICAgMTY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVBMzlMTENBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMDUzMDcxNjg6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJpZGtcIixcbiAgICBcImxpZFwiOiBcIjE1MzQ4MDk3NTEzMDgwNToxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLMzloY29HRU9hdWxMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlE2Yk9XQUlZelZjMTB6Y1NFV3lXbUNLMWtQVVhSU21YbzlaOHZlaXhHUXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRFdxOThpZ3Y2WTlUT2dnZTJkR24vc0pqYjB5RVc3ZklZbW1vYWQ4d25NczM4UFFrdW04SXdRdUJJcE03cEZvWkRHNVdRVG1FUldoa25EN0JDNURKQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVTV4aVJxTE9pNGdkRDd2Q2lTVHFFWVAwMjlBUjRDUGVpQms5WFE0aXRPSFBnb1F0OTRwZE5rV3BjV2xmZnMvWkVSekdZY0pHbHZXN3FybmVCcmQ2Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDA1MzA3MTY4OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIwOTU0NjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCaXdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJpdy5qc29uIjogIntcImtleURhdGFcIjpcIjJwanczQm4rOFFhNG5ZYW55WHdlUDFMNGltdjA5NUVwOTAzY08rcncyS2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc2NTg5OTk0NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "UmerMughal",


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
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
