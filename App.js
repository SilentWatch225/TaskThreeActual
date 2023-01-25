import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableHighlight>
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
        </TouchableHighlight>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  }
});
