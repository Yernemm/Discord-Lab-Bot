//run the check function of this module in the discord message event.

//Note: this module is experimental. It was put together in under an hour and it did not have much testing done. It will contain bugs.
//I do not recommend running this on a bot in a large or public server, unless you want to run into issues.

const Discord = require("discord.js");
const fetchVideoInfo = require('youtube-info');
exports.check = (message) =>{
    let rg = /(((?<=youtu.be\/).*)|((?<=youtube.com\/watch\?v=).*))/g

    let ids = message.content.match(rg)
    console.log(ids);
    if(ids){
        ids.forEach(id => {          
        fetchVideoInfo(id).then(function (videoInfo) {
            console.log(videoInfo);
            let ytEmbed = new Discord.RichEmbed()
	.setColor('ff0000')
	.setTitle(videoInfo.title)
	.setURL(videoInfo.url)
	.setAuthor(videoInfo.owner)
	.setImage(videoInfo.thumbnailUrl)
    .setTimestamp()
    
            message.channel.send(ytEmbed)
        })
        .catch(()=>{console.log("oof")});
        })
    }

    
}
