import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View, SafeAreaView, ScrollView, Image, Button} from 'react-native';
import colors from './app/config/colors';
import MyButton from './app/components/MyButton';
import { AntDesign } from '@expo/vector-icons'; 
import MyImage from './app/components/MyImage';


export default function App() {
  return (
    <SafeAreaView style ={styles.container}>
      <ScrollView style={styles.scrollView}>
          <MyImage
          
          link = {'https://picsum.photos/id/1015/100/100'}
          
          />

          <MyButton
                title = "Press to Like!"
                onPress = {() => console.log("Liked Picture 1")}
                col = 'pink'
                underColor = 'purple'
                borderCol = 'primaryDark'
                textCol = 'primaryLight'
                backCol = 'green'
                
              />

          <MyImage
          link = {'https://picsum.photos/id/1014/100/100'}/>

          <MyButton
                title = "Press to Like!"
                onPress = {() => console.log("Liked Picture 2")}
                color = 'colors.primaryLight'
                underColor = 'orange'
                borderCol = 'primaryDark'
                textCol = 'primaryLight'
                backCol = 'green'
                
              />

<AntDesign 
              name="heart" 
              size={24} 
              color="red"
              style={{position: 'absolute', top: 240, left: 180}} />

          <MyImage
          link = {'https://picsum.photos/id/1013/100/100'}/>
              
          <AntDesign 
              name="heart" 
              size={24} 
              color="red"
              style={{position: 'absolute', top: 800, left: 180}} />

          <MyButton
                title = "Press to Like!"
                onPress = {() => console.log("Liked Picture 3")}
                color = 'primary'
                underColor = 'teal'
                borderCol = 'primaryDark'
                textCol = 'primaryLight'
                backCol = 'green'
                
              />

<AntDesign 
              name="heart" 
              size={24} 
              color="red"
              style={{position: 'absolute', top: 520, left: 180}} />
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
  text: {
    fontSize: 24,
  }
});
