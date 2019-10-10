const Discord = require("discord.js");
const fetchVideoInfo = require('youtube-info');
exports.check = (message) =>{
    let rg = /(((?<=youtu.be\/)[A-Za-z0-9]*)|((?<=youtube.com\/watch\?v=)[A-Za-z0-9]*))/g

    let ids = message.content.match(rg)

    if(ids){
        ids.forEAch(id => {          
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
        });
        })
    }

    
}