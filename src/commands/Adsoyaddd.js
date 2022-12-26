const fetch = require('node-fetch');
module.exports = {
  conf: {
    aliases: ["adsoyadd"],
    name: "adsoyadd",
  },

  /**
   * @param { Client } client
   * @param { Message } message
   * @param { Array<String> } args
   */

  run: async (client, message, args, embed, prefix) => {
    if(!message.member.roles.cache.has("1052599100387901440")) return message.channel.send(new MessageEmbed().setDescription(`**Gerekli yetikiye sahip değilsin.**`).setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setColor('0xd85555').setTimestamp()).then(x => x.delete({timeout: 5000}));   
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    
const filter = m => m.author === message.author;
var cevaplar = [];
message.reply(`${message.author} **İsim giriniz**`);
channel.awaitMessages(filter, { max: 1 }) 
.then(function (collected) { 
collected.each(msj => cevaplar.push(msj.content)); 
message.reply(`${message.author} **soy isim giriniz**`); 
channel.awaitMessages(filter, { max: 1 }) 
.then(function (collected) { 
  }) 
                                                           }) 
collected.each(msj => cevaplar.push(msj.content)); 
        const params = new URLSearchParams();
        (async () => {
            const response = await fetch(`http://141.95.101.72/api/adsoyad.php?ad=${cevaplar[0]}&soyad=${cevaplar[1]}`, {
                method: 'POST',
                body: params,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
            })
        
            const data = await response.json()
            //console.log(data)
        
            message.channel.send(require('util').inspect(data), {code: "js", split: true})
        })()
  },
};
   