/**
 * @file message file event.
 * @author Sebastian Morales
 * @since 1.0.0
 */

const { prefix, owner } = require("../config.json");

module.exports = {
  name: "message",

  async execute(msg, client) {
    console.log("MESSAGE RECEIVED", msg);
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

    /**
     * Comprueba si el mensaje comienza con el prefijo y, si lo hace, ejecuta el comando.
     * @param string - La cadena a buscar.
     * @returns El objeto de charla.
     */
    const escapeRegex = (string) => {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    };
    const checkPrefix = prefix.toLowerCase();
    const prefixRegex = new RegExp(`^(${escapeRegex(checkPrefix)})\\s*`);

    if (!prefixRegex.test(msg.body.toLowerCase())) return;
    const [matchedPrefix] = msg.body.toLowerCase().match(prefixRegex);
    const args = msg.body.slice(matchedPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!msg.body.startsWith(matchedPrefix)) return;

    const command = client.commands.get(commandName);

    if (!command) return;

    let chat = msg.getChat();

    /* Comprobando si el comando tiene una propiedad únicamente de propietario y si el mensaje es del
    propietario. Si el comando tiene una propiedad solo propietario y el mensaje no es del
    propietario, responderá con un mensaje que dice que el comando es solo propietario. */
    if (command.ownerOnly && msg.from !== owner) {
      return msg.reply(
        "❎ Lo siento, pero este comando sólo es para dueños del bot."
      );
    }

    /* Esto es verificar si el comando tiene una propiedad groupOnly y si el chat es un grupo. Si el
    comando tiene una propiedad groupOnly y el chat no es un grupo, responderá con un mensaje que
    dice que el comando solo funciona en grupos. */

    if (command.groupOnly && !chat.isGroup) {
      return msg.reply("❎ Este comando sólo funciona en grupos.");
    }

    /* Esto es verificar si el comando tiene argumentos y si el usuario no especificó ningún argumento.
    Si el comando tiene argumentos y el usuario no especificó ningún argumento, responderá con un
    mensaje que dice que el usuario no especificó ningún argumento. Si el comando tiene un uso,
    también responderá con el uso del comando. */

    if (command.args && !args.length) {
      let reply = `❎ No has especificado ningún argumento.`;

      if (command.usage) {
        reply += `\nLa manera correcta de usar el comando es: *${prefix}${command.name} ${command.usage}*`;
      }

      return msg.reply(reply);
    }

    /* Está intentando ejecutar el comando, pero si falla, responderá con un mensaje de error. */
    try {
      command.execute(msg, args);
    } catch (error) {
      console.error(error);
      msg.reply("❎ Ups. Ha ocurrido un error al ejecutar ese comando.");
    }
  },
};
