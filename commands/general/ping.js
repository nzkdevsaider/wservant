const { random } = require("./../../utility");
const { version } = require("./../../package.json");

module.exports = {
  name: "ping",
  execute(msg, args) {
    let emojis = ["💅", "✊", "👍", "🖐", "🤙", "🤟"];
    msg.reply(`${random(emojis)} *v${version}* `);
  },
};
