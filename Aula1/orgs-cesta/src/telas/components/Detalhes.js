import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Texto from "../../components/Texto";

function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {
  return (
    <>
      <Texto style={estilos.nome}> {nome}</Texto>
      <View style={estilos.fazenda}>
        <Image source={logoFazenda} style={estilos.imageFazenda} />
        <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
      </View>

      <Texto style={estilos.descricao}>{descricao}</Texto>
      <Texto style={estilos.preco}>{preco}</Texto>

      <TouchableOpacity style={estilos.botao} onPress={() => alert("Compra realizada com sucesso")}>
        <Texto style={estilos.textoBotao}>{botao}</Texto>
      </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  nome: {
    fontSize: 20,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
    alignItems: "center",
  },
  imageFazenda: {
    width: 32,
    height: 32,
    borderRadius:12, 
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 16,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight:26,
    fontWeight: "bold",
  },
});
export default Detalhes;
