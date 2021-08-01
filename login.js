const Discord = require('discord.js');
const client = new Discord.Client();
const activities_list = [
    "2 mois et 1 jour",
    "2 mois et 2 jours"
];

client.once('ready', () => {
    console.log('Ready!');
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index], {type: 'WATCHING'});
    }, 15000);
});

client.login('SECRETONGITGUB');

client.on('message', message => {
    console.log(message.content);
});

client.on('messageDelete', message => {
    console.log(`LOG CONSOLE: Un message de ${message.author.tag} vient d'être supprimé ! mais nous savons pas qui l'a fait..`);
    message.channel.send(`Un message de <@${message.author.id}> vient de disparaître ! mais nous savons pas qui l'a fait..`);
});

client.on('message', message => {
    if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
    if (message.content === '!admin') {
        // send back "Le créateur de ce bot est : Galaxy." to the channel the message was sent in
        message.channel.send('Le Créateur de ce bot est : <@485789557858631680>.');
    }
    if (message.content === '!history') {
        // send back "Le salon content l'historique des actions est le suivant :" to the channel the message was sent in
        message.channel.send('Le salon ayant un historique du serveur est le suivant : <#871069630536511538> (ATTENTION : Acces Only LOVEMAX)');
    }
});
