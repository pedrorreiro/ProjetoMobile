import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

type Props = {};
export default class Titulo extends Component<Props> {

  constructor(props){
  super(props);

  this.state = {

  }

  }

  componentDidMount(){

  }


  render() {
      
    return (
      <View style={{textAlign: "center", backgroundColor: "#191d21"}}>
        <Text style={estilo.titulo}>Condomínio</Text>
        <Text style={estilo.titulo}>Água das Serras</Text>
      </View>
    );
  }
}

const estilo = {

  titulo: {
    color: "white",
    fontFamily: "ComicSansMSBold",
    fontSize: 41,
    flexGrow: 1,
    textAlign: "center"
  }
}