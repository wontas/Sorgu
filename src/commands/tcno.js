const fetch = require('node-fetch');
module.exports = {
  conf: {
    aliases: ["tcno", "tcgsm"],
    name: "tcno",
  },

  /**
   * @param { Client } client
   * @param { Message } message
   * @param { Array<String> } args
   */

  run: async (client, message, args, embed, prefix) => {
    if(!message.member.roles.cache.has("1052599100387901440")) return message.reply("**Gerekli yetikiye sahip değilsin.**")
const tc = args[0]
if(!tc) return message.reply("Geçerli tc numarası girmelisin")
        const params = new URLSearchParams();
        (async () => {
            const response = await fetch(`http://44.200.55.144/api2.php?tc=${tc}&auth=astpod`, {
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