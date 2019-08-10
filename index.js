const Discord = require("discord.js");
const client = new Discord.Client();
const readline = require('readline');
const fs = require("fs");
const puppeteer = require('puppeteer');
const axios = require("axios");
const msgHistoryLength = 30;
console.log("lessgo")
var running = true;
var browser;
var page;
var aiLastRestarted = 0;
const aiRestartCooldown = 1000 * 60 * 10;


const config = require("./config.json");
const m = require("./shared/methods.js");

const logChannelID = config.logChannelID;
const botChannelID = "481948031042977805";


//CLEVERBOT STUFF






//Obfuscated functions directly from cleverbot code
var c = function (n, p) {
  var o = n[0],
      m = n[1],
      r = n[2],
      q = n[3];
  o = a(o, m, r, q, p[0], 7, -680876936);
  q = a(q, o, m, r, p[1], 12, -389564586);
  r = a(r, q, o, m, p[2], 17, 606105819);
  m = a(m, r, q, o, p[3], 22, -1044525330);
  o = a(o, m, r, q, p[4], 7, -176418897);
  q = a(q, o, m, r, p[5], 12, 1200080426);
  r = a(r, q, o, m, p[6], 17, -1473231341);
  m = a(m, r, q, o, p[7], 22, -45705983);
  o = a(o, m, r, q, p[8], 7, 1770035416);
  q = a(q, o, m, r, p[9], 12, -1958414417);
  r = a(r, q, o, m, p[10], 17, -42063);
  m = a(m, r, q, o, p[11], 22, -1990404162);
  o = a(o, m, r, q, p[12], 7, 1804603682);
  q = a(q, o, m, r, p[13], 12, -40341101);
  r = a(r, q, o, m, p[14], 17, -1502002290);
  m = a(m, r, q, o, p[15], 22, 1236535329);
  o = h(o, m, r, q, p[1], 5, -165796510);
  q = h(q, o, m, r, p[6], 9, -1069501632);
  r = h(r, q, o, m, p[11], 14, 643717713);
  m = h(m, r, q, o, p[0], 20, -373897302);
  o = h(o, m, r, q, p[5], 5, -701558691);
  q = h(q, o, m, r, p[10], 9, 38016083);
  r = h(r, q, o, m, p[15], 14, -660478335);
  m = h(m, r, q, o, p[4], 20, -405537848);
  o = h(o, m, r, q, p[9], 5, 568446438);
  q = h(q, o, m, r, p[14], 9, -1019803690);
  r = h(r, q, o, m, p[3], 14, -187363961);
  m = h(m, r, q, o, p[8], 20, 1163531501);
  o = h(o, m, r, q, p[13], 5, -1444681467);
  q = h(q, o, m, r, p[2], 9, -51403784);
  r = h(r, q, o, m, p[7], 14, 1735328473);
  m = h(m, r, q, o, p[12], 20, -1926607734);
  o = e(o, m, r, q, p[5], 4, -378558);
  q = e(q, o, m, r, p[8], 11, -2022574463);
  r = e(r, q, o, m, p[11], 16, 1839030562);
  m = e(m, r, q, o, p[14], 23, -35309556);
  o = e(o, m, r, q, p[1], 4, -1530992060);
  q = e(q, o, m, r, p[4], 11, 1272893353);
  r = e(r, q, o, m, p[7], 16, -155497632);
  m = e(m, r, q, o, p[10], 23, -1094730640);
  o = e(o, m, r, q, p[13], 4, 681279174);
  q = e(q, o, m, r, p[0], 11, -358537222);
  r = e(r, q, o, m, p[3], 16, -722521979);
  m = e(m, r, q, o, p[6], 23, 76029189);
  o = e(o, m, r, q, p[9], 4, -640364487);
  q = e(q, o, m, r, p[12], 11, -421815835);
  r = e(r, q, o, m, p[15], 16, 530742520);
  m = e(m, r, q, o, p[2], 23, -995338651);
  o = k(o, m, r, q, p[0], 6, -198630844);
  q = k(q, o, m, r, p[7], 10, 1126891415);
  r = k(r, q, o, m, p[14], 15, -1416354905);
  m = k(m, r, q, o, p[5], 21, -57434055);
  o = k(o, m, r, q, p[12], 6, 1700485571);
  q = k(q, o, m, r, p[3], 10, -1894986606);
  r = k(r, q, o, m, p[10], 15, -1051523);
  m = k(m, r, q, o, p[1], 21, -2054922799);
  o = k(o, m, r, q, p[8], 6, 1873313359);
  q = k(q, o, m, r, p[15], 10, -30611744);
  r = k(r, q, o, m, p[6], 15, -1560198380);
  m = k(m, r, q, o, p[13], 21, 1309151649);
  o = k(o, m, r, q, p[4], 6, -145523070);
  q = k(q, o, m, r, p[11], 10, -1120210379);
  r = k(r, q, o, m, p[2], 15, 718787259);
  m = k(m, r, q, o, p[9], 21, -343485551);
  n[0] = d(o, n[0]);
  n[1] = d(m, n[1]);
  n[2] = d(r, n[2]);
  n[3] = d(q, n[3])
};
var j = function (u, o, n, m, r, p) {
  o = d(d(o, u), d(m, p));
  return d((o << r) | (o >>> (32 - r)), n)
};
var a = function (o, n, u, r, m, q, p) {
  return j((n & u) | ((~n) & r), o, n, m, q, p)
};
var h = function (o, n, u, r, m, q, p) {
  return j((n & r) | (u & (~r)), o, n, m, q, p)
};
var e = function (o, n, u, r, m, q, p) {
  return j(n ^ u ^ r, o, n, m, q, p)
};
var k = function (o, n, u, r, m, q, p) {
  return j(u ^ (n | (~r)), o, n, m, q, p)
};
var i = function (p) {
  txt = "";
  var r = p.length,
      q = [1732584193, -271733879, -1732584194, 271733878],
      o;
  for (o = 64; o <= p.length; o += 64) {
      c(q, l(p.substring(o - 64, o)))
  }
  p = p.substring(o - 64);
  var m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (o = 0; o < p.length; o++) {
      m[o >> 2] |= p.charCodeAt(o) << ((o % 4) << 3)
  }
  m[o >> 2] |= 128 << ((o % 4) << 3);
  if (o > 55) {
      c(q, m);
      for (o = 0; o < 16; o++) {
          m[o] = 0
      }
  }
  m[14] = r * 8;
  c(q, m);
  return q
};
var l = function (n) {
  var o = [],
      m;
  for (m = 0; m < 64; m += 4) {
      o[m >> 2] = n.charCodeAt(m) + (n.charCodeAt(m + 1) << 8) + (n.charCodeAt(m + 2) << 16) + (n.charCodeAt(m + 3) << 24)
  }
  return o
};
var g = "0123456789abcdef".split("");
var f = function (p) {
  var o = "",
      m = 0;
  for (; m < 4; m++) {
      o += g[(p >> (m * 8 + 4)) & 15] + g[(p >> (m * 8)) & 15]
  }
  return o
};
var b = function (m) {
  for (var n = 0; n < m.length; n++) {
      m[n] = f(m[n])
  }
  return m.join("")
};
var md5 = function (m) {
  return b(i(m))
};
var d = function (n, m) {
  return (n + m) & 4294967295
};
if (md5("hello") != "5d41402abc4b2a76b9719d911017c592") {
  var d = function (m, p) {
      var o = (m & 65535) + (p & 65535),
          n = (m >> 16) + (p >> 16) + (o >> 16);
      return (n << 16) | (o & 65535)
  }
}



//Test
console.log("Hash algo check: 'hello' = " + md5("hello"))
console.log("=====================")






//Message history stuff


var msgHistory = [];

function saveToHistory(msg){
msgHistory.unshift(msg);
if(msgHistory.length > msgHistoryLength)
msgHistory.pop();
}

function getHistoryString(){
let his = "";
let count = 2;
if(msgHistory.length > 0){
msgHistory.forEach(item => {
  his += `&vText${count}=${encodeURIComponent(item)}`
  count++;
})
}
return his;
}







//-----------------------------





// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("guildMemberAdd", (member) => {
  //When new user joins
  m.logNoMsg(config, client, `New user "${member.user.username}#${member.user.discriminator}" with ID \`${member.id}\` [ <@${member.id}> ] joining ${member.guild.name} with guild ID \`${member.guild.id}\``);



});

client.on("message", message => {
  if (message.channel.id == config.spFrom) {
    var d = message.createdAt;
    var timeS = d.getUTCFullYear() + "/" + m.lZero((d.getUTCMonth() + 1), 2) + "/" + m.lZero(d.getUTCDate(), 2) + " " + m.lZero(d.getUTCHours(), 2) + ":" + m.lZero(d.getUTCMinutes(), 2) + ":" + m.lZero(d.getUTCSeconds(), 2);
    client.channels.get(spTo).send(timeS + " " + message.author + ": " + message.content);
  }
  if (message.author.bot) return;
  if (message.channel.type != "text") return;
  if (message.content.indexOf(config.prefix) !== 0) return;
  if (message.content.startsWith(".")) return;

  if (message.channel.id == "481948031042977805") { //Check if in assistant channel.

    //Restart AI command 
    if(message.content.toLowerCase().startsWith("restartai")){
      m.log(config, client, message, "Restart Command");
      restartCleverbotCmd(message.channel);
      return;
    }


    // This is the best way to define args. Trust me.
    const argsArr = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = argsArr.shift().toLowerCase().replace(/[^a-zA-Z ]/g, "");
    const argsTxt = message.content.slice(config.prefix.length + command.length).trim();
    const extraData = "";

    // The list of if/else is replaced with those simple 2 lines:
    try {

      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(config, client, message, argsArr, argsTxt, extraData);
    } catch (err) {

      var err1 = "```" + err.stack + "```";
      var rawErr1 = err;
      try {

        let commandFile = require(`./commands/alias/${command}.js`);
        commandFile.run(config, client, message, argsArr, argsTxt, extraData);
      } catch (err) {
        var err2 = "```" + err + "```";
        var rawErr2 = err;

        if (rawErr2.code == 'MODULE_NOT_FOUND' && rawErr1.code == 'MODULE_NOT_FOUND') {
          //Command not found
          //Give random fact instead.
            message.channel.startTyping();
          cleverbotSend(message.content, res =>{
            console.log(">Response: " + res);
            message.channel.send(res);
            message.channel.stopTyping(true);
            
            
          })

          //


        } else {
          var msg = `***Some error occured!***\r\n<@${config.ownerID}> Check the logs for the detailed error message and fix it!!`;
          message.channel.send(msg);
          msg += "\r\n\r\nERR1:\r\n" + err1;
          msg += "\r\n\r\nERR2:\r\n" + err2;
          m.log(config, client, message, msg, "e");
        };


      }
    }

    //console.error(err1);
  }
});






function cleverbotSend(CLmessage, callback){

  CLmessage = CLmessage.replace(/([<>])/g, "");
  var postbody = `stimulus=${encodeURIComponent(CLmessage)}${getHistoryString()}&cb_settings_scripting=no&islearning=1&icognoid=wsf&icognocheck=`
  postbody += md5(postbody.substring(7, 33))
  axios.post('https://www.cleverbot.com/webservicemin?uc=UseOfficialCleverbotAPI&', postbody,
  {headers: {
      "Host": "www.cleverbot.com",
      "Connection": "keep-alive",
      "Sec-Fetch-Mode": "cors",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36",
      "Content-Type": "text/plain;charset=UTF-8",
      "Accept": "*/*",
      "Origin": "https://www.cleverbot.com",
      "Sec-Fetch-Site": "same-origin",
      'Referer': 'https://www.cleverbot.com/',
      'Accept-Encoding': "gzip, deflate, br",
      "Accept-Language": "en,pl;q=0.9,en-GB;q=0.8",
      "Cookie": "XVIS=TEI939AFFIAGAYQZ; _cbsid=-1;"
  }})
    .then(function (response) {
      let respMsg = response.data.split("\r")[0];
      saveToHistory(respMsg);
      console.log(respMsg);
      callback(respMsg);
      //console.log(msgHistory)
      msgLoog()
    })
    .catch(function (error) {
      // handle error
      callback("**ERROR**")
      console.log(error);
    })


  }

function startCleverbot(callback = ( ()=>{} )){

    
  }

  function endCleverbot(){
    (async () =>{
      lgp("Closing browser...");
      browser.close().then(()=>{lgp("Done!");});
    })();
  }

  function lgp(msg){
    console.log("================" + msg);
  }

  function cleverRespond(res, channel){
    
      console.log(">Response: " + res);
      channel.send(res);
      channel.stopTyping(true);
      
      
    
  }

  function restartCleverbotCmd(channel){

  }

client.on("ready", () =>{startCleverbot();})
client.login(config.token);
