import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image} from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';

type Props = {};
export default class CampoSenha extends Component<Props> {

  constructor(props){
  super(props);

  this.state = {
    urlOlho: './eye.png',
    senhaSegura: true 
  }

  this.retornaUrlOlho = this.retornaUrlOlho.bind(this);

  }

  mudaSenha = () => {

    if(this.state.senhaSegura) this.setState({senhaSegura: false})

    else this.setState({senhaSegura: true});

    if(this.state.urlOlho == './eye.png'){
        this.setState({
            urlOlho: './eye2.png'
        });
    }

    else this.setState({
        urlOlho: './eye.png'
    });

  }

  retornaUrlOlho = () => {
    return this.state.urlOlho;
  }

  render() {

    return (

        <View style={estilo.container}>
            
                <TextInput // Campo de Senha
                    secureTextEntry={this.state.senhaSegura}
                    style={estilo.campoCredenciais}
                    placeholder='Senha'
                    placeholderTextColor={cores.brancoBaixo}                  
                />

                <TouchableOpacity style={estilo.areaOlho} onPress={this.mudaSenha}>                  
                    <Image resizeMode='contain' style={estilo.olho} source={require("./eye.png")}/>
                </TouchableOpacity>

    

        </View>
        
    );
  }
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
        backgroundColor: cores.pretoBaixo,
        color: "white",
        borderRadius: 4,
        paddingLeft: 20,
        width: '90%'
    },

    areaOlho: {
        marginTop: 8,
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