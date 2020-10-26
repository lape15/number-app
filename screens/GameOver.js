import React, { useState, useRef, useEffect } from 'react'
import { View, Image, StyleSheet, Button } from 'react-native'
import MainButton from '../components/MainButton'

import BodyText from '../components/Text'
import TitleText from '../components/TitleText'

const GameOver = ({ rounds, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          // source={{uri:""}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>Number of rounds:{rounds}</BodyText>
        <BodyText>Number was :{userNumber}</BodyText>
      </View>
      <MainButton onPress={onRestart}>NEW GAME</MainButton>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'black',
    width: '80%',
    height: 300,
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 20,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
})
export default GameOver
