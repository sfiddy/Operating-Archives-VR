import React from 'react';
import {View, VrButton, StyleSheet, asset, Model, PointLight, Text} from 'react-vr';

//

export default class Model3D extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            manikinColor: ''
        };
    }

    onCursorHover() {
        this.setState({manikinColor: 'gray'});

        return '<Text style={{fontSize: 0.2, textAlign: \'center\'}}>Blue</Text>';
    }

    onCursorHoverExit() {
        this.setState({manikinColor: ''})
    }

    render() {
        return (
            <View onEnter={this.onCursorHover.bind(this)} onExit={this.onCursorHoverExit.bind(this)}>
                <Model
                    style={{
                        transform: [
                            {translate: this.props.position},
                            {rotateX: this.props.rotateX},
                            {rotateY: this.props.rotateY},
                        ],
                        color: this.state.manikinColor
                    }}
                    source={{obj: this.props.srcPath }}
                    lit={true} />
            </View>
        );
    }
}