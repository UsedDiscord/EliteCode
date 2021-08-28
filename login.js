const Discord = require('discord.js');
const client = new Discord.Client();
const snipes = new Discord.Collection();
const {token} = require('./config.json');
const {MessageAttachment} = require("discord.js");
const Minesweeper = require('discord.js-minesweeper');
const repliqueC = '!replique';
const photo1img = new Discord.MessageAttachment('command/instarandom/photo1.png', 'photo1.png');
const photo2img = new Discord.MessageAttachment('command/instarandom/photo2.png', 'photo2.png');
const photo3img = new Discord.MessageAttachment('command/instarandom/photo3.png', 'photo3.png');
const photo4img = new Discord.MessageAttachment('command/instarandom/photo4.png', 'photo4.png');
const photo5img = new Discord.MessageAttachment('command/instarandom/photo5.png', 'photo5.png');
const photo6img = new Discord.MessageAttachment('command/instarandom/photo6.png', "photo6.png");
const photo7img = new Discord.MessageAttachment('command/instarandom/Photo7.png', 'photo7.png');
const photo8img = new Discord.MessageAttachment('command/instarandom/photo8.png', 'photo8.png');
const photo9img = new Discord.MessageAttachment('command/instarandom/photo9.png', 'photo9.png');
const photo10img = new Discord.MessageAttachment('command/instarandom/photo10.png', 'photo10.png');
const photo11img = new Discord.MessageAttachment('command/instarandom/photo11.png', 'photo11.png');
const photo18img = new Discord.MessageAttachment('command/instarandom/photo18.png', 'photo18.png');
const photo20img = new Discord.MessageAttachment('command/instarandom/photo20.png', 'photo20.png')
const photo21img = new Discord.MessageAttachment('command/instarandom/photo21.png', 'photo21.png')
const instagramneige = new Discord.MessageAttachment('command/photo/janv/instagram17janv.png', 'instagram17janv.png')

//const {WebhookClient} = require("discord.js");
//const webhookgithub = new WebhookClient({url : `https://discord.com/api/webhooks/872919555071148062/hssGBUjM9eBphxpZvvTzWs_2lLzzYJ7m7pFXU8uyKsYAOOzOy7qtggC0xHq0GrpJnkmo`});
//var fs = require('fs');

//fs.readFile('path/to/file', 'utf8', function(err, contents) {
    //const activities_list =[]
//}

//);
const activities_list = [
    "En Couple avec Ethan et Elyséa ; 2 Mois & 23 Jours ❤ / WIP RaspeberryPI3 / Love you honestly ! ❤",
    "Elite fait passer un message à Elyséa : He loves you. Very Love",
    "Ethan t'aimes Elyséa ❤",
    "Elite by Galaxy.",
    "Don't let me down. Please Don't let me down -- Ethan",
    "You're so cute Elyséa.",
    "Tu es tellement gentille Elyséa",
    "Il est vraiment désolé pour toutes ses conneries... Sorry Elyséa",
    "De la part d'Ethan : ❤❤❤ Ely ❤❤❤",
    "3 mois ! Nous tenons bien !",
    "J'ai hâte de te voir ma chérie !",
    "Parleee mwaaa plus souvent Elyséa <3. Je n'attends que ça ! ^^",
    "Merci pour ton magnifique texte bébé <3 !",
    "J-1 for you",
    "J-6 for together in School !",
    "J-5 !",
    "I'm Beautiful and Irremplaçable  ❤ and You : Cue and Irremplaçable ❤ !"
];

client.once('ready', () => {
    console.log('Ready!' + 'La connexion est affecté à : ' + `${client.user.tag}`);

    let i = 0;
    setInterval(() => client.user.setActivity(`'${activities_list[i++ % activities_list.length]}`, {type : 'PLAYING'}), 1000)
});

client.login(token);

client.on('message', message => {
    console.log(message.author.tag + ':' + message.content + ' (ID AUTH :)' + message.author.id);

    if (message.channel.type === 'dm'){
        client.channels.cache.get(`876168236553609297`).send("<@485789557858631680> : Vous avez un nouveau message chez EliteCode ! :" + message.author.id + ' : ' + message.author.tag + ' : ' + message.content)
    };
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

client.on('message',  message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
    if (message.content.startsWith('!help')) {
        message.channel.send("Help en cours...").then(m => {

            var personneping = message.author.id;

            var embed = new Discord.MessageEmbed()
                .setTitle("Voici les actions possibles d'EliteCode !")
                .setColor(0x00AE86)
                .setDescription('Bonjour' + '\n' +
                    "Voici les actions qu'EliteCode peut effectuer avec le préfix \"**!**\"\n" +
                    "\n" +
                    "✨ !help ➡️ Donne la liste des commandes possible avec EliteCode\n" +
                    "✨ !ping ➡️ Donne le ping de la personne concerné (~~un peu cassé~~)\n" +
                    "✨ !mp ➡️ Envoi un message à la personne ayant effectué la commande.\n" +
                    "✨ !insta1 ➡️ Affiche le post Instagram de @ethan.57.44 : Récupération de bague pour Elyséa\n" +
                    "✨ !lovemention ➡️ Envoi les pings des 2 amours (Ethan & Elyséa)\n" +
                    "✨ !depamour ➡️Explique la dépendance affective d'Ethan.\n" +
                    "✨ !music1 ➡️ Musique 1 préferée d'Elyséa dans le couple\n" +
                    "✨ !music2 ➡️ Musique 2 préferée d'Elyséa dans le couple.\n" +
                    "✨ !musicpref ➡️La musique préféré dans le couple.\n" +
                    "✨ !photoinstarandom ➡️ Envoi des photos random (Select par Ethan) en provenance d'Instagram\n" +
                    "✨ !instagram ➡️ Affiche l'Instagram d'@ethan.57.44\n" +
                    "✨ !peur ➡️ Les différents peurs qu'Ethan peut avoir...\n" +
                    "\n" +
                    "\n" +
                    "⛩️Si le bot est hors-ligne ou ne réponds plus. Merci de prevenir GalaxyStars HypeSquad#1511 ( <@485789557858631680> PING) ⛩️\n")
            m.edit(embed)

        });
    }
    ;
    if (message.content.startsWith('!ping')) {
        message.channel.send("Pinging...").then(m => {
            // The math thingy to calculate the user's ping
            var ping = m.createdTimestamp - message.createdTimestamp;

            var embed = new Discord.MessageEmbed()
                .setAuthor(`Votre ping est de : ${ping} ms`)
                .setColor("RED")
            m.edit(embed)
        });
    }
    ;
    if (message.content.startsWith('!mp')) {
        message.channel.send("ㅤ").then(m => {
            var embed = new Discord.MessageEmbed()
                .setAuthor(`Je viens dans moins de 10 minutes dans votre boîte à lettre privée !`)
                .setColor("RED")

            m.edit(embed)
            var mp = message.author.send("Your message here.")
        });
    }
    ;
    if (message.content.startsWith('!insta1')) {
        message.channel.send("ㅤ").then(m => {
            var ping = m.createdTimestamp - message.createdTimestamp;       //Bon, ne sert à rien mais blc

            var embed = new Discord.MessageEmbed()
                .setTitle("Magnifique Journée avec Elyséa ! (Instagram)")
                .setURL("https://www.instagram.com/p/CShhMpXs6EO/")
                .setAuthor("Mr Ethan", "https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_ohc=iGTeETFwZ48AX8S51oI&edm=AP_V10EBAAAA&ccb=7-4&oh=f4d42e6504c6bbf092ad32a3f1345a98&oe=611E9A84&_nc_sid=4f375e", "https://www.instagram.com/ethan.57.44/")
                .setColor(0x00AE86)
                .setDescription("ethan.57.44 : Enfin !!!! J'ai pu la récupérer ! Merci @leclerc_oceane_reze ! (Merci @galerie_oceane_reze ) Très belle bague ^^ ! Très content de l'avoir récupérée aujourd'hui par ce beau temps ! Mademoiselle est très contente de la porter ! 💫❤ (EDIT Spécial : Merci pour cette magnifique journée ! Merci pour ton amour Ely !)")
                .setImage("https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/236098178_796330221052275_5935523431322973431_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=uDdX12pOymkAX9zTklZ&edm=AP_V10EBAAAA&ccb=7-4&oh=f688d0d4d726dc0b93b83ebf7d02750c&oe=611CDE3F&_nc_sid=4f375e")
                .setTimestamp()

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
        message.channel.send("Coucou ma chérie <@594989884087861249>." + "\n" + "\n" + "Je ne sais pas si tu m'aimes (et voilà... Je reviens avec ma dépendance fuck) après ce qu'Elo m'a fait..." + "\n" + "\n" + "Je ne sais pas si tu veux qu'on continue l'aventure... Personellement et sincèrement, I want. I want continue this adventure ! Because i love you Elyséa." + "\n" + "\n" + " I'm not going to stop at a person who wants to block us!" + "\n" + "\n" + " I created 2 commands which are a bit stupid but I'll let you test them: (prefix : !) music1 et music2 ... You will have a little surprise ...")
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

            const embed = new Discord.MessageEmbed()
                .setTitle("Musique by Ely 1 / Xillions Heartbeat")
                .setURL("https://open.spotify.com/track/5u1VAWFCjXEFP3ydJCRf7k?si=7f602bb2c3c2459c&nd=1")
                .setAuthor("Elyséa", "https://cdn.discordapp.com/avatars/594989884087861249/a0f8250ed0bdf2e4af867d2463bc9e1a.png?size=128")
                .setColor("random")
                .setDescription("Can you feel my heartbeat?\n" + "Can you hear the song?\n" + "Coming ever closer\n" + "Even though I'm gone\n" + "\n" + "I want you to see\n" + "And I want you to know\n" + "I am never far\n" + "You are not alone\n" + "\n" + "Even in the darkness\n" + "Even in the night\n" + "Look into the sky\n" + "And then you'll see the light\n" + "\n" + "Anything you do hun'\n" + "Anywhere you go\n" + "I am always here\n" + "You aren't alone\n" + "\n" + "Can you feel my heartbeat?\n" + "Can you hear the song?\n" + "Coming ever closer\n" + "Even though I'm gone\n" + "\n" + "I want you to see\n" + "And I want you to know\n" + "I am never far\n" + "You are not alone\n" + "\n" + "Even in the darkness\n" + "Even in the night\n" + "Look into the sky\n" + "And then you'll see the light\n" + "\n" + "Anything you do hun'\n" + "Anywhere you go\n" + "I am always here\n" + "You aren't alone\n" + "\n" + "You aren't all-\n" + "\n" + "Can you feel my heartbeat?\n" + "Can you hear the song?\n" + "Coming ever closer\n" + "Even though I'm gone\n" + "\n" + "I want you to see\n" + "And I want you to know\n" + "I am never far\n" + "You are not alone\n" + "\n" + "Even in the darkness\n" + "Even in the night\n" + "Look into the sky\n" + "And then you'll see the light\n" + "\n" + "Anything you do hun'\n" + "Anywhere you go\n" + "I am always here\n" + "You aren't alone\n")
                .setThumbnail("")
                .setTimestamp()
            m.edit(embed)
        });
    }
    ;
    if (message.content.startsWith('!music2')) {
        message.channel.send("ㅤ").then(m => {

            var embed = new Discord.MessageEmbed()
                .setTitle("Musique by Ely 2 / Cold Water Theroy of a Dead Man")
                .setURL("https://open.spotify.com/track/6jYkaYnPCAVnMVtINhqLOS?si=be70d481b0b44fda")
                .setAuthor("Elyséa", "https://cdn.discordapp.com/avatars/594989884087861249/a0f8250ed0bdf2e4af867d2463bc9e1a.png?size=128")
                .setColor("random")
                .setDescription("Everybody gets sad sometimes, you know\n" + "What else can we do when we're feeling low?\n" + "So take a deep breath and let it go\n" + "You shouldn't be drowning on your own\n" + "And if you feel you're sinking, I will jump right over\n" + "Into cold, cold water for you\n" + "And although time may take us into different places\n" + "I will still be patient with you\n" + "And I hope you know\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "'Cause we all get lost sometimes, you know?\n" + "It's how we learn and how we grow\n" + "And I wanna lay with you 'til I'm old\n" + "You shouldn't be fighting on your own\n" + "And if you feel you're sinking, I will jump right over\n" + "Into cold, cold water for you\n" + "And although time may take us into different places\n" + "I will still be patient with you\n" + "And I hope you know\n" + "I won't let go (I won't let go, no no, no no, no more)\n" + "I'll be your lifeline tonight\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "Come on, come on\n" + "Save me from my rocking boat\n" + "I just wanna stay afloat\n" + "I'm all alone\n" + "And I hope, I hope someone's gonna take me home\n" + "Somewhere I can rest my soul (rest my soul)\n" + "I need to know you won't let go\n" + "I won't let go, no I won't let go (no no, no no, no more)\n" + "I'll be your lifeline tonight\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "I won't let go\n")
                .setThumbnail("")
                .setTimestamp()
            m.edit(embed)
        });
    }
    ;
    if (message.content.startsWith('!musicpref')) {
        if (message.channel.id === '856627704828657664') {
            message.channel.send('Voilà ta musique préferé ma chérie ! (Si jamais tu dois changer, envoie un message à Elite ! Il corrigera :) (Phrase valide uniquement ici pour une discrétion. EliteCode.').then(m => {
                var ping = m.createdTimestamp - message.createdTimestamp;       //Bon, ne sert à rien mais blc

                var embed = new Discord.MessageEmbed()
                    .setTitle("Musique by Ely 2 / Cold Water Theroy of a Dead Man")
                    .setURL("https://open.spotify.com/track/6jYkaYnPCAVnMVtINhqLOS?si=be70d481b0b44fda")
                    .setAuthor("Elyséa", "https://cdn.discordapp.com/avatars/594989884087861249/a0f8250ed0bdf2e4af867d2463bc9e1a.png?size=128")
                    .setColor("random")
                    .setDescription("Everybody gets sad sometimes, you know\n" + "What else can we do when we're feeling low?\n" + "So take a deep breath and let it go\n" + "You shouldn't be drowning on your own\n" + "And if you feel you're sinking, I will jump right over\n" + "Into cold, cold water for you\n" + "And although time may take us into different places\n" + "I will still be patient with you\n" + "And I hope you know\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "'Cause we all get lost sometimes, you know?\n" + "It's how we learn and how we grow\n" + "And I wanna lay with you 'til I'm old\n" + "You shouldn't be fighting on your own\n" + "And if you feel you're sinking, I will jump right over\n" + "Into cold, cold water for you\n" + "And although time may take us into different places\n" + "I will still be patient with you\n" + "And I hope you know\n" + "I won't let go (I won't let go, no no, no no, no more)\n" + "I'll be your lifeline tonight\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "Come on, come on\n" + "Save me from my rocking boat\n" + "I just wanna stay afloat\n" + "I'm all alone\n" + "And I hope, I hope someone's gonna take me home\n" + "Somewhere I can rest my soul (rest my soul)\n" + "I need to know you won't let go\n" + "I won't let go, no I won't let go (no no, no no, no more)\n" + "I'll be your lifeline tonight\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "I won't let go\n")
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            })
        } else if (message.channel.send('ㅤ').then(m => {

            var embed = new Discord.MessageEmbed()
                .setTitle("Musique by Ely 2 / Cold Water Theroy of a Dead Man")
                .setURL("https://open.spotify.com/track/6jYkaYnPCAVnMVtINhqLOS?si=be70d481b0b44fda")
                .setAuthor("Elyséa", "https://cdn.discordapp.com/avatars/594989884087861249/a0f8250ed0bdf2e4af867d2463bc9e1a.png?size=128")
                .setColor("random")
                .setDescription("Everybody gets sad sometimes, you know\n" + "What else can we do when we're feeling low?\n" + "So take a deep breath and let it go\n" + "You shouldn't be drowning on your own\n" + "And if you feel you're sinking, I will jump right over\n" + "Into cold, cold water for you\n" + "And although time may take us into different places\n" + "I will still be patient with you\n" + "And I hope you know\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "'Cause we all get lost sometimes, you know?\n" + "It's how we learn and how we grow\n" + "And I wanna lay with you 'til I'm old\n" + "You shouldn't be fighting on your own\n" + "And if you feel you're sinking, I will jump right over\n" + "Into cold, cold water for you\n" + "And although time may take us into different places\n" + "I will still be patient with you\n" + "And I hope you know\n" + "I won't let go (I won't let go, no no, no no, no more)\n" + "I'll be your lifeline tonight\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "Come on, come on\n" + "Save me from my rocking boat\n" + "I just wanna stay afloat\n" + "I'm all alone\n" + "And I hope, I hope someone's gonna take me home\n" + "Somewhere I can rest my soul (rest my soul)\n" + "I need to know you won't let go\n" + "I won't let go, no I won't let go (no no, no no, no more)\n" + "I'll be your lifeline tonight\n" + "I won't let go\n" + "I'll be your lifeline tonight\n" + "I won't let go\n")
                .setThumbnail("")
                .setTimestamp()
            m.edit(embed)
        })) ;
    }
    if (message.content.startsWith('!photorandominsta')) {

        const photo1 = new Discord.MessageEmbed()
            .setTitle('Love you ❤')
            .setDescription(`<@594989884087861249>, il semblerait que <@485789557858631680> souhaite te montrer quelque chose ! \n\n *I want continue this adventure !*`)
            //.setImage('https://prnt.sc/1qanwz9')
            .attachFiles(photo1img)
            .setImage('attachment://photo1.png')
            .setFooter("Photo 1")//, message.author.username, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("#baff58")

        const photo2 = new Discord.MessageEmbed()
            .setTitle("Je T'Aime Elyséa ❤")
            .setDescription("On dirait que quelqu'un à éxecuter la commande !photorandominsta ! Voici un cadeau pour toi ma dulcinée <@594989884087861249> ! de la part d'<@485789557858631680>!")
            //.setImage('https://prnt.sc/1qanyw2')
            .attachFiles(photo2img)
            .setImage('attachment://photo2.png')
            .setFooter("Photo 2")//, message.author.username, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("#0e2be5")

        const photo3 = new Discord.MessageEmbed()
            .setTitle('Magie !')
            .setDescription("C'est vraiment magique ce qu'on peut vivre n'es-ce pas <@594989884087861249> ! From <@485789557858631680> !")
            //.setImage('https://prnt.sc/1qao06f')
            .attachFiles(photo3img)
            .setImage('attachment://photo3.png')
            .setFooter("Photo 3")//, message.author.username, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("#baff58")

        const photo4 = new Discord.MessageEmbed()
            .setTitle('My Star !')
            .setDescription("Tu es réellement mon étoile Elyséa <@594989884087861249> ! Je t'aime ! de la part d'<@485789557858631680>")
            //.setImage('https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/236452749_3042626252730635_2408720752946268155_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=UFI70u0MGZ4AX8S1KXM&edm=ACOOH6wBAAAA&ccb=7-4&oh=0febf074a03fdb23cccb51d97bfce670&oe=61239914&_nc_sid=ec1c8f&ig_cache_key=MjYzODkwODM2ODk0OTQ3NTY1Ng%3D%3D.2-ccb7-4')
            .setFooter("Photo 4")//, message.author.username, message.author.displayAvatarURL())
            .attachFiles(photo4img)
            .setImage('attachment://photo4.png')
            .setTimestamp()
            .setColor("#baff58")

        const photo5 = new Discord.MessageEmbed()
            .setTitle('Merci ! Vraiment de la part de <@485789557858631680>')
            .setDescription("Merci beaucoup pour ton amour Elyséa <@594989884087861249> ! de la part d'<@485789557858631680>")
            //.setImage('https://prnt.sc/1qao3z9')
            .attachFiles(photo5img)
            .setImage('attachment://photo5.png')
            .setFooter("Photo 5")//, message.author.username, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("#baff58")

        const photo6 = new Discord.MessageEmbed()
            .setTitle('Vraiment! So True !')
            .setDescription("It's so true together <@485789557858631680> & <@594989884087861249> ! Je t'embrasse (Image)")
            //.setImage('https://prnt.sc/1qao55e')
            .attachFiles(photo6img)
            .setImage('attachment://photo6.png')
            .setFooter("Photo 6")//, message.author.username, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("#baff58")

        const photo7 = new Discord.MessageEmbed()
            .setTitle("Ma vie n'est rien sans tes messages du midi !")
            .setDescription("Tes messages le midi me font extrêment plaisir Elyséa ! A chaque son de notification t'appartenant, je me réjouis à savoir ce que tu as marquée ! J'ai toujours une joie de lire tes messages ! <3")
            //.setImage("https://prnt.sc/1qao6ck")
            .attachFiles(photo7img)
            .setImage('attachment://photo7.png')
            .setFooter("Photo 7")//, message.author.username, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("#baff58")

        const photo8 = new Discord.MessageEmbed()
            .setTitle("Le temps est toujours trop court ! J'aimerais vraiment avoir plus de temps !")
            .setDescription("Hélas, quand on se voit, en général, le temps est toujours trop court ! Ce qui est réellement dommage, mais nous avons tous nos imprévus ! mais au-moins se voir, c'est magnifique, tu sais pourquoi? Car tu es **magnifique ** ma chérie ! You're so cute ! ")
            //.setImage('https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/238769279_891036618494483_8259702509770044729_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=Dk5D9tyon5UAX-voNmH&edm=ACOOH6wBAAAA&ccb=7-4&oh=be5ba7672866597380917b3db512c9b5&oe=612389BE&_nc_sid=ec1c8f&ig_cache_key=MjY0Mjk3MjczNTczNzM1NDg2NA%3D%3D.2-ccb7-4')
            .attachFiles(photo8img)
            .setImage('attachment://photo8.png')
            .setFooter("Photo 8")//, message.author.username, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("#baff58")

        const photo9 = new Discord.MessageEmbed()
            .setTitle("Il est vrai que je suis un con...")
            .setDescription("Oui, j'en suis un, et je m'en excuse ! Je ne sais pas comment me faire pardonner pour les conneries Sexiste, matcho que j'ai pu faire... I'm not perfect, yes. Sorry, from <@485789557858631680> mais, une chose qui est sûr ! Je T'aime Elyséa ! ")
            //.setImage('https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/239246944_887214472207855_195109664491069266_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=AmL8ubXXVLIAX-9vzOK&edm=ACOOH6wBAAAA&ccb=7-4&oh=662f7ad580ee9b0127a88de9d8d24ad1&oe=6124FC29&_nc_sid=ec1c8f&ig_cache_key=MjY0MTc4ODc4NjgwNjQ5MjkwOA%3D%3D.2-ccb7-4')
            .attachFiles(photo9img)
            .setImage('attachment://photo9.png')
            .setFooter("Photo 9")//, message.author.username, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("#baff58")

        const photo10 = new Discord.MessageEmbed()
            .setTitle("La Magie des SMS")
            .setDescription("Quand je recçois un de tes sms, ou Discord <@594989884087861249>, je prends toujours au-moins 5 minutes pour lire, relire et rerelire ce que tu marques... C'est tellement épic (*ref débile : Je suis un porc-épic :kappa:*) de voir ce que tu marques ! ")
            //.setImage('https://prnt.sc/1qam9hn')
            .attachFiles(photo10img)
            .setImage('attachment://photo10.png')
            .setFooter("Photo 10")//, message.author.username, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("#baff58")

        const photo11 = new Discord.MessageEmbed()
            .setTitle("La Conjugaison together !")
            .setDescription("Love you ❤ From <@485789557858631680>")
            //.setImage('https://prnt.sc/1qamc96')
            .attachFiles(photo11img)
            .setImage('attachment://photo11.png')
            .setFooter("Photo 11")//, message.author.username, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("#baff58")

        const photo12 = new Discord.MessageEmbed()
            .setTitle("La Chance ! Une photo de nous 2 ! ")
            .setDescription("Tu as vraiment de la chance ! Et si cette photo est là Elyséa, cela signifie que je pense tout le temps à toi <3")
            .setImage("https://media.discordapp.net/attachments/863491782372884490/863532649305604117/IMG_20210706_220213.jpg?width=563&height=754")
            .setFooter("Photo 12")//, message.author.username, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("#baff58")

        const photo13 = new Discord.MessageEmbed()
            .setTitle("Nos magnifiques bracelets !")
            .setDescription("Merci de le porté Elyséa ! ça me fait réellement plaisir que tu tiennes à moi... même en étant con...")
            .setImage("https://media.discordapp.net/attachments/843763515668168714/874600972968685568/IMG_20210810_123120.jpg?width=565&height=754")
            .setThumbnail("https://media.discordapp.net/attachments/856627704828657664/877599580781420554/20210818_190721.jpg?width=565&height=754")
            .setFooter("Photo 13")//, message.author.username, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("#baff58")

        const photo14 = new Discord.MessageEmbed()
            .setTitle("La bagueeeeeeeeeee !")
            .setDescription("Et voilà ! Ta première vraie bague ^^ Je t'aime Elyséa !")
            .setImage('https://media.discordapp.net/attachments/843763515668168714/875799919024283668/1628876516976.jpg?width=348&height=754')
            .setFooter("Photo 14")//, message.author.username, message.author.displayAvatarURL(),)
            .setTimestamp()
            .setColor("#baff58")

        const photo15 = new Discord.MessageEmbed()
            .setTitle("Starbuck together !")
            .setDescription("Après un magnifique cadeau de la part de <@594989884087861249> qui était réellement inattendu ! (Toujours Merci !!) nous voilà dans un Starbucks ensemble ! A coté de Galerie LaFayette ! Merci d'avoir accepté ensemble chérie <@594989884087861249> !")
            .setImage('https://media.discordapp.net/attachments/673562020104241156/877978128033652766/IMG_20210819_170400.jpg?width=348&height=753')
            .setThumbnail('https://media.discordapp.net/attachments/673562020104241156/877978326852050975/8276840786582937453.jpg?width=565&height=753')
            .setFooter("Photo 15")//, message.author.username, message.author.displayAvatarURL(),)
            .setTimestamp()
            .setColor("#baff58")

        const photo16 = new Discord.MessageEmbed()
            .setTitle("Oh ! Merci chérie !")
            .setDescription("<@485789557858631680> ne sais pas quoi dire ! Tu as tellement rien dit ! qu'il ne...... il ne s'attendait pas à ça ! Il ne s'attendait pas à un bouquet ! Merci énormément ! Elles sont hyper belles ! Et tronent sur mon étagère à coté de mon lit avec une vue tout le temps ^^ So. Thanks you <@594989884087861249>")
            .setImage('https://media.discordapp.net/attachments/673562020104241156/877978123717738526/IMG_20210819_195004.jpg?width=348&height=753')
            .setFooter("Photo 16")//, message.author.username, message.author.displayAvatarURL(),)
            .setTimestamp()
            .setColor("#baff58")

        const photo17 = new Discord.MessageEmbed()
            .setTitle("Les Machines de L'Île ! (Photo ?/?)")
            .setDescription("L'éléphant est vraiment fun XD ! J'ai réellement aimé me balader dans Nantes avec toi <@594989884087861249> ! Thanks for showing me this !")
            .setImage('https://media.discordapp.net/attachments/673562020104241156/877978125106053150/IMG_20210819_181029.jpg?width=348&height=753')
            .setFooter("Photo 17")//, message.author.username, message.author.displayAvatarURL(),)
            .setTimestamp()
            .setColor("#baff58")

        const photo18 = new Discord.MessageEmbed()
            .setTitle("Tellement émouvant <3")
            .setDescription("This is so true ... <@594989884087861249>... Que pense-tu de <@485789557858631680>? (Argumente?)")
            //.setImage('https://prnt.sc/1qcgggt')
            .attachFiles(photo18img)
            .setImage('attachment://photo18.png')
            .setFooter("Photo 18")//, message.author.username, message.author.displayAvatarURL(),)
            .setTimestamp()
            .setColor("#baff58")

        const photo19 = new Discord.MessageEmbed()
            .setTitle("Passons dans le journal !")
            .setDescription("En revnant des Machines de L'Îles, <@485789557858631680> & <@594989884087861249> sont passées devant Ouest-France ! Oui oui, Ouest-France ! Le journal ! C'est tellement fun de voir un aussi grand éditeur de journal (TheNewYorkTime est 25x mieux XD)")
            .setImage('https://media.discordapp.net/attachments/673562020104241156/877978124611117056/IMG_20210819_184321.jpg?width=348&height=753')
            .setFooter("Photo 19")//, message.author.username, message.author.displayAvatarURL(),)
            .setTimestamp()
            .setColor("#baff58")

        const photo20 = new Discord.MessageEmbed()
            .setTitle("Love.")
            .setDescription("Aimer OK. Reconsillier OK !")
            //.setImage('https://prnt.sc/1qci7ae')
            .attachFiles(photo20img)
            .setImage('attachment://photo20.png')
            .setFooter("Photo 20")//, message.author.username, message.author.displayAvatarURL(),)
            .setTimestamp()
            .setColor("#baff58")


        var embedArr = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20];
        let randomEmbed = embedArr[Math.floor(Math.random() * embedArr.length)];
        message.channel.send(randomEmbed);
    }

    if (message.content.startsWith('!explain1808')) {
        message.channel.send("Coucou ma chérie <@594989884087861249>." + "\n" + "\n" + "Ce soir, ton amour (L'appelle tu comme ça ^^ sinon, envoie en message privé à Elite le nom que tu souhaites que Elite donne à Ethan) il à crée la commande suivante : ***photorandominsta***. Je ne dis rien, mise à part que la commande est légérement HS, il se peut que par moment, elle marche pas tip top... " + "\n" + "\n" + "Il a également créer différents status chez Elite. Il te laisse les apprécier... tu lui diras ce que tu en penses... Il pense faire peut-être un stream si tu reviens pas trop tard?" + "\n" + "\n" + "également il s'excuse mais tu ne peux pas savoir pour le sexisme qu'il a fait il n'arrive pas à s'excuser... même si tu dis que c'est rien, pour lui c'est une **grave erreur** pourrait-tu lui envoyer un message demain midi? ça lui ferra très plaisir je pense?" + "\n" + "\n" + "en attendant que tu reviennes, Elite et Ethan (et surtout lui!) t'embrasse ! Bisous Elyséa ! Bisous ma chérie ! Ethan t'aime, don't forget this; (Don't let me down, don't let me down) ")
    }
    ;

    if (message.content.startsWith(repliqueC)) {
        const str = message.content.substring(repliqueC.length)
        message.channel.send(str)
    }
    ;

    if (message.content.startsWith('!instagram')) {
        message.channel.send("Voici les differents dates de photographies & story de l'Instagram de @ethan.57.44").then(m => {
            var ping = m.createdTimestamp - message.createdTimestamp;       //Bon, ne sert à rien mais blc

            var embed = new Discord.MessageEmbed()
                .setTitle("Dates de photographies & Storys. Réagissez avec les réactions !")
                .setURL("https://www.instagram.com/ethan.57.44/")
                .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                .setColor("random")
                .setDescription("Dates de photographies :" + "\n" + "\n" + "💠 17 Janvier 2021 / 1️⃣ / Neige / WORK : ✅" + "\n" + "💠 18 Février 2021 / 2️⃣ / Golf / WORK : ✅" + "\n" + "💠 19 Février 2021 / 3️⃣ / Golf² / WORK : ✅" + "\n" + "💠 20 Février 2021 / 4️⃣ / Plage / WORK : ✅" + "\n" + "💠 21 Février 2021 / 5️⃣ / Angers / WORK : ✅" + "\n" + "💠 3 Mars 2021 / 6️⃣ / Glace / WORK : ✅" + "\n" + "💠 10 Mars 2021 / 7️⃣ / Magie / WORK : ✅" + "\n" + "💠 18 Mars 2021 / 8️⃣ / Golf(3) / WORK : ✅" + "\n" + "💠 18 Avril 2021 / 9️⃣ / Nature / WORK : ✅" + "\n" + "💠 26 Mai 2021 / 🔟 / Rêve / WORK : ✅" + "\n" + "💠 4 Juin 2021 / 💝 / First Roses / WORK : ✅" + "\n" + "💠 1 Juillet 2021 / 💔 / Anniversaire ... / WORK : ✅" + "\n" + "💠 31 Juillet 2021 / ❤ / Plat / WORK : ✅" + "\n" + "💠 31 Août 2021 / 💍 / Bague / WORK : ✅" + "\n" + "💠 19 Juillet / 💐 / First Roses / WORK : ✅")
                .setThumbnail("")
                .setTimestamp()
            m.edit(embed)
        });
        //let message = await message.channel.send("Test")
        //message.channel.send("Test").then(r => {
        message.react('1️⃣');
        message.react('2️⃣');
        message.react('3️⃣');
        message.react('4️⃣');
        message.react('5️⃣');
        message.react('6️⃣');
        message.react('7️⃣');
        message.react('8️⃣');
        message.react('9️⃣');
        message.react('🔟');
        message.react('💝');
        message.react('💔');
        message.react('❤');
        message.react('💍');
        message.react('💐');
        //});

        const emoji1F = (reaction, user) => reaction.emoji.name === "1️⃣" && user.id === message.author.id;
        const emoji2F = (reaction, user) => reaction.emoji.name === "2️⃣" && user.id === message.author.id;
        const emoji3F = (reaction, user) => reaction.emoji.name === "3️⃣" && user.id === message.author.id;
        const emoji4F = (reaction, user) => reaction.emoji.name === "4️⃣" && user.id === message.author.id;
        const emoji5F = (reaction, user) => reaction.emoji.name === "5️⃣" && user.id === message.author.id;
        const emoji6F = (reaction, user) => reaction.emoji.name === "6️⃣" && user.id === message.author.id;
        const emoji7F = (reaction, user) => reaction.emoji.name === "7️⃣" && user.id === message.author.id;
        const emoji8F = (reaction, user) => reaction.emoji.name === "8️⃣" && user.id === message.author.id;
        const emoji9F = (reaction, user) => reaction.emoji.name === "9️⃣" && user.id === message.author.id;
        const emoji10F = (reaction, user) => reaction.emoji.name === "🔟" && user.id === message.author.id;
        const emoji11F = (reaction, user) => reaction.emoji.name === "💝" && user.id === message.author.id;
        const emoji12F = (reaction, user) => reaction.emoji.name === "💔" && user.id === message.author.id;
        const emoji13F = (reaction, user) => reaction.emoji.name === "❤" && user.id === message.author.id;
        const emoji14F = (reaction, user) => reaction.emoji.name === "💍" && user.id === message.author.id;
        const emoji15F = (reaction, user) => reaction.emoji.name === "💐" && user.id === message.author.id;
        const emoji16F = (reaction, user) => reaction.emoji.name === "✨" && user.id === message.author.id;


        const emoji1 = message.createReactionCollector(emoji1F, {time: 90000, dispose: true})
        const emoji2 = message.createReactionCollector(emoji2F, {time: 90000, dispose: true})
        const emoji3 = message.createReactionCollector(emoji3F, {time: 90000, dispose: true})
        const emoji4 = message.createReactionCollector(emoji4F, {time: 90000, dispose: true})
        const emoji5 = message.createReactionCollector(emoji5F, {time: 90000, dispose: true})
        const emoji6 = message.createReactionCollector(emoji6F, {time: 90000, dispose: true})
        const emoji7 = message.createReactionCollector(emoji7F, {time: 90000, dispose: true})
        const emoji8 = message.createReactionCollector(emoji8F, {time: 90000, dispose: true})
        const emoji9 = message.createReactionCollector(emoji9F, {time: 90000, dispose: true})
        const emoji10 = message.createReactionCollector(emoji10F, {time: 90000, dispose: true})
        const emoji11 = message.createReactionCollector(emoji11F, {time: 90000, dispose: true})
        const emoji12 = message.createReactionCollector(emoji12F, {time: 90000, dispose: true})
        const emoji13 = message.createReactionCollector(emoji13F, {time: 90000, dispose: true})
        const emoji14 = message.createReactionCollector(emoji14F, {time: 90000, dispose: true})
        const emoji15 = message.createReactionCollector(emoji15F, {time: 90000, dispose: true})
        const emoji16 = message.createReactionCollector(emoji16F, {time: 90000, dispose: true})

        emoji1.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 17 Janvier 2021 ! | Neige !")
                    .setURL("https://www.instagram.com/p/CKJqq9qBGD5/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription('ethan.57.44 : De la neige et encore de la neige ❄️❄️🌨️🌨️ Return from Sarrebourg (15/01/2021) #neige')
                    .setImage('https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/139394885_1124703447966863_4079861218806196479_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=nc1c1MB3wcEAX9UkYE9&edm=APU89FABAAAA&ccb=7-4&oh=954f2e42d27cc27ee302959a909e3c95&oe=61289EED&_nc_sid=86f79a')
                    .addFields(
                        {name: 'Date De Publication', value: '17 Janvier 2021 !', inline: true},
                        {name: 'Localisation ', value: 'Neuves-Maisons, Lorraine, France', inline: true},
                        {name: 'Hashtags ', value: '#neige', inline: true},
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)


            });
        });

        emoji2.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 18 Février 2021 ! | Golf !")
                    .setURL("https://www.instagram.com/p/CLcd3F-hdhz/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription('ethan.57.44 : Du golf ! Et du Golf !🏌️⛳\n' +
                        'Tellement fun 🤩 Première fois, c\'est quand même excellent ! À une prochaine !\n' +
                        '\n' +
                        '#golf #nantes #sport #loireatlantique #lycee')
                    .setImage('https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/151142238_441404653843840_7309434009661289745_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=TmE4qKYxRvIAX9ZfWmq&edm=APU89FABAAAA&ccb=7-4&oh=4cd2cb7ebd13b43e829e18df091c95f0&oe=6128D10B&_nc_sid=86f79a')
                    .addFields(
                        {name: 'Date De Publication', value: '18 Février 2021 !', inline: true},
                        {name: 'Localisation ', value: 'Nantes, France', inline: true},
                        {
                            name: 'Hashtags ',
                            value: '#golf' + '\n' + '#nantes' + '\n' + '#sport' + '\n' + '#loireatlantique' + '\n' + '#lycee',
                            inline: true
                        },
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            });
        });
        emoji3.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 19 Février 2021 ! | Golf² !")
                    .setURL("https://www.instagram.com/p/CLefykNBnD4/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription("ethan.57.44 : Continuons de jouer au Golf à Nantes ! C'est vraiment réellement fuun ⛳🏌️" + "\n" + "(Cf photo hier)" + "\n" + "#golf #nantes #loireatlantique #jeu #abonnetoi #reze")
                    .setImage('https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/151099685_477189243474728_56787926406580292_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=Sx6KrOujA-AAX9pGLIU&tn=9aN86TtEQ69OjXww&edm=APU89FABAAAA&ccb=7-4&oh=380048123db68b5344586fe3f1e3cd7c&oe=6127C1D6&_nc_sid=86f79a')
                    .addFields(
                        {name: 'Date De Publication', value: '19 Février 2021 !', inline: true},
                        {name: 'Localisation ', value: 'Nantes Nord', inline: true},
                        {
                            name: 'Hashtags ',
                            value: '#golf' + '\n' + '#nantes' + '\n' + '#jeu' + '\n' + '#loireatlantique' + '\n' + '#abonnetoi' + '\n' + '#reze',
                            inline: true
                        },
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            });
        });

        emoji4.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 20 Février 2021 ! | Plage Mer !")
                    .setURL("https://www.instagram.com/p/CLhpuBFBzyd/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription("ethan.57.44 : Et aujourd'hui on continue d'être sur Instagram pour poster une photo de la Plage de Noirmoutier 🏖️🌊👒! Malgré un vent à 50KM/H 🍃\n" +
                        "\n" +
                        "#plage #vendee #noirmoutier #photography #plage🌊")
                    .setImage("https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/151058712_416970089412229_8812782018890064347_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=E9t-9l4LzH0AX-BOGKH&edm=ABfd0MgBAAAA&ccb=7-4&oh=bfbe61c65718397539b0ff41685768db&oe=6128E6A3&_nc_sid=7bff83")
                    .addFields(
                        {name: 'Date De Publication', value: '20 Février 2021 !', inline: true},
                        {name: 'Localisation ', value: "Noiremoutier-En-L'Île, Pays de La Loire, France", inline: true},
                        {
                            name: 'Hashtags ',
                            value: '#plage' + '\n' + '#vendee' + '\n' + '#noirmoutier' + '\n' + '#photography' + '\n' + '#plage🌊',
                            inline: true
                        },
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            });
        });
        emoji5.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 21 Février 2021 ! | Château Angers!")
                    .setURL("https://www.instagram.com/p/CLjnvA9hPrE/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription("ethan.57.44 : (Repost)\n" +
                        "\n" +
                        "Le château 🏰 d'Angers ! Un château à aller visiter quand il sera réouvert (ce qui n'est pas le cas à cause du COVID-19.)\n" +
                        "La photo ne date 📅 pas d'aujourd'hui. Elle date de quelques mois quand-même 🥴.\n" +
                        "\n" +
                        "Bisous, partage, abonne toi !\n" +
                        "\n" +
                        "~~~~~~~~~~~~~~~~~ On s'en fout en bas\n" +
                        "\n" +
                        "#photooftheday #photography #photo #vsco #vscocam #photographer #blackandwhite #portrait #naturephotography #photoshoot #canon #instaphoto #pic #streetphotography #nikon #all_shots #chateau #angers #view #abonnetoi #abonnement #follow #please #chateauangers #photographe")
                    .setImage("https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/152375149_1316961402011101_7298469124950892100_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=6XhfGgpzBCUAX8KCCB-&edm=ABfd0MgBAAAA&ccb=7-4&oh=946224d8ec562d4984f4266d3efc1822&oe=61289D38&_nc_sid=7bff83")
                    .addFields(
                        {name: 'Date De Publication', value: '21 Février 2021 !', inline: true},
                        {name: 'Localisation ', value: "Château d'Angers - Domaine National", inline: true},
                        {
                            name: 'Hashtags ',
                            value: '#photooftheday' + '\n' + '#photography' + '\n' + '#photo' + '\n' + '#vsco' + '\n' + '#vscocam' + '\n' + '#photographer' + '\n' + '#blackandwhite' + '\n' + '#portrait' + '\n' + '#naturephotography' + '\n' + '#photoshoot' + '\n' + '#canon' + '\n' + '#instaphoto' + '\n' + '#pic' + '\n' + '#streetphotography' + '\n' + '#nikon' + '\n' + '#all_shots' + '\n' + '#chateau' + '\n' + '#angers' + '\n' + '#view' + '\n' + '#abonnetoi' + '\n' + '#abonnement' + '\n' + '#follow' + '\n' + '#please' + '\n' + '#chateauangers' + '\n' + '#photographe',
                            inline: true
                        },
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            });
        });
        emoji6.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 3 Mars 2021 ! | Glace !")
                    .setURL("https://www.instagram.com/p/CL-LKk7BA4M/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription("ethan.57.44 : Yeah baby, a ice 🍦 with three balls 🍡. Vanilla Strawberry, Cassis and Mangue Passion. Very good at Nantes !\n" +
                        "Nantes, à côté de l'hôpital Hôtel Dieu, proche d'un Starbucks, et à côté de la Galerie La Fayette ainsi que d'un espace Game détective privé, un terrain d'herbe, un skate parc! 5,60€ les 3boules peut importe la saveur !!! Et en plus avec le beau temps de Nantes en ce moment let's go ! 😎 Come on baby !\n" +
                        "\n" +
                        "(n'oublions pas les gestes barrière, distanciation sociales ! Masque et Gel Hydro hyper important everyone ! Pour vite sortir du COVID, COVID-19!!)\n" +
                        "\n" +
                        "~=~=~==~=~==~=~=~=~=~=~=~==~=~\n" +
                        "Les Hashtags :\n" +
                        "#nantes #glace #glaces #boules #boulesdeglace #miam #photographe #photo #photograpy #xiaomi #redmi #hoteldieu #nantesmange #restaurant #resto #covid #covid-19 #mange #manger #beautiful #glacevanille #glacesframboises #glacespassioncassis #magnifique #like #follow #followｍe #france #france #france🇫🇷 #beautemps #beautemps☀️\n" +
                        "~`~``~~```~`~`~`~`~~~~``~~`~~`~`~~`~\n" +
                        "\n" +
                        "(Contact moi en dm pour info ! Bisous)\n" +
                        "\n" +
                        "Respect Gestes barrière et vite pour sortir du COVID-19! Bisous !!")
                    .setImage("https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/155873141_431898078137143_1849112320405005105_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=ePa8iJIYybkAX-VNwjy&edm=AP_V10EBAAAA&ccb=7-4&oh=a49d0115f37dd3a38e6b2071bfc5791b&oe=6127FBA1&_nc_sid=4f375e")
                    .addFields(
                        {name: 'Date De Publication', value: '21 Février 2021 !', inline: true},
                        {name: 'Localisation ', value: "CHU de Nantes", inline: true},
                        {
                            name: 'Hashtags ',
                            value: '#nantes' + '\n' + '#glace' + '\n' + '#glaces' + '\n' + '#boules' + '\n' + '#boulesdeglace' + '\n' + '#miam' + '\n' + '#photographe' + '\n' + '#photo' + '\n' + '#photograpy' + '\n' + '#xiaomi' + '\n' + '#redmi' + '\n' + '#hoteldieu' + '\n' + '#nantesmange' + '\n' + '#restaurant' + '\n' + '#resto' + '\n' + '#covid' + '\n' + '#covid-19' + '\n' + '[...]',
                            inline: true
                        },
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            });
        });
        emoji7.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 10 Mars 2021 ! | Magie !")
                    .setURL("https://www.instagram.com/p/CMQDLG_BtCf/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription("Coucou 🥴\n" +
                        "Bon, aujourd'hui c'est Harry Potter ! Et sa baguette magique (me demander pas à qui elle appartient 😅). Franchement, je sais pas vous, mais je pense qu'après une personne vous dit du mal de vous, vous avez envie d'utiliser cette baguette pour lui jeter une sort ou vous jeter un sort qui vous sera bénéfique nan? Dîtes moi le en commentaire on compare nos sorts !!\n" +
                        "Acheter une baguette magique d'Harry Potter à Nantes. Experdiamus !\n" +
                        "N'hésite pas à partager merci !\n" +
                        "\n" +
                        "-_-_-_-_-_-_-_--_-_-_-_-_-_-_--_-_-_-_--__-\n" +
                        "Hashtags magical and mystery ;\n" +
                        "\n" +
                        "#magic #harrypotter #nantes #triste #tristesse #magie #magienoire #magieblanche #like #followｍe #harry #photooftheday #photograpy #photo #partage")
                    .setImage("https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/158860633_889738004934728_2959132323564955868_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=azqNsaxYXqkAX-0VK2-&edm=AP_V10EBAAAA&ccb=7-4&oh=056e6763b9d7b8f934acd74255a71826&oe=61275D5F&_nc_sid=4f375e")
                    .addFields(
                        {name: 'Date De Publication', value: '10 Mars 2021 !', inline: true},
                        {name: 'Localisation ', value: 'Harry Potter', inline: true},
                        {
                            name: 'Hashtags ',
                            value: '#magic' + '\n' + '#harrypoter' + '\n' + '#nantes' + '\n' + '#triste' + '\n' + '#tristesse' + '\n' + '#magie' + '\n' + '#magienoire' + '\n' + '#magieblanche' + '\n' + '#like' + '\n' + '#followme' + '\n' + '#harry' + '\n' + '#photooftheday' + '\n' + '#photo' + '\n' + '#partage',
                            inline: true
                        },
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            });
        });
        emoji8.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 18 Mars 2021 ! | Golf (3) !")
                    .setURL("https://www.instagram.com/p/CMkG55bBuL1/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription("Aujourd'hui, nous nous retrouvons au Golf de Nantes Erdre comme tout les jeudis d'1 semaines sur 2 ! + '\n' + '••••••••♠•••♪♥•••••♠' + '\n' + 'Hashtags : +  '\n' + '#golf #nantes #nantesgolf #nantesErdre #golfbluegreen #lycee #sport #xiaomi #photograpy #photo #like #jeudi #beautiful #beautifuldestinations' + '\n' + '__________")
                    .setImage("https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/c0.0.1080.1080a/s320x320/161609324_433532844404904_8636744362259320752_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=yWcbuL-MOvMAX9_qS82&edm=ABfd0MgBAAAA&ccb=7-4&oh=23c0752508bcfc0ed9b51bec3821bcf5&oe=6129A591&_nc_sid=7bff83")
                    .addFields(
                        {name: 'Date De Publication', value: '18 Mars 2021 !', inline: true},
                        {name: 'Localisation ', value: 'Nantes Nord', inline: true},
                        {
                            name: 'Hashtags ',
                            value: '#golf' + '\n' + '#nantes' + '\n' + '#nantesgolf' + '\n' + '#nantesErdre' + '\n' + '#golfbluegreen' + '\n' + '#lycee' + '\n' + '#sport' + '\n' + '#xiaomi' + '\n' + '#photography' + '\n' + '#photo' + '\n' + '#like' + '\n' + '#jeudi' + '\n' + '#beautiful' + '\n' + '#beautifuldestinations',
                            inline: true
                        },
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            });
        });
        emoji9.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 18 Avril 2021 ! | Nature !")
                    .setURL("https://www.instagram.com/p/CN0DJ5ghifL/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription("🌳🌲🌳 Bord de Sèvres. Nantes Rezé\n" +
                        "\n" +
                        "#naturephotography #nature #photograpy #photo #beautiful #beautemps☀️ #temps #soleil #arbre #arbres #fleurs #fleursdeprintemps #arbres🌳")
                    .setImage("https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/174301607_467005451021000_6519486870021269390_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=wbZRePYLb9sAX_CDoKj&edm=ABfd0MgBAAAA&ccb=7-4&oh=92d6525ad85d01e137fd1381e92a76fb&oe=612883F2&_nc_sid=7bff83")
                    //Rajouter les 2 autres photos
                    .addFields(
                        {name: 'Date De Publication', value: '18 Avril 2021 !', inline: true},
                        {name: 'Localisation ', value: 'Bord de Sévres', inline: true},
                        {
                            name: 'Hashtags ',
                            value: '#naturephotography' + '\n' + '#nature' + '\n' + '#photograpy' + '\n' + '#photo' + '\n' + '#beautiful' + '\n' + '#beautemps☀' + '\n' + '#sport' + '\n' + '#temps' + '\n' + '#soleil' + '\n' + '#arbre' + '\n' + '#arbres' + '\n' + '#fleurs' + '\n' + '#fleursdeprintemps' + '\n' + '#arbres🌳',
                            inline: true
                        },
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            });
        });
        emoji10.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 26 Mai 2021 ! | Rêve!")
                    .setURL("https://www.instagram.com/p/CPVGs18hnde/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription("Un rêve, une histoire #bac #baccalauréat #school #lycee #lyc #lycée #history #story")
                    .setImage("https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/c0.77.622.622a/s320x320/192025179_501958140927117_3565794677084275475_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Wgxxo4UTOqUAX-bofkg&edm=ABfd0MgBAAAA&ccb=7-4&oh=c6765524f30c094773aa173935e69587&oe=61285463&_nc_sid=7bff83")
                    //Rajouter l'autre 'autres photos
                    .addFields(
                        {name: 'Date De Publication', value: '26 Mai 2021 !', inline: true},
                        {
                            name: 'Localisation ',
                            value: 'NONE LOCALIZATION VALIDE ! PLEASE REPORT THIS TO GALAXYSTARS HYPEQUAD#1511 ! ! !',
                            inline: true
                        },
                        {
                            name: 'Hashtags ',
                            value: '#bac' + '\n' + '#baccalauréat' + '\n' + '#school' + '\n' + '#lycee' + '\n' + '#lyc' + '\n' + '#lycée' + '\n' + '#history' + '\n' + '#story',
                            inline: true
                        },
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            });
        });
        emoji11.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 4 Juin 2021 ! | First Roses!")
                    .setURL("https://www.instagram.com/p/CPs9BTsMwCW/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription("Pour toi mon amour d'Elysea, love you ❣️❤")
                    .setImage("https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/196638489_2640755439556090_5803092229921083890_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=Wvw3ygwMDKUAX9pcqmi&edm=ABfd0MgBAAAA&ccb=7-4&oh=81075dc09ef9d046c57acb8387bb5e9d&oe=61288F7F&_nc_sid=7bff83")
                    .addFields(
                        {name: 'Date De Publication', value: '4 Juin 2021 !', inline: true},
                        {
                            name: 'Localisation ',
                            value: 'NONE LOCALIZATION VALIDE ! PLEASE REPORT THIS TO GALAXYSTARS HYPEQUAD#1511 ! ! !',
                            inline: true
                        },
                        {
                            name: 'Hashtags ',
                            value: 'ERROR ! NONE HASHTAGS VALIDE ! PLEASE REPORT THIS TO GALAXYSTARS HYPESQUAD#1511 !',
                            inline: true
                        },
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            });
        });
        emoji12.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 1 Juillet 2021 ! | Anniversaire . . .!")
                    .setURL("https://www.instagram.com/p/CQzNRcuMQAm/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription("Après moultes péripéties... Les fleurs pour nos 1 mois de relations avec Élyséa ❤️ sont arrivées à bon port !\n" +
                        "Love you Élyséa ❤️ !\n" +
                        "Thanks you 💟\n" +
                        "\n" +
                        "#flowers #love #loveyou")
                    .setImage("https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/c0.94.1080.1080a/s320x320/210198932_249491263210962_5025529873267075425_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=1-sj5CLX6w0AX8D99yW&edm=ABfd0MgBAAAA&ccb=7-4&oh=c35ef58316af6d8defb42905b1f5ad7d&oe=61292790&_nc_sid=7bff83")
                    .addFields(
                        {name: 'Date De Publication', value: '1 Juillet 2021 !', inline: true},
                        {name: 'Localisation ', value: 'Sainte-Luce-Sur-Loire, Pays de La Loire, France', inline: true},
                        {name: 'Hashtags ', value: '#flowers' + '\n' + '#love' + '\n' + '#loveyou', inline: true},
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            });
        });
        emoji13.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 31 Juillet 2021 ! | Plat !")
                    .setURL("https://www.instagram.com/p/CR_9Nw9MTYj/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription("Hellow !\n" +
                        "Pour nos 2 mois avec Ely, on a été manger au restaurant Pitaya à Nantes ! (En face de Bouffay Nantes).\n" +
                        "Le restaurant est de type Thaï. C'est extrêmement bon ! Et pas chère en plus !\n" +
                        "Merci pour tes 2 mois ❤️\n" +
                        "Love you 😘 !")
                    .setImage("https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/228526530_1954285891395030_8549092931737787732_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=hh-uoExLzZYAX9xvgyT&tn=9aN86TtEQ69OjXww&edm=ABfd0MgBAAAA&ccb=7-4&oh=611c7078c5f896df613c1ed7b022f1d1&oe=61282CE0&_nc_sid=7bff83")
                    .addFields(
                        {name: 'Date De Publication', value: '31 Juillet 2021 !', inline: true},
                        {name: 'Localisation ', value: 'Pitaya Resto', inline: true},
                        {
                            name: 'Hashtags ',
                            value: 'ERROR ! NONE HASHTAGS VALIDE ! PLEASE REPORT THIS TO GALAXYSTARS HYPESQUAD#1511 !',
                            inline: true
                        },
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            });
        });
        emoji14.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 13 Août 2021 ! | Bague !")
                    .setURL("https://www.instagram.com/p/CShk9mYMVgy/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription("Enfin !!!! J'ai pu la récupérer ! Merci @leclerc_oceane_reze ! (Merci @galerie_oceane_reze )\n" +
                        "Très belle bague ^^ ! Très content de l'avoir récupérée aujourd'hui par ce beau temps ! Mademoiselle est très contente de la porter ! 💫❤")
                    .setImage("https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/236376529_549106276211315_4605732620476087059_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=fdfpQ3Egoe4AX_zxK7I&edm=ABfd0MgBAAAA&ccb=7-4&oh=7fc7b3849ab1e10b0cd7357dad2b2483&oe=61298196&_nc_sid=7bff83")
                    .addFields(
                        {name: 'Date De Publication', value: '13 Août 2021 !', inline: true},
                        {
                            name: 'Localisation ',
                            value: 'ERROR ! NONE LOCALIZATION VALIDE ! PLEASE REPORT THIS TO GALAXYSTARS HYPEQUAD#1511 !',
                            inline: true
                        },
                        {
                            name: 'Hashtags ',
                            value: 'ERROR ! NONE HASHTAGS VALIDE ! PLEASE REPORT THIS TO GALAXYSTARS HYPESQUAD#1511 !',
                            inline: true
                        },
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            });
        });

        emoji15.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 19 Août 2021 ! | First Roses !")
                    .setURL("https://www.instagram.com/p/CSxVZExMhqg/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription("Wow ! Merci Élyséa ❤️ ! Merci pour ses 15 magnifiques roses ! 🥰 Elles sont tellement inattendue ! God, Thanks you very much darling ❤️ ! ❣️❤️❣️ Bisous ! Love you hehe ^^")
                    .setImage("https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/240105503_523403118728222_2847941961932700776_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=Wn_ytHa8gNYAX9Cd0WB&edm=ABfd0MgBAAAA&ccb=7-4&oh=9a58516c6120b97995e75168bf9cee80&oe=61289DA6&_nc_sid=7bff83")
                    .addFields(
                        {name: 'Date De Publication', value: '19 Août 2021 !', inline: true},
                        {name: 'Localisation ', value: 'Rezé', inline: true},
                        {
                            name: 'Hashtags ',
                            value: 'ERROR ! NONE HASHTAGS VALIDE ! PLEASE REPORT THIS TO GALAXYSTARS HYPESQUAD#1511 !',
                            inline: true
                        },
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            });
        });

        emoji16.on("collect", r => {
            message.channel.send("ㅤ").then(m => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("@ethan.57.44 | 19 Août 2021 ! | First Roses !")
                    .setURL("https://www.instagram.com/p/CSxVZExMhqg/")
                    .setAuthor("Ethan", "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/190585682_642036997192067_6858061746682857363_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=eczXo4k05iIAX_bp7d5&edm=ABfd0MgBAAAA&ccb=7-4&oh=9f4b8b13cd1563b47c2e565071e4f8f6&oe=61268384&_nc_sid=7bff83", "https://www.instagram.com/ethan.57.44/")
                    .setColor("random")
                    .setDescription("Wow ! Merci Élyséa ❤️ ! Merci pour ses 15 magnifiques roses ! 🥰 Elles sont tellement inattendue ! God, Thanks you very much darling ❤️ ! ❣️❤️❣️ Bisous ! Love you hehe ^^")
                    .setImage("https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/240105503_523403118728222_2847941961932700776_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=Wn_ytHa8gNYAX9Cd0WB&edm=ABfd0MgBAAAA&ccb=7-4&oh=9a58516c6120b97995e75168bf9cee80&oe=61289DA6&_nc_sid=7bff83")
                    .addFields(
                        {name: 'Date De Publication', value: '19 Août 2021 !', inline: true},
                        {name: 'Localisation ', value: 'Rezé', inline: true},
                        {
                            name: 'Hashtags ',
                            value: 'ERROR ! NONE HASHTAGS VALIDE ! PLEASE REPORT THIS TO GALAXYSTARS HYPESQUAD#1511 !',
                            inline: true
                        },
                    )
                    .setThumbnail("")
                    .setTimestamp()
                m.edit(embed)
            });
        })
    }
    if (message.content.startsWith('!minesweeper')) {
        message.channel.send("test1")
        const minesweeper = new Minesweeper({
            rows: 10,
            columns: 10,
            mines: 5,
            emote: 'bomb',
        });
        message.channel.send(minesweeper.start());

    }

})
