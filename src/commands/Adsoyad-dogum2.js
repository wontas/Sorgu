const fetch = require('node-fetch');
module.exports = {
  conf: {
    aliases: ["adsoyad2-dg","adsoyad2-doğumtarihi"],
    name: "adsoyad2dg",
  },

  /**
   * @param { Client } client
   * @param { Message } message
   * @param { Array<String> } args
   */

  run: async (client, message, args, embed, prefix) => {
    if(!message.member.roles.cache.has("1052599100387901440")) return message.reply("**Gerekli yetikiye sahip değilsin.**")
const tc = args[0]
const ad2 = args[1]
const soyad = args[2]
const dg = args[3]
if(!tc) return message.reply("Geçerli isim girmelisin")
if(!ad2) return
message.reply("Geçerli bir isim giriniz")
if(!soyad) return message.reply("Geçerli soy isim girmelisin")
if(!dg) return
    message.reply("Geçerli bir doğum tarihi gir")
        const params = new URLSearchParams();
        (async () => {
            const response = await fetch(`http://141.95.101.72/api/adsoyad.php?ad=${tc} ${ad2} &soyad=${soyad}&dogumtarihi=${dg}`, {
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
