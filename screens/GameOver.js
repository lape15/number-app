import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import BodyText from '../components/Text'

const GameOver = ({ rounds, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <BodyText>The game is over</BodyText>
      <BodyText>Number of rounds:{rounds} </BodyText>
      <BodyText>Nymber was :{userNumber}</BodyText>
      <Button title="RESET GAME" onPress={onRestart} />
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default GameOver
