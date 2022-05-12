/**
 * @file ready file event.
 * @author Sebastian Morales
 * @since 1.0.0
 */

module.exports = {
  name: "ready",

  execute(client) {
    console.log(client.botAscii);
    console.log(`v${client.botVersion}`)
  },
};
