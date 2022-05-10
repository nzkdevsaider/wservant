/**
 * @file message file event.
 * @author Sebastian Morales
 * @since 1.0.0
 */

module.exports = {
  name: "message",

  async execute(msg) {
    console.log("MESSAGE RECEIVED", msg);

    if (msg.body == "!ping") {
      msg.reply("pong");
    }

    if (msg.body.startsWith("yt ")) {
      let ytRegex =
        /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/;
      let video = msg.body.split(" ")[1];
      let ytID = video.match(ytRegex);
      console.log(ytID);

      // let messageIndex = msg.body.indexOf(video) + video.length;
      // let message = msg.body.slice(messageIndex, msg.body.length);

      if (!ytID) {
        msg.reply(
          "El enlace que proporcionaste es inválido o no es de YouTube."
        );
      } else {
        msg.reply(`https://getyoutubehd.com/v/${ytID[5]}`);
      }
    }

    if (msg.body.startsWith("!ginfo")) {
      let chat = await msg.getChat();
      if (chat.isGroup) {
        msg.reply(`
                  *Información del grupo*
                  Nombre: ${chat.name}
                  Descripción: ${chat.description}
                  Creado el: ${chat.createdAt.toString()}
                  Creado por: ${chat.owner.user}
                  Participantes: ${chat.participants.length}
              `);
      } else {
        msg.reply("Este comando sólo funciona en grupos.");
      }
    }
  },
};
