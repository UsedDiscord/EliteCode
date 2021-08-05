const Discord = require('discord.js');
const client = new Discord.Client();
const snipes = new Discord.Collection();
const {token} = require('./config.json');
const activities_list = [
    "2 mois et 1 jour", //Pourquoi pas pris en compte?
    "2 mois et 1 jour"
];

client.once('ready', () => {
    console.log('Ready!' + 'La connexion est affecté à : ' + `${client.user.tag}`);
    client.user.setActivity('En Couple avec Galaxy et Elyvne ; 2 Mois & 6 Jours ❤', "PLAYING");
});

client.login(token);

client.on('message', message => {
    console.log(message.author.tag + ':' + message.content + ' (ID AUTH :)' + message.author.id);
    //client.channels.cache.get('872863333504667668').send(message.author.tag + ' : ' + message.content + ' : ' + ' ID AUTHOR : ' + message.author.id)
});

client.on('messageDelete', message => {
    console.log(`LOG CONSOLE: Un message de ${message.author.tag} vient d'être supprimé ! mais nous savons pas qui l'a fait..`);
    //message.channel.send('*Attention, bot en developemment, peut provoquer problème. Si problème, merci de signaler a Galaxy. Navré en cas de pb');
    //message.channel.send(`Un message de <@${message.author.id}> vient de disparaître ! mais nous savons pas qui l'a fait..`);
    snipes.set(message.channel.id, message)

    const LogChannel = client.channels.cache.get('872863333504667668')
    const DeletedLog = new Discord.MessageEmbed()
        .setTitle("Message Supp")
        .addField('Delete by', message.author)
        .addField("In", message.channel)
        .addField('Content', message.content)
        .setColor('RANDOM')
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        LogChannel.send(DeletedLog)
});

client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
    if (message.content.startsWith('!ping')) {
        message.channel.send("Pinging...").then(m => {
            // The math thingy to calculate the user's ping
            var ping = m.createdTimestamp - message.createdTimestamp;

            // Basic embed
            var embed = new Discord.MessageEmbed()
                .setAuthor(`Votre ping est de : ${ping}`)
                .setColor("RED")

            // Then It Edits the message with the ping variable embed that you created
            m.edit(embed)
        });
    }
    ;
    if (message.content.startsWith('!mp')) {
        message.channel.send("ㅤ").then(m => {
            // The math thingy to calculate the user's ping
            var ping = m.createdTimestamp - message.createdTimestamp;       //Bon, ne sert à rien mais blc

            // Basic embed
            var embed = new Discord.MessageEmbed()
                .setAuthor(`Je viens dans moins de 10 minutes dans votre boîte à lettre privée !`)
                .setColor("RED")

            // Then It Edits the message with the ping variable embed that you created
            m.edit(embed)
            var mp = message.author.send("Your message here.")
        });
    }
    ;
});