import React from 'react';
import {View, VrButton, StyleSheet, asset, Model, PointLight, Text} from 'react-vr';


export default class Model3D extends React.Component {
    constructor(props) {
        super(props);
    }

    changeScene() {
        console.log("button clicked.");
    }

    render() {
        return (
            <View>
                <Model
                    style={{
                        transform: [
                            {translate: [0, -5, -30]},
                            {rotateX: this.props.rotateX},
                            {rotateY: this.props.rotateY},
                        ],
                    }}
                    source={{obj: asset('manikin.obj'),}}
                    lit={true}/>
                <PointLight style={{color: 'white', transform: [{translate: [0, 400, 700]}]}}/>

            </View>
        );
    }
}