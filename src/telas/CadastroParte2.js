import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import Titulo from '../Titulo';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text'

export default function CadastroParte2({ navigation }) {

  const [andamento, setAndamento] = useState(0.66);
  const [data, setData] = useState('');
  const [telefone, setTelefone] = useState('');

  const {dados} = navigation.state.params;

  console.log("Nome: " + dados.nome);
  console.log("Nº Apartamento:" + dados.nApart);

  return (
    <View style={{ justifyContent: "center", flex: 1, flexDirection: "column", backgroundColor: cores.cinzaFundo }} // Não esquecer do flex 1
    >
      <ImageBackground source={require("../onda.png")} style={estilo.fundo}>

        <View style={{ position: 'absolute', top: 0 }}>
          <Titulo />

          <View style={estilo.campos}>

            <View style={{ justifyContent: "center", flexDirection: "row" }}>
              <Text style={estilo.descricao}>Data de Nascimento</Text>
            </View>

            <TextInputMask // Campo de data de nascimento
              style={estilo.campoCredenciais}
              placeholder={"DD/MM/YYYY"}
              placeholderTextColor={cores.brancoBaixo}
              type={'datetime'}
              options={{
                format: "DD/MM/YYYY"
              }}
              value={data}
              onChangeText={data => { setData(data) }}
            />


            <View style={{ justifyContent: "center", flexDirection: "row" }}>
              <Text style={estilo.descricao}>Telefone</Text>
            </View>

            <TextInputMask // Campo de Telefone
              type={'cel-phone'}
              style={estilo.campoCredenciais}
              placeholder="(99) 9 9999-9999"
              placeholderTextColor={cores.brancoBaixo}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: "(99) "
              }}
              value={telefone}
              onChangeText={fone => { setTelefone(fone) }}
            />
          </View>

          <TouchableOpacity  //Botao Next
            style={estilo.botaoNext}
            onPress={() => {
              if (data != '' && telefone != '') {
                //navigation.navigate('Cadastro3', { dados: { nome, nApart } })
                console.log("DEU BAO. Ta pronto pra mudar de tela!");
              } else console.log("NAO DEU BAO");

            }}>
            <View><Image style={{ height: 70, width: 70 }} resizeMode='contain' source={require("../next_button.png")} /></View>

          </TouchableOpacity>

          <ProgressBar styleAttr="Horizontal" progress={andamento} indeterminate={false} color="white" />

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
    alignItems: "center"

  },

  campoCredenciais: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    backgroundColor: cores.pretoBaixo,
    color: "white",
    width: 100 + "%",
    flexDirection: "row",
    borderRadius: 4,
    paddingLeft: 20,
    marginBottom: 20
  },

  descricao: {
    fontWeight: "bold",
    fontSize: 17,
    fontFamily: "Roboto-Regular",
    color: "white",
    marginBottom: 5
  },

  campos: {
    marginTop: 77,
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },

  botaoNext: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "3%"

  }
}