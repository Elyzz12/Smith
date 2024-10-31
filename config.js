//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "+234 705 066 1794,+234 814 993 9219";
global.owner = process.env.OWNER_NUMBER || "+234 705 066 1794,+234 814 993 9219";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhyQm90dVJ5Zmt1MGpWbFV4RkhqUUViNzI0end0REFQTzdGbDROQXFWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnJoblhKQmlPamQ5SXlYdmFwS2d4RWRYQzN3V05ZYjByTTRqcmxFNklnST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSldXZFM4UGx2dldubDFhc2U2dStRa25yQkpoamRlRm5QWVFNRnBjL0U0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoZmh3UGpMbWNQS2NpbkFkSDE4MXVFWS8vRnBkZ21oRkVHWWs5QXJKNjJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdQbU5NRTNxU2FReHJpdWppYXdKS3ZUZlZZaTBiV09pT1ZMWGZ5YWs3MWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks0UjFkdlYyM2M5M0xaYiswTXVrWjFNRXJCMjd5TkdLNVZMdEhvbkdYU1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVB5RWZHRGJzYTlqOThhUTU2UURTYWZleWc4dkJUQmxLSE52dFhnTDRYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYk4zM201SVBNY0lGd0thSEdPb28vdTQ2WW9xLzRKa2VWOTAyTzAxMlBubz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkM2U3c1ZDE2djRjci9MV2t1N3JxOU56Q0hhRFdVUk1nUXNTVitEaHJIclJBaWRZczAvejg1eDBRMUlscCtsZFpoUXdaVnJkdlB4R3d3cDltSzJZM2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDUsImFkdlNlY3JldEtleSI6Im84cklVNDNvTStLcTlhS1RmVFd1OExVdENuK0QyY3F2Y1p4SU5vSS8xajA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA1MDY2MTc5NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1NjQ1RTQzQTk1QzA5M0YxRTBEM0YzNURBRTdERUIzMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwMzc3NDA3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvdktGNnFXYlRUeXZqdUtiaFNDSjFBIiwicGhvbmVJZCI6ImEwNGFmNmI0LWUyNTMtNDNmMi05N2QyLWI1YTAzMmEwYTA3MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhNUxORU9EcEhVRk9vTi9lNktSTWRzbmxFczA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGNhY3FzMDF3T2dVdDRKeTkyQlgrOFJYU1BVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJQRkFRTlEyIiwibWUiOnsiaWQiOiIyMzQ3MDUwNjYxNzk0OjM3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InVua25vd24ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05HUjVmb0JFS3p0amJrR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ims2Z1VpaWJ5VHgvdGZHL3N1TXdHWmtFQzMxOFY1alUrZlFXYmVFcmMyR1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im12TWIva0hUMmVUekR1Zmp2bEdHUVdsbDdUTlNCdjRnN0pIK0N1RHg5VFZocktYeGRRZThwOUp4QTNZdk1YejJHeVFtOVpPUFNIcnF4VDJQenVPSEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBbVhzTytoeEhpb3lrWUFNR1gxdmI2MElIUzVtZ2UycS9RdHFLWEZZSVR1RVI5UHZXOEI0dU5RL3p5K0tETWNhRHdqSTR4WjRuWldQaHZEL1lsUDJpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNTA2NjE3OTQ6MzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWk9vRklvbThrOGY3WHh2N0xqTUJtWkJBdDlmRmVZMVBuMEZtM2hLM05obCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDM3NzQwMiwibXlBcHBTdGF0ZUtleUlkIjoiQUNFQUFQaGYifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "SMITH",
  packname: process.env.PACK_NAME || "GREG",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
