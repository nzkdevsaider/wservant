module.exports = {
  name: "help",

  async execute(msg, args, client) {
    const version = client.CONSTANTS.info_bot.version;
    const name = client.CONSTANTS.info_bot.name;
    const gh_link = client.CONSTANTS.links.github;
    const docs_link = client.CONSTANTS.links.docs;
    const chat = await msg.getChat();

    chat.sendMessage(
      `🤖 *${name} v${version} — asistente multipropósito y utilidad*\n\n🧾 *Lista de comandos*  :  ${docs_link} \n🗃️ *GitHub*  :  ${gh_link} \n\n⚠ *WServant no almacena ningún mensaje, imagen, audio, vídeo y/o información de contactos.*`
    );
  },
};
