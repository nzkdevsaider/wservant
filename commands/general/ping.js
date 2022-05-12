const { random } = require("./../../utility");
const { version, dependencies } = require("./../../package.json");

module.exports = {
  name: "ping",
  description: "Latencia y estado del bot.",

  execute(msg, args, client) {
    let emojis = ["💅", "✊", "👍", "🖐", "🤙", "🤟"];
    let time = new Date(msg.timestamp * 1000);

    msg.reply(
      `${random(emojis)} *v${version}* (engine ${
        dependencies["whatsapp-web.js"]
      }) - *${new Date() - time}ms*`
    );
  },
};
