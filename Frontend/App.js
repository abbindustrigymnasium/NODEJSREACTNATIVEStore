  /*import React from 'react';
import { 
    StyleSheet, 
    View,
    Text,
} from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';


       export default class App extends React.Component {
       
        constructor(props) {
 
            super(props)
         
            this.state = {
         
                products: [],
              sensorHeat: '455',
              sensorHum: '54'
         
            }
         
          } 

          componentDidMount() {
            fetch('/products')
              .then(res => res.json())
              .then(products => this.setState({ products: products }));
          };
          render() {
            return (

                <Text>
											
                                            {this.state.products.map(member =>
                    {member.name}
                  )}
										</Text>

            );
          }
    }


           module.exports = App;*/

import React from 'react';
import { 
    StyleSheet, 
    View,
} from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';

import Screen1 from './app/components/screen1/Screen1';
import Screen2 from './app/components/screen2/Screen2';
import Screen3 from './app/components/screen3/Screen3';

const StackNavigator = createStackNavigator({
    Screen1: { 
        screen: Screen1,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen2: { 
        screen: Screen2,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen3: { 
        screen: Screen3,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
},{ headerMode: 'screen' });

export default class App extends React.Component {
    render() {
        return (

            <View style={styles.container}>
                <StackNavigator />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
