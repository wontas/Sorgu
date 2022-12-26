const fetch = require('node-fetch');
module.exports = {
  conf: {
    aliases: ["adsoyad-il"],
    name: "adsoyadil",
  },

  /**
   * @param { Client } client
   * @param { Message } message
   * @param { Array<String> } args
   */

  run: async (client, message, args, embed, prefix) => {
    if(!message.member.roles.cache.has("1052599100387901440")) return message.reply("**Gerekli yetikiye sahip değilsin.**")
const tc = args[0]
const soyad = args[1]
const il = args[2]
if(!tc) return message.reply("Geçerli ad girmelisin")
if(!soyad) return message.reply("Geçerli bir soyad girmelisin")
if(!il) return message.reply("Geçerli bir il girmelisin")
        const params = new URLSearchParams();
        (async () => {
            const response = await fetch(`http://141.95.101.72/api/adsoyad.php?ad=${tc}&soyad=${soyad}&il=${il}`, {
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
