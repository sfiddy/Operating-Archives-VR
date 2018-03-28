import React from 'react';
import {asset, Text, View, Model, PointLight, VrButton, StyleSheet, Image} from 'react-vr';
import Model3D from './Model/Model3D';
import RotateButton from './Buttons/RotateButton';

// View Transform
// transform: [{translate: [-1, 1, -5]}],
// <View style={{ margin: 1, transform: [{translate: [20, 15, -30]}] }} >

// Segment:
// Shoes
// Bracelets
// Head

// Ask Ed
// Genie Kim
// Google Jobs Board jobs.google.com


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            xDeg: 0,
            yDeg: 0,
            hoverText: ' '
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

    onCursorHoverExit(){
        this.setState({hoverText: ' '});
    }

    render() {
        return (
            <View>
                <View>
                    <PointLight style={{color: 'white', transform: [{translate: [0, 400, 700]}]}}/>
                    <View onEnter={() => this.setState({hoverText: 'Main Body'})}
                          onExit={this.onCursorHoverExit.bind(this)}>
                        <Model3D srcPath={asset('./chinese-manikin/main.obj')} rotateX={this.state.xDeg} rotateY={this.state.yDeg} />
                    </View>
                    <View onEnter={() => this.setState({hoverText: 'Head'})}
                          onExit={this.onCursorHoverExit.bind(this)}>
                        <Model3D srcPath={asset('./chinese-manikin/head.obj')} rotateX={this.state.xDeg} rotateY={this.state.yDeg} />
                    </View>
                    <View onEnter={() => this.setState({hoverText: 'Bracelets'})}
                          onExit={this.onCursorHoverExit.bind(this)}>
                        <Model3D srcPath={asset('./chinese-manikin/bracelets.obj')} rotateX={this.state.xDeg} rotateY={this.state.yDeg} />
                    </View>
                    <View onEnter={() => this.setState({hoverText: 'Shoes'})}
                          onExit={this.onCursorHoverExit.bind(this)}>
                        <Model3D srcPath={asset('./chinese-manikin/shoes.obj')} rotateX={this.state.xDeg} rotateY={this.state.yDeg} />
                    </View>
                </View>


                <View style={{ flex: 1, flexDirection: 'row', transform: [{translate: [-1, -1, -5]}] }}>
                    <Text style={{ fontSize: 0.5 }}>{this.state.hoverText}</Text>
                </View>

                <View style={{
                    flex: 1, flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'center',
                    transform: [{translate: [20, 15, -30]}],
                }}>
                    <VrButton onClick={this.rotateUp.bind(this)}>
                        <Image source={require('../static_assets/UI/arrow-up.png')}
                               style={{width: 2, height: 2}}/>
                    </VrButton>
                </View>
                <View style={{
                    flex: 1, flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'center',
                    transform: [{translate: [20, 15, -30]}]
                }}>
                    <VrButton onClick={this.rotateLeft.bind(this)}>
                        <Image source={require('../static_assets/UI/arrow-left.png')}
                               style={{width: 2, height: 2}}/>
                    </VrButton>
                    <VrButton onClick={this.rotateCenter.bind(this)}>
                        <Image source={require('../static_assets/UI/arrow-center.png')}
                               style={{width: 2, height: 2}}/>
                    </VrButton>
                    <VrButton onClick={this.rotateRight.bind(this)}>
                        <Image source={require('../static_assets/UI/arrow-right.png')}
                               style={{width: 2, height: 2}}/>
                    </VrButton>
                </View>
                <View style={{
                    flex: 1, flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'center',
                    transform: [{translate: [20, 15, -30]}]
                }}>
                    <VrButton onClick={this.rotateDown.bind(this)}>
                        <Image source={require('../static_assets/UI/arrow-down.png')}
                               style={{width: 2, height: 2}}/>
                    </VrButton>
                </View>
            </View>
        );
    }
};
