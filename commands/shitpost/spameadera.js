const { random } = require("./../../utility");

module.exports = {
    name: "spameadera",
    hidden: true,

    async execute(msg) {
        let chat = await msg.getChat();
        let spam = [
          "🤸‍♀️🤸‍♀️🤑🙏🤩🤩😜😍🥰😋😜❤🙏😜💕😝😜🙏😍😋🤩🥰😜🙏🤸‍♀️🤸‍♀️😋🤑😜😝🙏🤸‍♀️😍🤑",
          "😝😍😍🤑😝🥰🤩💕❤🤰😍🤸‍♀️🤩❤😝😋🤑🤩❤😜🤑😋🥰❤🙏😋😋😋🤑😍🤸‍♀️😋🙏😍🤩💕",
          "❤😱🤰💅🥰🥰😍😋🤸‍♀️🤩😝😝🤰🤗🤙❤🙏💕👍😜😝💀🤰🤩😋😘👌🤰💕🤑❤🤰✋✊👍😜😝✋✋😜🤸‍♀️🤑💕😋🤰😜",
        ];
        let frasesbasicas = [
          "Si soy",
          "Conectadas",
          "Entusiasmo",
          "Amiga",
          "Amigaaaa",
          "omg fabulosa",
          "Increíble",
          "Tristeza",
          "Si soy amiga",
          "Fabulosa",
        ];
        
        chat.sendMessage(`${random(frasesbasicas)} ${random(spam)}`);
    },
  };