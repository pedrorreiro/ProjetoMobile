import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import Titulo from '../Titulo';
import CampoSenha from '../CampoSenha';
import { TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {

  return (
    <View style={{ textAlign: "center", flex: 1, backgroundColor: cores.cinzaFundo }} // Não esquecer do flex 1
    >
      <ImageBackground source={require("../onda.png")} style={estilo.fundo}>

        <View style={{ position: 'absolute', bottom: "15%" }}>
          <Titulo />
          <View style={estilo.camposLogin}>

            <TextInput // Campo de Usuário
              style={estilo.campoCredenciais}
              placeholder="Usuário"
              placeholderTextColor={cores.brancoBaixo}

            >
            </TextInput>

            <CampoSenha />

            <TouchableOpacity>
              <Text style={estilo.esqueceuSenha}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.botaoEntrar} // Botão entrar
            >
              <Text style={{ color: "white", fontWeight: "bold", fontSize: 18, fontFamily: 'Roboto-Regular' }}>ENTRAR</Text>
            </TouchableOpacity>

          </View>

          <View //Linha branca
            style={estilo.linhaEmsg}>
            <View><Image style={{ marginLeft: 20, marginRight: 10, height: 10, width: 70 }} resizeMode='contain' source={require("../linhaBranca.png")} /></View>
            <Text style={estilo.aindaNao}>Ainda não possui uma conta?</Text>
            <View><Image style={{ marginRight: 20, marginLeft: 10, height: 10, width: 70 }} resizeMode='contain' source={require("../linhaBranca.png")} /></View>

          </View>

          <TouchableOpacity style={estilo.btnCadastro} onPress={() => { navigation.navigate('Cadastro') }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18, fontFamily: 'Roboto-Regular' }}>CRIAR UMA CONTA</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

    </View>
  );
}

const cores = {
  brancoBaixo: "rgba(255, 255, 255, 0.5)",

  pretoBaixo: "rgba(0,0,0,0.4)",

  cinzaFundo: "#191d21",

  azul: "#073EAB"
}

const estilo = {

  fundo: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",

  },

  titulo: {
    color: "white",
    fontFamily: "ComicSansMSBold",
    fontSize: 41,
    flexGrow: 1,
    textAlign: "center"
  },

  campoCredenciais: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    backgroundColor: cores.pretoBaixo,
    color: "white",
    width: 80 + "%",
    flexDirection: "row",
    borderRadius: 4,
    paddingLeft: 20,
    marginBottom: 20
  },

  camposLogin: {
    marginTop: 77,
    alignItems: "center",
    flexGrow: 1
  },

  esqueceuSenha: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 7,
    left: "20%",
    marginBottom: 10
  },

  botaoEntrar: {
    marginTop: '5%',
    marginBottom: '10%',
    paddingLeft: "9%",
    paddingRight: "9%",
    paddingTop: "4%",
    paddingBottom: "4%",
    borderRadius: 4,
    backgroundColor: cores.azul,

  },

  aindaNao: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Roboto-Regular",

  },

  linhaEmsg: {
    flexDirection: "row",
    alignItems: "center"

  },

  btnCadastro: {

    marginLeft: "auto",
    marginRight: "auto",
    marginTop: '10%',
    marginBottom: '15%',
    paddingLeft: "9%",
    paddingRight: "9%",
    paddingTop: "4%",
    paddingBottom: "4%",
    borderRadius: 4,
    backgroundColor: cores.cinzaFundo,
  }
}