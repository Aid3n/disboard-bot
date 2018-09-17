const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Wars de Disboard")
    .setColor("#eef372")
    .addField("vs Hz | 10/09/18", "276 | Hz 192 | +84 Win")
    .addField("vs TR | 14/09/18", "459 | TR 525 | -66 Lose")
    .addField("vs If | 14/09/18", "339 | If 357 | -18 Lose")
    .addField("vs If | 17/09/18", "477 | ID 487 | -10 Lose")
    .setFooter("Última actualización: 16/09/2018", "https://pbs.twimg.com/media/DnPeL62W0AYtW9Y.png:large")
    message.channel.send(embed);
}

module.exports.help = {
    name: "wars"
}
