//run the check function of this module in the discord message event.
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
