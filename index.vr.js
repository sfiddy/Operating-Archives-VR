import React from 'react';
import {AppRegistry, asset, Text, View, Model, PointLight, VrButton} from 'react-vr';
import App from './src/App'

export default class WelcomeToVR extends React.Component {
    render() {
        return (
            <View>
                <App />
            </View>
        );
    }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
