import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'rgb(0,0,0)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
  },
})
export default Card
