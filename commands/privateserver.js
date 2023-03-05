const { EmbedBuilder, SlashCommandBuilder } = require("discord.js")
const noblox = require('noblox.js')

module.exports = {
  cooldown: 120,
  cooldowns: [],
  data: new SlashCommandBuilder()
	.setName('privateserver')
	.setDescription('sends a rogue lineage private server code'),
  async run(client, interaction) {  
    var ps = client.storage["privateservers"][Math.floor(Math.random() * client.storage["privateservers"].length)]
    var embed = new EmbedBuilder()
    embed.setTitle("rogue lineage: private server")
    embed.setDescription("this private server code is checked to be **working**:\n\n`" + ps + "`")
    
  var thumbnails = ["https://media.discordapp.net/attachments/1077015311926177904/1077262007516016710/image0.jpg", "https://media.discordapp.net/attachments/1077015311926177904/1077259753962622976/image0.jpg"]  
    embed.setImage(thumbnails[Math.floor(Math.random() * thumbnails.length)])
    embed.setThumbnail("https://media.discordapp.net/attachments/1077015311926177904/1077260404323012708/image0-1-removebg-preview.png")
    embed.setTimestamp()
    embed.setColor("#e3e3e3")

   interaction.editReply({embeds: [embed]})
  } 
}