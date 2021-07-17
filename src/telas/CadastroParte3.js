import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import Titulo from '../Titulo';
import { TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import CampoSenha2 from '../CampoSenha2';
import verificaSenhas from '../funcoes/verificaSenhas';
import { useState } from 'react';

export default function Cadastro({ navigation }) {

    //const {nome, nApart } = props.navigation.state.params.dados;

    const [andamento, setAndamento] = useState(1);
    const [senhaSegura, setSenhaSegura] = useState('');
    const [senhaSegura2, setSenhaSegura2] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');

    return (
        <View style={{ justifyContent: "center", flex: 1, flexDirection: "column", backgroundColor: cores.cinzaFundo }} // Não esquecer do flex 1
        >
            <ImageBackground source={require("../onda.png")} style={estilo.fundo}>

                <View style={{ position: 'absolute', top: 0 }}>
                    <Titulo />

                    <View style={estilo.campos}>

                        <TextInput // Campo de Usuário
                            style={estilo.campoCredenciais}
                            placeholder="Usuário"
                            placeholderTextColor={cores.brancoBaixo}
                            value={usuario}
                            onChangeText={usuario => {
                                setUsuario(usuario)
                            }}

                        >
                        </TextInput>

                        <CampoSenha2 />



                    </View>

                    <TouchableOpacity onPress={() => {  //Botao Termina
                        if (verificaSenhas) navigation.navigate('Main', { dados: { usuario, senha } })
                        else console.log("As senhas não coicidem!");

                    }}
                        style={estilo.botaoNext}>
                        <View><Image style={{ height: 70, width: 70 }} resizeMode='contain' source={require("../v_button.png")} /></View>

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
        width: "88%",
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
        justifyContent: "center",
        marginBottom: 20
    },

    botaoNext: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: "3%"

    }
}