/**
 * @file message file event.
 * @author Sebastian Morales
 * @since 1.0.0
 */

const { random } = require("../utility");
const { version } = require("../package.json");
const { MessageMedia } = require("whatsapp-web.js");

module.exports = {
  name: "message",

  async execute(msg) {
    console.log("MESSAGE RECEIVED", msg);

    if (msg.body.startsWith("!ping")) {
      let emojis = ["💅", "✊", "👍", "🖐", "🤙", "🤟"];
      msg.reply(`${random(emojis)} *v${version}* `);
    }

    if (msg.body.startsWith("yt ")) {
      let ytRegex =
        /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/;
      let video = msg.body.split(" ")[1];
      let ytID = video.match(ytRegex);

      // let messageIndex = msg.body.indexOf(video) + video.length;
      // let message = msg.body.slice(messageIndex, msg.body.length);

      if (!ytID) {
        msg.reply(
          "El enlace que proporcionaste es inválido o no es de YouTube."
        );
      } else {
        msg.reply(
          `*Enlace de descarga generado:* https://getyoutubehd.com/v/${ytID[5]}`
        );
      }
    }

    if (msg.body.startsWith("!ginfo")) {
      let chat = await msg.getChat();
      if (chat.isGroup) {
        msg.reply(`
                  *Información de ${chat.name}*
                  Descripción: ${chat.description}
                  Creado el: ${chat.createdAt.toString()}
                  Creado por: ${chat.owner.user}
                  Participantes: ${chat.participants.length}
              `);
      } else {
        msg.reply("Este comando sólo funciona en grupos.");
      }
    }

    if (msg.body.startsWith("!sticker")) {
      let spliter = msg.body.split(" "),
        name = spliter[1];

      if (msg.hasMedia) {
        try {
          let chat = await msg.getChat();
          const sticker = await msg.downloadMedia();

          chat.sendMessage(sticker, {
            sendMediaAsSticker: true,
            stickerName: name
              ? name + " (nzkdevsaider/wservant)"
              : "WServant Sticker (nzkdevsaider/wservant)",
            stickerAuthor: "WServant",
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
    }

    if (msg.body.startsWith("!urlsticker ")) {
      let spliter = msg.body.split(" "),
        url = spliter[1],
        name = spliter[2];

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
            stickerName: name
              ? name + " (nzkdevsaider/wservant)"
              : "WServant Sticker (nzkdevsaider/wservant)",
            stickerAuthor: "WServant",
          });
        } catch (e) {
          msg.reply(
            "Hubo un error al tratar de convertir esta imagen en sticker."
          );
        }
      }
    }

    if (msg.body.startsWith("!spameadera")) {
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
    }
  },
};
