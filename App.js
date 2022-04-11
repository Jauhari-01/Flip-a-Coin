import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

export default class App extends React.Component {

  state = {
    "coin_result": "head"
  }


  flipACoin() {
    //Genrating Random number for logic
    //random number between 1 and 2
    const random = Math.floor(Math.random() * 2) + 1;
    // console.log(random);

    if (random == 1) {
      // head
      this.setState({
        "coin_result":"head"
      })
    } else {
      //tail
      this.setState({
        "coin_result":"tail"
      })
    }
  }



  render() {
    return (
      <View style={styles.container}>

        {
          this.state.coin_result == "head"?
            <Image
              source={require("./assets/Head.png")}
              style={{
                width: 150,
                height: 150
              }}
            />
            :
            <Image
              source={require("./assets/Tail.png")}
              style={{
                width: 150,
                height: 150
              }}
            />
        }
        <TouchableOpacity
          onPress={() => {
            this.flipACoin()
          }}
          style={styles.button}
        >
          <Text>Flip a Coin</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3d1d6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#9ed3e8",
    padding: 20,
    margin: 10,
    borderRadius: 4
  }
});
