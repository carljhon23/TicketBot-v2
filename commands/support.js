/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/


const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Icons = require('../UI/Icons');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Support server of this Bot'),
    async execute(interaction) {
        const supportServerLink = "https://discord.gg/AW2ppwDVts";
      

        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
                name: 'Support Server',
                iconURL: Icons.dotIcon,
                url: 'https://discord.gg/AW2ppwDVts'
            })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️`)
            .setImage('https://cdn.discordapp.com/attachments/1332148830128570451/1353252861659709542/image.png?ex=67e1a330&is=67e051b0&hm=9078c6971a0cfc82dde5e96cf3eeffebb323554a352ac378fccaed790ef9f32a&')
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};
