import Login from './src/telas/Login';
import Cadastro from './src/telas/Cadastro';
import CadastroParte2 from './src/telas/CadastroParte2';
import CadastroParte3 from './src/telas/CadastroParte3';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const StackNavigator = createStackNavigator({
  "Main": {
    screen: Login,
    navigationOptions: ({navigation}) => {

    return({
      title: ""
    })
  }
  },
  "Cadastro": {
    screen: Cadastro,
    navigationOptions: ({navigation}) => {
      return({
        title: "", 
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
        },
        headerTintColor: 'white'
      })
    }
  },
  "Cadastro2": {
    screen: CadastroParte2,
    navigationOptions: ({navigation}) => {
      return({
        title: "", 
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
        },
        headerTintColor: 'white'
      })
    }
  },
  "Cadastro3": {
    screen: CadastroParte3,
    navigationOptions: ({navigation}) => {
      return({
        title: "", 
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
        },
        headerTintColor: 'white'
      })
    }
  },

}, {
  defaultNavigationOptions: {

    headerTitleStyle: {
      color: "white",
      fontSize: 30,
      flexGrow: 1,
      textAlign: "center",
    },

    headerStyle: {
      backgroundColor: "#191d21"
    }
  }
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
