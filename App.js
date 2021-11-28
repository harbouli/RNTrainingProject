/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App = () => {
  const [goal, setGoal] = useState("")
  const [listGoals, setListGoals] = useState([])

  const onChangeHandler = (value) => {
    setGoal(value)
  }
  const addGoal = () => {
    setListGoals(currentGoal => [...currentGoal, goal])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer} >
        <TextInput
          placeholder="Welcome"
          style={styles.inputStyle}
          onChangeText={onChangeHandler}
          value={goal}
        />
        <Button
          title="ADD"
          color="yellow"
          onPress={addGoal}
        />
      </View>
      <ScrollView>
        {listGoals.map((goal, index) => {
          return (
            <View
              style={styles.listIteams}
              key={index}
            >
              <Text
              >
                {goal}
              </Text>
            </View>
          )
        })}
      </ScrollView>
    </View >
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '90%',
    marginBottom: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 20
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputStyle: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    padding: 10
  },
  listIteams: {
    marginVertical: 10,
    backgroundColor: '#90e0ef',
    padding: 20,
    borderColor: '#03045e',
    borderWidth: 1,
  }

});

export default App;
