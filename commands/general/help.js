module.exports = {
  name: "help",

  async execute(msg, args, client) {
    const { botVersion } = client;
    const chat = await msg.getChat();

    chat.sendMessage(
      `🤖 *WServant v${botVersion} — asistente multipropósito y utilidad*\n🧾 *Lista de comandos*  :  https://gist.github.com/nzkdevsaider/ba41879cdc0b7975f744948b95de2523 \n🗃️ *GitHub*  :  https://github.com/nzkdevsaider/wservant \n\n⚠ *WServant no almacena ningún mensaje, imagen, audio, vídeo y/o información de contactos. Ningún tipo de almacenamiento de información personal está estipulado en su código fuente y no se comparte con terceros. Su privacidad es nuestra prioridad.*`
    );
  },
};
