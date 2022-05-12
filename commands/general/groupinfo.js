module.exports = {
  name: "ginfo",
  description: "Mira la información de un grupo.",
  groupOnly: true,

  async execute(msg) {
    let chat = await msg.getChat();
    msg.reply(`
    *Información de ${chat.name}*
    Descripción: ${chat.description}
    Creado el: ${chat.createdAt.toString()}
    Creado por: ${chat.owner.user}
    Participantes: ${chat.participants.length}
`);
  },
};
