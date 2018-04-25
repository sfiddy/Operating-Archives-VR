import React from 'react';
import {asset, Text, View, Model, DirectionalLight, AmbientLight, PointLight, VrButton, StyleSheet, Scene, Image} from 'react-vr';
import Model3D from './Model/Model3D';
import RotateButton from './Buttons/RotateButton';


// position 0, -5, -30

// <PointLight style={{color: 'white', transform: [{translate: [0, -5, 30]}]}}/>
//<PointLight style={{color: 'white', transform: [{translate: [0, 400, 700]}]}}/>

// In Maya

// Change view to Rendering
// Within rendering tab, assign a material
// substance designer <-- maya plugin for high quality textures


// TODO - Find ivory textures

//
// <DirectionalLight intensity={2}/>




export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sceneRotateY: 0,
            xDeg: 0,
            yDeg: 0,
            hoverText: ' ',
            hoverBody: ' ',
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

    rotateScene() {
        this.setState({sceneRotateY: 180})
    }

    onCursorHoverExit(){
        this.setState({hoverText: ' ', hoverBody: ' '});
    }

    scaleUp() {

    }

    render() {
        return (
            <View>
                <View>
                    <Scene style={{transform: [{rotateY: this.state.sceneRotateY}]}} />
                    <PointLight decay={2} style={{color: 'white' }}/>
                    <View onEnter={() => this.setState({hoverText: 'Main Body', hoverBody: 'These dolls were \n commonly used by \n doctors, in particular \n when they were \nexamining patients.'})}
                          onExit={this.onCursorHoverExit.bind(this)}>
                        <Model3D srcPath={asset('chinese-manikin/main.obj')} rotateX={this.state.xDeg} rotateY={this.state.yDeg} position={[-8, -5, -30]}/>
                    </View>
                    <View onEnter={() => this.setState({hoverText: 'Head', hoverBody: 'The Trent Collection \nincludes 3 ivory \nChinese Dolls '})}
                          onExit={this.onCursorHoverExit.bind(this)}>
                        <Model3D srcPath={asset('chinese-manikin/head.obj')} rotateX={this.state.xDeg} rotateY={this.state.yDeg} position={[-8, -5, -30]}/>
                    </View>
                    <View onEnter={() => this.setState({hoverText: 'Bracelets', hoverBody: 'They were known as \nthe doctors lady.'})}
                          onExit={this.onCursorHoverExit.bind(this)}>
                        <Model3D srcPath={asset('./chinese-manikin/bracelets.obj')} rotateX={this.state.xDeg} rotateY={this.state.yDeg} position={[-8, -5, -30]}/>
                    </View>
                    <View onEnter={() => this.setState({hoverText: 'Shoes', hoverBody: 'Doctors would ask \n patients to identity the \n site of pain or disease by \n pointing them out \n in the manikin.'})}
                          onExit={this.onCursorHoverExit.bind(this)}>
                        <Model3D srcPath={asset('./chinese-manikin/shoes.obj')} rotateX={this.state.xDeg} rotateY={this.state.yDeg} position={[-8, -5, -30]}/>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', transform: [{translate: [2.5, 2.5, -5]}] }}>
                    <Text style={{ fontSize: 0.5 }}>{this.state.hoverText}</Text>
                    <Text style={{ fontSize: 0.25 }}>{this.state.hoverBody}</Text>
                </View>

                <View style={{
                    flex: 1, flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'center',
                    transform: [{translate: [-30, 15, -30]}],
                }}>
                    <VrButton onClick={this.rotateUp.bind(this)}>
                        <Image source={require('../static_assets/UI/arrow-up.png')}
                               style={{width: 2, height: 2}}/>
                    </VrButton>
                </View>
                <View style={{
                    flex: 1, flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'center',
                    transform: [{translate: [-30, 15, -30]}]
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
                    transform: [{translate: [-30, 15, -30]}]
                }}>
                    <VrButton onClick={this.rotateDown.bind(this)}>
                        <Image source={require('../static_assets/UI/arrow-down.png')}
                               style={{width: 2, height: 2}}/>
                    </VrButton>
                </View>

                <View style={{
                    flex: 1, flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'center',
                    transform: [{translate: [20, -5, -30]}]
                }}>
                    <VrButton onClick={this.rotateScene.bind(this)}>
                        <Text style={{ fontSize: 1 }}> next scene </Text>
                    </VrButton>
                </View>
            </View>
        );
    }
};
