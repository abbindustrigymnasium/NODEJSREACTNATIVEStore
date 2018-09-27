import React, { Component } from 'react'; //Importerar react
import { //Importerar de olika componenterna 
	StyleSheet,
	View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Sendproduct extends Component { //Bygger vår egen component som vi kallar AllUsers och kan använda såhär  <AllUsers>  </AllUsers> i önskad screen
  constructor(props) {
 
		super(props)
	 
		this.state = { //Sätter att vi vill ha 2 variabler name och price, name är '' för att vi inte ska kunna skapa tomma produkter
	 
			Name: '',
		  Price: '12',
	 
		}
	 
	  }
	 
	  InsertDataToServer = () =>{ //Skapar en metod som tar värdena name och price så använder vi dem för att skicka till databasen
	 const { Name }  = this.state ;
	 const { Price }  = this.state ;
	 
   if(Name!="") //Tittar så namnet inte är tomt
   {
	fetch('http://10.22.2.193:3000/products', {  //Skickar värdena till databasen 
    method: 'POST',	 //Post betyder skicka
      headers: { // skickar med vilkoren 
      'Accept': 'application/jqson', 
      'Content-Type': 'application/json',
      },
	  body: JSON.stringify({ //Skapar kroppen som skickas med och lägger in namn och pris
		name: Name,
		price: Price,	 
	  })
	 
	}).then((response) => response.json())  //gör om den till json
		  .then((responseJson) => {
	 
  // Showing response message coming from server after inserting records.
  console.log(responseJson.Product[0].name);   //Skriver ut namnet på första objektet, det vill säga objektet vi nyss skapat.
  console.log(responseJson); //Ser hela meddelandet från server
		alert(responseJson.message  +", "+ responseJson.Product[0]); //Skriver vilken produkt som blivit tillagd
	 
		  }).catch((error) => { //Fångar fel
			console.error(error);
		  });
	       
    }
    else
    alert("Write a name and a price.") //Om det är tomt skrivs en rekomendation ut
	 
	  }


	  UpdateDataToServer = () =>{ //Liknande insert men patch istället för Port
	 
	 
      const { Name }  = this.state ;
      const { Price }  = this.state ;
      if(Name!="")
      {
      var adress='http://10.22.2.193:3000/products/'+Name;
     
     fetch(adress, {
       method: 'PATCH',	
         headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         },
       body: JSON.stringify({
       name: Name,
       price: Price,	 
       })
      
     }).then((response) => response.json())
         .then((responseJson) => {
      
     // Showing response message coming from server after inserting records.

     console.log(responseJson);
       alert( "Update was successfull, "+ Name); //Skriver ut att uppdateringen lyckats samt itemet som uppdaterats, vi använder namn denna gång för responseJSon säger ingenting om vad som uppdaterats
      
         }).catch((error) => {
         console.error(error);
         });
      
        }
        else
        alert("Write a name and a price.")
       }

       DeleteDataFromServer = (nametest) =>{  //Liknande insert men delete istället för post
        const { Name }  = this.state ;
        const { Price }  = this.state ;
        if(Name!="")
        {
        var adress='http://10.22.2.193:3000/products/'+Name;
       
       fetch(adress, {
         method: 'Delete',	
           headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           },
         body: JSON.stringify({
         name: Name,
         price: Price,	 
         })
        
       }).then((response) => response.json())
           .then((responseJson) => {

       console.log(responseJson);
         alert( "Delete was successfull, "+ Name); //Skriver ut att borttagningen lyckats samt itemet som tagits bort, vi använder namn denna gång för responseJSon säger ingenting om vad som tagits bort
        
           }).catch((error) => {
           console.error(error);
           });
        
          }
          else
          alert("Write a name and a price.")
         }
   

  render() { //Renderar Bygger upp det grafiska gränssnittet.
    return (

      
      <View 
                style={styles.component}
            >

                <View style={styles.layouts}>

                	<View style={styles.layout1}>

                		<View style={styles.itemcontainer1}>

                			<View style={styles.itemcontainer1Inner}>

                    
                    <Text 
											style={styles.item1TextInput}
										>
											Name:
										</Text>
	<TextInput   onChangeText={(value) => this.setState({Name: value})} 
											style={styles.item1TextInput}
											value=''
											placeholder='Namn'
											underlineColorAndroid={'transparent'}
											placeholderTextColor={'#292929'}
										/>
<Text 
											style={styles.item1TextInput}
										>
											Price:
										</Text>
                    	<TextInput    onChangeText={(value) => this.setState({Price: value})}
											style={styles.item1TextInput}
											value=''
											placeholder='Pris'
											underlineColorAndroid={'transparent'}
											placeholderTextColor={'#292929'}
										/>
</View></View>
</View>
	<View style={styles.layout2}>

<View style={styles.itemcontainer1}>
	<View style={styles.itemcontainer1Inner}>
                     <TouchableOpacity  onPress={this.InsertDataToServer} style={styles.item1}>
 <Text style={styles.button1}>Lägg till </Text>
									</TouchableOpacity>
                  <TouchableOpacity  onPress={this.UpdateDataToServer} style={styles.item2 }  >
 <Text style={styles.button1}>Uppdatera </Text>
									</TouchableOpacity>
                  <TouchableOpacity  onPress={this.DeleteDataFromServer} style={styles.item3 }  >
 <Text style={styles.button1}>Ta bort </Text>
									</TouchableOpacity>
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
	    height: 136.5,
	},
  layout2: {
    width: '100%',
    height: 136.5,
    marginTop: 130,
},
	itemcontainer1: {
	    width: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer1Inner: {
	    width: '100%',
	    height: '100%',
	    justifyContent: 'center',
	},
	


	item1: {
    backgroundColor: 'rgba(76,175,80,1)',
    borderWidth: 0,
    borderColor: '#eee',
    borderStyle: 'solid',
    borderRadius: 4,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding: 10,
},
item2: {
  backgroundColor: 'rgba(76,56,80,1)',
  borderWidth: 0,
  borderColor: '#eee',
  borderStyle: 'solid',
  borderRadius: 4,
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  padding: 10,
},
item3: {
  backgroundColor: 'rgba(244, 66, 66,1)',
  borderWidth: 0,
  borderColor: '#eee',
  borderStyle: 'solid',
  borderRadius: 4,
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  padding: 10,
},
button1: {
    color: '#fff',
    fontSize: 35,
    textAlign: 'center',
    width: '100%',
},
item1TextInput: {
  color: '#181818',
  fontSize: 34,
  textAlign: 'left',
  width: '100%',
},
	
});