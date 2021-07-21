import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import Titulo from '../Titulo';
import { TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import CampoSenha2 from '../CampoSenha2';
import verificaSenhas from '../funcoes/verificaSenhas';

export default class Cadastro extends Component {

    constructor(props){
        super(props);

        dados = this.props.navigation.state.params.dados;

        this.state = {
            andamento: 1,
            senhaSegura: '',
            senhaSegura: '',
            usuario: '',
            senha: '',
            senha2: '',
            data: dados.data,
            telefone: dados.telefone,
            nome: dados.nome,
            nApart: dados.nApart
        };
    }

    handleSenha = (senha) => {
        this.setState({
            senha: senha
        })
    }

    handleSenha2 = (senha) => {
        this.setState({
            senha2: senha
        })
    }

    render(){

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
                                value={this.state.usuario}
                                onChangeText={usuario => {
                                    this.setState({
                                        usuario: usuario
                                    })
                                }}

                            >
                            </TextInput>

                            <CampoSenha2 senha1={this.state.senha} 
                            senha2={this.state.senha2} 
                            handleSenha={this.handleSenha}
                            handleSenha2={this.handleSenha2} />



                        </View>

                        <TouchableOpacity onPress={() => {  //Botao Termina
                            if(this.state.usuario.length > 0){
                                if (verificaSenhas(this.state.senha, this.state.senha2)){
                                    user = this.state.usuario;
                                    pass = this.state.senha;
                                    
                                    console.log("Conta criada com sucesso!");

                                    console.log("Nome: " + this.state.nome);
                                    console.log("Nº do Apartamento: " + this.state.nApart);
                                    console.log("Data de Nascimento: " + data);
                                    console.log("Telefone: " + this.state.telefone);
                                    console.log("Usuário:" + user);
                                    console.log("Senha:" + pass);
                                }

                                else console.log("As senhas não coicidem!");
                            }
                            
                            

                        }}
                            style={estilo.botaoNext}>
                            <View><Image style={{ height: 70, width: 70 }} resizeMode='contain' source={require("../v_button.png")} /></View>

                        </TouchableOpacity>

                        <ProgressBar styleAttr="Horizontal" progress={this.state.andamento} indeterminate={false} color="white" />

                    </View>
                </ImageBackground>

            </View>
        );
    }
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