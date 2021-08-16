const Discord = require('discord.js');
const client = new Discord.Client();
const snipes = new Discord.Collection();
const {token} = require('./config.json');
const {WebhookClient} = require("discord.js");
//const webhookgithub = new WebhookClient({url : `https://discord.com/api/webhooks/872919555071148062/hssGBUjM9eBphxpZvvTzWs_2lLzzYJ7m7pFXU8uyKsYAOOzOy7qtggC0xHq0GrpJnkmo`});
//const activities_list = [
    //"2 mois et 1 jour", //Pourquoi pas pris en compte?
    //"2 mois et 1 jour"
//];

client.once('ready', () => {
    console.log('Ready!' + 'La connexion est affecté à : ' + `${client.user.tag}`);
    client.user.setActivity('En Couple avec Galaxy et Elyvne ; 2 Mois & 17 Jours ❤ / WIP RaspeberryPI3', "PLAYING")
});

client.login(token);

client.on('message', message => {
    console.log(message.author.tag + ':' + message.content + ' (ID AUTH :)' + message.author.id);
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
                .setAuthor(`Votre ping est de : ${ping} ms`)
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
    if (message.content.startsWith('!insta1')) {
        message.channel.send("ㅤ").then(m => {
            // The math thingy to calculate the user's ping
            var ping = m.createdTimestamp - message.createdTimestamp;       //Bon, ne sert à rien mais blc

            // Basic embed
            var embed = new Discord.MessageEmbed()
                .setTitle("Magnifique Journée avec Elyséa ! (Instagram)")
                .setURL("https://www.instagram.com/p/CShhMpXs6EO/")
                .setAuthor("Mr Ethan", "https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_ohc=iGTeETFwZ48AX8S51oI&edm=AP_V10EBAAAA&ccb=7-4&oh=f4d42e6504c6bbf092ad32a3f1345a98&oe=611E9A84&_nc_sid=4f375e","https://www.instagram.com/ethan.57.44/")
                .setColor(0x00AE86)
                .setDescription("ethan.57.44 : Enfin !!!! J'ai pu la récupérer ! Merci @leclerc_oceane_reze ! (Merci @galerie_oceane_reze ) Très belle bague ^^ ! Très content de l'avoir récupérée aujourd'hui par ce beau temps ! Mademoiselle est très contente de la porter ! 💫❤ (EDIT Spécial : Merci pour cette magnifique journée ! Merci pour ton amour Ely !)")
                .setImage("https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/236098178_796330221052275_5935523431322973431_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=uDdX12pOymkAX9zTklZ&edm=AP_V10EBAAAA&ccb=7-4&oh=f688d0d4d726dc0b93b83ebf7d02750c&oe=611CDE3F&_nc_sid=4f375e")
                .setTimestamp()

            //Then It Edits the message with the ping variable embed that you created
            m.edit(embed)
        });
    }
    ;
    if (message.content.startsWith('!lovemention')) {
        message.channel.send("Mention : <@594989884087861249> Elyséa <3 & <@485789557858631680> Ethan <3")
    }
    ;
	if (message.content.startsWith('!depamour')) {
        message.channel.send("Actuellement, <@485789557858631680> est sous dépendance affective.")
		message.channel.send("EXPLICATION :")
		message.channel.send("1.Quand la personne que tu aimes ne te donne pas, tu te fais des films. Tu t'imagine qu'elle est en train de te tromper, qu'elle va me quitter, ou autres.")
		message.channel.send("2. Tu attends toujours quelques choses en retour.")
		message.channel.send("3. Ton Etat émotionnel est selon l'état de ton amour")
		message.channel.send("4. Tu as peur de perdre cette personne et qu'elle te laisse tomber.")
		message.channel.send("C'est donc pour cela que je protège Elyséa souvent, que tu peut me croire posséif. Oui. Je suis possésif car je suis en dépendance. Et c'est très dur... Personne n'est au courant de la situation. Sauf vous. Alors help.")
    }
    ;
    if (message.content.startsWith('!explain1608')) {
        message.channel.send("Coucou ma chérie <@594989884087861249>." + "\n" + "\n" + "Je ne sais pas si tu m'aimes (et voilà... Je reviens avec ma dépendance fuck) après ce qu'Elo m'a fait..." + "\n" + "\n" +"Je ne sais pas si tu veux qu'on continue l'aventure... Personellement et sincèrement, I want. I want continue this adventure ! Because i love you Elyséa." + "\n" + "\n" + " I'm not going to stop at a person who wants to block us!" + "\n" + "\n" + " I created 2 commands which are a bit stupid but I'll let you test them: (prefix : !) music1 et music2 ... You will have a little surprise ...")
        message.channel.typing
        message.channel.typing
        message.channel.typing
        message.channel.typing
        message.channel.send("Voilà, après comme je t'ai dis, si j'ai annulé jeudi, en plus ma mère veut faire les courses de rentrées x) à partir de 15h30, et je pense sortir vers les 17h, 18h mdr..." + "\n" + "\n" + " Et c'est pour avoir plus d'argent, je vais même te dire ce que j'aurais prévu jeudi et que je ferrai le 31 aout, à la base, je voulais arriver avec un bouquet de rose ^^ ainsi que 2 Starbucks. 1 pour toi, et 1 pour moi..." + "\n" + "\n" + " Sauf que voilà, c'est compliqué, j'ai 40€ en CB et 12€ en chèques... C'est donc un peu dur de prévoir x)")
        message.channel.typing
        message.channel.send("J'espère que tu reviendra vite me voir. Et que tu seras disponible toute l'après-midi du 31 ^^ à partir de 14h30 je pense? On devra aller a Atlantis (Zone, pas Atlantis lui-même)." + "\n" + "\n" + "Je vais te laisser, je reviendrais te voir si tu reparles, je verrais bien si tu commente ce que Elite à dit.")
        message.channel.send("L'utilisation du 'JE' par Elite est en train de parler au nom de <@485789557858631680>. Ethan te fais des réelles baisers. Also des FrenchKiss. A très vite et navré encore ! ")
    }
    ;
	 if (message.content.startsWith('!music1')) {
        message.channel.send("ㅤ").then(m => {
            // The math thingy to calculate the user's ping
            var ping = m.createdTimestamp - message.createdTimestamp;       //Bon, ne sert à rien mais blc

            // Basic embed
            const embed = new Discord.MessageEmbed()
					.setTitle("Musique by Ely 1 / Xillions Heartbeat")
					.setURL("https://open.spotify.com/track/5u1VAWFCjXEFP3ydJCRf7k?si=7f602bb2c3c2459c&nd=1")
					.setAuthor("Elyséa", "https://cdn.discordapp.com/avatars/594989884087861249/a0f8250ed0bdf2e4af867d2463bc9e1a.png?size=128")
					.setColor("random")
                    .setDescription("Can you feel my heartbeat?\n" + "Can you hear the song?\n" + "Coming ever closer\n" + "Even though I'm gone\n" + "\n" + "I want you to see\n" + "And I want you to know\n" + "I am never far\n"+ "You are not alone\n" + "\n" + "Even in the darkness\n" + "Even in the night\n" +"Look into the sky\n" + "And then you'll see the light\n" + "\n" + "Anything you do hun'\n" + "Anywhere you go\n" + "I am always here\n" + "You aren't alone\n" + "\n" + "Can you feel my heartbeat?\n" + "Can you hear the song?\n" + "Coming ever closer\n" + "Even though I'm gone\n" + "\n" + "I want you to see\n" + "And I want you to know\n" + "I am never far\n" + "You are not alone\n" + "\n" + "Even in the darkness\n" + "Even in the night\n" + "Look into the sky\n" + "And then you'll see the light\n" + "\n" + "Anything you do hun'\n" + "Anywhere you go\n" + "I am always here\n" + "You aren't alone\n" + "\n" + "You aren't all-\n" + "\n" + "Can you feel my heartbeat?\n" + "Can you hear the song?\n" + "Coming ever closer\n" + "Even though I'm gone\n" + "\n" + "I want you to see\n" + "And I want you to know\n" + "I am never far\n"+ "You are not alone\n" + "\n" + "Even in the darkness\n" + "Even in the night\n" +"Look into the sky\n" + "And then you'll see the light\n" + "\n" + "Anything you do hun'\n" + "Anywhere you go\n" + "I am always here\n" + "You aren't alone\n")
					.setThumbnail("")
					.setTimestamp()
            //Then It Edits the message with the ping variable embed that you created
            m.edit(embed)
        });
    }
    ;
    if (message.content.startsWith('!music2')) {
        message.channel.send("ㅤ").then(m => {
            // The math thingy to calculate the user's ping
            var ping = m.createdTimestamp - message.createdTimestamp;       //Bon, ne sert à rien mais blc

            // Basic embed
            var embed = new Discord.MessageEmbed()
                .setTitle("Musique by Ely 2 / Cold Water Theroy of a Dead Man")
                .setURL("https://open.spotify.com/track/6jYkaYnPCAVnMVtINhqLOS?si=be70d481b0b44fda")
                .setAuthor("Elyséa", "https://cdn.discordapp.com/avatars/594989884087861249/a0f8250ed0bdf2e4af867d2463bc9e1a.png?size=128")
                .setColor("random")
                .setDescription("Everybody gets sad sometimes, you know\n" + "What else can we do when we're feeling low?\n" + "So take a deep breath and let it go\n" + "You shouldn't be drowning on your own\n" + "And if you feel you're sinking, I will jump right over\n" + "Into cold, cold water for you\n" + "And although time may take us into different places\n" + "I will still be patient with you\n" + "And I hope you know\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "'Cause we all get lost sometimes, you know?\n" + "It's how we learn and how we grow\n" + "And I wanna lay with you 'til I'm old\n" + "You shouldn't be fighting on your own\n" + "And if you feel you're sinking, I will jump right over\n" + "Into cold, cold water for you\n" + "And although time may take us into different places\n" + "I will still be patient with you\n" + "And I hope you know\n" + "I won't let go (I won't let go, no no, no no, no more)\n" + "I'll be your lifeline tonight\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "Come on, come on\n" + "Save me from my rocking boat\n" + "I just wanna stay afloat\n" + "I'm all alone\n" + "And I hope, I hope someone's gonna take me home\n" + "Somewhere I can rest my soul (rest my soul)\n" + "I need to know you won't let go\n" + "I won't let go, no I won't let go (no no, no no, no more)\n" + "I'll be your lifeline tonight\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "I won't let go\n")
                .setThumbnail("")
                .setTimestamp()
            //Then It Edits the message with the ping variable embed that you created
            m.edit(embed)
        });
    }
    ;
});