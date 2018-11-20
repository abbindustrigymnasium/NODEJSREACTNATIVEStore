import React from 'react';
import Slider from "react-native-slider";
import { 
	StyleSheet,
	View,
	Text,
} from 'react-native';


export default class Component1 extends React.Component {

	constructor(props) {

        super(props);

        this.state = {
			lampname: "Lampgod",
			value: 0.2,
			fetch:'http://192.168.0.111:3000/light/'
           
        }

	}
	
	componentDidMount() { //Körs när allt är inladdat
		let self = this; //Kallar this för self för att lättare använda
		  fetch(this.state.fetch+this.state.lampname, {  //Urlen där vi vill skicka ifrån (Detta är datorns ipadress, hämtas via ipconfig i cmd, ip4)
			method: 'GET'  //Säger att det är GET vi vill använda
		  }).then((response) => response.json())  //Gör om resultatet till json
		  .then((responseJson) => {
			  console.log(responseJson);
			//Om response.message är Getter
					alert( responseJson.strength);
					var strength= responseJson.strength/100;
	   self.setState( //Sätter värden till statevariablen
			{
			 
				 //TAr första produkten i listans namn
				 value: strength
		}
	)
				
						   console.log(this.state); //För att se vad som är i statevariabeln
				 
			  
		  }).catch((error) => { //Fångar error
			console.error(error);
		  });
	  }

	  UpdateDataToServer = () =>{ //Liknande insert men patch istället för Port
	 
	 
        const { lampname }  = this.state ;
        const { value }  = this.state ;

        var adress=this.state.fetch;
	   var strength=(value*100);
	   console.log(strength)
       fetch(adress, {
         method: 'PATCH',	
           headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           },
         body: JSON.stringify({
         name: lampname,
		 strength: strength,
		 hard: 54,	 
         })
        
       }).then((response) => response.json())
           .then((responseJson) => {
        
       // Showing response message coming from server after inserting records.
  
       console.log(responseJson);
        // alert( "Update was successfull, "+ lampname); //Skriver ut att uppdateringen lyckats samt itemet som uppdaterats, vi använder namn denna gång för responseJSon säger ingenting om vad som uppdaterats
        
           }).catch((error) => {
           console.error(error);
           });
		
		   
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
						
						   <View style={styles.container} ></View>
						
                                <View style={styles.container}>
										<Text 
											style={styles.item1Text}
										>
											Belysningsknapp
										</Text>

		        <Slider
          value={this.state.value}
		  onValueChange={value => this.setState({ value } )}
		  onSlidingComplete={ this.UpdateDataToServer}
        />
        <Text>
          Value: {this.state.value}
        </Text>
		  
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
	    backgroundColor: 'rgba(214,234,248,1)',
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	},
	container: {
		flex: 1,
		marginLeft: 10,
		marginRight: 10,
		alignItems: "stretch",
		justifyContent: "center"
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
	    borderStyle: 'solid',
	    borderWidth: 0,
	},
	
	item1Text: {
	    color: '#181818',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	slider:{
		width: '100%',
		backgroundColor: 'rgba(0,0,0,1)',
	},
});