const { MessageMedia } = require("whatsapp-web.js");

module.exports = {
  name: "urlsticker",
  description: "Crea un sticker a partir del URL de una imagen.",
  usage: "<url> <?nombre>",

  async execute(msg, args, client) {
    let sep = args.split(" "),
      url = sep[0],
      name = sep[1];

    if (!url) {
      msg.reply(
        "Te faltó poner el URL de la imagen a la que quieres convertir en sticker."
      );
      return;
    }

    if (url.match(client.CONSTANTS.regex.ig_post)) {
      url = `${url.match(client.CONSTANTS.regex.ig_post)}/media?size=l`;
    }

    try {
      let chat = await msg.getChat();
      const sticker = await MessageMedia.fromUrl(url);

      chat.sendMessage(sticker, {
        sendMediaAsSticker: true,
        stickerName: name ? name : "WServant Sticker (nzkdevsaider/wservant)",
        stickerAuthor: "WServant",
      });
    } catch (e) {
      msg.reply(
        "Hubo un error al tratar de convertir esta imagen en sticker. Quizás la URL no es una imagen válida."
      );
    }
  },
};
