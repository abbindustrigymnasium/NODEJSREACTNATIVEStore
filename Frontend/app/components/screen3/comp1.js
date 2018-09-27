import React, { Component } from 'react'; //Importerar react
import { //Importerar de olika componenterna 
	StyleSheet,
	View,
  Text,
} from 'react-native';

export default class AllProducts extends Component { //Bygger vår egen component som vi kallar AllProducts och kan använda såhär  <AllProducts>  </AllProducts> i önskad screen
  constructor(props) {                            //Kom ihåg att importera filens namn i screenen innan bara,  import AllProducts from './comp1';
      super(props)
      this.state = {
        Name: 'testname', //Detta är namnet jag använder för test
        test: [{name: "Jocke", price: "50"},{name: "Jocke", price: "50"}] ,// En test Array
        products: [] //Riktiga Arrayen
      }
      	 
	
  }
  componentDidMount() { //Körs när allt är inladdat
    let self = this; //Kallar this för self för att lättare använda

      fetch('http://10.22.2.193:3000/products', {  //Urlen där vi vill skicka ifrån (Detta är datorns ipadress, hämtas via ipconfig i cmd, ip4)
        method: 'GET'  //Säger att det är GET vi vill använda
      }).then((response) => response.json())  //Gör om resultatet till json
      .then((responseJson) => {
         // console.log(responseJson, 'res');
         // self.setState({ products: Object.assign(responseJson.result, products)  });
       
         var resultat = responseJson.result; //Sätter result som en variabel
          if (responseJson.message == "Getter") { //Om response.message är Getter
            if (responseJson.result.length!=0) {
   self.setState( //Sätter värden till statevariablen
        {
         
            Name: responseJson.result[0].name , //TAr första produkten i listans namn
            products: resultat
          
        
    }
)
            }
            else
            alert("No values were returned, empty database-table?");
                       console.log(this.state); //För att se vad som är i statevariabeln
             
          }
      }).catch((error) => { //Fångar error
        console.error(error);
      });
  }

    WriteOutFromBackend() {

      return this.state.products.map((produkt) => { // Med hjälp av map öppnar vi upp varje enskilda produkt i produkter och returnernar det vi bestämmer att returnera på nästkommande rader
        return (
          <View><Text 	style={styles.nametext} >Name: {produkt.name }  Price: {produkt.price}</Text></View> //Vi skapar ett viewobjekt med ett textobjekt i, inuti där använder vi {} för att kunna komma åt produktens variabler för att skriva ut dem.
        )
      })
    
    }

  render() { //Renderar (Bygger upp det grafiska gränssnittet.
    return (

      


                                <View style={styles.item1}>

{
  this.WriteOutFromBackend() //Använder funktionen WriteOutFromBackend
} 
                   <Text>
                     {
                       this.state.Name //skriver ut name från state
                       }
                     </Text> 
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
	    height: 136.5,
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
	    overflow: 'hidden',
	    padding: 10,
	},
	
	nametext: {
      margin: 3,
	    color: '#181818',
	    fontSize: 20,
	    textAlign: 'center',
      width: '100%',
      borderColor: 'black',  
      borderWidth: '4px',
  },

	
});