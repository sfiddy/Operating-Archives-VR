import React from 'react';
import {asset, Text, View, Model, PointLight, VrButton, StyleSheet, Image} from 'react-vr';
import Model3D from './Model/Model3D';
import RotateButton from './Buttons/RotateButton';

// View Transform
// transform: [{translate: [-1, 1, -5]}],

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            xDeg: 0,
            yDeg: 0,
        };
    }

    rotateUp() {
        currXDeg = this.state.xDeg;
        this.setState({xDeg: currXDeg - 10});
    }

    rotateDown() {
        currXDeg = this.state.xDeg;
        this.setState({xDeg: currXDeg + 10});
    }

    rotateRight() {
        currYDeg = this.state.yDeg;
        this.setState({yDeg: currYDeg + 10});
    }

    rotateLeft() {
        currYDeg = this.state.yDeg;
        this.setState({yDeg: currYDeg - 10});
    }

    rotateCenter() {
        this.setState({xDeg: 0, yDeg: 0})
    }

    render() {
        return (
            <View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Model3D rotateX={this.state.xDeg} rotateY={this.state.yDeg}/>

                    <View style={{ margin: 1, transform: [{translate: [20, 15, -30]}] }} >
                        <VrButton onClick={this.rotateUp.bind(this)}>
                            <Image source={require('../static_assets/UI/arrow-up.png')}
                                   style={{width: 2, height: 2}} />
                        </VrButton>
                        <VrButton onClick={this.rotateDown.bind(this)}>
                            <Image source={require('../static_assets/UI/arrow-down.png')}
                                   style={{width: 2, height: 2}} />
                        </VrButton>
                        <VrButton onClick={this.rotateRight.bind(this)}>
                            <Image source={require('../static_assets/UI/arrow-right.png')}
                                   style={{width: 2, height: 2}} />
                        </VrButton>
                        <VrButton onClick={this.rotateLeft.bind(this)}>
                            <Image source={require('../static_assets/UI/arrow-left.png')}
                                   style={{width: 2, height: 2}} />
                        </VrButton>
                        <VrButton onClick={this.rotateCenter.bind(this)}>
                            <Image source={require('../static_assets/UI/arrow-center.png')}
                                   style={{width: 2, height: 2}} />
                        </VrButton>
                    </View>
                </View>
            </View>
        );
    }
};
