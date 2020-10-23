import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import GameOver from './screens/GameOver'
import GameScreen from './screens/GameScreen'
import StartGameScreen from './screens/StartGameScreen'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}
export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRound] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }
  const configureGameHandler = () => {
    setGuessRound(0)
    setUserNumber(null)
  }
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRound(0)
  }

  const gameOverHandler = (nmbRnds) => {
    setGuessRound(nmbRnds)
  }
  let content = <StartGameScreen onGameStart={startGameHandler} />
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    )
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        rounds={guessRounds}
        userNumber={userNumber}
        onRestart={configureGameHandler}
      />
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title="Welcome" />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
