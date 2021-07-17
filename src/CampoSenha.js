import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function CampoSenha(props) {

  const [urlOlho, setUrlOlho] = useState(require('./eye.png'));
  const [senhaSegura, setSenhaSegura] = useState(true);

  return (

    <View style={estilo.container}>

      <TextInput // Campo de Senha
        secureTextEntry={senhaSegura}
        style={estilo.campoCredenciais}
        placeholder='Senha'
        placeholderTextColor={cores.brancoBaixo}
      />

      <TouchableOpacity style={estilo.areaOlho} onPress={() => {
        if (senhaSegura) setSenhaSegura(false)

        else setSenhaSegura(true);

        if (urlOlho == require('./eye.png')) {
          setUrlOlho(require('./eye2.png'))
        }

        else setUrlOlho(require('./eye.png'));

      }}>
        <Image resizeMode='contain' style={estilo.olho} source={urlOlho} />
      </TouchableOpacity>



    </View>

  );
}


const cores = {
  brancoBaixo: "rgba(255, 255, 255, 0.5)",

  pretoBaixo: "rgba(0,0,0,0.4)"
}

const estilo = {

  container: {
    width: "80%",
    backgroundColor: cores.pretoBaixo,
    paddingRight: 10,
    flexDirection: "row",
    borderRadius: 4
  },

  campoCredenciais: {
    color: "white",
    borderRadius: 4,
    paddingLeft: 20,
    width: '90%'
  },

  areaOlho: {
    marginTop: 11,
    width: 25,
    height: 25
  },

  olho: {
    height: 25,
    width: 25,
    opacity: 0.8,
    zIndex: 8
  }
}