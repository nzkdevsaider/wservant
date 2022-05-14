const { reverseString } = require("./../../utility");

module.exports = {
  name: "reverse",
  description: "Muestra el texto introducido al revés.",
  usage: "<*texto>",
  args: true,

  async execute(msg, args) {
    let texto = args.join(" ");
    let convert = reverseString(texto);

    msg.reply(convert);
  },
};
