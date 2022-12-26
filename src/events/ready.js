const settings = require("../configs/settings.json");
const { MessageEmbed } = require("discord.js");
const client = global.client;

/**
 * @param { Client } client
 * @param { Message } message
 */

module.exports = async (message) => {
client.user.setActivity("illegal platform")
};

module.exports.conf = {
  name: "ready",
};
