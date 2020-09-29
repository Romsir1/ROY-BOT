const Discord = require ('discord.js');
const bot = new Discord.Client();
const token ='NzU5NDY2MjI1MjY4MDMxNTc4.X296Cg.OLz6YomJhWo_CDXIWkoox6B_voU';

bot.on('ready', () =>{
console.log('Your bot is now online.');
bot.user.setActivity(`over members ${bot.guilds.get("728222089240248423").memberCount}`, { type: "WATCHING"})
.then (presence => console.log(`Activity set to ${presence.activities[0].name}`))
.catch (console.error);
bot.user.setStatus('dnd')
})

bot.on("message", message => {
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

})

bot.login(token);