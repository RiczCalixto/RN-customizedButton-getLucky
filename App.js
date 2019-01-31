/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';



class CustomizedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttonStyles = StyleSheet.create({
      btn: {
        width: 150,
        height: 50,
        borderWidth: 2,
        borderColor: props.color,
        backgroundColor: 'transparent',
        borderRadius: 25
      },
      btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      btnTxt: {
        color: props.color,
        fontSize: 14,
        fontWeight: 'bold'
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.buttonStyles.btn} onPress={this.props.onPress}>

        <View style={this.buttonStyles.btnArea}>

          <Text style={this.buttonStyles.btnTxt}>Get lucky!</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { luckyPhrase: 'Frase do dia..' };
    this.frases = ['A vida trará coisas boas se tiveres paciência.', 'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.', 'Não compense na ira o que lhe falta na razão.', 'Defeitos e virtudes são apenas dois lados da mesma moeda.', 'A maior de todas as torres começa no solo.', 'Não há que ser forte. Há que ser flexível.', 'Gente todo dia arruma os cabelos, por que não o coração?'];
    this.getLucky = this.getLucky.bind(this);
  }

  getLucky() {
    let s = this.state;
    let random = Math.floor(Math.random() * this.frases.length);
    s.luckyPhrase = this.frases[random];
    this.setState(s)
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./img/cookie.png')} />
        <Text style={styles.luckyPhrase}>"{this.state.luckyPhrase}"</Text>
        <CustomizedButton color='#FF0000' onPress={this.getLucky} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  luckyPhrase: {
    fontSize: 17,
    color: '#ACAEFA',
    margin: 30,
    fontStyle: 'italic'
  }
});
