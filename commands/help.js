
//METADATA
exports.cmdtype = () => {
    return "core";
}
const desc = "Displays help and info about the assistant."; //Short description of what the command does.
const usage = "[command]"; //Any parameters required for command.
exports.run = (config, client, message, argsArr, argsTxt, extraData) => {
    const bot = client;
    const m = require("./../shared/methods.js");
    //--------------------------------------------------------------------
    //Uncomment for protected owner-only command.
    //if(message.author.id !== config.ownerID) return; 
    //--------------------------------------------------------------------
    var msg = ""; //Put response message to be logged here.
    //--------------------------------------------------------------------

    //COMMAND LOGIC HERE:







    //PREPARE FILESYSTEM

    const dir = './commands/';
    const fs = require('fs');


    //--FETCH ALL COMMAND INFO--

    //DEFINE CMD CLASS
    function cmdClass(id) {
        this.id = id;
        this.name = "";
        this.desc = "";
        this.usage = "";
        this.type = "";


    }
    var cmdObj = [];
    let count = 0;

    //INSTANTIATE CMD OBJECTS
    fs.readdirSync(dir).forEach(file => {

        if (file.endsWith(".js")) {
            let cmdfile = require(`./${file}`);

            cmdObj[count] = new cmdClass(count);

            cmdObj[count].id = count;
            cmdObj[count].name = file.slice(0, -3);
            cmdObj[count].desc = cmdfile.desc();
            cmdObj[count].usage = cmdfile.use();
            cmdObj[count].type = cmdfile.cmdtype();

            count++;
        }

    })

    //CMD CLASS FUNCTIONS AND METHODS:

    function getAllTypes(){
        var types = [];

        cmdObj.forEach( (thisCmd) => {
            types.push(thisCmd.type);
        });
        return types.filter(onlyUnique).sort();
    }

    function getAllCmdByType(type){
        var cmds = [];
        cmdObj.forEach( (thisCmd) => {
            if (thisCmd.type == type)
                cmds.push(thisCmd);
        });
        return cmds;
    }

    function findCmdByName(cmdName){
        //message.channel.send("`2|" + cmdName + "|`");
        cmdObj.forEach( (thisCmd) => {
            
            if (thisCmd.name == cmdName)
            {
                message.channel.send("`3|" + thisCmd.id + "|`");
                return thisCmd.id;
            }
        });
        //message.channel.send("`4| escaped`");
       return false;
    }


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    //-----------------










    var msg = "error";
    switch (argsTxt) {
        case null:
        case "":
        case " ":








            msg = `**Yer Lab Assistant**\r\nTo get help for a specific command, do ${config.prefix}help [command]\r\n\r\n`;
            //Line below will be re-added when help command is finished for each command.
            //TO-DO: finish this.
            // msg += "__Use **>help [command]** to view specific help for that command.__\r\n";

            msg += "Commands:\r\n"


            var cmdInfoMsg = "";
            console.log(getAllTypes());
            getAllTypes().forEach( (type)=>{
                cmdInfoMsg+= "**" + capitalizeFirstLetter(type) + "**\r\n```";
                getAllCmdByType(type).forEach( (tcmd) =>{
                    cmdInfoMsg += `${tcmd.name} `;
                });
                cmdInfoMsg+= "```\r\n";

            });

            msg += "\r\n" + cmdInfoMsg;
           



           




            //msg += "Commands:\r\n>hello\r\n>torb\r\n>good bot\r\n>bad bot\r\n>meitip\r\n>mei\r\n>zarmei\r\n>meihem\r\n>hanmei\r\n>echo\r\n>poll\r\n>stats\r\n>test\r\n>hero\r\n>rng";
            break;
            default:

            let cmd = argsTxt;
            try {
                let file = require(`./${cmd}.js`);

                let de = file.desc();
                let us = file.use();
                msg = `**Help for ${config.prefix}${cmd}**\r\n${de}\r\nUsage: ${config.prefix}${cmd} ${us}`;
            } catch (err) {
                msg = `Command \"${argsTxt}\" not found.\r\nUse **>help** to see available commands.`
            }

            break;


    }


    //--------------------------------------------------------------------
    m.logSend(config, client, message, msg); //Method will send msg to user, and also log it in both console AND log channel.
    //m.log(config, client, message, msg); //Alternative will log msg without sending msg.
}
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
exports.desc = () => {
    return desc;
}
exports.use = () => {
    return usage;
}