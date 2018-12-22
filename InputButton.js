import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import Style from './Style';

export default class InputButton extends Component {
    
    render() {
        return (
            <TouchableHighlight style={{flex: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: 0.5,
                          backgroundColor: this.props.background,
                          borderColor: '#ecf0f1'}}
                          underlayColor="#193441"
                          onPress={this.props.onPress}
                          >
                <Text style={{fontSize: 28, fontWeight: 'normal', color: this.props.color}}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
    
}