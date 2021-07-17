import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function CampoSenha2({ navigation }) {

    const [urlOlho, setUrlOlho] = useState(require('./eye.png'));
    const [senhaSegura, setSenhaSegura] = useState(true);
    const [senhaSegura2, setSenhaSegura2] = useState(true);

    this.retornaUrlOlho = this.retornaUrlOlho.bind(this);


    return (

        <View>

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

                    if (urlOlho == require('./eye.png'))
                        setUrlOlho(require('./eye2.png'))

                    else setUrlOlho(require('./eye.png'))


                }}>
                    <Image resizeMode='contain' style={estilo.olho} source={urlOlho} />
                </TouchableOpacity>

            </View>

            <View style={estilo.container2}>

                <TextInput // Campo de Senha2
                    secureTextEntry={senhaSegura2}
                    style={estilo.campoCredenciais}
                    placeholder='Confirme sua senha'
                    placeholderTextColor={cores.brancoBaixo}
                />

                <TouchableOpacity style={estilo.areaOlho} onPress={() => {

                    if (senhaSegura2) setSenhaSegura2(false)

                    else setSenhaSegura2(true);

                    if (urlOlho == require('./eye.png'))
                        setUrlOlho(require('./eye2.png'))

                    else setUrlOlho(require('./eye.png'))

                }}>
                    <Image resizeMode='contain' style={estilo.olho} source={urlOlho} />
                </TouchableOpacity>

            </View>



        </View>

    );
}
retornaUrlOlho = () => {
    urlOlho;
}

const cores = {
    brancoBaixo: "rgba(255, 255, 255, 0.5)",

    pretoBaixo: "rgba(0,0,0,0.4)"
}

const estilo = {

    container: {
        width: "100%",
        backgroundColor: cores.pretoBaixo,
        paddingRight: 10,
        flexDirection: "row",
        borderRadius: 4,
        marginBottom: 20

    },

    container2: {
        width: "100%",
        backgroundColor: cores.pretoBaixo,
        paddingRight: 10,
        flexDirection: "row",
        borderRadius: 4,

    },

    campoCredenciais: {
        fontSize: 16,
        color: "white",
        borderRadius: 4,
        paddingLeft: 20,
        width: '80%',
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