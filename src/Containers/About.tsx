import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const About = () => {
  return (
    <View style={styles.container}>
      <Text>This is about page</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'teal',
    height: '100%',
  },
})
