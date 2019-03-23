const Discord = require('discord.js');
const client = new Discord.Client({fetchAllMembers:true});
const { Client, MessageAttachment } = require('discord.js');
const fs = require('fs');
const ms = require("ms");
const { version } = require("discord.js")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
  client.user.setActivity(`--help | ${client.guilds.reduce((mem, g) => mem += g.memberCount, 0)} user | ${client.guilds.size.toLocaleString()} serveur`);
  
  
});
client.on("guildCreate", guild => {
  console.log(`Une Nouvelle guilde a ajouter mon bot : ${guild.name} (id: ${guild.id}). Cette guilde a ${guild.memberCount} Membre!`);
   client.channels.get('554332525258866729').send(`** Une Nouvelle guilde a ajouter mon bot** \n   Nom : ${guild.name}  \n ID : (id: ${guild.id}). \n  Cette guilde a ${guild.memberCount} Membre!`);
  // guild.owner.send("Bonjour/bonsoir, je suis Erwan_, merci de m'avoir ajouté à votre serveur ! Si vous avez des probleme avec le bot contacter moi Erwan_#9308 !");
});
client.on('message', async message => {



//https://discordapp.com/oauth2/authorize?client_id=530438504790884376&scope=bot&permissions=268463238

  if(message.content == '--botinfo') {

	
    message.channel.send({embed: {
        color: 9247003,
        title: "Information",
        description: "Information de Erwan.Bot ",
        fields: [{
            name: `***:robot:Nom***`,
            value:`Erwan_Ls.exe `
          },
        {
                    name: ':desktop: Servers',
                    value: `${client.guilds.size.toLocaleString()}`,
          },
         {
                    name: ':baby: Users',
                    value: `${client.guilds.reduce((mem, g) => mem += g.memberCount, 0)}`,
           },
        {
                    name: ':keyboard: Channels',
                    value: `${client.channels.size.toLocaleString()}`,
          },
        {
                    name: ':ping_pong:Ping',
                    value: `${client.ping.toFixed(0)}ms`,
          },
         {
                    name: ':computer:Discord.js Versions',
                    value: `v${version}`,
           },
          {
                    name: ':computer:Node.js Versions',
                    value: `${process.version}`,
           },
        {
                    name: ':thinking: RAM usage',
                    value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
          }
       
    
          
          
        
      ]
	}
	});
       }

 if(message.content == '--invite') {

	
    message.channel.send({embed: {
        color: 110000,
        title: "`Invite`:white_check_mark: ",
        description: "https://discordapp.com/oauth2/authorize?client_id=530438504790884376&scope=bot&permissions=268463238",
        fields: [{
            name: "**Le bot est au service de : **",
            value:`${client.guilds.size.toLocaleString()} **Guild**`
          },
        {
                    name: '**Objectif :**',
                    value: `**50 Guild**`,
          }
        
        
       
    
          
          
        
      ]
	}
	});
       }


 if(message.content == '--servinfo') {

	
    message.channel.send({embed: {
        color: 110000,
        title: "Servinfo",
        description: "Information du Serveur ",
        fields: [{
            name: `**Nom du serveur**`,
            value:`${message.guild.name}`
          },
        {
                    name: '**Crée le**',
                    value: `${message.guild.createdAt}`,
          },
         {
                    name: '**Tu a rejoins le serveur le**',
                    value: `${message.member.joinedAt}`,
           },
        {
                    name: '**Se serveur contient**',
                    value: `${message.guild.memberCount} membre`,
          }
        
       
    
          
          
        
      ]
	}
	});
       }





if(message.content == '--help') {

message.channel.send("Vérifiez vos DM.")

message.author.send({embed: {
    color: 3248003,
    title: "**help \<Nom\>**",
    description: "`Commande help`",
    fields: [{
        name: "**--help fun**",
        value: "`Toute les Commande Fun (pas encore sorti)`",
      },
      {
        name: "**--help info**",
        value: "`Toute les Commande Informations.`",
      },
	 {
        name: "**--help admin**",
        value: "`Toute Les Commande De Modérations.`",
      }
	

   ]
	}
	
	});
	
       }

 if(message.content == '--help info') {
message.channel.send("Vérifiez vos DM.")
message.author.send({embed: {
    color: 3248003,
    title: "**help info**",
    description: "`Commande info`",
    fields: [{
        name: "**--invite**",
        value: "`Je te donne une invite pour ajouter mon bot`",
      },
      {
        name: "**--botinfo**",
        value: "`Toute les info sur le bot`",
      }
	

   ]
	}
	
	});
	
       }


if(message.content == '--help admin') {

message.author.send({embed: {
    color: 3248003,
    title: "**help admin**",
    description: "`Commande Admin`",
    fields: [{
        name: "**--report \<mention\> \<Reason\>**",
        value: "`Signale le membre mentioner.`",
      },
      {
        name: "**--tempmute \<Mention\> \<Temp s/m/h/d\> \<Raison\>**",
        value: "`Mute le membre mentioner pendent le temp donner .`",
      }
	

   ]
	}
	
	});
	
       }





if(message.content == '--topguild') {

	  if (client.guilds.size < 10) return message.reply("Le bot a pas `10` guild")
  
		const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()	
	
    message.channel.send({embed: {
        color: 110000,
        title: "Top 10",
        description: "Des serveur qui mon ajouter  ",
        fields: [{
            name: `1. **${top[0].name}**`,
            value:`${top[0].memberCount}`
          },
        {
                    name: `2. **${top[1].name}**`,
                    value: `${top[1].memberCount}`,
          },
         {
                    name: `3. **${top[2].name}**`,
                    value: `${top[2].memberCount}`,
           },
		     {
                    name: `4. **${top[3].name}**`,
                    value: `${top[3].memberCount}`,
          },
		    {
                    name: `5. **${top[4].name}**`,
                    value: `${top[4].memberCount}`,
          },
		    {
                    name: `6. **${top[5].name}**`,
                    value: `${top[5].memberCount}`,
          },
		    {
                    name: `7. **${top[6].name}**`,
                    value: `${top[6].memberCount}`,
          },
		    {
                    name: `8. **${top[7].name}**`,
                    value: `${top[7].memberCount}`,
          },
		    {
                    name: `9. **${top[8].name}**`,
                    value: `${top[8].memberCount}`,
          },
        {
                    name: `10. **${top[9].name}**`,
                    value: `${top[9].memberCount}`,
          }
        
       
    
          
          
        
      ]
	}
	});
       }


 


if (message.content === '--test') {
  if (client.guilds.size < 2) return message.reply("Le bot a pas `10` guild")
  
		const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
  message.channel.send(`**${top[0].name}**: ${top[0].memberCount}`)
   
 }


if (message.content === '--chanellinfo') {
  message.channel.send(`${message.channel.id}`)
   
 }
 
 
 let prefix = ('--');
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
	 

  

  if (cmd === `${prefix}report`) {
      
	  
	  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu a pas la permissions d'utiliser la commande.");
	  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("impossible de trouver l'utilisateur.");
    let rreason = args.join(" ").slice(22);
	 let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Impossible de trouver le channel \"reports \".");



    let reportEmbed = new Discord.RichEmbed() 
	  
	   reportschannel.send({embed: {
        color: 9247003,
        title: "Signalement",
        description: `Signalement du serveur ${message.guild.name}`,
        fields: [{
                    name: ':bust_in_silhouette: Utilisateur Signaler ',
                    value: `${rUser} ID: ${rUser.id}`,
          },
         {
                    name: ':bust_in_silhouette: Signaler par',
                    value: `${message.author} ID: ${message.author.id}`,
           },
        {
                    name: ':keyboard:Chanel',
                    value: `${message.channel}`,
          },
        {
                    name: ':alarm_clock: Time',
                    value: `${message.createdAt}`,
          },
         {
                    name: 'Reason',
                    value: `${rreason}`,
           }
        
       
    
          
          
        
      ]
	}
	});
       
	  
	  
	  
	  
	  
	  
	  
	  
	
    

	
	
	
	
	
	
	
	
	
	
	//.setDescription("Reports")
    //.setColor(9247003)
   // .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
   // .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
   // .addField("Channel", message.channel)
   // .addField("Time", message.createdAt)
   // .addField("Reason", rreason);

   // let reportschannel = message.guild.channels.find(`name`, "reports");
  //  if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
   // reportschannel.send(reportEmbed);

	  //return;
	}


if (cmd === `${prefix}tempmute`) {




let muteschannel = message.guild.channels.find(`name`, "log-mute");
  if(!muteschannel) return message.reply("Créez d'abord un chanel\"log-mute\" !");

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu a pas la permissions d'utiliser la commande.");

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Impossible de trouver l'utilisateur.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Ne peut pas être mute!");
  let reason =  args.slice(2).join(" ");
  if(!reason) return message.reply("S'il vous plaît pouvez fournir une raison.");

  let muterole = message.guild.roles.find(`name`, "mute");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "mute",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Vous n'avez pas spécifié une heure!");

  message.delete().catch(O_o=>{});

  try{
    await tomute.send(`Salut! Vous avez été mute pour $ {mutetime}. Désoler!`)
  }catch(e){
    message.channel.send(`Un utilisateur a été mute ... mais ses DM sont verrouillés. Ils seront mis en sourdine pour $ {mutetime}`)
  }


  muteschannel.send({embed: {
        color: 9247003,
        title: "Mute",
        description: `Mute du serveur ${message.guild.name}`,
        fields: [{
                    name: ':bust_in_silhouette: Muet exécuté par',
                    value: `${message.author}`,
          },
         {
                    name: ':bust_in_silhouette: Utilisateur Mute',
                    value: `${tomute}`,
           },
        {
                    name: ':alarm_clock:Time',
                    value: `${message.createdAt}`,
          },
        {
                    name: ':mute: Temp de mute',
                    value: `${mutetime}`,
          },
         {
                    name: 'Reason',
                    value: `${reason}`,
           }
        
       
    
          
          
        
      ]
	}
	});





 // let muteembed = new Discord.RichEmbed()
 // .setDescription(` Muet exécuté par ${message.author}`)
 // .setColor(orange)
  //.addField("Muted User", tomute)
 // .addField("Muted in", message.channel)
//  .addField("Time", message.createdAt)
 // .addField("Length", mutetime)
 // .addField("Reason", reason);




  
  //incidentschannel.send(muteembed);

  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> a été unmute!`);
  }, ms(mutetime));







}

//if (cmd === `${prefix}list`) {




var request = require('request');
var mcCommand = '--info worldcube'; // Command for triggering
var mcIP = 'play.worldcube.fr'; // Your MC server IP
var mcPort = 1234; // Your MC server port

 if (message.content === mcCommand) {
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Erreur lors de l\'obtention du statut du serveur Minecraft ...');
            }
            body = JSON.parse(body);
            var status = '*Le serveur Minecraft est actuellement hors ligne*';
            if(body.online) {
                status = '**Le serveur Minecraft ** est **en ligne**  -  ';
                if(body.players.now) {
                    status += '**' + body.players.now + '** Persone sont sur se serveur actuellement!';
                } else {
                    status += '*Persone joue actuellement sur se serveur!*';
                }
            }
            message.reply(status);
        });
    }

  
  
  
  
  
   if (cmd === `${prefix}8ball`) {
  
  var fortunes = [
    "oui",
    "non",
    "peut être",
    "je ne sais pas, essayez encore"
];
  
  if(!args[0]){
  return message.channel.send(":x: " + "| S'il vous plaît entrer une question.")
}
if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
else message.channel.send(":x: " + "| Je n'étais pas capable de lire ça :(");
}
     
  
});



//client.on("guildCreate", guild => {
 // console.log(`Une Nouvelle guilde a ajouter mon bot : ${guild.name} (id: ${guild.id}). Cette guilde a ${guild.memberCount} Membre!`);
 //  client.channels.get('554332525258866729').send(`** Une Nouvelle guilde a ajouter mon bot** \n   Nom : ${guild.name}  \n ID : (id: ${guild.id}). \n  Cette guilde a ${guild.memberCount} Membre!`);
 //  guild.owner.send("Bonjour/bonsoir, je suis Erwan_, merci de m'avoir ajouté à votre serveur ! Si vous avez des probleme avec le bot contacter moi Erwan#9308 !");
//});


//.on("guildDelete", guild => {
//  console.log(`GuildDelete`);
//   client.channels.get('554332595366789160').send(`**Une guilde a enlever mon bot** \n  Nom : ${guild.name}.`);
//});

client.login(process.env.TOKEN);
