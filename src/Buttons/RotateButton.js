import React from 'react';
import {Text, View, VrButton, StyleSheet} from 'react-vr';
import Model3D from '../Model/Model3D';


export default class RotateButton extends React.Component {
    changeScene() {
        console.log("button clicked.");
    }
    render () {
        return (
            <View>
                <View style={{ flex: 1, flexDirection: 'column', width: 5, alignItems: 'center',
                    transform: [{translate: [-1, 1, -5]}], }}>
                        <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'red'}}>
                            <VrButton onClick={this.changeScene.bind(this)}>
                                <Text style={{fontSize: 0.2, textAlign: 'center'}}>Red</Text>
                            </VrButton>
                        </View>
                        <View style={{ margin: 0.1, height: '50%', width: '50%', backgroundColor: 'blue'}}>
                            <VrButton onClick={this.changeScene.bind(this)}>
                                <Text style={{fontSize: 0.2, textAlign: 'center'}}>Blue</Text>
                            </VrButton>
                        </View>
                </View>
            </View>
        );
    }
}