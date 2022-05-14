module.exports = {
  random: function (array) {
    return array[Math.floor(Math.random() * array.length)];
  },
  reverseString: function (str) {
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
  },
  agregarCaracter: function (cadena, caracter, pasos) {
    let cadenaConCaracteres = "";
    const longitudCadena = cadena.length;
    for (let i = 0; i < longitudCadena; i += pasos) {
      if (i + pasos < longitudCadena) {
        cadenaConCaracteres += cadena.substring(i, i + pasos) + caracter;
      } else {
        cadenaConCaracteres += cadena.substring(i, longitudCadena);
      }
    }
    return cadenaConCaracteres;
  },
};
