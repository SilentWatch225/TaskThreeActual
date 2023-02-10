import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import colors from './app/config/colors';
import MyButton from './app/components/MyButton';
import MyImage from './app/components/MyImage';
import MyRoundIcon from './app/components/MyRoundIcon';

export default function App() {
  return (
    <SafeAreaView style ={styles.container}>
      <ScrollView style={styles.scrollView}>

          <MyImage
            borderCol = 'black'
            borderWid = {3}
            borderRad = {100}
            link = {'https://picsum.photos/id/1015/100/100'}
          />

          <MyButton
            title = "Press to Like!"
            onPress = {() => console.log("Liked Picture 1")}
            col = 'pink'
            underColor = 'purple'
            borderCol = 'primaryDark'
            backCol = 'green'
          />

          <MyRoundIcon
            borderRad = {10}
            borderWid = {2}
            borderCol = 'pink'
          />

          <MyImage
            borderCol = 'black'
            borderWid = {3}
            link = {'https://picsum.photos/id/1014/100/100'}
          />

          <MyButton
            title = "Press to Like!"
            onPress = {() => console.log("Liked Picture 2")}
            color = 'colors.primaryLight'
            underColor = 'orange'
            borderCol = 'primaryDark'
            backCol = 'green'
          />
          
          <MyRoundIcon
            borderRad = {10}
            borderWid = {2}
            borderCol = 'pink'
          />

          <MyImage
            borderCol = 'black'
            borderWid = {3}
            borderRad = {50}
            link = {'https://picsum.photos/id/1013/100/100'}
          />
                
          <MyButton
            title = "Press to Like!"
            onPress = {() => console.log("Liked Picture 3")}
            color = 'primary'
            underColor = 'teal'
            borderCol = 'primaryDark'
            backCol = 'green'
          />

          <MyRoundIcon
            borderRad = {10}
            borderWid = {2}
            borderCol = 'pink'
          />

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: colors.primary,
    marginHorizontal: 20,
    marginTop: 30,
  },
  text: {
    fontSize: 24,
  },
});
