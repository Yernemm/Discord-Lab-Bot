exports.run = (client) => {
  var bot = client;
  const m = require("./../shared/methods.js");
  const config = require("./../config.json");
  const sqlite = require("sqlite");
  bot.user.setPresence({ status: 'online', game: { name: `Here to help!` } });
  var d = new Date();
  timeStart = d.getTime();
  var msg = "<:yHappy:398973907576553472>\r\n__**Heey! I am now online!**__";
  //msg += `\r\nServers: ${client.guilds.size} Channels: ${client.channels.size} Users: ${client.users.size}`
 
  var labGuild = bot.guilds.get("384446991343681538");
  var rainbowCounter = 0;
  var rainbowColours = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"];
  //setInterval(rainbowChange,1000)

  function rainbowChange(){
    var rainbowRole = labGuild.roles.find("name", "Rainbow");
    if(rainbowRole){
      rainbowRole.setColor(rainbowColours[rainbowCounter % rainbowColours.length]);
    }
    rainbowCounter++;
  }


  bot.syncGuilds();

    var svnum = bot.guilds.array().length;
    var chnum = bot.channels.array().length;
    var usnum = 0;
    bot.guilds.array().forEach(element => {
        usnum += element.memberCount;
    });

    //TO-DO: finish current server stats.
    //var currserv = author.guild.name;



    msg += "\r\nServers: " + svnum + "\r\nChannels: " + chnum + "\r\nUsers: " + usnum;
   

 
 
 
 
  // console.log(msg);
  m.logNoMsg(config, client, msg, "s");
 // bot.channels.get(config.logChannelID).send(msg);

 

  const dbp = sqlite.open("./yerFiles/db/reminders.sqlite")
    .then(sql => {
      sql.run(`CREATE TABLE IF NOT EXISTS reminders (timeSet INT, user TEXT, channelID TEXT, reminder TEXT, timeEnd INT)`)
        .then(() => {
          




          var checker = setInterval(function(){
      



            sql.all(`SELECT * FROM reminders`)
            .then(rows=>{
              for(i = 0;i<rows.length;i++){
                try{
                  var dt = new Date();
                  if(rows[i].timeEnd <= dt.getTime()){
                    let rowid = rows[i].timeSet;
                    let msg = `<@${rows[i].user}> Reminder: ${rows[i].reminder}`;
                   
                    bot.channels.get(rows[i].channelID).send(msg)
                    .then(()=>{
                      sql.run(`DELETE FROM reminders WHERE timeSet = ${rowid}`)
                      .then(()=>{
                       
                      });
                      
                    });
                    m.log(config, client, "", msg);
                  }else{
                    
                  }
                } catch (err){
                 
                }
              }
            })
      
      
      
      
      
      
          }, 4 * 1000);





          
        });

    })



    //Xmas icon

    checkForChristmas();
    setInterval(checkForChristmas, 1800000);

    function checkForChristmas(){
      
      const fs = require('fs');
      const propPath = "./yerFiles/xmas/checker.txt"
      var date = new Date();
      
if(date.getUTCMonth() == 11 && date.getUTCDate() <= 25){
  m.logNoMsg(config, client, "Running xmas icon check.");
  if (!fs.existsSync(propPath)) {
    // Do something
    fs.writeFileSync(propPath, "-1");
}
      fs.readFile(
        propPath,
        (err, buf) =>{
          if(err){
            //handle error
            m.logNoMsg(config, client, "Xmas: error opening file.\n\n"+"```" + err + "```", "e");
          }else{
            if(buf.toString() != date.getUTCDate())
            {
              //Different date, change icon.

              var iconNumber = 25 - date.getUTCDate();
              var icon = "./yerFiles/xmas/" + iconNumber + ".png";
              m.logNoMsg(config, client, "Changing xmas icon to number " + iconNumber +"\nCurrent date is "+date );

              labGuild.setIcon(icon).then(
                fs.writeFile(propPath, date.getUTCDate(), function(err, data){
                  if (err) m.logNoMsg(config, client, "Xmas: error writing file."+"\n\n```" + err + "```", "e")
                  
              })
              ).catch(err => m.logNoMsg(config, client, "Xmas: error setting icon."+"\n\n```" + err + "```", "e"));
            }
          }
        }
      );

    }
  }













}