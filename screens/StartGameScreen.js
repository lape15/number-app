import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert,
} from 'react-native'
import Card from '../components/Card'
import Input from '../components/input'
import Colors from '../constants/colors'
import NumberContainer from '../components/NumberContainer'
import BodyText from '../components/Text'
import TitleText from '../components/TitleText'

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNumber = Number(enteredValue)
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number', 'Number has to been between 1- and 98', [
        {
          text: 'Ok',
          style: 'destructive',
          onPress: () => resetInputHandler(),
        },
      ])
    }
    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setEnteredValue('')
    Keyboard.dismiss()
  }

  let confirmedOutput
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="START GAME"
          onPress={() => props.onGameStart(selectedNumber)}
        />
      </Card>
    )
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TitleText style={styles.title}>Start a new game</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText>Select a number</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
          <View style={styles.btnContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Colors.accent}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={Colors.primary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
    fontFamily: 'open-sans-bold',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: 80,
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
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
})
export default StartGameScreen
