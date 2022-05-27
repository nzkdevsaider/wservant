const util = require("util");

module.exports = {
  name: "eval",
  description: "Evalúa una expresión del sistema.",
  usage: `<eval>`,
  args: true,
  ownerOnly: true,

  async execute(msg, args, client) {
    try {
      let evalued = await eval(args.join(" "));
      if (typeof evalued !== "string")
        evalued = util.inspect(evalued, { depth: 0 });

      msg.reply(`\`\`\`\n ${evalued} \`\`\` `);
    } catch (err) {
      console.error(err);
      msg.reply(`**${err.name}**\n \`\`\`\n ${err.toString()} \`\`\` `);
    }
  },
};
