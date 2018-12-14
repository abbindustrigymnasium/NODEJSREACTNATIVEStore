import React from 'react';
import { 
    StyleSheet,
    View,
} from 'react-native';

import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';
import Component7 from './Component7';
import Textandinput from './Textandinput';

export default class Screen2 extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            namn: this.props.navigation.state.params.namn,
            Component4Visible: true,
            Component5Visible: true,
            Component6Visible: true,
            Component7Visible: true,
            månader: "0",
            pengar: "55",
        }

    }
    componentDidMount(){
        const { name }  = this.state;
    alert(name);
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

    getdata = (data,parameter) => {
        this.setState({[parameter]: data});
		console.log(this.state);
    }

    render() {
        return (

            
            <View style={styles.container}>

                <View style={styles.screencontainer}>

                    <View style={styles.screencontainerInner}>

                        <Component4 
                            navigation={this.props.navigation}
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            hideComponent={ (component) => this.hideComponent(component) }
                            showComponent={ (component) => this.showComponent(component) }
                            visible={ this.state.Component4Visible }
                        />
                        <Textandinput
                                  navigation={this.props.navigation}
                                  visible={ this.state.Component5Visible }
                                  senddata={this.getdata}//.bind(this, this.value)}
                                  parametername={"pengar"}
                        infotext={"Hur mycket sparar du i månaden:"}
                        placeholdertext={"antal kronor"}
                        startvalue={this.state.pengar}
                        ></Textandinput>

                       <Textandinput
                        senddata={this.getdata}
                        parametername={"månader"}
                        infotext={"Hur länge sparar du:"}
                        placeholdertext={"antal månader"}
                        navigation={this.props.navigation}
                        visible={ this.state.Component5Visible }
                        />
                        {/* <Component5 
                            navigation={this.props.navigation}
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            hideComponent={ (component) => this.hideComponent(component) }
                            showComponent={ (component) => this.showComponent(component) }
                            visible={ this.state.Component5Visible }
                        />
                        <Component6 
                            navigation={this.props.navigation}
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            hideComponent={ (component) => this.hideComponent(component) }
                            showComponent={ (component) => this.showComponent(component) }
                            visible={ this.state.Component6Visible }
                        /> */}
                        <Component7 
                            navigation={this.props.navigation}
                            månader={this.state.månader}
                            pengar={this.state.pengar}
                            namn= {this.state.name}
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            hideComponent={ (component) => this.hideComponent(component) }
                            showComponent={ (component) => this.showComponent(component) }
                            visible={ this.state.Component7Visible }
                        />

                    </View>

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
	    backgroundColor: 'rgba(208,2,27,1)',
	    flex: 1,
	},
	
	screencontainerInner: {
	    flex: 1,
	},
	
});