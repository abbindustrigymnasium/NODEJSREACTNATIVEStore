import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
	TextInput,
} from 'react-native';


export default class Textandinput extends React.Component {
	
	
    constructor(props) {
        super(props);
        this.state = {
            textInputValue: this.props.startvalue,
        }

	}
	senddata = (val) => {
		this.setState({ textInputValue: val })
		console.log(this.state.textInputValue+ "hej "+ val);
        this.props.senddata(val, this.props.parametername);            
    }

    render() {

        if (!this.props.visible) {
            return false;
        }
        

        return (

            <View 
                style={styles.component}
            >

                <View style={styles.layouts}>

                	<View style={styles.layout1}>

                		<View style={styles.itemcontainer1}>

                			<View style={styles.itemcontainer1Inner}>

                                <View style={styles.item1}>
										<Text style={styles.item1Text}										>
											{this.props.infotext}
										</Text>
										<TextInput 
											style={styles.item1TextInput}
											placeholder={this.props.placeholdertext}
											underlineColorAndroid={"transparent"}
											placeholderTextColor={"#AFAFAF"}
											onChangeText={(val) => this.senddata(val)}
											value={this.state.textInputValue}
										/>
									</View>

                			</View>

                		</View>

                	</View>
                	
                </View>

            </View>
            
        );

    }

}

const styles = StyleSheet.create({
    
	component: {
	    width: '100%',
	    flexDirection: 'row',
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	},
	
	layouts: {
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	},
	
	layout1: {
	    width: '100%',
	    height: 90,
	},
	
	itemcontainer1: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer1Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item1: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item1Text: {
	    color: '#181818',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	item1TextInput: {
	    color: '#181818',
	    fontSize: 14,
	    textAlign: 'left',
	    width: '100%',
	},
});