const { MessageMedia } = require("whatsapp-web.js");

module.exports = {
  name: "urlsticker",
  description: "Crea un sticker a partir del URL de una imagen.",
  aliases: ["ustkr"],
  usage: "<url> <?nombre>",
  args: true,

  async execute(msg, args) {
    let name = args.join(" ");

    if (!url) {
      msg.reply(
        "Te faltó poner el URL de la imagen a la que quieres convertir en sticker."
      );
    } else {
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
          "Hubo un error al tratar de convertir esta imagen en sticker."
        );
      }
    }
  },
};
