import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Card from '../components/Card'
import Input from '../components/input'
import Colors from '../constants/colors'

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start a new game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <Input
          placeholder="Guess what bitch"
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: 250,
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
})
export default StartGameScreen
