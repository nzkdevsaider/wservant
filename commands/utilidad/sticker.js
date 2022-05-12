const { MessageMedia } = require("whatsapp-web.js");

module.exports = {
  name: "sticker",
  description: "Crea un sticker a partir de una imagen adjuntada.",
  usage: "[imagen adjn.] <?nombre>",

  async execute(msg, args) {
    let name = args.join(" ");
    let chat = await msg.getChat();

    if (msg.hasQuotedMsg) {
      const quoted = msg.getQuotedMessage();
      if (quoted.hasMedia) {
        try {
          const sticker = quoted.downloadMedia();

          chat.sendMessage(sticker, {
            sendMediaAsSticker: true,
            stickerName: name ? name : "WServant Sticker",
            stickerAuthor: "WServant (nzkdevsaider/wservant)",
          });
        } catch (e) {
          msg.reply(
            "Hubo un error al tratar de convertir esta imagen en sticker."
          );
        }
      }
    } else if (msg.hasMedia) {
      try {
        const sticker = await msg.downloadMedia();

        chat.sendMessage(sticker, {
          sendMediaAsSticker: true,
          stickerName: name ? name : "WServant Sticker",
          stickerAuthor: "WServant (nzkdevsaider/wservant)",
        });
      } catch (e) {
        msg.reply(
          "Hubo un error al tratar de convertir esta imagen en sticker."
        );
      }
    } else {
      msg.reply(
        "Debes adjuntar la imagen a la que quieres convertir en sticker."
      );
    }
  },
};
