import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View, SafeAreaView, ScrollView, Image, Button} from 'react-native';
import colors from './app/config/colors';
import MyButton from './app/components/MyButton';

export default function App() {
  return (
    <SafeAreaView style ={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>In the early morning of 9 April 1940 (Wesertag, "Weser Day"), 
            Germany occupied Denmark and invaded Norway, ostensibly 
            as a preventive manoeuvre against a planned, and openly discussed, 
            French-British occupation of Norway known as Plan R 4 (actually 
            developed as a response to any German aggression against Norway). 
            After the occupation of Denmark (the Danish military was ordered 
            to stand down as Denmark did not declare war with Germany), envoys 
            of the Germans informed the governments of Denmark and Norway that 
            the Wehrmacht had come to protect the countries' neutrality against 
            Franco-British aggression.</Text>

            <Image 
              style= {styles.imageStyles}
              source={{
                uri: 'https://picsum.photos/100/100'
              }}
              />
              <MyButton
                title = "Russel"
                onPress = {() => console.log("omega")}
                color = 'primaryDark'
                underColor = 'purple'
                borderCol = 'red'
                textCol = 'yellow'
                backCol = 'green'
              />
        <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: colors.primaryLight,
    marginHorizontal: 20,
    marginTop: 30,
  },
  imageStyles: {
    width:300, 
    height:300, 
    margin: 10,
    borderColor: 'black',
    borderWidth: 5
  },
});
