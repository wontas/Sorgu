module.exports = {
  conf: {
    aliases: ["help", "y", "h"],
    name: "yardım",
  },

  /**
   * @param { Client } client
   * @param { Message } message
   * @param { Array<String> } args
   */

  run: async (client, message, args, embed, prefix) => {
    let list = client.commands
      .filter((x) => x.conf.help)
      .sort((a, b) => b.conf.help - a.conf.help)
      .map((x) => `\`${prefix}${x.conf.help}\``)
      .join("\n");

    message.channel.send(embed.setDescription("```.yardım``` Komutları ```.adsoyad``` ad soyad ile sorgu yapar.```.tcgsm``` Tc den gsm bulur.```.tc``` Tc hakkında bilgi alırsınız. ```.sülale``` sülale bilgi gösterir. ```.gsmtc``` gsm den tc bulur. ```.aile``` aileyi sorgular. ```.adsoyad2``` 2 isimli olanlar için ```.adsoyad2il``` 2 isimli ve il sorgu. ```.adsoyadil``` isim soyisim il sorgu ```.adsoyaddg``` isim soyisim Doğum tarihi (yıl)```.adsoyad2dg``` isim soyisim Doğum tarihi (yıl)"));
  },
};
