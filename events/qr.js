/**
 * @file QR file event.
 * @author Sebastian Morales
 * @since 1.0.0
 */

const qrcode = require("qrcode-terminal");

module.exports = {
  name: "qr",

  execute(qr) {
    qrcode.generate(qr, { small: true });
  },
};
