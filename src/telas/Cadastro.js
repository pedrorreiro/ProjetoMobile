import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import Titulo from '../Titulo';
import { TouchableOpacity } from 'react-native';
import {useState} from 'react';

export default function Cadastro(props) {

  const [andamento, setAndamento] = useState(0.3);
  const [nome, setNome] = useState("");
  const [nApart, setNapart] = useState("");

    return (
      <View style={{justifyContent: "center", flex: 1, flexDirection: "column",backgroundColor: cores.cinzaFundo}} // Não esquecer do flex 1
      >
        <ImageBackground source={require("../onda.png")} style={estilo.fundo}>

          <View style={{position: 'absolute', top: 0}}>
            <Titulo/>
            
            <View style={estilo.campos}>

              <TextInput // Campo de Nome Completo
                style={estilo.campoCredenciais}
                placeholder="Nome Completo"
                placeholderTextColor={cores.brancoBaixo}
                value={nome}
                onChangeText={nome => {setNome(nome)}}
                
              >
              </TextInput>

              <TextInput // Campo de Nº Apartamento
                keyboardType="numeric"
                style={estilo.campoCredenciais}
                placeholder="Nº do Apartamento"
                placeholderTextColor={cores.brancoBaixo}
                value={nApart}
                onChangeText={numero => {setNapart(numero)}}
                
              >
              </TextInput>

            </View>
            
            <TouchableOpacity onPress={() => {
              
              props.navigation.navigate('Cadastro2', nome)
            }} //Botao Next
            style={estilo.botaoNext}>
              <View><Image style={{height: 70, width: 70}} resizeMode='contain' source={require("../next_button.png")}/></View>
              
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