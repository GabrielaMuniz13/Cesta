import React from "react";
import { Text, StyleSheet } from "react-native";

function Texto({ children, style }) {
  let estilo = estilos.texto;

  if (style?.fontWeight === "bold") {
    estilo = estilos.textoNegrito;
  }
  return <Text style={[style, estilo]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textoNegrito: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});

export default Texto;
