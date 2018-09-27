import React from 'react';
import { 
    StyleSheet,
    View,
} from 'react-native';

import Component11 from './Component11';
import Sendproduct from './comp2';

export default class Screen2 extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            Component11Visible: true,
            Component12Visible: true,
            Component13Visible: true,
            Component14Visible: true,
        }

    }

    toggleComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';
        let val  = this.state[prop];
        if (typeof val === 'undefined') {
            return false;
        }

        this.setState({
            [prop]: val === true ? false : true
        })

        return true;

    }

    hideComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: false
        })

        return true;

    }

    showComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: true
        })

        return true;

    }

    render() {
        return (

            
            <View style={styles.container}>

                <View style={styles.screencontainer}>

                    <Component11 
                        navigation={this.props.navigation}
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        hideComponent={ (component) => this.hideComponent(component) }
                        showComponent={ (component) => this.showComponent(component) }
                        visible={ this.state.Component11Visible }
                    />
                   
                    <Sendproduct></Sendproduct>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    
	screencontainer: {
	    backgroundColor: 'rgba(113,165,226,1)',
	    flex: 1,
	},
	
});



