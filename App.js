import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ScrollView, Keyboard } from 'react-native';
import Style from './Style';
import InputButton from './InputButton';

let DefaultColor = '#636e72';
let BlueColor = '#3498db';

const inputButtons = 
[
  ['C', '', '%', '÷'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  ['+/-', 0, '.', '=']
];

const colorsButtons = 
[
  [DefaultColor, DefaultColor, BlueColor, BlueColor],
  [DefaultColor, DefaultColor, DefaultColor, BlueColor],
  [DefaultColor, DefaultColor, DefaultColor, BlueColor],
  [DefaultColor, DefaultColor, DefaultColor, BlueColor],
  [DefaultColor, DefaultColor, DefaultColor, DefaultColor]
];

export default class App extends React.Component {
  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <View style={{maxHeight:"30%"}}>
            <ScrollView  style={{flexGrow:0}} >
              <Text style={Style.displayHistoric}>{this.state.historic}</Text>
            </ScrollView>
          </View>
        <Text style={Style.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={Style.inputContainer}>
          {this._renderInputButtons()}  
        </View>
      </View>
    );
  }

  constructor(props) {
    super(props); 
    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null,
      historic: null
    }
  }

    _renderInputButtons() {
      let views = [];

      for (var r = 0; r < inputButtons.length; r ++) {
          let row = inputButtons[r];

          let inputRow = [];
          for (var i = 0; i < row.length; i ++) {
              let input = row[i];
              let colorValue = colorsButtons[r][i];
              let background = 'white';

              if ((r == 0) && (i == 0))
                  colorValue = '#e74c3c';

              if ((r == 4) && (i == 3))
              {
                  colorValue = background;
                  background = BlueColor;
              }

              inputRow.push(
                  <InputButton 
                            value={input} 
                            color={colorValue} 
                            background={background}
                            onPress={this._onInputButtonPressed.bind(this, input)} 
                            key={r + "-" + i}/>
              );
          }

          views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
      }

      return views;
  }

  _onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
          return this._handleNumberInput(input)
      case 'string':
          return this._handleStringInput(input)
    }
  }

  _handleNumberInput(num) {
    let inputValue = (this.state.inputValue * 10) + num;

    this.setState({
        inputValue: inputValue
    })
  }

  _handleStringInput(str) {
    switch (str) {
        case '÷':
        case 'x':
        case '+':
        case '-':
        case '%':
            this.setState({
                selectedSymbol: str,
                previousInputValue: this.state.inputValue,
                historic: this.state.historic + this.state.inputValue + " " + str,
                inputValue: 0,
            });
            break;
        case '=':
              let symbol = this.state.selectedSymbol,
              inputValue = this.state.inputValue,
              previousInputValue = this.state.previousInputValue;

              if (!symbol) {
                  return;
              }

              if(symbol == "x"){
                symbol = "*"
              }
              else if(symbol == "÷"){
                symbol = "/"
              }

              let result = eval(previousInputValue + symbol + inputValue)              

              this.setState({
                  previousInputValue: 0,
                  inputValue: result,
                  selectedSymbol: null,
                  historic: this.state.historic + " " + inputValue + " = " + result + "\n"
              });
              break;

            break;
    }
}

}

