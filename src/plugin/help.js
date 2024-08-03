import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import config from '../../config.cjs'
let xbyteownername = config.OWNER_NAME;
let xbytebotname = config.XBYTE_BOT_NAME;

import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}
// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*X-BYTE-LITE is running since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.tz("Asia/Karachi").format("HH:mm:ss");
const xdate = moment.tz("Asia/Karachi").format("DD/MM/YYYY");
const time2 = moment().tz("Asia/Karachi").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

const test = async (m, Matrix) => {
  let selectedListId;
  const selectedButtonId = m?.message?.templateButtonReplyMessage?.selectedId;
  const interactiveResponseMessage = m?.message?.interactiveResponseMessage;
  if (interactiveResponseMessage) {
    const paramsJson = interactiveResponseMessage.nativeFlowResponseMessage?.paramsJson;
    if (paramsJson) {
      const params = JSON.parse(paramsJson);
      selectedListId = params.id;
     // console.log(selectedListId);
    }
  }
  const selectedId = selectedListId || selectedButtonId;
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '.';
        const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
        let Hamza = {
    public: true // or false
};

let mode = Hamza.public ? 'public' : 'private';

        const validCommands = ['list', 'help', 'menu'];

  if (validCommands.includes(cmd)) {
    let msg = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `╭─────────────━┈⊷
│ BOT NAME: *${xbytebotname}*
│ VERSION: *4.0.0*
│ OWNER:  *${xbyteownername}*      
│ PLATFORM: *${os.platform()}*
│ MODE: *${mode}*
│ PREFIX: *[Any prefix]*
╰─────────────━┈⊷ `
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "© Powered By X-BYTE-LITE"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./src/XBYTE-LITE.png')}, { upload: Matrix.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: "",
                  hasMediaAttachment: false  
                }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  "name": "single_select",
                  "buttonParamsJson": `{"title":"OPEN MENU",
                 "sections":
                   [{
                    "title":" X-BYTE.V-lite MENU",
                    "highlight_label":"X-BYTE.V-lite MENU",
                    "rows":[
                      {
                        "header":"",
                        "title":"ALL MENU",
                        "description":"SHOW ALL MENU",
                        "id":"View All Menu"
                      },
                      {
                        "header":"",
                        "title":"DOWNLOADER MENU",
                        "description":"SHOW DOWNLOADER MENU",
                        "id":"Downloader Menu"
                      },
                      {
                        "header":"",
                        "title":"GROUP MENU",
                        "description":"SHOW GROUP MENU",
                        "id":"Group Menu"
                      },
                      {
                        "header":"",
                        "title":"TOOL MENU",
                        "description":"SHOW TOOL MENU",
                        "id":"Tool Menu"
                      },
                      {
                        "header":"",
                        "title":"MAIN MENU",
                        "description":"SHOW BOT MAIN MENU",
                        "id":"Main Menu"
                      },
                     {
                        "header":"",
                        "title":"OWNER MENU",
                        "description":"SHOW OWNER MENU",
                        "id":"Owner Menu"
                      },
                      {
                        "header":"",
                        "title":"AI MENU",
                        "description":"SHOW AI MENU",
                        "id":"Ai Menu"
                      },
                      {
                        "header":"",
                        "title":"SEARCH MENU",
                        "description":"SHOW SEARCH MENU",
                        "id":"Search Menu"
                      },
                      {
                        "header":"",
                        "title":"STALK MENU",
                        "description":"SHOW STALK MENU",
                        "id":"Stalk Menu"
                      },
                      {
                        "header":"",
                        "title":"CONVERTER MENU",
                        "description":"SHOW CONVERTER MENU",
                        "id":"Converter Menu"
                      }
                    ]}
                  ]}`
                },
              ],
            }),
            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "X-BYTE-LITE",
                  serverMessageId: 143
                }
              }
          }),
        },
      },
    }, {});

    await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    });
  }
  
      if (selectedId == "View All Menu") {
        const mode = process.env.MODE;
        const str = `Hey ${m.pushName} ${pushwish}
╭─────────────━┈⊷
│ BOT NAME: *${xbytebotname}*
│ VERSION: *4.0.0*
│ OWNER:  *${xbyteownername}*      
│ PLATFORM: *${os.platform()}*
│ MODE: *${mode}*
│ PREFIX: *[Any prefix]*
╰─────────────━┈⊷ 
╭━❮ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ❯━╮
┃o: ${prefix}𝙰𝚃𝚃𝙿
┃o: ${prefix}𝙰𝚃𝚃𝙿2
┃o: ${prefix}𝙰𝚃𝚃𝙿3
┃o: ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┃o: ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┃o: ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┃o: ${prefix}𝙼𝙿3
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙰𝙸 ❯━╮
┃o: ${prefix}𝙰𝚒
┃o: ${prefix}𝙶𝚙𝚝
┃o: ${prefix}𝙳𝚊𝚕𝚕𝚎
┃o: ${prefix}𝚁𝚎𝚖𝚒𝚗𝚒
┃o: ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝚃𝙾𝙾𝙻 ❯━╮
┃o: ${prefix}𝙱𝚞𝚐
┃o: ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
┃o: ${prefix}𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛
┃o: ${prefix}𝚃𝚎𝚖𝚙𝚖𝚊𝚒𝚕
┃o: ${prefix}𝙲𝚑𝚎𝚌𝚔𝚖𝚊𝚒𝚕
┃o: ${prefix}𝚃𝚛𝚝
┃o: ${prefix}𝚃𝚝𝚜
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙶𝚁𝙾𝚄𝙿 ❯━╮
┃o: ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┃o: ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┃o: ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┃o: ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┃o: ${prefix}𝙶𝚛𝚘𝚞𝚙
┃o: ${prefix}𝙶𝚌𝚜𝚎𝚝𝚝𝚒𝚗𝚐
┃o: ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
┃o: ${prefix}𝙰𝚍𝚍
┃o: ${prefix}𝙺𝚒𝚌𝚔
┃o: ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
┃o: ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕
┃o: ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
┃o: ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
┃o: ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃o: ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
┃o: ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ❯━╮
┃o: ${prefix}𝙰𝚙𝚔
┃o: ${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃o: ${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃o: ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
┃o: ${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┃o: ${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
┃o: ${prefix}𝙸𝚗𝚜𝚝𝚊
┃o: ${prefix}𝚈𝚝𝚖𝚙3
┃o: ${prefix}𝚈𝚝𝚖𝚙4
┃o: ${prefix}𝙿𝚕𝚊𝚢
┃o: ${prefix}𝚂𝚘𝚗𝚐
┃o: ${prefix}𝚅𝚒𝚍𝚎𝚘
┃o: ${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┃o: ${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┃o: ${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝚂𝙴𝙰𝚁𝙲𝙷 ❯━╮
┃o: ${prefix}𝙿𝚕𝚊𝚢
┃o: ${prefix}𝚈𝚝𝚜
┃o: ${prefix}𝙸𝚖𝚍𝚋
┃o: ${prefix}𝙶𝚘𝚘𝚐𝚕𝚎
┃o: ${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
┃o: ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┃o: ${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛
┃o: ${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊
┃o: ${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┃o: ${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎
┃o: ${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙼𝙰𝙸𝙽 ❯━╮
┃o: ${prefix}𝙿𝚒𝚗𝚐
┃o: ${prefix}𝙰𝚕𝚒𝚟𝚎
┃o: ${prefix}𝙾𝚠𝚗𝚎𝚛
┃o: ${prefix}𝙼𝚎𝚗𝚞
┃o: ${prefix}𝙸𝚗𝚏𝚘𝚋𝚘𝚝
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙾𝚆𝙽𝙴𝚁 ❯━╮
┃o: ${prefix}𝙹𝚘𝚒𝚗
┃o: ${prefix}𝙻𝚎𝚊𝚟𝚎
┃o: ${prefix}𝙱𝚕𝚘𝚌𝚔
┃o: ${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┃o: ${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┃o: ${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┃o: ${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
┃o: ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
┃o: ${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
┃o: ${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
┃o: ${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
┃o: ${prefix}𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝚂𝚃𝙰𝙻𝙺 ❯━╮
┃o: ${prefix}𝚃𝚛𝚞𝚎𝚌𝚊𝚕𝚕𝚎𝚛
┃o: ${prefix}𝙸𝚗𝚜𝚝𝚊𝚂𝚝𝚊𝚕𝚔
┃o: ${prefix}𝙶𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
╰━━━━━━━━━━━━━━━⪼
   `;
        let fgg = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: `X-BYTE-LITE`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'X-BYTE-LITE'\nitem1.TEL;waid=${
                        m.sender.split("@")[0]
                    }:${
                        m.sender.split("@")[0]
                    }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
            }
        };
       let { key } = await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/XBYTE-LITE.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "X-BYTE-LITE",
                  serverMessageId: 143
                }
              }
}, {
  quoted: fgg
});
}
   if ( selectedId == "Downloader Menu") {
     const str = `
╭━❮ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ❯━╮
┃o: ${prefix}𝙰𝚙𝚔
┃o: ${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃o: ${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃o: ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
┃o: ${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┃o: ${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
┃o: ${prefix}𝙸𝚗𝚜𝚝𝚊
┃o: ${prefix}𝚈𝚝𝚖𝚙3
┃o: ${prefix}𝚈𝚝𝚖𝚙4
┃o: ${prefix}𝙿𝚕𝚊𝚢
┃o: ${prefix}𝚂𝚘𝚗𝚐
┃o: ${prefix}𝚅𝚒𝚍𝚎𝚘
┃o: ${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┃o: ${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┃o: ${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/XBYTE-LITE.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "X-BYTE-LITE",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if ( selectedId == "Group Menu") {
     const str = `
╭━❮ 𝙶𝚁𝙾𝚄𝙿 ❯━╮
┃o: ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┃o: ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┃o: ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┃o: ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┃o: ${prefix}𝙶𝚛𝚘𝚞𝚙
┃o: ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
┃o: ${prefix}𝙰𝚍𝚍
┃o: ${prefix}𝙺𝚒𝚌𝚔
┃o: ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
┃o: ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕
┃o: ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
┃o: ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
┃o: ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃o: ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
┃o: ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
╰━━━━━━━━━━━━━━━⪼
     `
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/XBYTE-LITE.png'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Main Menu") {
     const str =`
╭━❮ 𝙼𝙰𝙸𝙽 ❯━╮
┃o: ${prefix}𝙿𝚒𝚗𝚐
┃o: ${prefix}𝙰𝚕𝚒𝚟𝚎
┃o: ${prefix}𝙾𝚠𝚗𝚎𝚛
┃o: ${prefix}𝙼𝚎𝚗𝚞
┃o: ${prefix}𝙸𝚗𝚏𝚘𝚋𝚘𝚝
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/XBYTE-LITE.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "X-BYTE-LITE",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Owner Menu") {
     const str = `
╭━❮ 𝙾𝚆𝙽𝙴𝚁 ❯━╮
┃o: ${prefix}𝙹𝚘𝚒𝚗
┃o: ${prefix}𝙻𝚎𝚊𝚟𝚎
┃o: ${prefix}𝙱𝚕𝚘𝚌𝚔
┃o: ${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┃o: ${prefix}𝙱𝚌𝚐𝚛𝚘𝚞𝚙
┃o: ${prefix}𝙱𝚌𝚊𝚕𝚕
┃o: ${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┃o: ${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┃o: ${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
┃o: ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
┃o: ${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
┃o: ${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
┃o: ${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
┃o: ${prefix}𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/XBYTE-LITE.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "X-BYTE-LITE",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Search Menu") {
     const str =`
╭━❮ 𝚂𝙴𝙰𝚁𝙲𝙷 ❯━╮
┃o: ${prefix}𝙿𝚕𝚊𝚢
┃o: ${prefix}𝚈𝚝𝚜
┃o: ${prefix}𝙸𝚖𝚍𝚋
┃o: ${prefix}𝙶𝚘𝚘𝚐𝚕𝚎
┃o: ${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
┃o: ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┃o: ${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛
┃o: ${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊
┃o: ${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┃o: ${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎
┃o: ${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/XBYTE-LITE.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "X-BYTE-LITE",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   if (selectedId == "Stalk Menu") {
     const str =`
╭━❮ 𝚂𝚃𝙰𝙻𝙺 ❯━╮
┃o: ${prefix}𝙽𝚘𝚠𝚊
┃o: ${prefix}𝚃𝚛𝚞𝚎𝚌𝚊𝚕𝚕𝚎𝚛
┃o: ${prefix}𝙸𝚗𝚜𝚝𝚊𝚂𝚝𝚊𝚕𝚔
┃o: ${prefix}𝙶𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/XBYTE-LITE.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "X-BYTE-LITE",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Tool Menu") {
     const str =`
╭━❮ 𝚃𝙾𝙾𝙻 ❯━╮
┃o: ${prefix}𝙱𝚞𝚐
┃o: ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
┃o: ${prefix}𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛
┃o: ${prefix}𝚃𝚎𝚖𝚙𝚖𝚊𝚒𝚕
┃o: ${prefix}𝙲𝚑𝚎𝚌𝚔𝚖𝚊𝚒𝚕
┃o: ${prefix}𝙸𝚗𝚏𝚘
┃o: ${prefix}𝚃𝚛𝚝
┃o: ${prefix}𝚃𝚝𝚜
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/XBYTE-LITE.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "X-BYTE-LITE",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Ai Menu") {
     const str =`
╭━❮ 𝙰𝙸 ❯━╮
┃o: ${prefix}𝙰𝚒
┃o: ${prefix}𝙱𝚞𝚐
┃o: ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
┃o: ${prefix}𝙶𝚙𝚝
┃o: ${prefix}𝙳𝚊𝚕𝚕𝚎
┃o: ${prefix}𝚁𝚎𝚖𝚒𝚗𝚒
┃o: ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/XBYTE-LITE.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "X-BYTE-LITE",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Converter Menu") {
     const str =`
╭━❮ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ❯━╮
┃o: ${prefix}𝙰𝚃𝚃𝙿
┃o: ${prefix}𝙰𝚃𝚃𝙿2
┃o: ${prefix}𝙰𝚃𝚃𝙿3
┃o: ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┃o: ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┃o: ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┃o: ${prefix}𝙼𝙿3
╰━━━━━━━━━━━━━━━⪼
     `
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/XBYTE-LITE.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "X-BYTE-LITE",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
};

export default test;
